// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource objects', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list', async () => {
    const responsePromise = client.objects.list('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objects.list(
        'collection',
        { after: 'after', before: 'before', page_size: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('delete: only required params', async () => {
    const responsePromise = client.objects.delete('id', { collection: 'collection' });
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
    const response = await client.objects.delete('id', { collection: 'collection' });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('addSubscriptions: only required params', async () => {
    const responsePromise = client.objects.addSubscriptions('object_id', {
      collection: 'collection',
      recipients: ['user_1', 'user_2'],
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
    const response = await client.objects.addSubscriptions('object_id', {
      collection: 'collection',
      recipients: ['user_1', 'user_2'],
      properties: { key: 'bar' },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('deleteSubscriptions: only required params', async () => {
    const responsePromise = client.objects.deleteSubscriptions('object_id', {
      collection: 'collection',
      recipients: [{ id: 'user_1' }],
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
  test.skip('deleteSubscriptions: required and optional params', async () => {
    const response = await client.objects.deleteSubscriptions('object_id', {
      collection: 'collection',
      recipients: [
        {
          id: 'user_1',
          channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { data: { tokens: ['push_token_xxx'] } } },
          created_at: '2019-12-27T18:11:19.117Z',
          preferences: {
            default: {
              categories: {
                transactional: {
                  channel_types: {
                    chat: true,
                    email: false,
                    http: true,
                    in_app_feed: true,
                    push: true,
                    sms: true,
                  },
                  conditions: [
                    { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
                  ],
                },
              },
              channel_types: {
                chat: true,
                email: true,
                http: true,
                in_app_feed: true,
                push: true,
                sms: true,
              },
              workflows: {
                'dinosaurs-loose': {
                  channel_types: {
                    chat: true,
                    email: true,
                    http: true,
                    in_app_feed: true,
                    push: true,
                    sms: true,
                  },
                  conditions: [
                    { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
                  ],
                },
              },
            },
          },
        },
      ],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('get: only required params', async () => {
    const responsePromise = client.objects.get('id', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('get: required and optional params', async () => {
    const response = await client.objects.get('id', { collection: 'collection' });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getChannelData: only required params', async () => {
    const responsePromise = client.objects.getChannelData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      collection: 'collection',
      object_id: 'object_id',
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
  test.skip('getChannelData: required and optional params', async () => {
    const response = await client.objects.getChannelData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      collection: 'collection',
      object_id: 'object_id',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getPreferences: only required params', async () => {
    const responsePromise = client.objects.getPreferences('id', {
      collection: 'collection',
      object_id: 'object_id',
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
  test.skip('getPreferences: required and optional params', async () => {
    const response = await client.objects.getPreferences('id', {
      collection: 'collection',
      object_id: 'object_id',
      tenant: 'tenant',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listMessages: only required params', async () => {
    const responsePromise = client.objects.listMessages('project-123', { collection: 'projects' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listMessages: required and optional params', async () => {
    const response = await client.objects.listMessages('project-123', {
      collection: 'projects',
      after: 'after',
      before: 'before',
      channel_id: 'channel_id',
      engagement_status: ['seen'],
      message_ids: ['string'],
      page_size: 0,
      source: 'source',
      status: ['queued'],
      tenant: 'tenant',
      trigger_data: 'trigger_data',
      workflow_categories: ['string'],
      workflow_recipient_run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      workflow_run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listPreferences: only required params', async () => {
    const responsePromise = client.objects.listPreferences('object_id', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listPreferences: required and optional params', async () => {
    const response = await client.objects.listPreferences('object_id', { collection: 'collection' });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSchedules: only required params', async () => {
    const responsePromise = client.objects.listSchedules('id', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSchedules: required and optional params', async () => {
    const response = await client.objects.listSchedules('id', {
      collection: 'collection',
      after: 'after',
      before: 'before',
      page_size: 0,
      tenant: 'tenant',
      workflow: 'workflow',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSubscriptions: only required params', async () => {
    const responsePromise = client.objects.listSubscriptions('object_id', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSubscriptions: required and optional params', async () => {
    const response = await client.objects.listSubscriptions('object_id', {
      collection: 'collection',
      after: 'after',
      before: 'before',
      mode: 'recipient',
      page_size: 0,
      recipients: ['user_123'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('set: only required params', async () => {
    const responsePromise = client.objects.set('id', { collection: 'collection' });
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
    const response = await client.objects.set('id', {
      collection: 'collection',
      channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { data: { tokens: ['push_token_xxx'] } } },
      preferences: {
        default: {
          categories: {
            transactional: {
              channel_types: {
                chat: true,
                email: false,
                http: true,
                in_app_feed: true,
                push: true,
                sms: true,
              },
              conditions: [
                { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
              ],
            },
          },
          channel_types: { chat: true, email: true, http: true, in_app_feed: true, push: true, sms: true },
          workflows: {
            'dinosaurs-loose': {
              channel_types: {
                chat: true,
                email: true,
                http: true,
                in_app_feed: true,
                push: true,
                sms: true,
              },
              conditions: [
                { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
              ],
            },
          },
        },
      },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('setChannelData: only required params', async () => {
    const responsePromise = client.objects.setChannelData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      collection: 'collection',
      object_id: 'object_id',
      data: { tokens: ['push_token_1'] },
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
  test.skip('setChannelData: required and optional params', async () => {
    const response = await client.objects.setChannelData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      collection: 'collection',
      object_id: 'object_id',
      data: { tokens: ['push_token_1'] },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('setPreferences: only required params', async () => {
    const responsePromise = client.objects.setPreferences('id', {
      collection: 'collection',
      object_id: 'object_id',
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
  test.skip('setPreferences: required and optional params', async () => {
    const response = await client.objects.setPreferences('id', {
      collection: 'collection',
      object_id: 'object_id',
      categories: {
        marketing: false,
        transactional: {
          channel_types: { chat: true, email: false, http: true, in_app_feed: true, push: true, sms: true },
          conditions: [{ argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' }],
        },
      },
      channel_types: { chat: true, email: true, http: true, in_app_feed: true, push: true, sms: true },
      workflows: {
        'dinosaurs-loose': {
          channel_types: { chat: true, email: false, http: true, in_app_feed: true, push: true, sms: true },
          conditions: [{ argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' }],
        },
      },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('unsetChannelData: only required params', async () => {
    const responsePromise = client.objects.unsetChannelData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      collection: 'collection',
      object_id: 'object_id',
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
  test.skip('unsetChannelData: required and optional params', async () => {
    const response = await client.objects.unsetChannelData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      collection: 'collection',
      object_id: 'object_id',
    });
  });
});
