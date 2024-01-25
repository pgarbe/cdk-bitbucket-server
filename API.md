# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BitBucketProject <a name="BitBucketProject" id="@pgarbe/cdk-bitbucket-server.BitBucketProject"></a>

BitBucket project using {@link project-custom-resource#BitBucketProjectCustomResource BitBucketProjectCustomResource}.

#### Initializers <a name="Initializers" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.Initializer"></a>

```typescript
import { BitBucketProject } from '@pgarbe/cdk-bitbucket-server'

new BitBucketProject(scope: Construct, id: string, props: BitBucketProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProject.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProject.Initializer.parameter.props">props</a></code> | <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectProps">BitBucketProjectProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.Initializer.parameter.props"></a>

- *Type:* <a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectProps">BitBucketProjectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProject.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.isConstruct"></a>

```typescript
import { BitBucketProject } from '@pgarbe/cdk-bitbucket-server'

BitBucketProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pgarbe/cdk-bitbucket-server.BitBucketProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### BitBucketProjectCustomResource <a name="BitBucketProjectCustomResource" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource"></a>

- *Implements:* aws-cdk-lib.aws_iam.IGrantable

Custom Resource provider to create a BitBucket project.

#### Initializers <a name="Initializers" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.Initializer"></a>

```typescript
import { BitBucketProjectCustomResource } from '@pgarbe/cdk-bitbucket-server'

new BitBucketProjectCustomResource(scope: Construct, id: string, props: BitBucketProjectCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps">BitBucketProjectCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps">BitBucketProjectCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.isConstruct"></a>

```typescript
import { BitBucketProjectCustomResource } from '@pgarbe/cdk-bitbucket-server'

BitBucketProjectCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.property.serviceToken">serviceToken</a></code> | <code>string</code> | The service token to be used in custom resources. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResource.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

The service token to be used in custom resources.

---


### BitBucketRepo <a name="BitBucketRepo" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo"></a>

BitBucket repository using {@link repository-custom-resource#BitBucketRepoCustomResource BitBucketRepoCustomResource}.

#### Initializers <a name="Initializers" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.Initializer"></a>

```typescript
import { BitBucketRepo } from '@pgarbe/cdk-bitbucket-server'

new BitBucketRepo(scope: Construct, id: string, props: BitBucketRepoProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepo.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepo.Initializer.parameter.props">props</a></code> | <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoProps">BitBucketRepoProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.Initializer.parameter.props"></a>

- *Type:* <a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoProps">BitBucketRepoProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepo.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.isConstruct"></a>

```typescript
import { BitBucketRepo } from '@pgarbe/cdk-bitbucket-server'

BitBucketRepo.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pgarbe/cdk-bitbucket-server.BitBucketRepo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### BitBucketRepoCustomResource <a name="BitBucketRepoCustomResource" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource"></a>

- *Implements:* aws-cdk-lib.aws_iam.IGrantable

Custom Resource provider to create a BitBucket repository.

#### Initializers <a name="Initializers" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.Initializer"></a>

```typescript
import { BitBucketRepoCustomResource } from '@pgarbe/cdk-bitbucket-server'

new BitBucketRepoCustomResource(scope: Construct, id: string, props: BitBucketRepoCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps">BitBucketRepoCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps">BitBucketRepoCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.isConstruct"></a>

```typescript
import { BitBucketRepoCustomResource } from '@pgarbe/cdk-bitbucket-server'

BitBucketRepoCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.property.serviceToken">serviceToken</a></code> | <code>string</code> | The service token to be used in custom resources. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResource.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

The service token to be used in custom resources.

---


### BitBucketWebHook <a name="BitBucketWebHook" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook"></a>

BitBucket Webhook using {@link webhook-custom-resource#BitBucketWebHookCustomResource BitBucketWebHookCustomResource}.

#### Initializers <a name="Initializers" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.Initializer"></a>

```typescript
import { BitBucketWebHook } from '@pgarbe/cdk-bitbucket-server'

new BitBucketWebHook(scope: Construct, id: string, props: BitBucketWebHookProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHook.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHook.Initializer.parameter.props">props</a></code> | <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps">BitBucketWebHookProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.Initializer.parameter.props"></a>

- *Type:* <a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps">BitBucketWebHookProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHook.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.isConstruct"></a>

```typescript
import { BitBucketWebHook } from '@pgarbe/cdk-bitbucket-server'

BitBucketWebHook.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### BitBucketWebHookCustomResource <a name="BitBucketWebHookCustomResource" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource"></a>

- *Implements:* aws-cdk-lib.aws_iam.IGrantable

Custom Resource provider to create a BitBucket Webhook.

#### Initializers <a name="Initializers" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.Initializer"></a>

```typescript
import { BitBucketWebHookCustomResource } from '@pgarbe/cdk-bitbucket-server'

new BitBucketWebHookCustomResource(scope: Construct, id: string, props: BitBucketWebHookCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps">BitBucketWebHookCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps">BitBucketWebHookCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.isConstruct"></a>

```typescript
import { BitBucketWebHookCustomResource } from '@pgarbe/cdk-bitbucket-server'

BitBucketWebHookCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.property.serviceToken">serviceToken</a></code> | <code>string</code> | The service token to be used in custom resources. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResource.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

The service token to be used in custom resources.

---


## Structs <a name="Structs" id="Structs"></a>

### BitBucketProjectCustomResourceProps <a name="BitBucketProjectCustomResourceProps" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps"></a>

Props of BitBucketProjectCustomResource.

#### Initializer <a name="Initializer" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps.Initializer"></a>

```typescript
import { BitBucketProjectCustomResourceProps } from '@pgarbe/cdk-bitbucket-server'

const bitBucketProjectCustomResourceProps: BitBucketProjectCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps.property.host">host</a></code> | <code>string</code> | BitBucket server. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps.property.passwordSsmPath">passwordSsmPath</a></code> | <code>string</code> | Path of SSM param that includes the BitBucket password. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps.property.usernameSsmPath">usernameSsmPath</a></code> | <code>string</code> | Path of SSM param that includes the BitBucket username. |

---

##### `host`<sup>Required</sup> <a name="host" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

BitBucket server.

---

##### `passwordSsmPath`<sup>Required</sup> <a name="passwordSsmPath" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps.property.passwordSsmPath"></a>

```typescript
public readonly passwordSsmPath: string;
```

- *Type:* string

Path of SSM param that includes the BitBucket password.

---

##### `usernameSsmPath`<sup>Required</sup> <a name="usernameSsmPath" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectCustomResourceProps.property.usernameSsmPath"></a>

```typescript
public readonly usernameSsmPath: string;
```

- *Type:* string

Path of SSM param that includes the BitBucket username.

---

### BitBucketProjectProps <a name="BitBucketProjectProps" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectProps"></a>

Props of BitBucketProject.

#### Initializer <a name="Initializer" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.Initializer"></a>

```typescript
import { BitBucketProjectProps } from '@pgarbe/cdk-bitbucket-server'

const bitBucketProjectProps: BitBucketProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.description">description</a></code> | <code>string</code> | Description of the project. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.key">key</a></code> | <code>string</code> | Key of the project. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.name">name</a></code> | <code>string</code> | Name of the project. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.serviceToken">serviceToken</a></code> | <code>string</code> | Token returned by {@link project-custom-resource#BitBucketProjectCustomResource BitBucketProjectCustomResource}. |

---

##### `description`<sup>Required</sup> <a name="description" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the project.

---

##### `key`<sup>Required</sup> <a name="key" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key of the project.

---

##### `name`<sup>Required</sup> <a name="name" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the project.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@pgarbe/cdk-bitbucket-server.BitBucketProjectProps.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

Token returned by {@link project-custom-resource#BitBucketProjectCustomResource BitBucketProjectCustomResource}.

---

### BitBucketRepoCustomResourceProps <a name="BitBucketRepoCustomResourceProps" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps"></a>

Props of BitBucketRepoCustomResource.

#### Initializer <a name="Initializer" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps.Initializer"></a>

```typescript
import { BitBucketRepoCustomResourceProps } from '@pgarbe/cdk-bitbucket-server'

const bitBucketRepoCustomResourceProps: BitBucketRepoCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps.property.host">host</a></code> | <code>string</code> | BitBucket server. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps.property.passwordSsmPath">passwordSsmPath</a></code> | <code>string</code> | Path of SSM param that includes the BitBucket password. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps.property.usernameSsmPath">usernameSsmPath</a></code> | <code>string</code> | Path of SSM param that includes the BitBucket username. |

---

##### `host`<sup>Required</sup> <a name="host" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

BitBucket server.

---

##### `passwordSsmPath`<sup>Required</sup> <a name="passwordSsmPath" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps.property.passwordSsmPath"></a>

```typescript
public readonly passwordSsmPath: string;
```

- *Type:* string

Path of SSM param that includes the BitBucket password.

---

##### `usernameSsmPath`<sup>Required</sup> <a name="usernameSsmPath" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoCustomResourceProps.property.usernameSsmPath"></a>

```typescript
public readonly usernameSsmPath: string;
```

- *Type:* string

Path of SSM param that includes the BitBucket username.

---

### BitBucketRepoProps <a name="BitBucketRepoProps" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoProps"></a>

Props of BitBucketRepo.

#### Initializer <a name="Initializer" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoProps.Initializer"></a>

```typescript
import { BitBucketRepoProps } from '@pgarbe/cdk-bitbucket-server'

const bitBucketRepoProps: BitBucketRepoProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoProps.property.projectName">projectName</a></code> | <code>string</code> | Name of the project. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoProps.property.repositorySlug">repositorySlug</a></code> | <code>string</code> | Slug of the repository. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketRepoProps.property.serviceToken">serviceToken</a></code> | <code>string</code> | Token returned by {@link repository-custom-resource#BitBucketRepoCustomResource BitBucketRepoCustomResource}. |

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Name of the project.

---

##### `repositorySlug`<sup>Required</sup> <a name="repositorySlug" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoProps.property.repositorySlug"></a>

```typescript
public readonly repositorySlug: string;
```

- *Type:* string

Slug of the repository.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@pgarbe/cdk-bitbucket-server.BitBucketRepoProps.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

Token returned by {@link repository-custom-resource#BitBucketRepoCustomResource BitBucketRepoCustomResource}.

---

### BitBucketWebHookCustomResourceProps <a name="BitBucketWebHookCustomResourceProps" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps"></a>

Props of BitBucketWebHookCustomResource.

#### Initializer <a name="Initializer" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps.Initializer"></a>

```typescript
import { BitBucketWebHookCustomResourceProps } from '@pgarbe/cdk-bitbucket-server'

const bitBucketWebHookCustomResourceProps: BitBucketWebHookCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps.property.host">host</a></code> | <code>string</code> | BitBucket server. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps.property.passwordSsmPath">passwordSsmPath</a></code> | <code>string</code> | Path of SSM param that includes the BitBucket password. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps.property.usernameSsmPath">usernameSsmPath</a></code> | <code>string</code> | Path of SSM param that includes the BitBucket username. |

---

##### `host`<sup>Required</sup> <a name="host" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

BitBucket server.

---

##### `passwordSsmPath`<sup>Required</sup> <a name="passwordSsmPath" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps.property.passwordSsmPath"></a>

```typescript
public readonly passwordSsmPath: string;
```

- *Type:* string

Path of SSM param that includes the BitBucket password.

---

##### `usernameSsmPath`<sup>Required</sup> <a name="usernameSsmPath" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookCustomResourceProps.property.usernameSsmPath"></a>

```typescript
public readonly usernameSsmPath: string;
```

- *Type:* string

Path of SSM param that includes the BitBucket username.

---

### BitBucketWebHookProps <a name="BitBucketWebHookProps" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps"></a>

Props of BitBucketWebHook.

#### Initializer <a name="Initializer" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.Initializer"></a>

```typescript
import { BitBucketWebHookProps } from '@pgarbe/cdk-bitbucket-server'

const bitBucketWebHookProps: BitBucketWebHookProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.events">events</a></code> | <code>string[]</code> | List of events that trigger the webhook. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.name">name</a></code> | <code>string</code> | Name of the webhook. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.secret">secret</a></code> | <code>string</code> | Secret of the webhook. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.serviceToken">serviceToken</a></code> | <code>string</code> | Token returned by {@link webhook-custom-resource#BitBucketWebHookCustomResource BitBucketWebHookCustomResource}. |
| <code><a href="#@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.url">url</a></code> | <code>string</code> | URL that is called by the webhook. |

---

##### `events`<sup>Required</sup> <a name="events" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

List of events that trigger the webhook.

---

##### `name`<sup>Required</sup> <a name="name" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the webhook.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Secret of the webhook.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

Token returned by {@link webhook-custom-resource#BitBucketWebHookCustomResource BitBucketWebHookCustomResource}.

---

##### `url`<sup>Required</sup> <a name="url" id="@pgarbe/cdk-bitbucket-server.BitBucketWebHookProps.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL that is called by the webhook.

---



