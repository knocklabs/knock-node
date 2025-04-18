// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as MessagesAPI from '../messages/messages';
import { MessagesEntriesCursor } from '../messages/messages';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
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
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  feeds: FeedsAPI.Feeds = new FeedsAPI.Feeds(this._client);
  guides: GuidesAPI.Guides = new GuidesAPI.Guides(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Create or update a user with the provided identification data.
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.put(path`/v1/users/${userID}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of users in the environment.
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsersEntriesCursor, User> {
    return this._client.getAPIList('/v1/users', EntriesCursor<User>, { query, ...options });
  }

  /**
   * Permanently delete a user and all associated data.
   */
  delete(userID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/users/${userID}`, options);
  }

  /**
   * Retrieve a specific user by their ID.
   */
  get(userID: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/v1/users/${userID}`, options);
  }

  /**
   * Retrieves the channel data for a specific user and channel ID.
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
   */
  getPreferences(
    userID: string,
    preferenceSetID: string,
    query: UserGetPreferencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.get(path`/v1/users/${userID}/preferences/${preferenceSetID}`, { query, ...options });
  }

  /**
   * Returns a paginated list of messages for a specific user. Allows filtering by
   * message status and provides various sorting options.
   */
  listMessages(
    userID: string,
    query: UserListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesEntriesCursor, MessagesAPI.Message> {
    return this._client.getAPIList(path`/v1/users/${userID}/messages`, EntriesCursor<MessagesAPI.Message>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a list of all preference sets for a specific user.
   */
  listPreferences(userID: string, options?: RequestOptions): APIPromise<UserListPreferencesResponse> {
    return this._client.get(path`/v1/users/${userID}/preferences`, options);
  }

  /**
   * Returns a paginated list of schedules for a specific user. Can be filtered by
   * workflow and tenant.
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
   * Retrieves a paginated list of subscriptions for a specific user. Allows
   * filtering by objects and includes optional preference data.
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
   */
  merge(userID: string, body: UserMergeParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post(path`/v1/users/${userID}/merge`, { body, ...options });
  }

  /**
   * Updates or creates channel data for a specific user and channel ID.
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
   * Updates a complete preference set for a user. This is a destructive operation
   * that will replace the existing preference set for the user.
   */
  setPreferences(
    userID: string,
    preferenceSetID: string,
    body: UserSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.put(path`/v1/users/${userID}/preferences/${preferenceSetID}`, { body, ...options });
  }

  /**
   * Deletes channel data for a specific user and channel ID.
   */
  unsetChannelData(userID: string, channelID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/users/${userID}/channel_data/${channelID}`, options);
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
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

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
   * The ID for the user that you set when identifying them in Knock.
   */
  id: string;

  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  [k: string]: unknown;
}

/**
 * A user who can receive notifications in Knock. They are always referenced by
 * your internal identifier.
 */
export interface User {
  /**
   * The ID for the user that you set when identifying them in Knock.
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
   * URL to the user's avatar image.
   */
  avatar?: string | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * The email address of the user.
   */
  email?: string | null;

  /**
   * Display name of the user.
   */
  name?: string | null;

  /**
   * Phone number of the user.
   */
  phone_number?: string | null;

  /**
   * Timezone of the user.
   */
  timezone?: string | null;

  [k: string]: unknown;
}

/**
 * An empty response.
 */
export type UserDeleteResponse = string;

/**
 * A list of preference sets for the user.
 */
export type UserListPreferencesResponse = Array<PreferencesAPI.PreferenceSet>;

/**
 * An empty response.
 */
export type UserUnsetChannelDataResponse = string;

export interface UserUpdateParams {
  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

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

export interface UserListMessagesParams extends EntriesCursorParams {
  /**
   * Limits the results to items with the corresponding channel id.
   */
  channel_id?: string;

  /**
   * One or more engagement statuses. Limits results to messages with the given
   * engagement status(es).
   */
  engagement_status?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * Limits the results to only the message ids given (max 50). Note: when using this
   * option, the results will be subject to any other filters applied to the query.
   */
  message_ids?: Array<string>;

  /**
   * Key of the source that triggered the message to limit results to.
   */
  source?: string;

  /**
   * One or more delivery statuses. Limits results to messages with the given
   * delivery status(es).
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * Limits the results to items with the corresponding tenant, or where the tenant
   * is empty.
   */
  tenant?: string;

  /**
   * Limits the results to only items that were generated with the given data.
   */
  trigger_data?: string;

  /**
   * Limits the results to only items related to any of the provided categories.
   */
  workflow_categories?: Array<string>;

  /**
   * Limits the results to messages for a specific recipient's workflow run.
   */
  workflow_recipient_run_id?: string;

  /**
   * Limits the results to messages triggered by the top-level workflow run ID.
   */
  workflow_run_id?: string;
}

export interface UserListSchedulesParams extends EntriesCursorParams {
  /**
   * The ID of the tenant to list schedules for.
   */
  tenant?: string;

  /**
   * The ID of the workflow to list schedules for.
   */
  workflow?: string;
}

export interface UserListSubscriptionsParams extends EntriesCursorParams {
  /**
   * Associated resources to include in the response.
   */
  include?: Array<'preferences'>;

  /**
   * Only return subscriptions for the given recipients.
   */
  objects?: Array<string | UserListSubscriptionsParams.ObjectReference>;
}

export namespace UserListSubscriptionsParams {
  /**
   * A reference to a recipient object.
   */
  export interface ObjectReference {
    /**
     * An identifier for the recipient object.
     */
    id?: string;

    /**
     * The collection the recipient object belongs to.
     */
    collection?: string;
  }
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
    | ChannelDataAPI.PushChannelData
    | ChannelDataAPI.OneSignalChannelData
    | ChannelDataAPI.SlackChannelData
    | ChannelDataAPI.MsTeamsChannelData
    | ChannelDataAPI.DiscordChannelData;
}

export interface UserSetPreferencesParams {
  /**
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: Record<
    string,
    boolean | UserSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences.
   */
  channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

  /**
   * An object where the key is the workflow key and the values are the preference
   * settings for that workflow.
   */
  workflows?: Record<
    string,
    boolean | UserSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject
  > | null;
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
    type UserDeleteResponse as UserDeleteResponse,
    type UserListPreferencesResponse as UserListPreferencesResponse,
    type UserUnsetChannelDataResponse as UserUnsetChannelDataResponse,
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

export { type MessagesEntriesCursor, type SchedulesEntriesCursor, type SubscriptionsEntriesCursor };
