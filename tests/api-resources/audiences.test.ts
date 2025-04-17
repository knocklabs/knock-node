// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audiences', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('addMembers: only required params', async () => {
    const responsePromise = client.audiences.addMembers('key', { members: [{ user: { id: 'user_1' } }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('addMembers: required and optional params', async () => {
    const response = await client.audiences.addMembers('key', {
      members: [
        {
          user: {
            id: 'user_1',
            channel_data: {
              '97c5837d-c65c-4d54-aa39-080eeb81c69d': { data: { tokens: ['push_token_xxx'] } },
            },
            created_at: '2019-12-27T18:11:19.117Z',
            preferences: {
              default: {
                categories: {
                  transactional: {
                    channel_types: {
                      chat: true,
                      email: false,
                      http: true,
                      in_app_feed: true,
                      push: true,
                      sms: true,
                    },
                    conditions: [
                      { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
                    ],
                  },
                },
                channel_types: {
                  chat: true,
                  email: true,
                  http: true,
                  in_app_feed: true,
                  push: true,
                  sms: true,
                },
                workflows: {
                  'dinosaurs-loose': {
                    channel_types: {
                      chat: true,
                      email: true,
                      http: true,
                      in_app_feed: true,
                      push: true,
                      sms: true,
                    },
                    conditions: [
                      { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
                    ],
                  },
                },
              },
            },
          },
          tenant: null,
        },
      ],
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('listMembers', async () => {
    const responsePromise = client.audiences.listMembers('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('removeMembers: only required params', async () => {
    const responsePromise = client.audiences.removeMembers('key', { members: [{ user: { id: 'user_1' } }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('removeMembers: required and optional params', async () => {
    const response = await client.audiences.removeMembers('key', {
      members: [
        {
          user: {
            id: 'user_1',
            channel_data: {
              '97c5837d-c65c-4d54-aa39-080eeb81c69d': { data: { tokens: ['push_token_xxx'] } },
            },
            created_at: '2019-12-27T18:11:19.117Z',
            preferences: {
              default: {
                categories: {
                  transactional: {
                    channel_types: {
                      chat: true,
                      email: false,
                      http: true,
                      in_app_feed: true,
                      push: true,
                      sms: true,
                    },
                    conditions: [
                      { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
                    ],
                  },
                },
                channel_types: {
                  chat: true,
                  email: true,
                  http: true,
                  in_app_feed: true,
                  push: true,
                  sms: true,
                },
                workflows: {
                  'dinosaurs-loose': {
                    channel_types: {
                      chat: true,
                      email: true,
                      http: true,
                      in_app_feed: true,
                      push: true,
                      sms: true,
                    },
                    conditions: [
                      { argument: 'some_property', operator: 'equal_to', variable: 'recipient.property' },
                    ],
                  },
                },
              },
            },
          },
          tenant: null,
        },
      ],
    });
  });
});
