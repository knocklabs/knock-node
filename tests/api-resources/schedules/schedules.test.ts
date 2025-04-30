// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schedules', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: only required params', async () => {
    const responsePromise = client.schedules.create({
      recipients: ['user_123'],
      repeats: [{ __typename: 'ScheduleRepeat', frequency: 'daily' }],
      workflow: 'comment-created',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.schedules.create({
      recipients: ['user_123'],
      repeats: [
        {
          __typename: 'ScheduleRepeat',
          frequency: 'daily',
          day_of_month: null,
          days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          hours: null,
          interval: 1,
          minutes: null,
        },
      ],
      workflow: 'comment-created',
      data: { key: 'bar' },
      ending_at: null,
      scheduled_at: null,
      tenant: 'acme_corp',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('update: only required params', async () => {
    const responsePromise = client.schedules.update({
      schedule_ids: ['123e4567-e89b-12d3-a456-426614174000'],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.schedules.update({
      schedule_ids: ['123e4567-e89b-12d3-a456-426614174000'],
      actor: 'string',
      data: { key: 'bar' },
      ending_at: null,
      repeats: [
        {
          __typename: 'ScheduleRepeat',
          frequency: 'daily',
          day_of_month: null,
          days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          hours: null,
          interval: 1,
          minutes: null,
        },
      ],
      scheduled_at: null,
      tenant: 'acme_corp',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: only required params', async () => {
    const responsePromise = client.schedules.list({ workflow: 'workflow' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: required and optional params', async () => {
    const response = await client.schedules.list({
      workflow: 'workflow',
      after: 'after',
      before: 'before',
      page_size: 0,
      recipients: ['string'],
      tenant: 'tenant',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('delete: only required params', async () => {
    const responsePromise = client.schedules.delete({
      schedule_ids: ['123e4567-e89b-12d3-a456-426614174000'],
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.schedules.delete({
      schedule_ids: ['123e4567-e89b-12d3-a456-426614174000'],
    });
  });
});
