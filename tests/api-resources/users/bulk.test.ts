// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // Prism doesn't support callbacks yet
  test.skip('delete: only required params', async () => {
    const responsePromise = client.users.bulk.delete({ user_ids: ['user_1', 'user_2'] });
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
    const response = await client.users.bulk.delete({ user_ids: ['user_1', 'user_2'] });
  });

  // Prism doesn't support callbacks yet
  test.skip('identify: only required params', async () => {
    const responsePromise = client.users.bulk.identify({ users: [{ id: 'user_1' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('identify: required and optional params', async () => {
    const response = await client.users.bulk.identify({
      users: [
        {
          id: 'user_1',
          avatar: 'avatar',
          channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_xxx'] } },
          created_at: '2019-12-27T18:11:19.117Z',
          email: 'jane@ingen.net',
          locale: 'locale',
          name: 'Jane Doe',
          phone_number: 'phone_number',
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
                sms: true,
              },
              workflows: {
                'dinosaurs-loose': {
                  channel_types: {
                    chat: true,
                    email: false,
                    http: true,
                    in_app_feed: true,
                    push: true,
                    sms: true,
                  },
                  conditions: [
                    { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
                  ],
                },
                'welcome-sequence': true,
              },
            },
          },
          timezone: 'America/New_York',
        },
      ],
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('setPreferences: only required params', async () => {
    const responsePromise = client.users.bulk.setPreferences({
      preferences: {},
      user_ids: ['user_1', 'user_2'],
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
  test.skip('setPreferences: required and optional params', async () => {
    const response = await client.users.bulk.setPreferences({
      preferences: {
        categories: {
          marketing: false,
          transactional: {
            channel_types: { chat: true, email: false, http: true, in_app_feed: true, push: true, sms: true },
            conditions: [
              { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
            ],
          },
        },
        channel_types: { chat: true, email: true, http: true, in_app_feed: true, push: true, sms: true },
        workflows: {
          'dinosaurs-loose': {
            channel_types: { chat: true, email: false, http: true, in_app_feed: true, push: true, sms: true },
            conditions: [
              { argument: 'frog_genome', operator: 'contains', variable: 'specimen.dna_sequence' },
            ],
          },
        },
      },
      user_ids: ['user_1', 'user_2'],
    });
  });
});
