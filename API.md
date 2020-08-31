# API Reference

**Classes**

Name|Description
----|-----------
[BitBucketProject](#pgarbe-cdk-bitbucket-server-bitbucketproject)|BitBucket project using {@link project-custom-resource#BitBucketProjectCustomResource | BitBucketProjectCustomResource}.
[BitBucketProjectCustomResource](#pgarbe-cdk-bitbucket-server-bitbucketprojectcustomresource)|Custom Resource provider to create a BitBucket project.
[BitBucketRepo](#pgarbe-cdk-bitbucket-server-bitbucketrepo)|BitBucket repository using {@link repository-custom-resource#BitBucketRepoCustomResource | BitBucketRepoCustomResource}.
[BitBucketRepoCustomResource](#pgarbe-cdk-bitbucket-server-bitbucketrepocustomresource)|Custom Resource provider to create a BitBucket repository.
[BitBucketWebHook](#pgarbe-cdk-bitbucket-server-bitbucketwebhook)|BitBucket Webhook using {@link webhook-custom-resource#BitBucketWebHookCustomResource | BitBucketWebHookCustomResource}.
[BitBucketWebHookCustomResource](#pgarbe-cdk-bitbucket-server-bitbucketwebhookcustomresource)|Custom Resource provider to create a BitBucket Webhook.


**Structs**

Name|Description
----|-----------
[BitBucketProjectCustomResourceProps](#pgarbe-cdk-bitbucket-server-bitbucketprojectcustomresourceprops)|Props of BitBucketProjectCustomResource.
[BitBucketProjectProps](#pgarbe-cdk-bitbucket-server-bitbucketprojectprops)|Props of BitBucketProject.
[BitBucketRepoCustomResourceProps](#pgarbe-cdk-bitbucket-server-bitbucketrepocustomresourceprops)|Props of BitBucketRepoCustomResource.
[BitBucketRepoProps](#pgarbe-cdk-bitbucket-server-bitbucketrepoprops)|Props of BitBucketRepo.
[BitBucketWebHookCustomResourceProps](#pgarbe-cdk-bitbucket-server-bitbucketwebhookcustomresourceprops)|Props of BitBucketWebHookCustomResource.
[BitBucketWebHookProps](#pgarbe-cdk-bitbucket-server-bitbucketwebhookprops)|Props of BitBucketWebHook.



## class BitBucketProject  <a id="pgarbe-cdk-bitbucket-server-bitbucketproject"></a>

BitBucket project using {@link project-custom-resource#BitBucketProjectCustomResource | BitBucketProjectCustomResource}.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BitBucketProject(scope: Construct, id: string, props: BitBucketProjectProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[BitBucketProjectProps](#pgarbe-cdk-bitbucket-server-bitbucketprojectprops)</code>)  *No description*
  * **description** (<code>string</code>)  Description of the project. 
  * **key** (<code>string</code>)  Key of the project. 
  * **name** (<code>string</code>)  Name of the project. 
  * **serviceToken** (<code>string</code>)  Token returned by {@link project-custom-resource#BitBucketProjectCustomResource | BitBucketProjectCustomResource}. 




## class BitBucketProjectCustomResource  <a id="pgarbe-cdk-bitbucket-server-bitbucketprojectcustomresource"></a>

Custom Resource provider to create a BitBucket project.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IGrantable](#aws-cdk-aws-iam-igrantable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BitBucketProjectCustomResource(scope: Construct, id: string, props: BitBucketProjectCustomResourceProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[BitBucketProjectCustomResourceProps](#pgarbe-cdk-bitbucket-server-bitbucketprojectcustomresourceprops)</code>)  *No description*
  * **host** (<code>string</code>)  BitBucket server. 
  * **passwordSsmPath** (<code>string</code>)  Path of SSM param that includes the BitBucket password. 
  * **usernameSsmPath** (<code>string</code>)  Path of SSM param that includes the BitBucket username. 



### Properties


Name | Type | Description 
-----|------|-------------
**grantPrincipal** | <code>[IPrincipal](#aws-cdk-aws-iam-iprincipal)</code> | The principal to grant permissions to.
**serviceToken** | <code>string</code> | The service token to be used in custom resources.



## class BitBucketRepo  <a id="pgarbe-cdk-bitbucket-server-bitbucketrepo"></a>

BitBucket repository using {@link repository-custom-resource#BitBucketRepoCustomResource | BitBucketRepoCustomResource}.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BitBucketRepo(scope: Construct, id: string, props: BitBucketRepoProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[BitBucketRepoProps](#pgarbe-cdk-bitbucket-server-bitbucketrepoprops)</code>)  *No description*
  * **projectName** (<code>string</code>)  Name of the project. 
  * **repositorySlug** (<code>string</code>)  Slug of the repository. 
  * **serviceToken** (<code>string</code>)  Token returned by {@link repository-custom-resource#BitBucketRepoCustomResource | BitBucketRepoCustomResource}. 




## class BitBucketRepoCustomResource  <a id="pgarbe-cdk-bitbucket-server-bitbucketrepocustomresource"></a>

Custom Resource provider to create a BitBucket repository.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IGrantable](#aws-cdk-aws-iam-igrantable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BitBucketRepoCustomResource(scope: Construct, id: string, props: BitBucketRepoCustomResourceProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[BitBucketRepoCustomResourceProps](#pgarbe-cdk-bitbucket-server-bitbucketrepocustomresourceprops)</code>)  *No description*
  * **host** (<code>string</code>)  BitBucket server. 
  * **passwordSsmPath** (<code>string</code>)  Path of SSM param that includes the BitBucket password. 
  * **usernameSsmPath** (<code>string</code>)  Path of SSM param that includes the BitBucket username. 



### Properties


Name | Type | Description 
-----|------|-------------
**grantPrincipal** | <code>[IPrincipal](#aws-cdk-aws-iam-iprincipal)</code> | The principal to grant permissions to.
**serviceToken** | <code>string</code> | The service token to be used in custom resources.



## class BitBucketWebHook  <a id="pgarbe-cdk-bitbucket-server-bitbucketwebhook"></a>

BitBucket Webhook using {@link webhook-custom-resource#BitBucketWebHookCustomResource | BitBucketWebHookCustomResource}.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BitBucketWebHook(scope: Construct, id: string, props: BitBucketWebHookProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[BitBucketWebHookProps](#pgarbe-cdk-bitbucket-server-bitbucketwebhookprops)</code>)  *No description*
  * **events** (<code>Array<string></code>)  List of events that trigger the webhook. 
  * **name** (<code>string</code>)  Name of the webhook. 
  * **secret** (<code>string</code>)  Secret of the webhook. 
  * **serviceToken** (<code>string</code>)  Token returned by {@link webhook-custom-resource#BitBucketWebHookCustomResource | BitBucketWebHookCustomResource}. 
  * **url** (<code>string</code>)  URL that is called by the webhook. 




## class BitBucketWebHookCustomResource  <a id="pgarbe-cdk-bitbucket-server-bitbucketwebhookcustomresource"></a>

Custom Resource provider to create a BitBucket Webhook.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IGrantable](#aws-cdk-aws-iam-igrantable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BitBucketWebHookCustomResource(scope: Construct, id: string, props: BitBucketWebHookCustomResourceProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[BitBucketWebHookCustomResourceProps](#pgarbe-cdk-bitbucket-server-bitbucketwebhookcustomresourceprops)</code>)  *No description*
  * **host** (<code>string</code>)  BitBucket server. 
  * **passwordSsmPath** (<code>string</code>)  Path of SSM param that includes the BitBucket password. 
  * **usernameSsmPath** (<code>string</code>)  Path of SSM param that includes the BitBucket username. 



### Properties


Name | Type | Description 
-----|------|-------------
**grantPrincipal** | <code>[IPrincipal](#aws-cdk-aws-iam-iprincipal)</code> | The principal to grant permissions to.
**serviceToken** | <code>string</code> | The service token to be used in custom resources.



## struct BitBucketProjectCustomResourceProps  <a id="pgarbe-cdk-bitbucket-server-bitbucketprojectcustomresourceprops"></a>


Props of BitBucketProjectCustomResource.



Name | Type | Description 
-----|------|-------------
**host** | <code>string</code> | BitBucket server.
**passwordSsmPath** | <code>string</code> | Path of SSM param that includes the BitBucket password.
**usernameSsmPath** | <code>string</code> | Path of SSM param that includes the BitBucket username.



## struct BitBucketProjectProps  <a id="pgarbe-cdk-bitbucket-server-bitbucketprojectprops"></a>


Props of BitBucketProject.



Name | Type | Description 
-----|------|-------------
**description** | <code>string</code> | Description of the project.
**key** | <code>string</code> | Key of the project.
**name** | <code>string</code> | Name of the project.
**serviceToken** | <code>string</code> | Token returned by {@link project-custom-resource#BitBucketProjectCustomResource | BitBucketProjectCustomResource}.



## struct BitBucketRepoCustomResourceProps  <a id="pgarbe-cdk-bitbucket-server-bitbucketrepocustomresourceprops"></a>


Props of BitBucketRepoCustomResource.



Name | Type | Description 
-----|------|-------------
**host** | <code>string</code> | BitBucket server.
**passwordSsmPath** | <code>string</code> | Path of SSM param that includes the BitBucket password.
**usernameSsmPath** | <code>string</code> | Path of SSM param that includes the BitBucket username.



## struct BitBucketRepoProps  <a id="pgarbe-cdk-bitbucket-server-bitbucketrepoprops"></a>


Props of BitBucketRepo.



Name | Type | Description 
-----|------|-------------
**projectName** | <code>string</code> | Name of the project.
**repositorySlug** | <code>string</code> | Slug of the repository.
**serviceToken** | <code>string</code> | Token returned by {@link repository-custom-resource#BitBucketRepoCustomResource | BitBucketRepoCustomResource}.



## struct BitBucketWebHookCustomResourceProps  <a id="pgarbe-cdk-bitbucket-server-bitbucketwebhookcustomresourceprops"></a>


Props of BitBucketWebHookCustomResource.



Name | Type | Description 
-----|------|-------------
**host** | <code>string</code> | BitBucket server.
**passwordSsmPath** | <code>string</code> | Path of SSM param that includes the BitBucket password.
**usernameSsmPath** | <code>string</code> | Path of SSM param that includes the BitBucket username.



## struct BitBucketWebHookProps  <a id="pgarbe-cdk-bitbucket-server-bitbucketwebhookprops"></a>


Props of BitBucketWebHook.



Name | Type | Description 
-----|------|-------------
**events** | <code>Array<string></code> | List of events that trigger the webhook.
**name** | <code>string</code> | Name of the webhook.
**secret** | <code>string</code> | Secret of the webhook.
**serviceToken** | <code>string</code> | Token returned by {@link webhook-custom-resource#BitBucketWebHookCustomResource | BitBucketWebHookCustomResource}.
**url** | <code>string</code> | URL that is called by the webhook.



