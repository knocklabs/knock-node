// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // Prism doesn't support callbacks yet
  test.skip('delete: only required params', async () => {
    const responsePromise = client.objects.bulk.delete('collection', {
      object_ids: ['obj_123', 'obj_456', 'obj_789'],
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.objects.bulk.delete('collection', {
      object_ids: ['obj_123', 'obj_456', 'obj_789'],
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('addSubscriptions: only required params', async () => {
    const responsePromise = client.objects.bulk.addSubscriptions('projects', {
      subscriptions: [{ recipients: [{ id: 'user_1' }] }],
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
  test.skip('addSubscriptions: required and optional params', async () => {
    const response = await client.objects.bulk.addSubscriptions('projects', {
      subscriptions: [
        {
          recipients: [
            {
              id: 'user_1',
              avatar: 'avatar',
              channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] } },
              created_at: '2019-12-27T18:11:19.117Z',
              email: 'jane@ingen.net',
              locale: 'locale',
              name: 'Jane Doe',
              phone_number: 'phone_number',
              preferences: {
                default: {
                  __persistence_strategy__: 'merge',
                  categories: {
                    marketing: false,
                    transactional: {
                      channel_types: {
                        chat: true,
                        email: false,
                        http: true,
                        in_app_feed: true,
                        push: true,
                        sms: {
                          conditions: [
                            { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                          ],
                        },
                      },
                      channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                      conditions: [
                        { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
                      ],
                    },
                  },
                  channel_types: {
                    chat: true,
                    email: true,
                    http: true,
                    in_app_feed: true,
                    push: true,
                    sms: {
                      conditions: [
                        { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                      ],
                    },
                  },
                  channels: {
                    '2f641633-95d3-4555-9222-9f1eb7888a80': {
                      conditions: [
                        { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                      ],
                    },
                    'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
                  },
                  commercial_subscribed: true,
                  workflows: {
                    'dinosaurs-loose': {
                      channel_types: {
                        chat: true,
                        email: true,
                        http: true,
                        in_app_feed: true,
                        push: true,
                        sms: {
                          conditions: [
                            { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                          ],
                        },
                      },
                      channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                      conditions: [
                        { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
                      ],
                    },
                  },
                },
              },
              timezone: 'America/New_York',
            },
          ],
          properties: { foo: 'bar' },
        },
      ],
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('set: only required params', async () => {
    const responsePromise = client.objects.bulk.set('collection', { objects: [{ id: 'project_1' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('set: required and optional params', async () => {
    const response = await client.objects.bulk.set('collection', {
      objects: [
        {
          id: 'project_1',
          channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_xxx'] } },
          created_at: '2019-12-27T18:11:19.117Z',
          preferences: {
            default: {
              __persistence_strategy__: 'merge',
              categories: {
                transactional: {
                  channel_types: {
                    chat: true,
                    email: false,
                    http: true,
                    in_app_feed: true,
                    push: true,
                    sms: {
                      conditions: [
                        { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                      ],
                    },
                  },
                  channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                  conditions: [
                    { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
                  ],
                },
              },
              channel_types: {
                chat: true,
                email: true,
                http: true,
                in_app_feed: true,
                push: true,
                sms: {
                  conditions: [{ argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' }],
                },
              },
              channels: {
                '2f641633-95d3-4555-9222-9f1eb7888a80': {
                  conditions: [{ argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' }],
                },
                'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
              },
              commercial_subscribed: true,
              workflows: {
                'dinosaurs-loose': {
                  channel_types: {
                    chat: true,
                    email: false,
                    http: true,
                    in_app_feed: true,
                    push: true,
                    sms: {
                      conditions: [
                        { argument: 'US', operator: 'equal_to', variable: 'recipient.country_code' },
                      ],
                    },
                  },
                  channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                  conditions: [
                    { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
                  ],
                },
              },
            },
          },
        },
      ],
    });
  });
});
