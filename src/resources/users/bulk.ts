// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as PreferencesAPI from '../recipients/preferences';
import * as UsersAPI from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Permanently deletes up to 1,000 users at a time.
   *
   * @example
   * ```ts
   * const bulkOperation = await client.users.bulk.delete({
   *   user_ids: ['user_1', 'user_2'],
   * });
   * ```
   */
  delete(body: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/delete', { body, ...options });
  }

  /**
   * Identifies multiple users in a single operation. Allows creating or updating up
   * to 1,000 users in a single batch with various properties, preferences, and
   * channel data.
   *
   * @example
   * ```ts
   * const bulkOperation = await client.users.bulk.identify({
   *   users: [
   *     {
   *       email: 'jane@ingen.net',
   *       id: 'user_1',
   *       name: 'Jane Doe',
   *       timezone: 'America/New_York',
   *     },
   *   ],
   * });
   * ```
   */
  identify(body: BulkIdentifyParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/identify', { body, ...options });
  }

  /**
   * Bulk sets the preferences for up to 1,000 users at a time. The preference
   * set `:id` can be either `default` or a `tenant.id`. Learn more
   * about [per-tenant preferences](/preferences/tenant-preferences). Note that this
   * is a destructive operation and will replace any existing users' preferences with
   * the preferences sent.
   *
   * @example
   * ```ts
   * const bulkOperation =
   *   await client.users.bulk.setPreferences({
   *     preferences: {
   *       __persistence_strategy__: 'merge',
   *       categories: {
   *         marketing: false,
   *         transactional: { channel_types: { email: false } },
   *       },
   *       channel_types: { email: true },
   *       channels: {
   *         '2f641633-95d3-4555-9222-9f1eb7888a80': {
   *           conditions: [
   *             {
   *               argument: 'US',
   *               operator: 'equal_to',
   *               variable: 'recipient.country_code',
   *             },
   *           ],
   *         },
   *         'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
   *       },
   *       commercial_subscribed: true,
   *       workflows: {
   *         'dinosaurs-loose': {
   *           channel_types: { email: false },
   *         },
   *       },
   *     },
   *     user_ids: ['user_1', 'user_2'],
   *   });
   * ```
   */
  setPreferences(
    body: BulkSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/preferences', { body, ...options });
  }
}

export interface BulkDeleteParams {
  /**
   * A list of user IDs.
   */
  user_ids: Array<string>;
}

export interface BulkIdentifyParams {
  /**
   * A list of users.
   */
  users: Array<UsersAPI.InlineIdentifyUserRequest>;
}

export interface BulkSetPreferencesParams {
  /**
   * A request to set a preference set for a recipient.
   */
  preferences: PreferencesAPI.PreferenceSetRequest;

  /**
   * A list of user IDs.
   */
  user_ids: Array<string>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}
