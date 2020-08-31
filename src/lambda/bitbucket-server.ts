import { request } from 'https';
import { URL } from 'url';
import { IncomingMessage } from 'http';

export enum WebHookEvents {
  REPO_PUSH = 'repo:refs_changed',
  REPO_MODIFIED = 'repo:modified',
  REPO_FORKED = 'repo:forked',
  REPO_COMMENT_ADDED = 'repo:comment:added',
  REPO_COMMENT_EDITED = 'repo:comment:edited',
  REPO_COMMENT_DELETED = 'repo:comment:deleted',
  MIRROR_REPO_SYNCHRONIZED = 'mirror:repo_synchronized',
  PR_OPENED = 'pr:opened',
  PR_MODIFIED = 'pr:modified',
  PR_REVIEWER_UPDATED = 'pr:reviewer:updated',
  PR_REVIEWER_APPROVED = 'pr:reviewer:approved',
  PR_REVIEWER_UNAPPROVED = 'pr:reviewer:unapproved',
  PR_REVIEWER_NEEDS_WORK = 'pr:reviewer:needs_work',
  PR_MERGED = 'pr:merged',
  PR_DECLINED = 'pr:declined',
  PR_DELETED = 'pr:deleted',
  PR_COMMENT_ADDED = 'pr:comment:added',
  PR_COMMENT_EDITED = 'pr:comment:edited',
  PR_COMMENT_DELETED = 'pr:comment:deleted',
}

enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
}

interface BitBucketResponseErrors {
  errors: {
    context?: string;
    message?: string;
    exceptionName?: string;
  }[];
}

export class BitBucketError extends Error {
  constructor(response: IncomingMessage, errors: BitBucketResponseErrors) {
    super(`${errors.errors[0].message}  (${response.statusCode})`);
  }
}

// 400
export class BitBucketValidationError extends BitBucketError {
  constructor(response: IncomingMessage, errors: BitBucketResponseErrors) {
    super(response, errors);
  }
}
// 401
export class BitBucketPermissionDeniedError extends BitBucketError {
  constructor(response: IncomingMessage, errors: BitBucketResponseErrors) {
    super(response, errors);
  }
}
// 404
export class BitBucketNotFoundError extends BitBucketError {
  constructor(response: IncomingMessage, errors: BitBucketResponseErrors) {
    super(response, errors);
  }
}
// 409
export class BitBucketAlreadyExistsError extends BitBucketError {
  constructor(response: IncomingMessage, errors: BitBucketResponseErrors) {
    super(response, errors);
  }
}

interface BitBucketRequest {
  name: string;
}
interface BitBucketResponse {
  id: number;
}

interface BitBucketCreateProjectRequest extends BitBucketRequest {
  key: string;
  description: string;
}
interface BitBucketCreateProjectResponse extends BitBucketResponse {
  key: string;
  name: string;
  description: string;
}

interface BitBucketGetProjectResponse extends BitBucketResponse {
  key: string;
  name: string;
  description: string;
}

interface BitBucketCreateRepoRequest extends BitBucketRequest {
  scmId: string;
}
interface BitBucketCreateRepoResponse extends BitBucketResponse {
  slug: string;
  name: string;
  description: string;
}

interface BitBucketCreateWebHookRequest extends BitBucketRequest {
  events: WebHookEvents[];
  configuration?: {
    secret: string;
  };
  url: string;
}
interface BitBucketCreateWebHookResponse extends BitBucketResponse {
  name: string;
  events: string[];
  configuration: {
    secret: string;
  };
  url: string;
  active: boolean;
}

interface BitBucketGetRepoResponse extends BitBucketResponse {
  slug: string;
  name: string;
  description: string;
}

export class BitBucketServer {
  private baseUrl: string;
  private auth: string;

  constructor(baseUrl: string, username: string, password: string) {
    this.baseUrl = baseUrl;

    this.auth = Buffer.from(`${username}:${password}`).toString('base64');
  }

  private performRequest<TReq extends BitBucketRequest, TRes extends BitBucketResponse>(
    method: HttpMethod,
    path: string,
    body?: TReq,
  ): Promise<TRes> {
    const url = new URL(`${this.baseUrl}${path}`);

    const options = {
      host: url.host,
      path: url.pathname,
      headers: {
        'Content-Type': ['application/json'],
        'accept': ['application/json'],
        'X-Atlassian-Token': ['no-check'],
        'Authorization': [`Basic ${this.auth}`],
      },
      method: method,
    };

    return new Promise<TRes>((resolve, reject) => {
      const req = request(options, function (response) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const chunks: any[] = [];

        response.on('data', (chunk) => {
          chunks.push(chunk);
        });

        response.on('end', () => {
          const resonseMessage = Buffer.concat(chunks).toString();
          console.log(resonseMessage);

          let responseBody = undefined;
          try {
            responseBody = JSON.parse(resonseMessage);
          } catch (e) {
            console.log(e);
            responseBody = { errors: [{ message: resonseMessage }] };
          }

          switch (response.statusCode) {
            case 200:
            case 201:
            case 202:
            case 209:
              resolve(responseBody);
              break;
            case 400:
              reject(new BitBucketValidationError(response, responseBody));
              break;
            case 401:
              reject(new BitBucketPermissionDeniedError(response, responseBody));
              break;
            case 404:
              reject(new BitBucketNotFoundError(response, responseBody));
              break;
            case 409:
              reject(new BitBucketAlreadyExistsError(response, responseBody));
              break;
            default:
              reject(new BitBucketError(response, responseBody));
              break;
          }
        });
      });

      if (body) {
        req.write(JSON.stringify(body));
      }
      req.end();
    });
  }

  public createProject(req: BitBucketCreateProjectRequest): Promise<BitBucketCreateProjectResponse> {
    const repoPath = 'rest/api/1.0/projects';

    return this.performRequest<BitBucketCreateProjectRequest, BitBucketCreateProjectResponse>(
      HttpMethod.POST,
      repoPath,
      req,
    );
  }

  public deleteProject(projectKey: string): Promise<BitBucketResponse> {
    const repoPath = `rest/api/1.0/projects/${projectKey}`;

    return this.performRequest<BitBucketRequest, BitBucketResponse>(HttpMethod.DELETE, repoPath);
  }

  public getProject(projectKey: string): Promise<BitBucketGetProjectResponse> {
    const repoPath = `rest/api/1.0/projects/${projectKey}`;

    return this.performRequest<BitBucketRequest, BitBucketGetProjectResponse>(HttpMethod.GET, repoPath);
  }

  public createRepository(projectKey: string, req: BitBucketCreateRepoRequest): Promise<BitBucketCreateRepoResponse> {
    const repoPath = `rest/api/1.0/projects/${projectKey}/repos`;

    return this.performRequest<BitBucketCreateRepoRequest, BitBucketCreateRepoResponse>(HttpMethod.POST, repoPath, req);
  }

  public deleteRepository(projectKey: string, repositorySlug: string): Promise<BitBucketResponse> {
    const repoPath = `rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}`;

    return this.performRequest<BitBucketRequest, BitBucketResponse>(HttpMethod.DELETE, repoPath);
  }

  public getRepository(projectKey: string, repositorySlug: string): Promise<BitBucketGetRepoResponse> {
    const repoPath = `rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}`;

    return this.performRequest<BitBucketRequest, BitBucketGetRepoResponse>(HttpMethod.GET, repoPath);
  }

  public createWebHook(
    projectKey: string,
    repositorySlug: string,
    req: BitBucketCreateWebHookRequest,
  ): Promise<BitBucketCreateWebHookResponse> {
    const repoPath = `rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/webhooks`;

    return this.performRequest<BitBucketCreateWebHookRequest, BitBucketCreateWebHookResponse>(
      HttpMethod.POST,
      repoPath,
      req,
    );
  }

  public deleteWebHook(projectKey: string, repositorySlug: string, webhookId: number): Promise<BitBucketResponse> {
    const repoPath = `rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/webhooks/${webhookId}`;

    return this.performRequest<BitBucketRequest, BitBucketResponse>(HttpMethod.DELETE, repoPath);
  }
}
