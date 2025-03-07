// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('updateMessageStatus: only required params', async () => {
    const responsePromise = client.channels.bulk.updateMessageStatus('seen', {
      channel_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('updateMessageStatus: required and optional params', async () => {
    const response = await client.channels.bulk.updateMessageStatus('seen', {
      channel_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      archived: 'exclude',
      delivery_status: 'queued',
      engagement_status: 'seen',
      has_tenant: true,
      newer_than: '2024-01-01T00:00:00Z',
      older_than: '2024-01-01T00:00:00Z',
      recipient_ids: ['recipient1', 'recipient2'],
      tenants: ['tenant1', 'tenant2'],
      trigger_data: '{"key":"value"}',
      workflows: ['workflow1', 'workflow2'],
    });
  });
});
