import * as pj from 'projen';

const LAST_AWSCDK_VERSION = '2.26.0';

const project = new pj.awscdk.AwsCdkConstructLibrary({
  name: '@pgarbe/cdk-bitbucket-server',
  description: 'A CDK Construct library to work with BitBucket Server (Stash)',

  author: 'Philipp Garbe',
  authorAddress: 'https://garbe.io',

  repositoryUrl: 'https://github.com/pgarbe/cdk-bitbucket-server.git',
  keywords: ['cdk', 'aws-cdk', 'construct', 'aws', 'pgarbe', 'bitbucket', 'bitbucket server'],
  license: 'MIT',

  catalog: {
    twitter: 'pgarbe',
  },

  // creates PRs for projen upgrades
  projenrcTs: true,
  defaultReleaseBranch: 'main',

  cdkVersion: LAST_AWSCDK_VERSION,
  devDeps: ['esbuild', 'pre-commit'],
  deps: ['aws-sdk', '@types/aws-lambda'],
  bundledDeps: ['aws-sdk', '@types/aws-lambda'],
});

project.npmignore!.exclude('examples');
project.synth();
