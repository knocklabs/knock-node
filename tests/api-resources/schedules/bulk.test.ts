// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/node';

const client = new Knock({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.schedules.bulk.create({
      schedules: [{ workflow: 'comment-created' }, { workflow: 'comment-created' }],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.schedules.bulk.create({
      schedules: [
        {
          workflow: 'comment-created',
          actor: {
            id: 'user_1',
            avatar: 'avatar',
            channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_xxx'] } },
            created_at: '2019-12-27T18:11:19.117Z',
            email: 'email',
            locale: 'locale',
            name: 'name',
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
            timezone: 'timezone',
          },
          data: { key: 'bar' },
          ending_at: null,
          recipient: 'dnedry',
          repeats: [
            {
              frequency: 'daily',
              __typename: 'ScheduleRepeat',
              day_of_month: null,
              days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
              hours: null,
              interval: 1,
              minutes: null,
            },
          ],
          scheduled_at: null,
          tenant: 'acme_corp',
        },
        {
          workflow: 'comment-created',
          actor: {
            id: 'user_1',
            avatar: 'avatar',
            channel_data: { '97c5837d-c65c-4d54-aa39-080eeb81c69d': { tokens: ['push_token_xxx'] } },
            created_at: '2019-12-27T18:11:19.117Z',
            email: 'email',
            locale: 'locale',
            name: 'name',
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
            timezone: 'timezone',
          },
          data: { key: 'bar' },
          ending_at: null,
          recipient: 'esattler',
          repeats: [
            {
              frequency: 'daily',
              __typename: 'ScheduleRepeat',
              day_of_month: null,
              days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
              hours: null,
              interval: 1,
              minutes: null,
            },
          ],
          scheduled_at: null,
          tenant: 'acme_corp',
        },
      ],
    });
  });
});
