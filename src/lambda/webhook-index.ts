import {
  CloudFormationCustomResourceEvent,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceDeleteEvent,
// eslint-disable-next-line import/no-unresolved
} from 'aws-lambda';
import { BitBucketServer, WebHookEvents } from './bitbucket-server';
import * as AWS from 'aws-sdk';

interface HandlerReturn {
  PhysicalResourceId: string;
  Data: {
    Id: string;
  };
}

export interface BitBucketRepositoryProps {
  projectKey: string;
  repositorySlug: string;
  name: string;
  url: string;
  secret: string;
  events: WebHookEvents[];
}

const getProperties = (props: CloudFormationCustomResourceEvent['ResourceProperties']): BitBucketRepositoryProps => ({
  projectKey: props.ProjectKey,
  repositorySlug: props.RepositorySlug,
  name: props.Name,
  url: props.Url,
  secret: props.Secret,
  events: props.Events,
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
  const { projectKey, repositorySlug, name, url, secret, events } = getProperties(event.ResourceProperties);

  const bb = await getBitBucketServer();

  const res = await bb.createWebHook(projectKey, repositorySlug, {
    name: name,
    url: url,
    configuration: {
      secret: secret,
    },
    events: events,
  });

  return {
    PhysicalResourceId: res.id.toString(),
    Data: {
      Id: res.id.toString(),
    },
  };
};

const onDelete = async (event: CloudFormationCustomResourceDeleteEvent): Promise<void> => {
  const { projectKey, repositorySlug } = getProperties(event.ResourceProperties);

  const bb = await getBitBucketServer();
  await bb.deleteRepository(projectKey, repositorySlug);
};

export const handler = async (event: CloudFormationCustomResourceEvent): Promise<HandlerReturn | void> => {
  const requestType = event.RequestType;

  switch (requestType) {
    case 'Create':
    case 'Update':
      return await onCreate(event as CloudFormationCustomResourceCreateEvent);
    case 'Delete':
      return await onDelete(event as CloudFormationCustomResourceDeleteEvent);
    default:
      throw new Error(`Invalid request type: ${requestType}`);
  }
};
