// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as MessagesAPI from '../messages/messages';
import { MessagesItemsCursor } from '../messages/messages';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as RecipientsAPI from '../recipients/recipients';
import * as SubscriptionsAPI from '../recipients/subscriptions';
import { SubscriptionsEntriesCursor } from '../recipients/subscriptions';
import * as SchedulesAPI from '../schedules/schedules';
import { SchedulesEntriesCursor } from '../schedules/schedules';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams, BulkIdentifyParams, BulkSetPreferencesParams } from './bulk';
import * as FeedsAPI from './feeds';
import {
  FeedGetSettingsResponse,
  FeedListItemsParams,
  FeedListItemsResponse,
  FeedListItemsResponsesEntriesCursor,
  Feeds,
} from './feeds';
import * as GuidesAPI from './guides';
import {
  GuideGetChannelParams,
  GuideGetChannelResponse,
  GuideMarkMessageAsArchivedParams,
  GuideMarkMessageAsArchivedResponse,
  GuideMarkMessageAsInteractedParams,
  GuideMarkMessageAsInteractedResponse,
  GuideMarkMessageAsSeenParams,
  GuideMarkMessageAsSeenResponse,
  Guides,
} from './guides';
import { APIPromise } from '../../core/api-promise';
import {
  EntriesCursor,
  type EntriesCursorParams,
  ItemsCursor,
  type ItemsCursorParams,
  PagePromise,
} from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  feeds: FeedsAPI.Feeds = new FeedsAPI.Feeds(this._client);
  guides: GuidesAPI.Guides = new GuidesAPI.Guides(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Create or update a user with the provided identification data. When you identify
   * an existing user, the system merges the properties you specific with what is
   * currently set on the user, updating only the fields included in your requests.
   *
   * @example
   * ```ts
   * const user = await client.users.update('user_id', {
   *   channel_data: {
   *     '97c5837d-c65c-4d54-aa39-080eeb81c69d': {
   *       tokens: ['push_token_123'],
   *     },
   *   },
   *   email: 'ian.malcolm@chaos.theory',
   *   name: 'Dr. Ian Malcolm',
   *   preferences: {
   *     default: {
   *       channel_types: { email: true },
   *       workflows: {
   *         'dinosaurs-loose': {
   *           channel_types: { email: true },
   *         },
   *       },
   *     },
   *   },
   *   timezone: 'America/New_York',
   * });
   * ```
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.put(path`/v1/users/${userID}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of users in the environment. Defaults to 50 users per
   * page.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const user of client.users.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsersEntriesCursor, User> {
    return this._client.getAPIList('/v1/users', EntriesCursor<User>, { query, ...options });
  }

  /**
   * Permanently delete a user and all associated data.
   *
   * @example
   * ```ts
   * await client.users.delete('user_id');
   * ```
   */
  delete(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/users/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific user by their ID.
   *
   * @example
   * ```ts
   * const user = await client.users.get('user_id');
   * ```
   */
  get(userID: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/v1/users/${userID}`, options);
  }

  /**
   * Retrieves the channel data for a specific user and channel ID.
   *
   * @example
   * ```ts
   * const channelData = await client.users.getChannelData(
   *   'user_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getChannelData(
    userID: string,
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<ChannelDataAPI.ChannelData> {
    return this._client.get(path`/v1/users/${userID}/channel_data/${channelID}`, options);
  }

  /**
   * Retrieves a specific preference set for a user identified by the preference set
   * ID.
   *
   * @example
   * ```ts
   * const preferenceSet = await client.users.getPreferences(
   *   'user_id',
   *   'default',
   * );
   * ```
   */
  getPreferences(
    userID: string,
    id: string,
    query: UserGetPreferencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.get(path`/v1/users/${userID}/preferences/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of messages for a specific user. Messages are sorted
   * with the most recent ones appearing first. Messages outside the account's
   * retention window will not be included in the results.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const message of client.users.listMessages(
   *   'user-123',
   * )) {
   *   // ...
   * }
   * ```
   */
  listMessages(
    userID: string,
    query: UserListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesItemsCursor, MessagesAPI.Message> {
    return this._client.getAPIList(path`/v1/users/${userID}/messages`, ItemsCursor<MessagesAPI.Message>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a list of all preference sets for a specific user.
   *
   * @example
   * ```ts
   * const preferenceSets = await client.users.listPreferences(
   *   'user_id',
   * );
   * ```
   */
  listPreferences(userID: string, options?: RequestOptions): APIPromise<UserListPreferencesResponse> {
    return this._client.get(path`/v1/users/${userID}/preferences`, options);
  }

  /**
   * Returns a paginated list of schedules for a specific user, in descending order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const schedule of client.users.listSchedules(
   *   'user_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listSchedules(
    userID: string,
    query: UserListSchedulesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SchedulesEntriesCursor, SchedulesAPI.Schedule> {
    return this._client.getAPIList(
      path`/v1/users/${userID}/schedules`,
      EntriesCursor<SchedulesAPI.Schedule>,
      { query, ...options },
    );
  }

  /**
   * Retrieves a paginated list of subscriptions for a specific user, in descending
   * order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const subscription of client.users.listSubscriptions(
   *   'user_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listSubscriptions(
    userID: string,
    query: UserListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SubscriptionsEntriesCursor, SubscriptionsAPI.Subscription> {
    return this._client.getAPIList(
      path`/v1/users/${userID}/subscriptions`,
      EntriesCursor<SubscriptionsAPI.Subscription>,
      { query, ...options },
    );
  }

  /**
   * Merge two users together, where the user specified with the `from_user_id` param
   * will be merged into the user specified by `user_id`.
   *
   * @example
   * ```ts
   * const user = await client.users.merge('user_id', {
   *   from_user_id: 'user_1',
   * });
   * ```
   */
  merge(userID: string, body: UserMergeParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post(path`/v1/users/${userID}/merge`, { body, ...options });
  }

  /**
   * Updates or creates channel data for a specific user and channel ID. If no user
   * exists in the current environment for the given `user_id`, Knock will create the
   * user entry as part of this request.
   *
   * @example
   * ```ts
   * const channelData = await client.users.setChannelData(
   *   'user_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { data: { tokens: ['push_token_1'] } },
   * );
   * ```
   */
  setChannelData(
    userID: string,
    channelID: string,
    body: UserSetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<ChannelDataAPI.ChannelData> {
    return this._client.put(path`/v1/users/${userID}/channel_data/${channelID}`, { body, ...options });
  }

  /**
   * Updates a complete preference set for a user. By default, this is a destructive
   * operation and will replace any existing preferences with the preferences given.
   * Use '**persistence_strategy**': 'merge' to merge with existing preferences
   * instead.
   *
   * @example
   * ```ts
   * const preferenceSet = await client.users.setPreferences(
   *   'user_id',
   *   'default',
   *   {
   *     __persistence_strategy__: 'merge',
   *     categories: {
   *       marketing: false,
   *       transactional: { channel_types: { email: false } },
   *     },
   *     channel_types: { email: true },
   *     channels: {
   *       '2f641633-95d3-4555-9222-9f1eb7888a80': {
   *         conditions: [
   *           {
   *             argument: 'US',
   *             operator: 'equal_to',
   *             variable: 'recipient.country_code',
   *           },
   *         ],
   *       },
   *       'aef6e715-df82-4ab6-b61e-b743e249f7b6': true,
   *     },
   *     commercial_subscribed: true,
   *     workflows: {
   *       'dinosaurs-loose': {
   *         channel_types: { email: false },
   *       },
   *     },
   *   },
   * );
   * ```
   */
  setPreferences(
    userID: string,
    id: string,
    body: UserSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.put(path`/v1/users/${userID}/preferences/${id}`, { body, ...options });
  }

  /**
   * Deletes channel data for a specific user and channel ID.
   *
   * @example
   * ```ts
   * await client.users.unsetChannelData(
   *   'user_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  unsetChannelData(userID: string, channelID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/users/${userID}/channel_data/${channelID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type UsersEntriesCursor = EntriesCursor<User>;

/**
 * A set of parameters to identify a user with. Does not include the user ID, as
 * that's specified elsewhere in the request. You can supply any additional
 * properties you'd like to upsert for the user.
 */
export interface IdentifyUserRequest {
  /**
   * A URL for the avatar of the user.
   */
  avatar?: string | null;

  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * The primary email address for the user.
   */
  email?: string | null;

  /**
   * The locale of the user. Used for [message localization](/concepts/translations).
   */
  locale?: string | null;

  /**
   * Display name of the user.
   */
  name?: string | null;

  /**
   * The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the
   * user (required for SMS channels).
   */
  phone_number?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set id.
   * Preferences that are set inline will be merged into any existing preferences
   * rather than replacing them.
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  /**
   * The timezone of the user. Must be a
   * valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   * Used
   * for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).
   */
  timezone?: string | null;

  [k: string]: unknown;
}

/**
 * A set of parameters to inline-identify a user with. Inline identifying the user
 * will ensure that the user is available before the request is executed in Knock.
 * It will perform an upsert for the user you're supplying, replacing any
 * properties specified.
 */
export interface InlineIdentifyUserRequest {
  /**
   * The unique identifier of the user.
   */
  id: string;

  /**
   * A URL for the avatar of the user.
   */
  avatar?: string | null;

  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * The primary email address for the user.
   */
  email?: string | null;

  /**
   * The locale of the user. Used for [message localization](/concepts/translations).
   */
  locale?: string | null;

  /**
   * Display name of the user.
   */
  name?: string | null;

  /**
   * The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the
   * user (required for SMS channels).
   */
  phone_number?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set id.
   * Preferences that are set inline will be merged into any existing preferences
   * rather than replacing them.
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  /**
   * The timezone of the user. Must be a
   * valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   * Used
   * for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).
   */
  timezone?: string | null;

  [k: string]: unknown;
}

/**
 * A [User](/concepts/users) represents an individual in your system who can
 * receive notifications through Knock. Users are the most common recipients of
 * notifications and are always referenced by your internal identifier.
 */
export interface User {
  /**
   * The unique identifier of the user.
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * A URL for the avatar of the user.
   */
  avatar?: string | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * The primary email address for the user.
   */
  email?: string | null;

  /**
   * Display name of the user.
   */
  name?: string | null;

  /**
   * The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the
   * user (required for SMS channels).
   */
  phone_number?: string | null;

  /**
   * The timezone of the user. Must be a
   * valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   * Used
   * for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).
   */
  timezone?: string | null;

  [k: string]: unknown;
}

/**
 * A list of preference sets for the user.
 */
export type UserListPreferencesResponse = Array<PreferencesAPI.PreferenceSet>;

export interface UserUpdateParams {
  /**
   * A URL for the avatar of the user.
   */
  avatar?: string | null;

  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * The primary email address for the user.
   */
  email?: string | null;

  /**
   * The locale of the user. Used for [message localization](/concepts/translations).
   */
  locale?: string | null;

  /**
   * Display name of the user.
   */
  name?: string | null;

  /**
   * The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the
   * user (required for SMS channels).
   */
  phone_number?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set id.
   * Preferences that are set inline will be merged into any existing preferences
   * rather than replacing them.
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  /**
   * The timezone of the user. Must be a
   * valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   * Used
   * for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).
   */
  timezone?: string | null;

  [k: string]: unknown;
}

export interface UserListParams extends EntriesCursorParams {
  /**
   * Associated resources to include in the response.
   */
  include?: Array<'preferences'>;
}

export interface UserGetPreferencesParams {
  /**
   * The unique identifier for the tenant.
   */
  tenant?: string;
}

export interface UserListMessagesParams extends ItemsCursorParams {
  /**
   * Limits the results to items with the corresponding channel ID.
   */
  channel_id?: string;

  /**
   * Limits the results to messages with the given engagement status.
   */
  engagement_status?: Array<
    'seen' | 'unseen' | 'read' | 'unread' | 'archived' | 'unarchived' | 'link_clicked' | 'interacted'
  >;

  inserted_at?: UserListMessagesParams.InsertedAt;

  /**
   * Limits the results to only the message IDs given (max 50). Note: when using this
   * option, the results will be subject to any other filters applied to the query.
   */
  message_ids?: Array<string>;

  /**
   * Limits the results to messages triggered by the given workflow key.
   */
  source?: string;

  /**
   * Limits the results to messages with the given delivery status.
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * Limits the results to items with the corresponding tenant.
   */
  tenant?: string;

  /**
   * Limits the results to only messages that were generated with the given data. See
   * [trigger data filtering](/api-reference/overview/trigger-data-filtering) for
   * more information.
   */
  trigger_data?: string;

  /**
   * Limits the results to messages related to any of the provided categories.
   */
  workflow_categories?: Array<string>;

  /**
   * Limits the results to messages for a specific recipient's workflow run.
   */
  workflow_recipient_run_id?: string;

  /**
   * Limits the results to messages associated with the top-level workflow run ID
   * returned by the workflow trigger request.
   */
  workflow_run_id?: string;
}

export namespace UserListMessagesParams {
  export interface InsertedAt {
    /**
     * Limits the results to messages inserted after the given date.
     */
    gt?: string;

    /**
     * Limits the results to messages inserted after or on the given date.
     */
    gte?: string;

    /**
     * Limits the results to messages inserted before the given date.
     */
    lt?: string;

    /**
     * Limits the results to messages inserted before or on the given date.
     */
    lte?: string;
  }
}

export interface UserListSchedulesParams extends EntriesCursorParams {
  /**
   * The tenant ID to filter schedules for.
   */
  tenant?: string;

  /**
   * The workflow key to filter schedules for.
   */
  workflow?: string;
}

export interface UserListSubscriptionsParams extends EntriesCursorParams {
  /**
   * Associated resources to include in the response.
   */
  include?: Array<'preferences'>;

  /**
   * Only returns subscriptions for the specified object references.
   */
  objects?: Array<RecipientsAPI.RecipientReference>;
}

export interface UserMergeParams {
  /**
   * The user ID to merge from.
   */
  from_user_id: string;
}

export interface UserSetChannelDataParams {
  /**
   * Channel data for a given channel type.
   */
  data:
    | ChannelDataAPI.PushChannelDataTokensOnly
    | ChannelDataAPI.PushChannelDataDevicesOnly
    | ChannelDataAPI.AwsSnsPushChannelDataTargetArnsOnly
    | ChannelDataAPI.AwsSnsPushChannelDataDevicesOnly
    | ChannelDataAPI.OneSignalChannelDataPlayerIDsOnly
    | ChannelDataAPI.SlackChannelData
    | ChannelDataAPI.MsTeamsChannelData
    | ChannelDataAPI.DiscordChannelData;
}

export interface UserSetPreferencesParams {
  /**
   * Controls how the preference set is persisted. 'replace' will completely replace
   * the preference set, 'merge' will merge with existing preferences.
   */
  __persistence_strategy__?: 'merge' | 'replace';

  /**
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: {
    [key: string]: boolean | UserSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject;
  } | null;

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
  workflows?: {
    [key: string]: boolean | UserSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject;
  } | null;
}

export namespace UserSetPreferencesParams {
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

Users.Feeds = Feeds;
Users.Guides = Guides;
Users.Bulk = Bulk;

export declare namespace Users {
  export {
    type IdentifyUserRequest as IdentifyUserRequest,
    type InlineIdentifyUserRequest as InlineIdentifyUserRequest,
    type User as User,
    type UserListPreferencesResponse as UserListPreferencesResponse,
    type UsersEntriesCursor as UsersEntriesCursor,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetPreferencesParams as UserGetPreferencesParams,
    type UserListMessagesParams as UserListMessagesParams,
    type UserListSchedulesParams as UserListSchedulesParams,
    type UserListSubscriptionsParams as UserListSubscriptionsParams,
    type UserMergeParams as UserMergeParams,
    type UserSetChannelDataParams as UserSetChannelDataParams,
    type UserSetPreferencesParams as UserSetPreferencesParams,
  };

  export {
    Feeds as Feeds,
    type FeedGetSettingsResponse as FeedGetSettingsResponse,
    type FeedListItemsResponse as FeedListItemsResponse,
    type FeedListItemsResponsesEntriesCursor as FeedListItemsResponsesEntriesCursor,
    type FeedListItemsParams as FeedListItemsParams,
  };

  export {
    Guides as Guides,
    type GuideGetChannelResponse as GuideGetChannelResponse,
    type GuideMarkMessageAsArchivedResponse as GuideMarkMessageAsArchivedResponse,
    type GuideMarkMessageAsInteractedResponse as GuideMarkMessageAsInteractedResponse,
    type GuideMarkMessageAsSeenResponse as GuideMarkMessageAsSeenResponse,
    type GuideGetChannelParams as GuideGetChannelParams,
    type GuideMarkMessageAsArchivedParams as GuideMarkMessageAsArchivedParams,
    type GuideMarkMessageAsInteractedParams as GuideMarkMessageAsInteractedParams,
    type GuideMarkMessageAsSeenParams as GuideMarkMessageAsSeenParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}

export { type MessagesItemsCursor, type SchedulesEntriesCursor, type SubscriptionsEntriesCursor };
