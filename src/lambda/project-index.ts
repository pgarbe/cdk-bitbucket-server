import {
  CloudFormationCustomResourceEvent,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceDeleteEvent,
// eslint-disable-next-line import/no-unresolved
} from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { BitBucketServer } from './bitbucket-server';

interface HandlerReturn {
  PhysicalResourceId: string;
  Data: {
    Id: string;
  };
}

export interface BitBucketProjectProps {
  key: string;
  name: string;
  description: string;
}

const getProperties = (props: CloudFormationCustomResourceEvent['ResourceProperties']): BitBucketProjectProps => ({
  key: props.Key,
  name: props.Name,
  description: props.Description,
});

const getBitBucketServer = async function (): Promise<BitBucketServer> {
  const ssm = new AWS.SSM();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const host = process.env.BITBUCKET_HOST!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const usernameSsmPath = process.env.BITBUCKET_USERNAME_SSM_PATH!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const passwordSsmPath = process.env.BITBUCKET_PASSWORD_SSM_PATH!;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const username = (await ssm.getParameter({ Name: usernameSsmPath, WithDecryption: true }).promise()).Parameter!
    .Value!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const password = (await ssm.getParameter({ Name: passwordSsmPath, WithDecryption: true }).promise()).Parameter!
    .Value!;

  return new BitBucketServer(host, username, password);
};

const onCreate = async (event: CloudFormationCustomResourceCreateEvent): Promise<HandlerReturn> => {
  const { key, name, description } = getProperties(event.ResourceProperties);

  const bb = await getBitBucketServer();

  const res = await bb.createProject({
    key: key,
    name: name,
    description: description,
  });

  return {
    PhysicalResourceId: res.id.toString(),
    Data: {
      Id: res.id.toString(),
    },
  };
};

const onDelete = async (event: CloudFormationCustomResourceDeleteEvent): Promise<void> => {
  const { key: projectKey } = getProperties(event.ResourceProperties);

  const bb = await getBitBucketServer();
  await bb.deleteProject(projectKey);
};

export const handler = async (event: CloudFormationCustomResourceEvent): Promise<HandlerReturn | void> => {
  const requestType = event.RequestType;

  switch (requestType) {
    case 'Create':
      return onCreate(event as CloudFormationCustomResourceCreateEvent);
    // case 'Update':
    //   return await onUpdate(event as CloudFormationCustomResourceUpdateEvent);
    case 'Delete':
      return onDelete(event as CloudFormationCustomResourceDeleteEvent);
    default:
      throw new Error(`Invalid request type: ${requestType}`);
  }
};
