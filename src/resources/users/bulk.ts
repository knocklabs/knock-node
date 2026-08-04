// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as Shared from '../shared';
import * as PreferencesAPI from '../recipients/preferences';
import * as UsersAPI from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * A bulk operation is a set of changes applied across zero or more records triggered via a call to the Knock API and performed asynchronously.
 */
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
   *       id: 'default',
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
   * A preference set to apply in a bulk operation. Always replaces existing
   * preferences for the specified set.
   */
  preferences: BulkSetPreferencesParams.Preferences;

  /**
   * A list of user IDs.
   */
  user_ids: Array<string>;
}

export namespace BulkSetPreferencesParams {
  /**
   * A preference set to apply in a bulk operation. Always replaces existing
   * preferences for the specified set.
   */
  export interface Preferences {
    /**
     * Identifier for the preference set to update. Can be `default` or a tenant ID.
     */
    id?: string;

    /**
     * An object where the key is the category and the values are the preference
     * settings for that category.
     */
    categories?: { [key: string]: boolean | Preferences.PreferenceSetWorkflowCategorySettingObject } | null;

    /**
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * Channel preferences.
     */
    channels?: { [key: string]: boolean | PreferencesAPI.PreferenceSetChannelSetting } | null;

    /**
     * Whether the recipient is subscribed to commercial communications. When false,
     * the recipient will not receive commercial workflow notifications.
     */
    commercial_subscribed?: boolean | null;

    /**
     * An object where the key is the workflow key and the values are the preference
     * settings for that workflow.
     */
    workflows?: { [key: string]: boolean | Preferences.PreferenceSetWorkflowCategorySettingObject } | null;
  }

  export namespace Preferences {
    /**
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences.
       */
      channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

      /**
       * Channel preferences.
       */
      channels?: { [key: string]: boolean | PreferencesAPI.PreferenceSetChannelSetting } | null;

      /**
       * A list of conditions to apply to a channel type.
       */
      conditions?: Array<Shared.Condition> | null;
    }

    /**
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences.
       */
      channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

      /**
       * Channel preferences.
       */
      channels?: { [key: string]: boolean | PreferencesAPI.PreferenceSetChannelSetting } | null;

      /**
       * A list of conditions to apply to a channel type.
       */
      conditions?: Array<Shared.Condition> | null;
    }
  }
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}
