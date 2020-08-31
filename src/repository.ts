import * as cdk from '@aws-cdk/core';

/**
 * Props of BitBucketRepo.
 */
export interface BitBucketRepoProps {
  /**
   * Token returned by {@link repository-custom-resource#BitBucketRepoCustomResource | BitBucketRepoCustomResource}
   */
  readonly serviceToken: string;
  /**
   * Name of the project.
   */
  readonly projectName: string;
  /**
   * Slug of the repository.
   */
  readonly repositorySlug: string;
}

/**
 * BitBucket repository using {@link repository-custom-resource#BitBucketRepoCustomResource | BitBucketRepoCustomResource}
 */
export class BitBucketRepo extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: BitBucketRepoProps) {
    super(scope, id);

    new cdk.CustomResource(this, `${id}-cr`, {
      serviceToken: props.serviceToken,
      properties: {
        ProjectKey: props.projectName,
        RepositorySlug: props.repositorySlug,
      },
    });
  }
}
