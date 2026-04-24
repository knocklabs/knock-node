// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource objects', () => {
  test('list', async () => {
    const responsePromise = client.objects.list('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.objects.list('collection', {
    after: 'after',
    before: 'before',
    include: ['preferences'],
    page_size: 0,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Knock.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.objects.delete('collection', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addSubscriptions: only required params', async () => {
    const responsePromise = client.objects.addSubscriptions('collection', 'object_id', { recipients: ['user_1', 'user_2'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addSubscriptions: required and optional params', async () => {
    const response = await client.objects.addSubscriptions('collection', 'object_id', {
    recipients: ['user_1', 'user_2'],
    properties: { key: 'bar' },
  });
  });

  test('deleteSubscriptions: only required params', async () => {
    const responsePromise = client.objects.deleteSubscriptions('collection', 'object_id', { recipients: ['user_123'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteSubscriptions: required and optional params', async () => {
    const response = await client.objects.deleteSubscriptions('collection', 'object_id', { recipients: ['user_123'] });
  });

  test('get', async () => {
    const responsePromise = client.objects.get('collection', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getChannelData', async () => {
    const responsePromise = client.objects.getChannelData('collection', 'object_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPreferences', async () => {
    const responsePromise = client.objects.getPreferences('collection', 'object_id', 'default');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listMessages', async () => {
    const responsePromise = client.objects.listMessages('projects', 'project-123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.objects.listMessages('projects', 'project-123', {
    after: 'after',
    before: 'before',
    channel_id: 'channel_id',
    engagement_status: ['seen'],
    inserted_at: {
    gt: 'gt',
    gte: 'gte',
    lt: 'lt',
    lte: 'lte',
  },
    message_ids: ['string'],
    page_size: 0,
    source: 'source',
    status: ['queued'],
    tenant: 'tenant',
    trigger_data: 'trigger_data',
    workflow_categories: ['string'],
    workflow_recipient_run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    workflow_run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Knock.NotFoundError);
  });

  test('listPreferences', async () => {
    const responsePromise = client.objects.listPreferences('collection', 'object_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listSchedules', async () => {
    const responsePromise = client.objects.listSchedules('collection', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listSchedules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.objects.listSchedules('collection', 'id', {
    after: 'after',
    before: 'before',
    page_size: 0,
    tenant: 'tenant',
    workflow: 'workflow',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Knock.NotFoundError);
  });

  test('listSubscriptions', async () => {
    const responsePromise = client.objects.listSubscriptions('collection', 'object_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listSubscriptions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.objects.listSubscriptions('collection', 'object_id', {
    after: 'after',
    before: 'before',
    include: ['preferences'],
    mode: 'recipient',
    objects: [{ id: 'project_123', collection: 'projects' }],
    page_size: 0,
    recipients: ['user_123'],
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Knock.NotFoundError);
  });

  test('set', async () => {
    const responsePromise = client.objects.set('collection', 'id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setChannelData: only required params', async () => {
    const responsePromise = client.objects.setChannelData('collection', 'object_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { data: { tokens: ['push_token_1'] } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setChannelData: required and optional params', async () => {
    const response = await client.objects.setChannelData('collection', 'object_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { data: { tokens: ['push_token_1'] } });
  });

  test('setPreferences', async () => {
    const responsePromise = client.objects.setPreferences('collection', 'object_id', 'default', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unsetChannelData', async () => {
    const responsePromise = client.objects.unsetChannelData('collection', 'object_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unsetPreferences', async () => {
    const responsePromise = client.objects.unsetPreferences('collection', 'object_id', 'default');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
