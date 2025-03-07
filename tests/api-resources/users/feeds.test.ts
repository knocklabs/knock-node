// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feeds', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getSettings: only required params', async () => {
    const responsePromise = client.users.feeds.getSettings('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      user_id: 'user_id',
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
  test.skip('getSettings: required and optional params', async () => {
    const response = await client.users.feeds.getSettings('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      user_id: 'user_id',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listItems: only required params', async () => {
    const responsePromise = client.users.feeds.listItems('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      user_id: 'user_id',
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
  test.skip('listItems: required and optional params', async () => {
    const response = await client.users.feeds.listItems('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      user_id: 'user_id',
      after: 'after',
      archived: 'exclude',
      before: 'before',
      has_tenant: true,
      page_size: 0,
      source: 'source',
      status: 'unread',
      tenant: 'tenant',
      trigger_data: 'trigger_data',
      workflow_categories: ['string'],
    });
  });
});
