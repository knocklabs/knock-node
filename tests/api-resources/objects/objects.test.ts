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
        { after: 'after', before: 'before', include: ['preferences'], page_size: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('delete', async () => {
    const responsePromise = client.objects.delete('collection', 'object_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('addSubscriptions: only required params', async () => {
    const responsePromise = client.objects.addSubscriptions('collection', 'object_id', {
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
    const response = await client.objects.addSubscriptions('collection', 'object_id', {
      recipients: ['user_1', 'user_2'],
      properties: { key: 'bar' },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('deleteSubscriptions: only required params', async () => {
    const responsePromise = client.objects.deleteSubscriptions('collection', 'object_id', {
      recipients: [{}],
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
    const response = await client.objects.deleteSubscriptions('collection', 'object_id', {
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
  test.skip('get', async () => {
    const responsePromise = client.objects.get('collection', 'object_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getChannelData', async () => {
    const responsePromise = client.objects.getChannelData(
      'collection',
      'object_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getPreferences', async () => {
    const responsePromise = client.objects.getPreferences('collection', 'object_id', 'default');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getPreferences: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objects.getPreferences(
        'collection',
        'object_id',
        'default',
        { tenant: 'tenant' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listMessages', async () => {
    const responsePromise = client.objects.listMessages('projects', 'project-123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objects.listMessages(
        'projects',
        'project-123',
        {
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSchedules', async () => {
    const responsePromise = client.objects.listSchedules('collection', 'object_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSchedules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objects.listSchedules(
        'collection',
        'object_id',
        { after: 'after', before: 'before', page_size: 0, tenant: 'tenant', workflow: 'workflow' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.objects.listSubscriptions('collection', 'object_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listSubscriptions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objects.listSubscriptions(
        'collection',
        'object_id',
        {
          after: 'after',
          before: 'before',
          include: ['preferences'],
          mode: 'recipient',
          objects: ['user_123'],
          page_size: 0,
          recipients: ['user_123'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('set', async () => {
    const responsePromise = client.objects.set('collection', 'object_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('setChannelData: only required params', async () => {
    const responsePromise = client.objects.setChannelData(
      'collection',
      'object_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { data: { tokens: ['push_token_1'] } },
    );
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
    const response = await client.objects.setChannelData(
      'collection',
      'object_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { data: { tokens: ['push_token_1'] } },
    );
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('setPreferences', async () => {
    const responsePromise = client.objects.setPreferences('collection', 'object_id', 'default', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('unsetChannelData', async () => {
    const responsePromise = client.objects.unsetChannelData(
      'collection',
      'object_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
