import * as cdk from '@aws-cdk/core';
import { BitBucketRepo } from '../lib';

export class BitBucketStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const serviceToken = cdk.Fn.importValue('BitBucketRepoServiceToken');

    new BitBucketRepo(this, 'Repo1', {
      serviceToken: serviceToken,
      projectName: 'RIOCLAID',
      repositorySlug: 'test',
    });
  }
}

const app = new cdk.App();
new BitBucketStack(app, 'BitBucketStack');
app.synth();
