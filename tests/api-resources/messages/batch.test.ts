// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('archive: only required params', async () => {
    const responsePromise = client.messages.batch.archive({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.messages.batch.archive({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getContent: only required params', async () => {
    const responsePromise = client.messages.batch.getContent({ message_ids: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('getContent: required and optional params', async () => {
    const response = await client.messages.batch.getContent({ message_ids: ['string'] });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markAsInteracted: only required params', async () => {
    const responsePromise = client.messages.batch.markAsInteracted({
      message_ids: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'],
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
  test.skip('markAsInteracted: required and optional params', async () => {
    const response = await client.messages.batch.markAsInteracted({
      message_ids: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'],
      metadata: { key: 'bar' },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markAsRead: only required params', async () => {
    const responsePromise = client.messages.batch.markAsRead({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
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
  test.skip('markAsRead: required and optional params', async () => {
    const response = await client.messages.batch.markAsRead({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markAsSeen: only required params', async () => {
    const responsePromise = client.messages.batch.markAsSeen({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
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
  test.skip('markAsSeen: required and optional params', async () => {
    const response = await client.messages.batch.markAsSeen({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markAsUnread: only required params', async () => {
    const responsePromise = client.messages.batch.markAsUnread({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
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
  test.skip('markAsUnread: required and optional params', async () => {
    const response = await client.messages.batch.markAsUnread({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('markAsUnseen: only required params', async () => {
    const responsePromise = client.messages.batch.markAsUnseen({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
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
  test.skip('markAsUnseen: required and optional params', async () => {
    const response = await client.messages.batch.markAsUnseen({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('unarchive: only required params', async () => {
    const responsePromise = client.messages.batch.unarchive({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
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
  test.skip('unarchive: required and optional params', async () => {
    const response = await client.messages.batch.unarchive({
      message_ids: ['2w3YUpTTOxuDvZFji8OMsKrG176', '2w3YVRbPXMIh8Zq6oBFcVDA5xes'],
    });
  });
});
