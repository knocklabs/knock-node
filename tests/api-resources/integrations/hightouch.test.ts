// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource hightouch', () => {
  // Prism doesn't support callbacks yet
  test.skip('embeddedDestination: only required params', async () => {
    const responsePromise = client.integrations.hightouch.embeddedDestination({
      id: 'id',
      jsonrpc: 'jsonrpc',
      method: 'method',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('embeddedDestination: required and optional params', async () => {
    const response = await client.integrations.hightouch.embeddedDestination({
      id: 'id',
      jsonrpc: 'jsonrpc',
      method: 'method',
      params: { foo: 'bar' },
    });
  });
});
