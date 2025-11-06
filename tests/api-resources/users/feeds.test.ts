// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feeds', () => {
  // Prism doesn't support callbacks yet
  test.skip('getSettings', async () => {
    const responsePromise = client.users.feeds.getSettings('user_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listItems', async () => {
    const responsePromise = client.users.feeds.listItems('user_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listItems: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.feeds.listItems(
        'user_id',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          after: 'after',
          archived: 'exclude',
          before: 'before',
          has_tenant: true,
          locale: 'locale',
          page_size: 0,
          source: 'source',
          status: 'unread',
          tenant: 'tenant',
          trigger_data: 'trigger_data',
          workflow_categories: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });
});
