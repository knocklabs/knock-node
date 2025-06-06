// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.workflows.cancel('key', { cancellation_key: 'cancel-workflow-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('cancel: required and optional params', async () => {
    const response = await client.workflows.cancel('key', {
      cancellation_key: 'cancel-workflow-123',
      recipients: ['jhammond'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('trigger: only required params', async () => {
    const responsePromise = client.workflows.trigger('key', {
      recipients: ['dr_grant', 'dr_sattler', 'dr_malcolm'],
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
  test.skip('trigger: required and optional params', async () => {
    const response = await client.workflows.trigger('key', {
      recipients: ['dr_grant', 'dr_sattler', 'dr_malcolm'],
      actor: 'mr_dna',
      cancellation_key: 'isla_nublar_incident_1993',
      data: {
        affected_areas: 'bar',
        attraction_id: 'bar',
        evacuation_protocol: 'bar',
        message: 'bar',
        severity: 'bar',
        system_status: 'bar',
      },
      tenant: 'ingen_isla_nublar',
    });
  });
});
