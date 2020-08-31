import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as iam from '@aws-cdk/aws-iam';
import * as cr from '@aws-cdk/custom-resources';
import * as path from 'path';

/**
 * Props of BitBucketProjectCustomResource
 */
export interface BitBucketProjectCustomResourceProps {
  /**
   * BitBucket server
   */
  readonly host: string;
  /**
   * Path of SSM param that includes the BitBucket username.
   */
  readonly usernameSsmPath: string;
  /**
   * Path of SSM param that includes the BitBucket password.
   */
  readonly passwordSsmPath: string;
}

/**
 * Custom Resource provider to create a BitBucket project.
 */
export class BitBucketProjectCustomResource extends cdk.Construct implements iam.IGrantable {
  /**
   * The service token to be used in custom resources.
   */
  readonly serviceToken: string;
  /**
   * The principal to grant permissions to
   */
  readonly grantPrincipal: iam.IPrincipal;

  constructor(scope: cdk.Construct, id: string, props: BitBucketProjectCustomResourceProps) {
    super(scope, id);

    const l = new lambda.SingletonFunction(this, `${id}-lambda`, {
      code: lambda.AssetCode.fromAsset(path.join(__dirname, './lambda')),
      handler: 'project-index.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
      uuid: '73d26df6-055f-4835-86da-8b139520d788',
      timeout: cdk.Duration.seconds(900),
      environment: {
        BITBUCKET_HOST: props.host,
        BITBUCKET_USERNAME_SSM_PATH: props.usernameSsmPath,
        BITBUCKET_PASSWORD_SSM_PATH: props.passwordSsmPath,
      },
    });

    const customResource = new cr.Provider(this, 'cc', {
      onEventHandler: l,
    });

    this.serviceToken = customResource.serviceToken;
    this.grantPrincipal = l.grantPrincipal;
  }
}
