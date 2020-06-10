import * as cdk from '@aws-cdk/core';

export interface BitBucketWebHookProps {
  readonly serviceToken: string;
  readonly name: string;
  readonly url: string;
  readonly secret: string;
  readonly events: string[]
}

export class BitBucketWebHook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: BitBucketWebHookProps) {
    super(scope, id);

    new cdk.CustomResource(this, `${id}-cr`, { 
      serviceToken: props.serviceToken,  
      properties: {
        Name: props.name,
        Url: props.url,
        Secret: props.secret,
        Events: props.events,
      }
    });
  }
}
