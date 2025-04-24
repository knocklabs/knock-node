// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('delete: only required params', async () => {
    const responsePromise = client.objects.bulk.delete('collection', {
      object_ids: ['obj_123', 'obj_456', 'obj_789'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('delete: required and optional params', async () => {
    const response = await client.objects.bulk.delete('collection', {
      object_ids: ['obj_123', 'obj_456', 'obj_789'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('addSubscriptions: only required params', async () => {
    const responsePromise = client.objects.bulk.addSubscriptions('projects', {
      subscriptions: [{ recipients: [{ id: 'user_1' }] }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('addSubscriptions: required and optional params', async () => {
    const response = await client.objects.bulk.addSubscriptions('projects', {
      subscriptions: [
        {
          recipients: [
            {
              id: 'user_1',
              channel_data: [
                {
                  channel_id: '97c5837d-c65c-4d54-aa39-080eeb81c69d',
                  data: { tokens: ['push_token_xxx'], type: 'push_fcm', __typename: 'PushChannelData' },
                  provider: 'push_fcm',
                },
              ],
              created_at: '2019-12-27T18:11:19.117Z',
              preferences: {},
            },
          ],
          properties: { foo: 'bar' },
        },
      ],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('set: only required params', async () => {
    const responsePromise = client.objects.bulk.set('collection', {
      objects: [{ id: 'project_1', collection: 'projects' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('set: required and optional params', async () => {
    const response = await client.objects.bulk.set('collection', {
      objects: [
        {
          id: 'project_1',
          collection: 'projects',
          channel_data: [
            {
              channel_id: '97c5837d-c65c-4d54-aa39-080eeb81c69d',
              data: { tokens: ['push_token_xxx'], type: 'push_fcm', __typename: 'PushChannelData' },
              provider: 'push_fcm',
            },
          ],
          created_at: '2019-12-27T18:11:19.117Z',
          preferences: {},
        },
      ],
    });
  });
});
