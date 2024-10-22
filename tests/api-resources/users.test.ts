// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from 'knock';
import { Response } from 'node-fetch';

const client = new Knock({
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('update', async () => {
    const responsePromise = client.users.update('user_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list', async () => {
    const responsePromise = client.users.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Knock.NotFoundError,
    );
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.list(
        { after: 'after', before: 'before', page_size: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('delete', async () => {
    const responsePromise = client.users.delete('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.delete('user_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Knock.NotFoundError,
    );
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('get', async () => {
    const responsePromise = client.users.get('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.get('user_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Knock.NotFoundError,
    );
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('merge', async () => {
    const responsePromise = client.users.merge('user_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
