import * as cdk from '@aws-cdk/core';

export interface BitBucketProjectProps {
  readonly serviceToken: string;
  readonly key: string;
  readonly name: string;
  readonly description: string;
}

export class BitBucketProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: BitBucketProjectProps) {
    super(scope, id);

    new cdk.CustomResource(this, `${id}-cr`, { 
      serviceToken: props.serviceToken,  
      properties: {
        Key: props.key,
        Name: props.name,
        Description: props.description,
      }
    });
  }
}
