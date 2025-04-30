// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource guides', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getChannel', async () => {
    const responsePromise = client.users.guides.getChannel('user_id', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getChannel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.guides.getChannel(
        'user_id',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { data: 'data', tenant: 'tenant', type: 'type' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markMessageAsArchived: only required params', async () => {
    const responsePromise = client.users.guides.markMessageAsArchived('user_id', 'message_id', {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
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
  test.skip('markMessageAsArchived: required and optional params', async () => {
    const response = await client.users.guides.markMessageAsArchived('user_id', 'message_id', {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
      content: { body: 'bar', title: 'bar' },
      data: { next_time: 'bar', spots_left: 'bar', tour_id: 'bar' },
      is_final: false,
      metadata: { cta: 'bar', theme: 'bar', type: 'bar' },
      tenant: 'ingen_isla_nublar',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markMessageAsInteracted: only required params', async () => {
    const responsePromise = client.users.guides.markMessageAsInteracted('user_id', 'message_id', {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
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
  test.skip('markMessageAsInteracted: required and optional params', async () => {
    const response = await client.users.guides.markMessageAsInteracted('user_id', 'message_id', {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
      content: { body: 'bar', title: 'bar' },
      data: { next_time: 'bar', spots_left: 'bar', tour_id: 'bar' },
      is_final: false,
      metadata: { cta: 'bar', theme: 'bar', type: 'bar' },
      tenant: 'ingen_isla_nublar',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markMessageAsSeen: only required params', async () => {
    const responsePromise = client.users.guides.markMessageAsSeen('user_id', 'message_id', {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
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
  test.skip('markMessageAsSeen: required and optional params', async () => {
    const response = await client.users.guides.markMessageAsSeen('user_id', 'message_id', {
      channel_id: '123e4567-e89b-12d3-a456-426614174000',
      guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
      guide_key: 'tour_notification',
      guide_step_ref: 'lab_tours',
      content: { body: 'bar', title: 'bar' },
      data: { next_time: 'bar', spots_left: 'bar', tour_id: 'bar' },
      is_final: false,
      metadata: { cta: 'bar', theme: 'bar', type: 'bar' },
      tenant: 'ingen_isla_nublar',
    });
  });
});
