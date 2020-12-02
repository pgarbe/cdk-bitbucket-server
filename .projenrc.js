const { AwsCdkConstructLibrary, Semver } = require('projen');

const LAST_AWSCDK_VERSION = '1.75.0';

const project = new AwsCdkConstructLibrary({
  name: '@pgarbe/cdk-bitbucket-server',
  description: 'A CDK Construct library to work with BitBucket Server (Stash)',
  jsiiVersion: Semver.caret('1.12.0'),
  authorName: 'Philipp Garbe',
  authorUrl: 'https://garbe.io',
  repository: 'https://github.com/pgarbe/cdk-bitbucket-server.git',
  keywords: [
    'cdk',
    'aws-cdk',
    'construct',
    'aws',
    'pgarbe',
    'bitbucket',
    'bitbucket server',
  ],
  license: 'MIT',
  releaseEveryCommit: false,

  catalog: {
    twitter: 'pgarbe',
  },

  // creates PRs for projen upgrades
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkVersion: LAST_AWSCDK_VERSION,
  cdkDependencies: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/aws-sns-subscriptions',
    '@aws-cdk/aws-ssm',
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
  ],
  devDeps: [
    '@types/aws-lambda',
    'parcel',
    'pre-commit',
  ],
  deps: [
    'aws-sdk',
  ],
  bundledDeps: [
    'aws-sdk',
  ],

  // jsii publishing

  // java: {
  //   javaPackage: 'com.github.pgarbe.cdk-bitbucket-server',
  //   mavenGroupId: 'com.github.pgarbe',
  //   mavenArtifactId: 'cdk-bitbucket-server'
  // },
  // python: {
  //   distName: 'cdk-bitbucket-server',
  //   module: 'cdk_bitbucket_server'
  // }
});

project.gitignore.exclude('.parcel-cache');
project.gitignore.exclude('cdk.out');
project.npmignore.exclude('examples');
project.synth();
