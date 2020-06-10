# CDK BitBucket Server Constructs

An CDK Construct to create repositories, webhooks and maybe more on BitBucket Server (formarly Stash). It's not working with BitBucket Cloud.

![](https://github.com/pgarbe/cdk-bitbucket-server/workflows/Build/badge.svg)

## How to use it

See also `examples` folder. `bitbucket-backend-stack` creates the custom resource and shares the ServiceToken as output. `bitbucket-stack` uses ServiceToken and creates new BitBucket resources.

Ensure to have SSM Parameters `config/bitbucket/host`, `config/bitbucket/username` and `config/bitbucket/password`.

```bash
cdk deploy --app "npx ts-node bitbucket-backend-stack.ts"
cdk deploy --app "npx ts-node bitbucket-stack.ts"
```

## Supported resources

[x] Repository
[] WebHook
[] Project

## How to release

Set a new version with `npm version` command and push changes to GitHub.

```
npm version x.x.x
git push
```
