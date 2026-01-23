// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audiences', () => {
  // Prism doesn't support callbacks yet
  test.skip('addMembers: only required params', async () => {
    const responsePromise = client.audiences.addMembers('key', { members: [{ user: { id: 'dr_sattler' } }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('addMembers: required and optional params', async () => {
    const response = await client.audiences.addMembers('key', {
      members: [
        {
          user: {
            id: 'dr_sattler',
            avatar: 'avatar',
            channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] } },
            created_at: '2019-12-27T18:11:19.117Z',
            email: 'ellie@ingen.net',
            locale: 'locale',
            name: 'Dr. Ellie Sattler',
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
                          {
                            argument: 'US',
                            operator: 'equal_to',
                            variable: 'recipient.country_code',
                          },
                        ],
                      },
                    },
                    channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                    conditions: [
                      {
                        argument: 'frog_genome',
                        operator: 'contains',
                        variable: 'specimen.dna_sequence',
                      },
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
                      {
                        argument: 'US',
                        operator: 'equal_to',
                        variable: 'recipient.country_code',
                      },
                    ],
                  },
                },
                channels: {
                  '2f641633-95d3-4555-9222-9f1eb7888a80': {
                    conditions: [
                      {
                        argument: 'US',
                        operator: 'equal_to',
                        variable: 'recipient.country_code',
                      },
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
                          {
                            argument: 'US',
                            operator: 'equal_to',
                            variable: 'recipient.country_code',
                          },
                        ],
                      },
                    },
                    channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                    conditions: [
                      {
                        argument: 'frog_genome',
                        operator: 'contains',
                        variable: 'specimen.dna_sequence',
                      },
                    ],
                  },
                },
              },
            },
            timezone: 'America/New_York',
          },
          tenant: 'ingen_isla_nublar',
        },
      ],
    });
  });

  // Prism doesn't support callbacks yet
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

  // Prism doesn't support callbacks yet
  test.skip('removeMembers: only required params', async () => {
    const responsePromise = client.audiences.removeMembers('key', {
      members: [{ user: { id: 'dr_sattler' } }],
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
  test.skip('removeMembers: required and optional params', async () => {
    const response = await client.audiences.removeMembers('key', {
      members: [
        {
          user: {
            id: 'dr_sattler',
            avatar: 'avatar',
            channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_123'] } },
            created_at: '2019-12-27T18:11:19.117Z',
            email: 'ellie@ingen.net',
            locale: 'locale',
            name: 'Dr. Ellie Sattler',
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
                          {
                            argument: 'US',
                            operator: 'equal_to',
                            variable: 'recipient.country_code',
                          },
                        ],
                      },
                    },
                    channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                    conditions: [
                      {
                        argument: 'frog_genome',
                        operator: 'contains',
                        variable: 'specimen.dna_sequence',
                      },
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
                      {
                        argument: 'US',
                        operator: 'equal_to',
                        variable: 'recipient.country_code',
                      },
                    ],
                  },
                },
                channels: {
                  '2f641633-95d3-4555-9222-9f1eb7888a80': {
                    conditions: [
                      {
                        argument: 'US',
                        operator: 'equal_to',
                        variable: 'recipient.country_code',
                      },
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
                          {
                            argument: 'US',
                            operator: 'equal_to',
                            variable: 'recipient.country_code',
                          },
                        ],
                      },
                    },
                    channels: { 'aef6e715-df82-4ab6-b61e-b743e249f7b6': true },
                    conditions: [
                      {
                        argument: 'frog_genome',
                        operator: 'contains',
                        variable: 'specimen.dna_sequence',
                      },
                    ],
                  },
                },
              },
            },
            timezone: 'America/New_York',
          },
          tenant: 'ingen_isla_nublar',
        },
      ],
    });
  });
});
