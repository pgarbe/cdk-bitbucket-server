import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

/**
 * Props of BitBucketWebHookCustomResource
 */
export interface BitBucketWebHookCustomResourceProps {
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
 * Custom Resource provider to create a BitBucket Webhook.
 */
export class BitBucketWebHookCustomResource extends Construct implements iam.IGrantable {
  /**
   * The service token to be used in custom resources.
   */
  readonly serviceToken: string;
  /**
   * The principal to grant permissions to
   */
  readonly grantPrincipal: iam.IPrincipal;

  constructor(scope: Construct, id: string, props: BitBucketWebHookCustomResourceProps) {
    super(scope, id);

    const l = new lambda.SingletonFunction(this, `${id}-lambda`, {
      code: lambda.AssetCode.fromAsset(path.join(__dirname, './lambda')),
      handler: 'webhook-index.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
      uuid: '002caf67-2be7-49a7-9694-736362240571',
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
