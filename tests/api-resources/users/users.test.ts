// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource users', () => {
  test('update', async () => {
    const responsePromise = client.users.update('user_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.users.list();
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
    await expect(client.users.list({
    after: 'after',
    before: 'before',
    include: ['preferences'],
    page_size: 0,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Knock.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.users.delete('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.users.get('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getChannelData', async () => {
    const responsePromise = client.users.getChannelData('user_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPreferences', async () => {
    const responsePromise = client.users.getPreferences('user_id', 'default');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPreferences: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.getPreferences('user_id', 'default', { tenant: 'tenant' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Knock.NotFoundError);
  });

  test('listMessages', async () => {
    const responsePromise = client.users.listMessages('user-123');
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
    await expect(client.users.listMessages('user-123', {
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
    const responsePromise = client.users.listPreferences('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listSchedules', async () => {
    const responsePromise = client.users.listSchedules('user_id');
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
    await expect(client.users.listSchedules('user_id', {
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
    const responsePromise = client.users.listSubscriptions('user_id');
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
    await expect(client.users.listSubscriptions('user_id', {
    after: 'after',
    before: 'before',
    include: ['preferences'],
    objects: ['user_123'],
    page_size: 0,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Knock.NotFoundError);
  });

  test('merge: only required params', async () => {
    const responsePromise = client.users.merge('user_id', { from_user_id: 'user_1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: required and optional params', async () => {
    const response = await client.users.merge('user_id', { from_user_id: 'user_1' });
  });

  test('setChannelData: only required params', async () => {
    const responsePromise = client.users.setChannelData('user_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { data: { tokens: ['push_token_1'] } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setChannelData: required and optional params', async () => {
    const response = await client.users.setChannelData('user_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { data: { tokens: ['push_token_1'] } });
  });

  test('setPreferences', async () => {
    const responsePromise = client.users.setPreferences('user_id', 'default', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unsetChannelData', async () => {
    const responsePromise = client.users.unsetChannelData('user_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unsetPreferences', async () => {
    const responsePromise = client.users.unsetPreferences('user_id', 'default');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
