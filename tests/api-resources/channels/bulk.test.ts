// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from 'knock';
import { Response } from 'node-fetch';

const client = new Knock({
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('updateMessageStatus', async () => {
    const responsePromise = client.channels.bulk.updateMessageStatus(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'seen',
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
  test.skip('updateMessageStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.channels.bulk.updateMessageStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'seen', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Knock.NotFoundError);
  });
});
