// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource msTeams', () => {
  // Prism doesn't support callbacks yet
  test.skip('checkAuth: only required params', async () => {
    const responsePromise = client.providers.msTeams.checkAuth('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
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
  test.skip('checkAuth: required and optional params', async () => {
    const response = await client.providers.msTeams.checkAuth('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('listChannels: only required params', async () => {
    const responsePromise = client.providers.msTeams.listChannels('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
      team_id: 'team_id',
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
  test.skip('listChannels: required and optional params', async () => {
    const response = await client.providers.msTeams.listChannels('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
      team_id: 'team_id',
      query_options: { $filter: '$filter', $select: '$select' },
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('listTeams: only required params', async () => {
    const responsePromise = client.providers.msTeams.listTeams('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
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
  test.skip('listTeams: required and optional params', async () => {
    const response = await client.providers.msTeams.listTeams('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
      query_options: { $filter: '$filter', $select: '$select', $skiptoken: '$skiptoken', $top: 0 },
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('revokeAccess: only required params', async () => {
    const responsePromise = client.providers.msTeams.revokeAccess('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
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
  test.skip('revokeAccess: required and optional params', async () => {
    const response = await client.providers.msTeams.revokeAccess('channel_id', {
      ms_teams_tenant_object: 'ms_teams_tenant_object',
    });
  });
});
