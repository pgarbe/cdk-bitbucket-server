import * as cdk from '@aws-cdk/core';

export interface BitBucketRepoProps {
  readonly serviceToken: string;
  readonly projectName: string;
  readonly repositorySlug: string;
}

export class BitBucketRepo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: BitBucketRepoProps) {
    super(scope, id);

    new cdk.CustomResource(this, `${id}-cr`, { 
      serviceToken: props.serviceToken,  
      properties: {
        ProjectKey: props.projectName,
        RepositorySlug: props.repositorySlug,
      }
    });
  }
}
