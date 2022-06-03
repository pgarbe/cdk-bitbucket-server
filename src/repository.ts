import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

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
export class BitBucketRepo extends Construct {
  constructor(scope: Construct, id: string, props: BitBucketRepoProps) {
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
