import * as cdk from '@aws-cdk/core';
import * as ssm from '@aws-cdk/aws-ssm';
import { BitBucketRepoCustomResource } from '../lib/index';

export class BitBucketBackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const host = ssm.StringParameter.fromSecureStringParameterAttributes(this, 'bitbuckethost', { parameterName: '/config/bitbucket/host', version: 1});
    const username = ssm.StringParameter.fromSecureStringParameterAttributes(this, 'bitbucketusername', { parameterName: '/config/bitbucket/username', version: 1});
    const password = ssm.StringParameter.fromSecureStringParameterAttributes(this, 'bitbucketpassword', { parameterName: '/config/bitbucket/password', version: 1});

    const cf = new BitBucketRepoCustomResource(this, 'BitBucketCustomResource', {
      host: host.stringValue,
      usernameSsmPath: '/config/bitbucket/username',
      passwordSsmPath: '/config/bitbucket/password'
    });

    username.grantRead(cf);
    password.grantRead(cf);

    new cdk.CfnOutput(this, 'BitBucketRepoServiceToken', { 
      value: cf.serviceToken,
      exportName: 'BitBucketRepoServiceToken2'
    });
  }
}

const app = new cdk.App();
new BitBucketBackendStack(app, 'BitBucketBackendStack');
app.synth();
