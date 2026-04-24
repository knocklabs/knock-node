// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource slack', () => {
  test('checkAuth: only required params', async () => {
    const responsePromise = client.providers.slack.checkAuth('channel_id', { access_token_object: 'access_token_object' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('checkAuth: required and optional params', async () => {
    const response = await client.providers.slack.checkAuth('channel_id', { access_token_object: 'access_token_object' });
  });

  test('listChannels: only required params', async () => {
    const responsePromise = client.providers.slack.listChannels('channel_id', { access_token_object: 'access_token_object' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listChannels: required and optional params', async () => {
    const response = await client.providers.slack.listChannels('channel_id', {
    access_token_object: 'access_token_object',
    query_options: {
    cursor: 'cursor',
    exclude_archived: true,
    limit: 0,
    team_id: 'team_id',
    types: 'types',
  },
  });
  });

  test('revokeAccess: only required params', async () => {
    const responsePromise = client.providers.slack.revokeAccess('channel_id', { access_token_object: 'access_token_object' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revokeAccess: required and optional params', async () => {
    const response = await client.providers.slack.revokeAccess('channel_id', { access_token_object: 'access_token_object' });
  });
});
