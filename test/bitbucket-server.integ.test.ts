/**
 * Integration tests
 * 
 * @group integ
 */
import { BitBucketServer, BitBucketAlreadyExistsError, WebHookEvents } from '../lib/lambda/bitbucket-server';

describe("When creating a project", () => {

  const bb = new BitBucketServer(process.env.BITBUCKET_HOST!, process.env.BITBUCKET_USERNAME!, process.env.BITBUCKET_PASSWORD!);

  afterEach(async () => {
    await bb.deleteProject('CLAIDBOT');
  });

it('is successfully created', async () => {

    await bb.createProject({ key: 'CLAIDBOT', name: 'testproject', description: 'for testing' });
  });
});


describe("When creating a repository", () => {

  const bb = new BitBucketServer(process.env.BITBUCKET_HOST!, process.env.BITBUCKET_USERNAME!, process.env.BITBUCKET_PASSWORD!);

  afterEach(async () => {
    await bb.deleteRepository('RIOCLAID', 'testrepo');
  });

it('is successfully created', async () => {

    await bb.createRepository('RIOCLAID', { name: 'testrepo', scmId: 'git' });
  });
});

describe("When creating a repository", () => {

  const bb = new BitBucketServer(process.env.BITBUCKET_HOST!, process.env.BITBUCKET_USERNAME!, process.env.BITBUCKET_PASSWORD!);

  afterEach(async () => {
    await bb.deleteRepository('RIOCLAID', 'testrepo2');
  });

it('Fails when repository already exists', async () => {

  await bb.createRepository('RIOCLAID', { name: 'testrepo2', scmId: 'git' });

  await expect(bb.createRepository('RIOCLAID', { name: 'testrepo2', scmId: 'git' }))
  .rejects
  .toThrow(BitBucketAlreadyExistsError);

  });
});


describe("When creating a webhook", () => {

  const bb = new BitBucketServer(process.env.BITBUCKET_HOST!, process.env.BITBUCKET_USERNAME!, process.env.BITBUCKET_PASSWORD!);

  afterEach(async () => {
    await bb.deleteRepository('RIOCLAID', 'testrepo3');
  });

it('is created successfully', async () => {

    await bb.createRepository('RIOCLAID', { name: 'testrepo3', scmId: 'git' });

    const res = await bb.createWebHook('RIOCLAID', 'testrepo3', { 
      name: 'my web hook',
      url: 'http://localhost',
      events: [ WebHookEvents.REPO_PUSH ],
      configuration: { secret: 'pssst'}
    });

    expect(res.id).toBeGreaterThan(0);
    expect(res.active).toBeTruthy();
    expect(res.name).toBe('my web hook');
    expect(res.url).toBe('http://localhost');

  });
});
