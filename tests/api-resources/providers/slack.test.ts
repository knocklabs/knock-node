// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from 'knock';
import { Response } from 'node-fetch';

const client = new Knock({
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource slack', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('checkAuth: only required params', async () => {
    const responsePromise = client.providers.slack.checkAuth('channel_id', {
      access_token_object: 'access_token_object',
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
  test.skip('checkAuth: required and optional params', async () => {
    const response = await client.providers.slack.checkAuth('channel_id', {
      access_token_object: 'access_token_object',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listChannels: only required params', async () => {
    const responsePromise = client.providers.slack.listChannels('channel_id', {
      access_token_object: 'access_token_object',
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
  test.skip('listChannels: required and optional params', async () => {
    const response = await client.providers.slack.listChannels('channel_id', {
      access_token_object: 'access_token_object',
      query_options: {
        cursor: 'cursor',
        exclude_archived: 'exclude_archived',
        limit: 'limit',
        team_id: 'team_id',
        types: 'types',
      },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('revokeAccess: only required params', async () => {
    const responsePromise = client.providers.slack.revokeAccess('channel_id', {
      access_token_object: 'access_token_object',
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
  test.skip('revokeAccess: required and optional params', async () => {
    const response = await client.providers.slack.revokeAccess('channel_id', {
      access_token_object: 'access_token_object',
    });
  });
});
