// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // Prism doesn't support callbacks yet
  test.skip('delete: only required params', async () => {
    const responsePromise = client.tenants.bulk.delete({ tenant_ids: ['string'] });
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
    const response = await client.tenants.bulk.delete({ tenant_ids: ['string'] });
  });

  // Prism doesn't support callbacks yet
  test.skip('set: only required params', async () => {
    const responsePromise = client.tenants.bulk.set({ tenants: [{ id: 'tenant_1' }] });
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
    const response = await client.tenants.bulk.set({
      tenants: [
        {
          id: 'tenant_1',
          channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_xxx'] } },
          name: 'Acme Corp, Inc.',
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
          settings: {
            branding: {
              icon_url: 'https://example.com/icon.png',
              logo_url: 'https://example.com/logo.png',
              primary_color: '#000000',
              primary_color_contrast: '#FFFFFF',
            },
            preference_set: {
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
