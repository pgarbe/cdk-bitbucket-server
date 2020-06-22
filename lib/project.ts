import * as cdk from '@aws-cdk/core';

/**
 * Props of BitBucketProject
 */
export interface BitBucketProjectProps {
  /**
   * Token returned by {@link project-custom-resource#BitBucketProjectCustomResource | BitBucketProjectCustomResource}
   */
  readonly serviceToken: string;
  /**
   * Key of the project.
   */
  readonly key: string;
  /**
   * Name of the project.
   */
  readonly name: string;
  /**
   * Description of the project.
   */
  readonly description: string;
}

/**
 * BitBucket project using {@link project-custom-resource#BitBucketProjectCustomResource | BitBucketProjectCustomResource}
 */
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
