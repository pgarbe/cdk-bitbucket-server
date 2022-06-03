import * as cdk from 'aws-cdk-lib';
// import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as iam from 'aws-cdk-lib/aws-iam';
import * as ssm from 'aws-cdk-lib/aws-ssm';
// import * as sns from 'aws-cdk-lib/aws-sns';
// import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import { BitBucketRepoCustomResource } from '../src/index';

export class BitBucketBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const host = ssm.StringParameter.fromStringParameterAttributes(this, 'bitbuckethost', {
      parameterName: '/config/bitbucket/host',
      version: 1,
    });
    const username = ssm.StringParameter.fromSecureStringParameterAttributes(this, 'bitbucketusername', {
      parameterName: '/config/bitbucket/username',
      version: 1,
    });
    const password = ssm.StringParameter.fromSecureStringParameterAttributes(this, 'bitbucketpassword', {
      parameterName: '/config/bitbucket/password',
      version: 1,
    });

    const cf = new BitBucketRepoCustomResource(this, 'BitBucketCustomResource', {
      host: host.stringValue,
      usernameSsmPath: '/config/bitbucket/username',
      passwordSsmPath: '/config/bitbucket/password',
    });

    username.grantRead(cf);
    password.grantRead(cf);

    // Add SNS topic to allow cross account usage
    // const l2 = lambda.Function.fromFunctionArn(this, 'cr-lambda', cf.serviceToken);
    // const topic = new sns.Topic(this, 'cr-topic', { });
    // topic.addSubscription(new subs.LambdaSubscription(l2));
    // topic.grantPublish(new iam.OrganizationPrincipal('o-xxx'))

    // TODO: SNS needs lambda to unwrap message from SNS request

    new cdk.CfnOutput(this, 'BitBucketRepoServiceToken', {
      // value: topic.topicArn,
      value: cf.serviceToken,
      exportName: 'BitBucketRepoServiceToken',
    });
  }
}

const app = new cdk.App();
new BitBucketBackendStack(app, 'BitBucketBackendStack');
app.synth();
