// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchedulesAPI from '../schedules';
import { SchedulesEntriesCursor } from '../schedules';
import * as MessagesAPI from '../messages/messages';
import { MessagesEntriesCursor } from '../messages/messages';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as SubscriptionsAPI from '../recipients/subscriptions';
import { SubscriptionsEntriesCursor } from '../recipients/subscriptions';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams } from './bulk';
import * as FeedsAPI from './feeds';
import { Feeds } from './feeds';
import { APIPromise } from '../../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  feeds: FeedsAPI.Feeds = new FeedsAPI.Feeds(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Identify a user
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.put(path`/v1/users/${userID}`, { body, ...options });
  }

  /**
   * Returns a list of users
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsersEntriesCursor, User> {
    return this._client.getAPIList('/v1/users', EntriesCursor<User>, { query, ...options });
  }

  /**
   * Deletes a user
   */
  delete(userID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/users/${userID}`, options);
  }

  /**
   * Returns a user
   */
  get(userID: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/v1/users/${userID}`, options);
  }

  /**
   * Get channel data for a user
   */
  getChannelData(
    userID: string,
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<ChannelDataAPI.ChannelData> {
    return this._client.get(path`/v1/users/${userID}/channel_data/${channelID}`, options);
  }

  /**
   * Returns a paginated list of messages for a user
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
   * List preference sets for a user
   */
  listPreferences(userID: string, options?: RequestOptions): APIPromise<UserListPreferencesResponse> {
    return this._client.get(path`/v1/users/${userID}/preferences`, options);
  }

  /**
   * List schedules for a user
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
   * List subscriptions for a user
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
   * Merges two users together
   */
  merge(userID: string, body: UserMergeParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post(path`/v1/users/${userID}/merge`, { body, ...options });
  }

  /**
   * Sets channel data for a user
   */
  setChannelData(
    userID: string,
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<ChannelDataAPI.ChannelData> {
    return this._client.put(path`/v1/users/${userID}/channel_data/${channelID}`, options);
  }

  /**
   * Unsets channel data for a user
   */
  unsetChannelData(userID: string, channelID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/users/${userID}/channel_data/${channelID}`, options);
  }
}

export type UsersEntriesCursor = EntriesCursor<User>;

/**
 * A set of parameters to identify a user with. Does not include the user ID, as
 * that's specified elsewhere in the request. You can supply any additional
 * properties you'd like to upsert against the user.
 */
export interface IdentifyUserRequest {
  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

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
 * It will perform an upsert against the user you're supplying, replacing any
 * properties specified.
 */
export interface InlineIdentifyUserRequest {
  /**
   * The ID of the user to identify. This is an ID that you supply.
   */
  id: string;

  /**
   * Allows inline setting channel data for a recipient
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

export type UserListPreferencesResponse = Array<PreferencesAPI.PreferenceSet>;

/**
 * An empty response
 */
export type UserUnsetChannelDataResponse = string;

export interface UserUpdateParams {
  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  [k: string]: unknown;
}

export interface UserListParams extends EntriesCursorParams {}

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

export interface UserListSubscriptionsParams extends EntriesCursorParams {
  /**
   * Objects to filter by
   */
  objects?: Array<string | UserListSubscriptionsParams.UnionMember1>;
}

export namespace UserListSubscriptionsParams {
  /**
   * An object reference to a recipient
   */
  export interface UnionMember1 {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }
}

export interface UserMergeParams {
  from_user_id?: string;
}

Users.Feeds = Feeds;
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
    type UserListMessagesParams as UserListMessagesParams,
    type UserListSchedulesParams as UserListSchedulesParams,
    type UserListSubscriptionsParams as UserListSubscriptionsParams,
    type UserMergeParams as UserMergeParams,
  };

  export { Feeds as Feeds };

  export { Bulk as Bulk, type BulkDeleteParams as BulkDeleteParams };
}

export { type MessagesEntriesCursor, type SchedulesEntriesCursor, type SubscriptionsEntriesCursor };
