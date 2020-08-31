const { ConstructLibraryAws, Semver } = require('projen');

const LAST_AWSCDK_VERSION = '1.61.1';

const project = new ConstructLibraryAws({
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
    'bitbucket server'
  ],
  license: 'MIT',
  releaseEveryCommit: false,

  catalog: {
    twitter: 'pgarbe'
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
  devDependencies: {
    '@types/aws-lambda': Semver.caret('8.10.59'),
    'parcel': Semver.pinned('2.0.0-beta.1'),
    'pre-commit': Semver.caret('1.2.2')
  },
  dependencies: {
    'aws-sdk': Semver.caret('2.708.0'),
  },
  bundledDependencies: [
    'aws-sdk',
  ]

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

project.jest.config.time
project.gitignore.exclude('.parcel-cache');
project.gitignore.exclude('cdk.out');
project.npmignore.exclude('examples');
project.synth();
