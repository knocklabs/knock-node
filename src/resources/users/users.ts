// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as BulkAPI from './bulk';
import {
  Bulk,
  BulkDeleteParams,
  BulkDeleteResponse,
  BulkIdentifyResponse,
  BulkSetPreferencesResponse,
} from './bulk';
import * as FeedsAPI from './feeds';
import { FeedGetParams, FeedGetResponse, FeedGetSettingsResponse, Feeds } from './feeds';

export class Users extends APIResource {
  feeds: FeedsAPI.Feeds = new FeedsAPI.Feeds(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Identify a user
   */
  update(userId: string, body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.put(`/v1/users/${userId}`, { body, ...options });
  }

  /**
   * Returns a list of users
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/users', { query, ...options });
  }

  /**
   * Deletes a user
   */
  delete(userId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/v1/users/${userId}`, options);
  }

  /**
   * Returns a user
   */
  get(userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/v1/users/${userId}`, options);
  }

  /**
   * Get channel data for a user
   */
  getChannelData(
    userId: string,
    channelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetChannelDataResponse> {
    return this._client.get(`/v1/users/${userId}/channel_data/${channelId}`, options);
  }

  /**
   * Get a preference set for a user
   */
  getPreferences(
    userId: string,
    id: string,
    query?: UserGetPreferencesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetPreferencesResponse>;
  getPreferences(
    userId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetPreferencesResponse>;
  getPreferences(
    userId: string,
    id: string,
    query: UserGetPreferencesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetPreferencesResponse> {
    if (isRequestOptions(query)) {
      return this.getPreferences(userId, id, {}, query);
    }
    return this._client.get(`/v1/users/${userId}/preferences/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of messages for a user
   */
  listMessages(
    userId: string,
    query?: UserListMessagesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListMessagesResponse>;
  listMessages(userId: string, options?: Core.RequestOptions): Core.APIPromise<UserListMessagesResponse>;
  listMessages(
    userId: string,
    query: UserListMessagesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListMessagesResponse> {
    if (isRequestOptions(query)) {
      return this.listMessages(userId, {}, query);
    }
    return this._client.get(`/v1/users/${userId}/messages`, { query, ...options });
  }

  /**
   * List preference sets for a user
   */
  listPreferences(
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListPreferencesResponse> {
    return this._client.get(`/v1/users/${userId}/preferences`, options);
  }

  /**
   * List schedules for a user
   */
  listSchedules(
    userId: string,
    query?: UserListSchedulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListSchedulesResponse>;
  listSchedules(userId: string, options?: Core.RequestOptions): Core.APIPromise<UserListSchedulesResponse>;
  listSchedules(
    userId: string,
    query: UserListSchedulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListSchedulesResponse> {
    if (isRequestOptions(query)) {
      return this.listSchedules(userId, {}, query);
    }
    return this._client.get(`/v1/users/${userId}/schedules`, { query, ...options });
  }

  /**
   * List subscriptions for a user
   */
  listSubscriptions(
    userId: string,
    query?: UserListSubscriptionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListSubscriptionsResponse>;
  listSubscriptions(
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListSubscriptionsResponse>;
  listSubscriptions(
    userId: string,
    query: UserListSubscriptionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListSubscriptionsResponse> {
    if (isRequestOptions(query)) {
      return this.listSubscriptions(userId, {}, query);
    }
    return this._client.get(`/v1/users/${userId}/subscriptions`, { query, ...options });
  }

  /**
   * Merges two users together
   */
  merge(userId: string, body: UserMergeParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post(`/v1/users/${userId}/merge`, { body, ...options });
  }

  /**
   * Sets channel data for a user
   */
  setChannelData(
    userId: string,
    channelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSetChannelDataResponse> {
    return this._client.put(`/v1/users/${userId}/channel_data/${channelId}`, options);
  }

  /**
   * Update a preference set for a user
   */
  setPreferences(
    userId: string,
    id: string,
    body: UserSetPreferencesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSetPreferencesResponse> {
    return this._client.put(`/v1/users/${userId}/preferences/${id}`, { body, ...options });
  }

  /**
   * Unsets channel data for a user
   */
  unsetChannelData(
    userId: string,
    channelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.delete(`/v1/users/${userId}/channel_data/${channelId}`, options);
  }
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
 * A paginated list of users.
 */
export interface UserListResponse {
  /**
   * The list of users
   */
  entries?: Array<User>;

  /**
   * The information about a paginated result
   */
  page_info?: UserListResponse.PageInfo;
}

export namespace UserListResponse {
  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
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
    | UserGetChannelDataResponse.PushChannelData
    | UserGetChannelDataResponse.SlackChannelData
    | UserGetChannelDataResponse.MsTeamsChannelData
    | UserGetChannelDataResponse.DiscordChannelData
    | UserGetChannelDataResponse.OneSignalChannelData;
}

export namespace UserGetChannelDataResponse {
  /**
   * Channel data for push providers
   */
  export interface PushChannelData {
    tokens: Array<string>;
  }

  /**
   * Slack channel data
   */
  export interface SlackChannelData {
    connections: Array<SlackChannelData.TokenConnection | SlackChannelData.IncomingWebhookConnection>;

    token?: SlackChannelData.Token | null;
  }

  export namespace SlackChannelData {
    /**
     * A Slack connection, which either includes a channel_id or a user_id
     */
    export interface TokenConnection {
      access_token?: string | null;

      channel_id?: string | null;

      user_id?: string | null;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface IncomingWebhookConnection {
      url: string;
    }

    export interface Token {
      access_token: string | null;
    }
  }

  /**
   * Microsoft Teams channel data
   */
  export interface MsTeamsChannelData {
    connections: Array<MsTeamsChannelData.TokenConnection | MsTeamsChannelData.IncomingWebhookConnection>;

    /**
     * The Microsoft Teams tenant ID
     */
    ms_teams_tenant_id?: string | null;
  }

  export namespace MsTeamsChannelData {
    /**
     * A Slack connection, which either includes a channel_id or a user_id
     */
    export interface TokenConnection {
      access_token?: string | null;

      channel_id?: string | null;

      user_id?: string | null;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface IncomingWebhookConnection {
      url: string;
    }
  }

  /**
   * Discord channel data
   */
  export interface DiscordChannelData {
    connections: Array<DiscordChannelData.ChannelConnection | DiscordChannelData.IncomingWebhookConnection>;
  }

  export namespace DiscordChannelData {
    /**
     * Discord channel connection
     */
    export interface ChannelConnection {
      /**
       * The Discord channel ID
       */
      channel_id: string;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface IncomingWebhookConnection {
      url: string;
    }
  }

  /**
   * OneSignal channel data
   */
  export interface OneSignalChannelData {
    /**
     * The OneSignal player IDs
     */
    player_ids: Array<string>;
  }
}

/**
 * A preference set object.
 */
export interface UserGetPreferencesResponse {
  id: string;

  __typename: string;

  categories?: Record<string, boolean | UserGetPreferencesResponse.UnionMember1> | null;

  /**
   * Channel type preferences
   */
  channel_types?: UserGetPreferencesResponse.ChannelTypes | null;

  workflows?: Record<string, boolean | UserGetPreferencesResponse.UnionMember1> | null;
}

export namespace UserGetPreferencesResponse {
  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: UnionMember1.ChannelTypes | null;

    conditions?: Array<UnionMember1.Condition>;
  }

  export namespace UnionMember1 {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    /**
     * A condition to be evaluated
     */
    export interface Condition {
      argument: string | null;

      operator:
        | 'equal_to'
        | 'not_equal_to'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equal_to'
        | 'less_than_or_equal_to'
        | 'contains'
        | 'not_contains'
        | 'empty'
        | 'not_empty'
        | 'contains_all'
        | 'is_timestamp'
        | 'is_not_timestamp'
        | 'is_timestamp_after'
        | 'is_timestamp_before'
        | 'is_timestamp_between'
        | 'is_audience_member';

      variable: string;
    }
  }

  /**
   * Channel type preferences
   */
  export interface ChannelTypes {
    chat?: boolean | ChannelTypes.Conditions;

    email?: boolean | ChannelTypes.Conditions;

    http?: boolean | ChannelTypes.Conditions;

    in_app_feed?: boolean | ChannelTypes.Conditions;

    push?: boolean | ChannelTypes.Conditions;

    sms?: boolean | ChannelTypes.Conditions;
  }

  export namespace ChannelTypes {
    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: UnionMember1.ChannelTypes | null;

    conditions?: Array<UnionMember1.Condition>;
  }

  export namespace UnionMember1 {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    /**
     * A condition to be evaluated
     */
    export interface Condition {
      argument: string | null;

      operator:
        | 'equal_to'
        | 'not_equal_to'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equal_to'
        | 'less_than_or_equal_to'
        | 'contains'
        | 'not_contains'
        | 'empty'
        | 'not_empty'
        | 'contains_all'
        | 'is_timestamp'
        | 'is_not_timestamp'
        | 'is_timestamp_after'
        | 'is_timestamp_before'
        | 'is_timestamp_between'
        | 'is_audience_member';

      variable: string;
    }
  }
}

/**
 * A paginated list of messages.
 */
export interface UserListMessagesResponse {
  /**
   * The list of messages
   */
  entries: Array<UserListMessagesResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: UserListMessagesResponse.PageInfo;
}

export namespace UserListMessagesResponse {
  /**
   * Represents a single message that was generated by a workflow for a given
   * channel.
   */
  export interface Entry {
    /**
     * The message ID
     */
    id?: string;

    __typename?: string;

    /**
     * A list of actor representations associated with the message (up to 10)
     */
    actors?: Array<string | Entry.UnionMember1>;

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
    data?: unknown | null;

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
    metadata?: unknown | null;

    /**
     * Timestamp when message was read
     */
    read_at?: string | null;

    /**
     * A reference to a recipient, either a user identifier (string) or an object
     * reference (id, collection).
     */
    recipient?: string | Entry.UnionMember1;

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
    source?: Entry.Source;

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

  export namespace Entry {
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
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

export type UserListPreferencesResponse = Array<UserListPreferencesResponse.UserListPreferencesResponseItem>;

export namespace UserListPreferencesResponse {
  /**
   * A preference set object.
   */
  export interface UserListPreferencesResponseItem {
    id: string;

    __typename: string;

    categories?: Record<string, boolean | UserListPreferencesResponseItem.UnionMember1> | null;

    /**
     * Channel type preferences
     */
    channel_types?: UserListPreferencesResponseItem.ChannelTypes | null;

    workflows?: Record<string, boolean | UserListPreferencesResponseItem.UnionMember1> | null;
  }

  export namespace UserListPreferencesResponseItem {
    export interface UnionMember1 {
      /**
       * Channel type preferences
       */
      channel_types?: UnionMember1.ChannelTypes | null;

      conditions?: Array<UnionMember1.Condition>;
    }

    export namespace UnionMember1 {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        chat?: boolean | ChannelTypes.Conditions;

        email?: boolean | ChannelTypes.Conditions;

        http?: boolean | ChannelTypes.Conditions;

        in_app_feed?: boolean | ChannelTypes.Conditions;

        push?: boolean | ChannelTypes.Conditions;

        sms?: boolean | ChannelTypes.Conditions;
      }

      export namespace ChannelTypes {
        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    export interface UnionMember1 {
      /**
       * Channel type preferences
       */
      channel_types?: UnionMember1.ChannelTypes | null;

      conditions?: Array<UnionMember1.Condition>;
    }

    export namespace UnionMember1 {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        chat?: boolean | ChannelTypes.Conditions;

        email?: boolean | ChannelTypes.Conditions;

        http?: boolean | ChannelTypes.Conditions;

        in_app_feed?: boolean | ChannelTypes.Conditions;

        push?: boolean | ChannelTypes.Conditions;

        sms?: boolean | ChannelTypes.Conditions;
      }

      export namespace ChannelTypes {
        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }
  }
}

/**
 * A paginated list of schedules in a collection.
 */
export interface UserListSchedulesResponse {
  /**
   * The list of schedules
   */
  entries: Array<UserListSchedulesResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: UserListSchedulesResponse.PageInfo;
}

export namespace UserListSchedulesResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface Entry {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Entry.Object;

    repeats: Array<Entry.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | Entry.Object | null;

    data?: unknown | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace Entry {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }

  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * A paginated list of subscriptions for an object.
 */
export interface UserListSubscriptionsResponse {
  /**
   * The list of subscriptions
   */
  entries: Array<UserListSubscriptionsResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: UserListSubscriptionsResponse.PageInfo;
}

export namespace UserListSubscriptionsResponse {
  /**
   * A subscription object
   */
  export interface Entry {
    __typename: string;

    inserted_at: string;

    /**
     * A custom-object entity which belongs to a collection.
     */
    object: Entry.Object;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Entry.Object;

    updated_at: string;

    /**
     * The custom properties associated with the subscription
     */
    properties?: Record<string, unknown> | null;
  }

  export namespace Entry {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }

  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
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
    | UserSetChannelDataResponse.PushChannelData
    | UserSetChannelDataResponse.SlackChannelData
    | UserSetChannelDataResponse.MsTeamsChannelData
    | UserSetChannelDataResponse.DiscordChannelData
    | UserSetChannelDataResponse.OneSignalChannelData;
}

export namespace UserSetChannelDataResponse {
  /**
   * Channel data for push providers
   */
  export interface PushChannelData {
    tokens: Array<string>;
  }

  /**
   * Slack channel data
   */
  export interface SlackChannelData {
    connections: Array<SlackChannelData.TokenConnection | SlackChannelData.IncomingWebhookConnection>;

    token?: SlackChannelData.Token | null;
  }

  export namespace SlackChannelData {
    /**
     * A Slack connection, which either includes a channel_id or a user_id
     */
    export interface TokenConnection {
      access_token?: string | null;

      channel_id?: string | null;

      user_id?: string | null;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface IncomingWebhookConnection {
      url: string;
    }

    export interface Token {
      access_token: string | null;
    }
  }

  /**
   * Microsoft Teams channel data
   */
  export interface MsTeamsChannelData {
    connections: Array<MsTeamsChannelData.TokenConnection | MsTeamsChannelData.IncomingWebhookConnection>;

    /**
     * The Microsoft Teams tenant ID
     */
    ms_teams_tenant_id?: string | null;
  }

  export namespace MsTeamsChannelData {
    /**
     * A Slack connection, which either includes a channel_id or a user_id
     */
    export interface TokenConnection {
      access_token?: string | null;

      channel_id?: string | null;

      user_id?: string | null;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface IncomingWebhookConnection {
      url: string;
    }
  }

  /**
   * Discord channel data
   */
  export interface DiscordChannelData {
    connections: Array<DiscordChannelData.ChannelConnection | DiscordChannelData.IncomingWebhookConnection>;
  }

  export namespace DiscordChannelData {
    /**
     * Discord channel connection
     */
    export interface ChannelConnection {
      /**
       * The Discord channel ID
       */
      channel_id: string;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface IncomingWebhookConnection {
      url: string;
    }
  }

  /**
   * OneSignal channel data
   */
  export interface OneSignalChannelData {
    /**
     * The OneSignal player IDs
     */
    player_ids: Array<string>;
  }
}

/**
 * A preference set object.
 */
export interface UserSetPreferencesResponse {
  id: string;

  __typename: string;

  categories?: Record<string, boolean | UserSetPreferencesResponse.UnionMember1> | null;

  /**
   * Channel type preferences
   */
  channel_types?: UserSetPreferencesResponse.ChannelTypes | null;

  workflows?: Record<string, boolean | UserSetPreferencesResponse.UnionMember1> | null;
}

export namespace UserSetPreferencesResponse {
  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: UnionMember1.ChannelTypes | null;

    conditions?: Array<UnionMember1.Condition>;
  }

  export namespace UnionMember1 {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    /**
     * A condition to be evaluated
     */
    export interface Condition {
      argument: string | null;

      operator:
        | 'equal_to'
        | 'not_equal_to'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equal_to'
        | 'less_than_or_equal_to'
        | 'contains'
        | 'not_contains'
        | 'empty'
        | 'not_empty'
        | 'contains_all'
        | 'is_timestamp'
        | 'is_not_timestamp'
        | 'is_timestamp_after'
        | 'is_timestamp_before'
        | 'is_timestamp_between'
        | 'is_audience_member';

      variable: string;
    }
  }

  /**
   * Channel type preferences
   */
  export interface ChannelTypes {
    chat?: boolean | ChannelTypes.Conditions;

    email?: boolean | ChannelTypes.Conditions;

    http?: boolean | ChannelTypes.Conditions;

    in_app_feed?: boolean | ChannelTypes.Conditions;

    push?: boolean | ChannelTypes.Conditions;

    sms?: boolean | ChannelTypes.Conditions;
  }

  export namespace ChannelTypes {
    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: UnionMember1.ChannelTypes | null;

    conditions?: Array<UnionMember1.Condition>;
  }

  export namespace UnionMember1 {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    /**
     * A condition to be evaluated
     */
    export interface Condition {
      argument: string | null;

      operator:
        | 'equal_to'
        | 'not_equal_to'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equal_to'
        | 'less_than_or_equal_to'
        | 'contains'
        | 'not_contains'
        | 'empty'
        | 'not_empty'
        | 'contains_all'
        | 'is_timestamp'
        | 'is_not_timestamp'
        | 'is_timestamp_after'
        | 'is_timestamp_before'
        | 'is_timestamp_between'
        | 'is_audience_member';

      variable: string;
    }
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
  channel_data?: Record<string, UserUpdateParams.ChannelData> | null;

  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: Record<string, UserUpdateParams.Preferences> | null;
}

export namespace UserUpdateParams {
  /**
   * Set channel data for a type of channel
   */
  export interface ChannelData {
    /**
     * Channel data for push providers
     */
    data:
      | ChannelData.PushChannelData
      | ChannelData.OneSignalChannelData
      | ChannelData.SlackChannelData
      | ChannelData.MsTeamsChannelData
      | ChannelData.DiscordChannelData;
  }

  export namespace ChannelData {
    /**
     * Channel data for push providers
     */
    export interface PushChannelData {
      tokens: Array<string>;
    }

    /**
     * OneSignal channel data
     */
    export interface OneSignalChannelData {
      /**
       * The OneSignal player IDs
       */
      player_ids: Array<string>;
    }

    /**
     * Slack channel data
     */
    export interface SlackChannelData {
      connections: Array<SlackChannelData.TokenConnection | SlackChannelData.IncomingWebhookConnection>;

      token?: SlackChannelData.Token | null;
    }

    export namespace SlackChannelData {
      /**
       * A Slack connection, which either includes a channel_id or a user_id
       */
      export interface TokenConnection {
        access_token?: string | null;

        channel_id?: string | null;

        user_id?: string | null;
      }

      /**
       * An incoming webhook Slack connection
       */
      export interface IncomingWebhookConnection {
        url: string;
      }

      export interface Token {
        access_token: string | null;
      }
    }

    /**
     * Microsoft Teams channel data
     */
    export interface MsTeamsChannelData {
      connections: Array<MsTeamsChannelData.TokenConnection | MsTeamsChannelData.IncomingWebhookConnection>;

      /**
       * The Microsoft Teams tenant ID
       */
      ms_teams_tenant_id?: string | null;
    }

    export namespace MsTeamsChannelData {
      /**
       * A Slack connection, which either includes a channel_id or a user_id
       */
      export interface TokenConnection {
        access_token?: string | null;

        channel_id?: string | null;

        user_id?: string | null;
      }

      /**
       * An incoming webhook Slack connection
       */
      export interface IncomingWebhookConnection {
        url: string;
      }
    }

    /**
     * Discord channel data
     */
    export interface DiscordChannelData {
      connections: Array<DiscordChannelData.ChannelConnection | DiscordChannelData.IncomingWebhookConnection>;
    }

    export namespace DiscordChannelData {
      /**
       * Discord channel connection
       */
      export interface ChannelConnection {
        /**
         * The Discord channel ID
         */
        channel_id: string;
      }

      /**
       * An incoming webhook Slack connection
       */
      export interface IncomingWebhookConnection {
        url: string;
      }
    }
  }

  /**
   * Set preferences for a recipient
   */
  export interface Preferences {
    categories?: Record<string, boolean | Preferences.UnionMember1> | null;

    /**
     * Channel type preferences
     */
    channel_types?: Preferences.ChannelTypes | null;

    workflows?: Record<string, boolean | Preferences.UnionMember1> | null;
  }

  export namespace Preferences {
    export interface UnionMember1 {
      /**
       * Channel type preferences
       */
      channel_types?: UnionMember1.ChannelTypes | null;

      conditions?: Array<UnionMember1.Condition>;
    }

    export namespace UnionMember1 {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        chat?: boolean | ChannelTypes.Conditions;

        email?: boolean | ChannelTypes.Conditions;

        http?: boolean | ChannelTypes.Conditions;

        in_app_feed?: boolean | ChannelTypes.Conditions;

        push?: boolean | ChannelTypes.Conditions;

        sms?: boolean | ChannelTypes.Conditions;
      }

      export namespace ChannelTypes {
        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    export interface UnionMember1 {
      /**
       * Channel type preferences
       */
      channel_types?: UnionMember1.ChannelTypes | null;

      conditions?: Array<UnionMember1.Condition>;
    }

    export namespace UnionMember1 {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        chat?: boolean | ChannelTypes.Conditions;

        email?: boolean | ChannelTypes.Conditions;

        http?: boolean | ChannelTypes.Conditions;

        in_app_feed?: boolean | ChannelTypes.Conditions;

        push?: boolean | ChannelTypes.Conditions;

        sms?: boolean | ChannelTypes.Conditions;
      }

      export namespace ChannelTypes {
        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }
  }
}

export interface UserListParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The page size to fetch
   */
  page_size?: number;
}

export interface UserGetPreferencesParams {
  /**
   * Tenant ID
   */
  tenant?: string;
}

export interface UserListMessagesParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

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
   * The page size to fetch
   */
  page_size?: number;

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

export interface UserListSchedulesParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The page size to fetch
   */
  page_size?: number;

  /**
   * The ID of the tenant to list schedules for
   */
  tenant?: string;

  /**
   * The ID of the workflow to list schedules for
   */
  workflow?: string;
}

export interface UserListSubscriptionsParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * Objects to filter by
   */
  objects?: Array<string | UserListSubscriptionsParams.UnionMember1>;

  /**
   * The page size to fetch
   */
  page_size?: number;
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

export interface UserSetPreferencesParams {
  categories?: Record<string, boolean | UserSetPreferencesParams.UnionMember1> | null;

  /**
   * Channel type preferences
   */
  channel_types?: UserSetPreferencesParams.ChannelTypes | null;

  workflows?: Record<string, boolean | UserSetPreferencesParams.UnionMember1> | null;
}

export namespace UserSetPreferencesParams {
  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: UnionMember1.ChannelTypes | null;

    conditions?: Array<UnionMember1.Condition>;
  }

  export namespace UnionMember1 {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    /**
     * A condition to be evaluated
     */
    export interface Condition {
      argument: string | null;

      operator:
        | 'equal_to'
        | 'not_equal_to'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equal_to'
        | 'less_than_or_equal_to'
        | 'contains'
        | 'not_contains'
        | 'empty'
        | 'not_empty'
        | 'contains_all'
        | 'is_timestamp'
        | 'is_not_timestamp'
        | 'is_timestamp_after'
        | 'is_timestamp_before'
        | 'is_timestamp_between'
        | 'is_audience_member';

      variable: string;
    }
  }

  /**
   * Channel type preferences
   */
  export interface ChannelTypes {
    chat?: boolean | ChannelTypes.Conditions;

    email?: boolean | ChannelTypes.Conditions;

    http?: boolean | ChannelTypes.Conditions;

    in_app_feed?: boolean | ChannelTypes.Conditions;

    push?: boolean | ChannelTypes.Conditions;

    sms?: boolean | ChannelTypes.Conditions;
  }

  export namespace ChannelTypes {
    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }

    export interface Conditions {
      conditions: Array<Conditions.Condition>;
    }

    export namespace Conditions {
      /**
       * A condition to be evaluated
       */
      export interface Condition {
        argument: string | null;

        operator:
          | 'equal_to'
          | 'not_equal_to'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equal_to'
          | 'less_than_or_equal_to'
          | 'contains'
          | 'not_contains'
          | 'empty'
          | 'not_empty'
          | 'contains_all'
          | 'is_timestamp'
          | 'is_not_timestamp'
          | 'is_timestamp_after'
          | 'is_timestamp_before'
          | 'is_timestamp_between'
          | 'is_audience_member';

        variable: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: UnionMember1.ChannelTypes | null;

    conditions?: Array<UnionMember1.Condition>;
  }

  export namespace UnionMember1 {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    /**
     * A condition to be evaluated
     */
    export interface Condition {
      argument: string | null;

      operator:
        | 'equal_to'
        | 'not_equal_to'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equal_to'
        | 'less_than_or_equal_to'
        | 'contains'
        | 'not_contains'
        | 'empty'
        | 'not_empty'
        | 'contains_all'
        | 'is_timestamp'
        | 'is_not_timestamp'
        | 'is_timestamp_after'
        | 'is_timestamp_before'
        | 'is_timestamp_between'
        | 'is_audience_member';

      variable: string;
    }
  }
}

Users.Feeds = Feeds;
Users.Bulk = Bulk;

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
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
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetPreferencesParams as UserGetPreferencesParams,
    type UserListMessagesParams as UserListMessagesParams,
    type UserListSchedulesParams as UserListSchedulesParams,
    type UserListSubscriptionsParams as UserListSubscriptionsParams,
    type UserMergeParams as UserMergeParams,
    type UserSetPreferencesParams as UserSetPreferencesParams,
  };

  export {
    Feeds as Feeds,
    type FeedGetResponse as FeedGetResponse,
    type FeedGetSettingsResponse as FeedGetSettingsResponse,
    type FeedGetParams as FeedGetParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkIdentifyResponse as BulkIdentifyResponse,
    type BulkSetPreferencesResponse as BulkSetPreferencesResponse,
    type BulkDeleteParams as BulkDeleteParams,
  };
}
