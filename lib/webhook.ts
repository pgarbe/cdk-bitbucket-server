import * as cdk from '@aws-cdk/core';

/**
 * Props of BitBucketWebHook
 */
export interface BitBucketWebHookProps {

  /**
   * Token returned by {@link webhook-custom-resource#BitBucketWebHookCustomResource | BitBucketWebHookCustomResource}
   */
  readonly serviceToken: string;
  /**
   * Name of the webhook
   */
  readonly name: string;
  /**
   * URL that is called by the webhook
   *
   */
  readonly url: string;
  /**
   * Secret of the webhook.
   */
  readonly secret: string;

  /**
   * List of events that trigger the webhook.
   */
  readonly events: string[]
}

/**
 * BitBucket Webhook using {@link webhook-custom-resource#BitBucketWebHookCustomResource | BitBucketWebHookCustomResource}
 */
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
