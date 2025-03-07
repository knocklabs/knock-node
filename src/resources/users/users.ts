// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as BulkAPI from './bulk';
import {
  Bulk,
  BulkDeleteParams,
  BulkDeleteResponse,
  BulkIdentifyParams,
  BulkIdentifyResponse,
  BulkSetPreferencesParams,
  BulkSetPreferencesResponse,
} from './bulk';
import * as FeedsAPI from './feeds';
import {
  FeedGetSettingsParams,
  FeedGetSettingsResponse,
  FeedListItemsParams,
  FeedListItemsResponse,
  FeedListItemsResponsesEntriesCursor,
  Feeds,
} from './feeds';
import { APIPromise } from '../../api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  feeds: FeedsAPI.Feeds = new FeedsAPI.Feeds(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Identify user
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.put(path`/v1/users/${userID}`, { body, ...options });
  }

  /**
   * List users
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsersEntriesCursor, User> {
    return this._client.getAPIList('/v1/users', EntriesCursor<User>, { query, ...options });
  }

  /**
   * Delete user
   */
  delete(userID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/users/${userID}`, options);
  }

  /**
   * Get user
   */
  get(userID: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/v1/users/${userID}`, options);
  }

  /**
   * Get channel data
   */
  getChannelData(
    channelID: string,
    params: UserGetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<UserGetChannelDataResponse> {
    const { user_id } = params;
    return this._client.get(path`/v1/users/${user_id}/channel_data/${channelID}`, options);
  }

  /**
   * Get preference set
   */
  getPreferences(
    id: string,
    params: UserGetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<UserGetPreferencesResponse> {
    const { user_id, ...query } = params;
    return this._client.get(path`/v1/users/${user_id}/preferences/${id}`, { query, ...options });
  }

  /**
   * List messages
   */
  listMessages(
    userID: string,
    query: UserListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UserListMessagesResponsesEntriesCursor, UserListMessagesResponse> {
    return this._client.getAPIList(
      path`/v1/users/${userID}/messages`,
      EntriesCursor<UserListMessagesResponse>,
      { query, ...options },
    );
  }

  /**
   * List preference sets
   */
  listPreferences(userID: string, options?: RequestOptions): APIPromise<UserListPreferencesResponse> {
    return this._client.get(path`/v1/users/${userID}/preferences`, options);
  }

  /**
   * List schedules
   */
  listSchedules(
    userID: string,
    query: UserListSchedulesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UserListSchedulesResponsesEntriesCursor, UserListSchedulesResponse> {
    return this._client.getAPIList(
      path`/v1/users/${userID}/schedules`,
      EntriesCursor<UserListSchedulesResponse>,
      { query, ...options },
    );
  }

  /**
   * List subscriptions
   */
  listSubscriptions(
    userID: string,
    query: UserListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UserListSubscriptionsResponsesEntriesCursor, UserListSubscriptionsResponse> {
    return this._client.getAPIList(
      path`/v1/users/${userID}/subscriptions`,
      EntriesCursor<UserListSubscriptionsResponse>,
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
   * Set channel data
   */
  setChannelData(
    channelID: string,
    params: UserSetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<UserSetChannelDataResponse> {
    const { user_id, ...body } = params;
    return this._client.put(path`/v1/users/${user_id}/channel_data/${channelID}`, { body, ...options });
  }

  /**
   * Updates a complete preference set for a user. This is a destructive operation
   * that will replace the existing preference set for the user.
   */
  setPreferences(
    id: string,
    params: UserSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<UserSetPreferencesResponse> {
    const { user_id, ...body } = params;
    return this._client.put(path`/v1/users/${user_id}/preferences/${id}`, { body, ...options });
  }

  /**
   * Unset channel data
   */
  unsetChannelData(
    channelID: string,
    params: UserUnsetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { user_id } = params;
    return this._client.delete(path`/v1/users/${user_id}/channel_data/${channelID}`, options);
  }
}

export type UsersEntriesCursor = EntriesCursor<User>;

export type UserListMessagesResponsesEntriesCursor = EntriesCursor<UserListMessagesResponse>;

export type UserListSchedulesResponsesEntriesCursor = EntriesCursor<UserListSchedulesResponse>;

export type UserListSubscriptionsResponsesEntriesCursor = EntriesCursor<UserListSubscriptionsResponse>;

/**
 * A user object
 */
export interface User {
  id: string;

  __typename: string;

  updated_at: string;

  avatar?: string | null;

  created_at?: string | null;

  email?: string | null;

  name?: string | null;

  phone_number?: string | null;

  timezone?: string | null;
  [k: string]: unknown;
}

/**
 * An empty response
 */
export type UserDeleteResponse = string;

/**
 * Channel data for various channel types
 */
export interface UserGetChannelDataResponse {
  __typename: string;

  channel_id: string;

  /**
   * Channel data for push providers
   */
  data:
    | Shared.PushChannelData
    | Shared.SlackChannelData
    | Shared.MsTeamsChannelData
    | Shared.DiscordChannelData
    | Shared.OneSignalChannelData;
}

/**
 * A preference set object.
 */
export interface UserGetPreferencesResponse {
  id: string;

  __typename: string;

  /**
   * A map of categories and their settings
   */
  categories?: Record<
    string,
    boolean | UserGetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences
   */
  channel_types?: Shared.PreferenceSetChannelTypes | null;

  /**
   * A map of workflows and their settings
   */
  workflows?: Record<
    string,
    boolean | UserGetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;
}

export namespace UserGetPreferencesResponse {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }

  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }
}

/**
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface UserListMessagesResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | UserListMessagesResponse.ObjectReference>;

  /**
   * Timestamp when message was archived
   */
  archived_at?: string | null;

  /**
   * Channel ID associated with the message
   */
  channel_id?: string;

  /**
   * Timestamp when message was clicked
   */
  clicked_at?: string | null;

  /**
   * Additional message data
   */
  data?: Record<string, unknown> | null;

  /**
   * List of engagement statuses
   */
  engagement_statuses?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * Timestamp of creation
   */
  inserted_at?: string;

  /**
   * Timestamp when message was interacted with
   */
  interacted_at?: string | null;

  /**
   * Timestamp when a link in the message was clicked
   */
  link_clicked_at?: string | null;

  /**
   * Message metadata
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Timestamp when message was read
   */
  read_at?: string | null;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (id, collection).
   */
  recipient?: string | UserListMessagesResponse.ObjectReference;

  /**
   * Timestamp when message was scheduled for
   */
  scheduled_at?: string | null;

  /**
   * Timestamp when message was seen
   */
  seen_at?: string | null;

  /**
   * Source information
   */
  source?: UserListMessagesResponse.Source;

  /**
   * Message delivery status
   */
  status?: 'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced';

  /**
   * Tenant ID that the message belongs to
   */
  tenant?: string | null;

  /**
   * Timestamp of last update
   */
  updated_at?: string;

  /**
   * @deprecated Workflow key used to create the message
   */
  workflow?: string | null;
}

export namespace UserListMessagesResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }

  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }

  /**
   * Source information
   */
  export interface Source {
    __typename: string;

    /**
     * The workflow categories
     */
    categories: Array<string>;

    /**
     * The workflow key
     */
    key: string;

    /**
     * The source version ID
     */
    version_id: string;
  }
}

/**
 * A list of preference sets for the user
 */
export type UserListPreferencesResponse = Array<UserListPreferencesResponse.UserListPreferencesResponseItem>;

export namespace UserListPreferencesResponse {
  /**
   * A preference set object.
   */
  export interface UserListPreferencesResponseItem {
    id: string;

    __typename: string;

    /**
     * A map of categories and their settings
     */
    categories?: Record<
      string,
      boolean | UserListPreferencesResponseItem.PreferenceSetWorkflowCategorySettingObject
    > | null;

    /**
     * Channel type preferences
     */
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    /**
     * A map of workflows and their settings
     */
    workflows?: Record<
      string,
      boolean | UserListPreferencesResponseItem.PreferenceSetWorkflowCategorySettingObject
    > | null;
  }

  export namespace UserListPreferencesResponseItem {
    /**
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      channel_types?: Shared.PreferenceSetChannelTypes | null;

      conditions?: Array<Shared.Condition> | null;
    }

    /**
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      channel_types?: Shared.PreferenceSetChannelTypes | null;

      conditions?: Array<Shared.Condition> | null;
    }
  }
}

/**
 * A schedule that represents a recurring workflow execution
 */
export interface UserListSchedulesResponse {
  id: string;

  inserted_at: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: User | Shared.Object;

  repeats: Array<Shared.ScheduleRepeatRule>;

  updated_at: string;

  workflow: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: User | Shared.Object | null;

  data?: Record<string, unknown> | null;

  last_occurrence_at?: string | null;

  next_occurrence_at?: string | null;

  tenant?: string | null;
}

/**
 * A subscription object
 */
export interface UserListSubscriptionsResponse {
  __typename: string;

  inserted_at: string;

  /**
   * A custom-object entity which belongs to a collection.
   */
  object: Shared.Object;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: User | Shared.Object;

  updated_at: string;

  /**
   * The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
}

/**
 * Channel data for various channel types
 */
export interface UserSetChannelDataResponse {
  __typename: string;

  channel_id: string;

  /**
   * Channel data for push providers
   */
  data:
    | Shared.PushChannelData
    | Shared.SlackChannelData
    | Shared.MsTeamsChannelData
    | Shared.DiscordChannelData
    | Shared.OneSignalChannelData;
}

/**
 * A preference set object.
 */
export interface UserSetPreferencesResponse {
  id: string;

  __typename: string;

  /**
   * A map of categories and their settings
   */
  categories?: Record<
    string,
    boolean | UserSetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences
   */
  channel_types?: Shared.PreferenceSetChannelTypes | null;

  /**
   * A map of workflows and their settings
   */
  workflows?: Record<
    string,
    boolean | UserSetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;
}

export namespace UserSetPreferencesResponse {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }

  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }
}

/**
 * An empty response
 */
export type UserUnsetChannelDataResponse = string;

export interface UserUpdateParams {
  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: Shared.InlineChannelDataRequest | null;

  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: Shared.InlinePreferenceSetRequest | null;
}

export interface UserListParams extends EntriesCursorParams {}

export interface UserGetChannelDataParams {
  /**
   * The user ID
   */
  user_id: string;
}

export interface UserGetPreferencesParams {
  /**
   * Path param: User ID
   */
  user_id: string;

  /**
   * Query param: Tenant ID
   */
  tenant?: string;
}

export interface UserListMessagesParams extends EntriesCursorParams {
  /**
   * The channel ID
   */
  channel_id?: string;

  /**
   * The engagement status of the message
   */
  engagement_status?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * The message IDs to filter messages by
   */
  message_ids?: Array<string>;

  /**
   * The source of the message (workflow key)
   */
  source?: string;

  /**
   * The status of the message
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * The tenant ID
   */
  tenant?: string;

  /**
   * The trigger data to filter messages by. Must be a valid JSON object.
   */
  trigger_data?: string;

  /**
   * The workflow categories to filter messages by
   */
  workflow_categories?: Array<string>;

  /**
   * The workflow recipient run ID to filter messages by
   */
  workflow_recipient_run_id?: string;

  /**
   * The workflow run ID to filter messages by
   */
  workflow_run_id?: string;
}

export interface UserListSchedulesParams extends EntriesCursorParams {
  /**
   * The ID of the tenant to list schedules for
   */
  tenant?: string;

  /**
   * The ID of the workflow to list schedules for
   */
  workflow?: string;
}

export interface UserListSubscriptionsParams extends EntriesCursorParams {}

export interface UserMergeParams {
  /**
   * The user ID to merge from
   */
  from_user_id: string;
}

export interface UserSetChannelDataParams {
  /**
   * Path param: The user ID
   */
  user_id: string;

  /**
   * Body param: Channel data for push providers
   */
  data:
    | Shared.PushChannelData
    | Shared.OneSignalChannelData
    | Shared.SlackChannelData
    | Shared.MsTeamsChannelData
    | Shared.DiscordChannelData;
}

export interface UserSetPreferencesParams {
  /**
   * Path param: User ID
   */
  user_id: string;

  /**
   * Body param: A setting for a preference set, where the key in the object is the
   * category, and the values are the preference settings for that category.
   */
  categories?: Record<
    string,
    boolean | UserSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Body param: Channel type preferences
   */
  channel_types?: Shared.PreferenceSetChannelTypes | null;

  /**
   * Body param: A setting for a preference set, where the key in the object is the
   * workflow key, and the values are the preference settings for that workflow.
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
     * Channel type preferences
     */
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }

  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }
}

export interface UserUnsetChannelDataParams {
  /**
   * The user ID
   */
  user_id: string;
}

Users.Feeds = Feeds;
Users.Bulk = Bulk;

export declare namespace Users {
  export {
    type User as User,
    type UserDeleteResponse as UserDeleteResponse,
    type UserGetChannelDataResponse as UserGetChannelDataResponse,
    type UserGetPreferencesResponse as UserGetPreferencesResponse,
    type UserListMessagesResponse as UserListMessagesResponse,
    type UserListPreferencesResponse as UserListPreferencesResponse,
    type UserListSchedulesResponse as UserListSchedulesResponse,
    type UserListSubscriptionsResponse as UserListSubscriptionsResponse,
    type UserSetChannelDataResponse as UserSetChannelDataResponse,
    type UserSetPreferencesResponse as UserSetPreferencesResponse,
    type UserUnsetChannelDataResponse as UserUnsetChannelDataResponse,
    type UsersEntriesCursor as UsersEntriesCursor,
    type UserListMessagesResponsesEntriesCursor as UserListMessagesResponsesEntriesCursor,
    type UserListSchedulesResponsesEntriesCursor as UserListSchedulesResponsesEntriesCursor,
    type UserListSubscriptionsResponsesEntriesCursor as UserListSubscriptionsResponsesEntriesCursor,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetChannelDataParams as UserGetChannelDataParams,
    type UserGetPreferencesParams as UserGetPreferencesParams,
    type UserListMessagesParams as UserListMessagesParams,
    type UserListSchedulesParams as UserListSchedulesParams,
    type UserListSubscriptionsParams as UserListSubscriptionsParams,
    type UserMergeParams as UserMergeParams,
    type UserSetChannelDataParams as UserSetChannelDataParams,
    type UserSetPreferencesParams as UserSetPreferencesParams,
    type UserUnsetChannelDataParams as UserUnsetChannelDataParams,
  };

  export {
    Feeds as Feeds,
    type FeedGetSettingsResponse as FeedGetSettingsResponse,
    type FeedListItemsResponse as FeedListItemsResponse,
    type FeedListItemsResponsesEntriesCursor as FeedListItemsResponsesEntriesCursor,
    type FeedGetSettingsParams as FeedGetSettingsParams,
    type FeedListItemsParams as FeedListItemsParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkIdentifyResponse as BulkIdentifyResponse,
    type BulkSetPreferencesResponse as BulkSetPreferencesResponse,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}
