// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as BulkAPI from './bulk';
import {
  Bulk,
  BulkAddSubscriptionsParams,
  BulkAddSubscriptionsResponse,
  BulkDeleteParams,
  BulkDeleteResponse,
  BulkSetParams,
  BulkSetResponse,
} from './bulk';
import * as UsersAPI from '../users/users';

export class Objects extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * List objects in a collection
   */
  list(
    collection: string,
    query?: ObjectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse>;
  list(collection: string, options?: Core.RequestOptions): Core.APIPromise<ObjectListResponse>;
  list(
    collection: string,
    query: ObjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse> {
    if (isRequestOptions(query)) {
      return this.list(collection, {}, query);
    }
    return this._client.get(`/v1/objects/${collection}`, { query, ...options });
  }

  /**
   * Delete an object
   */
  delete(collection: string, id: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Upsert subscriptions for an object
   */
  addSubscriptions(
    collection: string,
    objectId: string,
    body: ObjectAddSubscriptionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectAddSubscriptionsResponse> {
    return this._client.post(`/v1/objects/${collection}/${objectId}/subscriptions`, { body, ...options });
  }

  /**
   * Delete subscriptions for an object
   */
  deleteSubscriptions(
    collection: string,
    objectId: string,
    body: ObjectDeleteSubscriptionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectDeleteSubscriptionsResponse> {
    return this._client.delete(`/v1/objects/${collection}/${objectId}/subscriptions`, { body, ...options });
  }

  /**
   * Get an object
   */
  get(collection: string, id: string, options?: Core.RequestOptions): Core.APIPromise<ObjectGetResponse> {
    return this._client.get(`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Get channel data for an object
   */
  getChannelData(
    collection: string,
    objectId: string,
    channelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectGetChannelDataResponse> {
    return this._client.get(`/v1/objects/${collection}/${objectId}/channel_data/${channelId}`, options);
  }

  /**
   * Get a preference set for an object
   */
  getPreferences(
    collection: string,
    objectId: string,
    id: string,
    query?: ObjectGetPreferencesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectGetPreferencesResponse>;
  getPreferences(
    collection: string,
    objectId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectGetPreferencesResponse>;
  getPreferences(
    collection: string,
    objectId: string,
    id: string,
    query: ObjectGetPreferencesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectGetPreferencesResponse> {
    if (isRequestOptions(query)) {
      return this.getPreferences(collection, objectId, id, {}, query);
    }
    return this._client.get(`/v1/objects/${collection}/${objectId}/preferences/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of messages for an object
   */
  listMessages(
    collection: string,
    id: string,
    query?: ObjectListMessagesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListMessagesResponse>;
  listMessages(
    collection: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListMessagesResponse>;
  listMessages(
    collection: string,
    id: string,
    query: ObjectListMessagesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListMessagesResponse> {
    if (isRequestOptions(query)) {
      return this.listMessages(collection, id, {}, query);
    }
    return this._client.get(`/v1/objects/${collection}/${id}/messages`, { query, ...options });
  }

  /**
   * List preference sets for an object
   */
  listPreferences(
    collection: string,
    objectId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListPreferencesResponse> {
    return this._client.get(`/v1/objects/${collection}/${objectId}/preferences`, options);
  }

  /**
   * List schedules for an object
   */
  listSchedules(
    collection: string,
    id: string,
    query?: ObjectListSchedulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListSchedulesResponse>;
  listSchedules(
    collection: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListSchedulesResponse>;
  listSchedules(
    collection: string,
    id: string,
    query: ObjectListSchedulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListSchedulesResponse> {
    if (isRequestOptions(query)) {
      return this.listSchedules(collection, id, {}, query);
    }
    return this._client.get(`/v1/objects/${collection}/${id}/schedules`, { query, ...options });
  }

  /**
   * List subscriptions for an object. Either list all subscriptions that belong to
   * the object, or all subscriptions that this object has. Determined by the `mode`
   * query parameter.
   */
  listSubscriptions(
    collection: string,
    objectId: string,
    query?: ObjectListSubscriptionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListSubscriptionsResponse>;
  listSubscriptions(
    collection: string,
    objectId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListSubscriptionsResponse>;
  listSubscriptions(
    collection: string,
    objectId: string,
    query: ObjectListSubscriptionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListSubscriptionsResponse> {
    if (isRequestOptions(query)) {
      return this.listSubscriptions(collection, objectId, {}, query);
    }
    return this._client.get(`/v1/objects/${collection}/${objectId}/subscriptions`, { query, ...options });
  }

  /**
   * Set (identify) an object
   */
  set(
    collection: string,
    id: string,
    body: ObjectSetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectSetResponse> {
    return this._client.put(`/v1/objects/${collection}/${id}`, { body, ...options });
  }

  /**
   * Set channel data for an object
   */
  setChannelData(
    collection: string,
    objectId: string,
    channelId: string,
    body: ObjectSetChannelDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectSetChannelDataResponse> {
    return this._client.put(`/v1/objects/${collection}/${objectId}/channel_data/${channelId}`, {
      body,
      ...options,
    });
  }

  /**
   * Update a preference set for an object
   */
  setPreferences(
    collection: string,
    objectId: string,
    id: string,
    body: ObjectSetPreferencesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectSetPreferencesResponse> {
    return this._client.put(`/v1/objects/${collection}/${objectId}/preferences/${id}`, { body, ...options });
  }

  /**
   * Unset channel data for an object
   */
  unsetChannelData(
    collection: string,
    objectId: string,
    channelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.delete(`/v1/objects/${collection}/${objectId}/channel_data/${channelId}`, options);
  }
}

/**
 * A paginated list of objects in a collection.
 */
export interface ObjectListResponse {
  /**
   * The list of objects
   */
  entries: Array<ObjectListResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: ObjectListResponse.PageInfo;
}

export namespace ObjectListResponse {
  /**
   * A custom-object entity which belongs to a collection.
   */
  export interface Entry {
    id: string;

    __typename: string;

    collection: string;

    updated_at: string;

    created_at?: string | null;
    [k: string]: unknown;
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
 * An empty response
 */
export type ObjectDeleteResponse = string;

/**
 * Response containing a list of subscriptions
 */
export type ObjectAddSubscriptionsResponse =
  Array<ObjectAddSubscriptionsResponse.ObjectAddSubscriptionsResponseItem>;

export namespace ObjectAddSubscriptionsResponse {
  /**
   * A subscription object
   */
  export interface ObjectAddSubscriptionsResponseItem {
    __typename: string;

    inserted_at: string;

    /**
     * A custom-object entity which belongs to a collection.
     */
    object: ObjectAddSubscriptionsResponseItem.Object;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ObjectAddSubscriptionsResponseItem.Object;

    updated_at: string;

    /**
     * The custom properties associated with the subscription
     */
    properties?: Record<string, unknown> | null;
  }

  export namespace ObjectAddSubscriptionsResponseItem {
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
}

/**
 * Response containing a list of subscriptions
 */
export type ObjectDeleteSubscriptionsResponse =
  Array<ObjectDeleteSubscriptionsResponse.ObjectDeleteSubscriptionsResponseItem>;

export namespace ObjectDeleteSubscriptionsResponse {
  /**
   * A subscription object
   */
  export interface ObjectDeleteSubscriptionsResponseItem {
    __typename: string;

    inserted_at: string;

    /**
     * A custom-object entity which belongs to a collection.
     */
    object: ObjectDeleteSubscriptionsResponseItem.Object;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ObjectDeleteSubscriptionsResponseItem.Object;

    updated_at: string;

    /**
     * The custom properties associated with the subscription
     */
    properties?: Record<string, unknown> | null;
  }

  export namespace ObjectDeleteSubscriptionsResponseItem {
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
}

/**
 * A custom-object entity which belongs to a collection.
 */
export interface ObjectGetResponse {
  id: string;

  __typename: string;

  collection: string;

  updated_at: string;

  created_at?: string | null;
  [k: string]: unknown;
}

/**
 * Channel data for various channel types
 */
export interface ObjectGetChannelDataResponse {
  __typename: string;

  channel_id: string;

  /**
   * Channel data for push providers
   */
  data:
    | ObjectGetChannelDataResponse.PushChannelData
    | ObjectGetChannelDataResponse.SlackChannelData
    | ObjectGetChannelDataResponse.MsTeamsChannelData
    | ObjectGetChannelDataResponse.DiscordChannelData
    | ObjectGetChannelDataResponse.OneSignalChannelData;
}

export namespace ObjectGetChannelDataResponse {
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
    connections: Array<
      SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
    >;

    /**
     * A token that's used to store the access token for a Slack workspace.
     */
    token?: SlackChannelData.Token | null;
  }

  export namespace SlackChannelData {
    /**
     * A Slack connection, which either includes a channel_id or a user_id
     */
    export interface SlackTokenConnection {
      access_token?: string | null;

      channel_id?: string | null;

      user_id?: string | null;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface SlackIncomingWebhookConnection {
      url: string;
    }

    /**
     * A token that's used to store the access token for a Slack workspace.
     */
    export interface Token {
      access_token: string | null;
    }
  }

  /**
   * Microsoft Teams channel data
   */
  export interface MsTeamsChannelData {
    connections: Array<
      MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
    >;

    /**
     * The Microsoft Teams tenant ID
     */
    ms_teams_tenant_id?: string | null;
  }

  export namespace MsTeamsChannelData {
    /**
     * Microsoft Teams token connection
     */
    export interface MsTeamsTokenConnection {
      /**
       * The Microsoft Teams channel ID
       */
      ms_teams_channel_id?: string | null;

      /**
       * The Microsoft Teams team ID
       */
      ms_teams_team_id?: string | null;

      /**
       * The Microsoft Teams tenant ID
       */
      ms_teams_tenant_id?: string | null;

      /**
       * The Microsoft Teams user ID
       */
      ms_teams_user_id?: string | null;
    }

    /**
     * Microsoft Teams incoming webhook connection
     */
    export interface MsTeamsIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
    }

    export namespace MsTeamsIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      export interface IncomingWebhook {
        /**
         * The URL of the incoming webhook
         */
        url: string;
      }
    }
  }

  /**
   * Discord channel data
   */
  export interface DiscordChannelData {
    connections: Array<
      DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
    >;
  }

  export namespace DiscordChannelData {
    /**
     * Discord channel connection
     */
    export interface DiscordChannelConnection {
      /**
       * The Discord channel ID
       */
      channel_id: string;
    }

    /**
     * Discord incoming webhook connection
     */
    export interface DiscordIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
    }

    export namespace DiscordIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      export interface IncomingWebhook {
        /**
         * The URL of the incoming webhook
         */
        url: string;
      }
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
export interface ObjectGetPreferencesResponse {
  id: string;

  __typename: string;

  /**
   * A map of categories and their settings
   */
  categories?: Record<
    string,
    boolean | ObjectGetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences
   */
  channel_types?: ObjectGetPreferencesResponse.ChannelTypes | null;

  /**
   * A map of workflows and their settings
   */
  workflows?: Record<
    string,
    boolean | ObjectGetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;
}

export namespace ObjectGetPreferencesResponse {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

    conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
  }

  export namespace ChannelTypes {
    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

    conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
export interface ObjectListMessagesResponse {
  /**
   * The list of messages
   */
  entries: Array<ObjectListMessagesResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: ObjectListMessagesResponse.PageInfo;
}

export namespace ObjectListMessagesResponse {
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
    actors?: Array<string | Entry.ObjectReference>;

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
    recipient?: string | Entry.ObjectReference;

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
 * A list of preference sets for the object
 */
export type ObjectListPreferencesResponse =
  Array<ObjectListPreferencesResponse.ObjectListPreferencesResponseItem>;

export namespace ObjectListPreferencesResponse {
  /**
   * A preference set object.
   */
  export interface ObjectListPreferencesResponseItem {
    id: string;

    __typename: string;

    /**
     * A map of categories and their settings
     */
    categories?: Record<
      string,
      boolean | ObjectListPreferencesResponseItem.PreferenceSetWorkflowCategorySettingObject
    > | null;

    /**
     * Channel type preferences
     */
    channel_types?: ObjectListPreferencesResponseItem.ChannelTypes | null;

    /**
     * A map of workflows and their settings
     */
    workflows?: Record<
      string,
      boolean | ObjectListPreferencesResponseItem.PreferenceSetWorkflowCategorySettingObject
    > | null;
  }

  export namespace ObjectListPreferencesResponseItem {
    /**
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

      conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
    }

    export namespace PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

      conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
    }

    export namespace PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
export interface ObjectListSchedulesResponse {
  /**
   * The list of schedules
   */
  entries: Array<ObjectListSchedulesResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: ObjectListSchedulesResponse.PageInfo;
}

export namespace ObjectListSchedulesResponse {
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

    data?: Record<string, unknown> | null;

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
export interface ObjectListSubscriptionsResponse {
  /**
   * The list of subscriptions
   */
  entries: Array<ObjectListSubscriptionsResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: ObjectListSubscriptionsResponse.PageInfo;
}

export namespace ObjectListSubscriptionsResponse {
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
 * A custom-object entity which belongs to a collection.
 */
export interface ObjectSetResponse {
  id: string;

  __typename: string;

  collection: string;

  updated_at: string;

  created_at?: string | null;
  [k: string]: unknown;
}

/**
 * Channel data for various channel types
 */
export interface ObjectSetChannelDataResponse {
  __typename: string;

  channel_id: string;

  /**
   * Channel data for push providers
   */
  data:
    | ObjectSetChannelDataResponse.PushChannelData
    | ObjectSetChannelDataResponse.SlackChannelData
    | ObjectSetChannelDataResponse.MsTeamsChannelData
    | ObjectSetChannelDataResponse.DiscordChannelData
    | ObjectSetChannelDataResponse.OneSignalChannelData;
}

export namespace ObjectSetChannelDataResponse {
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
    connections: Array<
      SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
    >;

    /**
     * A token that's used to store the access token for a Slack workspace.
     */
    token?: SlackChannelData.Token | null;
  }

  export namespace SlackChannelData {
    /**
     * A Slack connection, which either includes a channel_id or a user_id
     */
    export interface SlackTokenConnection {
      access_token?: string | null;

      channel_id?: string | null;

      user_id?: string | null;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface SlackIncomingWebhookConnection {
      url: string;
    }

    /**
     * A token that's used to store the access token for a Slack workspace.
     */
    export interface Token {
      access_token: string | null;
    }
  }

  /**
   * Microsoft Teams channel data
   */
  export interface MsTeamsChannelData {
    connections: Array<
      MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
    >;

    /**
     * The Microsoft Teams tenant ID
     */
    ms_teams_tenant_id?: string | null;
  }

  export namespace MsTeamsChannelData {
    /**
     * Microsoft Teams token connection
     */
    export interface MsTeamsTokenConnection {
      /**
       * The Microsoft Teams channel ID
       */
      ms_teams_channel_id?: string | null;

      /**
       * The Microsoft Teams team ID
       */
      ms_teams_team_id?: string | null;

      /**
       * The Microsoft Teams tenant ID
       */
      ms_teams_tenant_id?: string | null;

      /**
       * The Microsoft Teams user ID
       */
      ms_teams_user_id?: string | null;
    }

    /**
     * Microsoft Teams incoming webhook connection
     */
    export interface MsTeamsIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
    }

    export namespace MsTeamsIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      export interface IncomingWebhook {
        /**
         * The URL of the incoming webhook
         */
        url: string;
      }
    }
  }

  /**
   * Discord channel data
   */
  export interface DiscordChannelData {
    connections: Array<
      DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
    >;
  }

  export namespace DiscordChannelData {
    /**
     * Discord channel connection
     */
    export interface DiscordChannelConnection {
      /**
       * The Discord channel ID
       */
      channel_id: string;
    }

    /**
     * Discord incoming webhook connection
     */
    export interface DiscordIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
    }

    export namespace DiscordIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      export interface IncomingWebhook {
        /**
         * The URL of the incoming webhook
         */
        url: string;
      }
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
export interface ObjectSetPreferencesResponse {
  id: string;

  __typename: string;

  /**
   * A map of categories and their settings
   */
  categories?: Record<
    string,
    boolean | ObjectSetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences
   */
  channel_types?: ObjectSetPreferencesResponse.ChannelTypes | null;

  /**
   * A map of workflows and their settings
   */
  workflows?: Record<
    string,
    boolean | ObjectSetPreferencesResponse.PreferenceSetWorkflowCategorySettingObject
  > | null;
}

export namespace ObjectSetPreferencesResponse {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

    conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
  }

  export namespace ChannelTypes {
    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

    conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
export type ObjectUnsetChannelDataResponse = string;

export interface ObjectListParams {
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

export interface ObjectAddSubscriptionsParams {
  /**
   * The recipients to subscribe to the object
   */
  recipients: Array<
    | string
    | ObjectAddSubscriptionsParams.InlineIdentifyUserRequest
    | ObjectAddSubscriptionsParams.InlineIdentifyObjectRequest
  >;

  /**
   * The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
}

export namespace ObjectAddSubscriptionsParams {
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
    channel_data?: Record<string, InlineIdentifyUserRequest.ChannelData> | null;

    /**
     * The creation date of the user from your system.
     */
    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, InlineIdentifyUserRequest.Preferences> | null;
    [k: string]: unknown;
  }

  export namespace InlineIdentifyUserRequest {
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
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
   * Inline identifies a custom object belonging to a collection
   */
  export interface InlineIdentifyObjectRequest {
    id: string;

    collection: string;

    /**
     * Allows inline setting channel data for a recipient
     */
    channel_data?: Record<string, InlineIdentifyObjectRequest.ChannelData> | null;

    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, InlineIdentifyObjectRequest.Preferences> | null;
    [k: string]: unknown;
  }

  export namespace InlineIdentifyObjectRequest {
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
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
}

export interface ObjectDeleteSubscriptionsParams {
  recipients: Array<
    | string
    | ObjectDeleteSubscriptionsParams.InlineIdentifyUserRequest
    | ObjectDeleteSubscriptionsParams.InlineIdentifyObjectRequest
  >;
}

export namespace ObjectDeleteSubscriptionsParams {
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
    channel_data?: Record<string, InlineIdentifyUserRequest.ChannelData> | null;

    /**
     * The creation date of the user from your system.
     */
    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, InlineIdentifyUserRequest.Preferences> | null;
    [k: string]: unknown;
  }

  export namespace InlineIdentifyUserRequest {
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
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
   * Inline identifies a custom object belonging to a collection
   */
  export interface InlineIdentifyObjectRequest {
    id: string;

    collection: string;

    /**
     * Allows inline setting channel data for a recipient
     */
    channel_data?: Record<string, InlineIdentifyObjectRequest.ChannelData> | null;

    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, InlineIdentifyObjectRequest.Preferences> | null;
    [k: string]: unknown;
  }

  export namespace InlineIdentifyObjectRequest {
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
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
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
}

export interface ObjectGetPreferencesParams {
  /**
   * Tenant ID
   */
  tenant?: string;
}

export interface ObjectListMessagesParams {
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

export interface ObjectListSchedulesParams {
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

export interface ObjectListSubscriptionsParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * Mode of the request
   */
  mode?: 'recipient' | 'object';

  /**
   * The page size to fetch
   */
  page_size?: number;
}

export interface ObjectSetParams {
  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: Record<string, ObjectSetParams.ChannelData> | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: Record<string, ObjectSetParams.Preferences> | null;
}

export namespace ObjectSetParams {
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
      connections: Array<
        SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
      >;

      /**
       * A token that's used to store the access token for a Slack workspace.
       */
      token?: SlackChannelData.Token | null;
    }

    export namespace SlackChannelData {
      /**
       * A Slack connection, which either includes a channel_id or a user_id
       */
      export interface SlackTokenConnection {
        access_token?: string | null;

        channel_id?: string | null;

        user_id?: string | null;
      }

      /**
       * An incoming webhook Slack connection
       */
      export interface SlackIncomingWebhookConnection {
        url: string;
      }

      /**
       * A token that's used to store the access token for a Slack workspace.
       */
      export interface Token {
        access_token: string | null;
      }
    }

    /**
     * Microsoft Teams channel data
     */
    export interface MsTeamsChannelData {
      connections: Array<
        MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
      >;

      /**
       * The Microsoft Teams tenant ID
       */
      ms_teams_tenant_id?: string | null;
    }

    export namespace MsTeamsChannelData {
      /**
       * Microsoft Teams token connection
       */
      export interface MsTeamsTokenConnection {
        /**
         * The Microsoft Teams channel ID
         */
        ms_teams_channel_id?: string | null;

        /**
         * The Microsoft Teams team ID
         */
        ms_teams_team_id?: string | null;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;

        /**
         * The Microsoft Teams user ID
         */
        ms_teams_user_id?: string | null;
      }

      /**
       * Microsoft Teams incoming webhook connection
       */
      export interface MsTeamsIncomingWebhookConnection {
        /**
         * The incoming webhook
         */
        incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
      }

      export namespace MsTeamsIncomingWebhookConnection {
        /**
         * The incoming webhook
         */
        export interface IncomingWebhook {
          /**
           * The URL of the incoming webhook
           */
          url: string;
        }
      }
    }

    /**
     * Discord channel data
     */
    export interface DiscordChannelData {
      connections: Array<
        DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
      >;
    }

    export namespace DiscordChannelData {
      /**
       * Discord channel connection
       */
      export interface DiscordChannelConnection {
        /**
         * The Discord channel ID
         */
        channel_id: string;
      }

      /**
       * Discord incoming webhook connection
       */
      export interface DiscordIncomingWebhookConnection {
        /**
         * The incoming webhook
         */
        incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
      }

      export namespace DiscordIncomingWebhookConnection {
        /**
         * The incoming webhook
         */
        export interface IncomingWebhook {
          /**
           * The URL of the incoming webhook
           */
          url: string;
        }
      }
    }
  }

  /**
   * Set preferences for a recipient
   */
  export interface Preferences {
    /**
     * A setting for a preference set, where the key in the object is the category, and
     * the values are the preference settings for that category.
     */
    categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

    /**
     * Channel type preferences
     */
    channel_types?: Preferences.ChannelTypes | null;

    /**
     * A setting for a preference set, where the key in the object is the workflow key,
     * and the values are the preference settings for that workflow.
     */
    workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
  }

  export namespace Preferences {
    /**
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

      conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
    }

    export namespace PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
     * The settings object for a workflow or category, where you can specify channel
     * types or conditions.
     */
    export interface PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

      conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
    }

    export namespace PreferenceSetWorkflowCategorySettingObject {
      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
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

export interface ObjectSetChannelDataParams {
  /**
   * Channel data for push providers
   */
  data:
    | ObjectSetChannelDataParams.PushChannelData
    | ObjectSetChannelDataParams.OneSignalChannelData
    | ObjectSetChannelDataParams.SlackChannelData
    | ObjectSetChannelDataParams.MsTeamsChannelData
    | ObjectSetChannelDataParams.DiscordChannelData;
}

export namespace ObjectSetChannelDataParams {
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
    connections: Array<
      SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
    >;

    /**
     * A token that's used to store the access token for a Slack workspace.
     */
    token?: SlackChannelData.Token | null;
  }

  export namespace SlackChannelData {
    /**
     * A Slack connection, which either includes a channel_id or a user_id
     */
    export interface SlackTokenConnection {
      access_token?: string | null;

      channel_id?: string | null;

      user_id?: string | null;
    }

    /**
     * An incoming webhook Slack connection
     */
    export interface SlackIncomingWebhookConnection {
      url: string;
    }

    /**
     * A token that's used to store the access token for a Slack workspace.
     */
    export interface Token {
      access_token: string | null;
    }
  }

  /**
   * Microsoft Teams channel data
   */
  export interface MsTeamsChannelData {
    connections: Array<
      MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
    >;

    /**
     * The Microsoft Teams tenant ID
     */
    ms_teams_tenant_id?: string | null;
  }

  export namespace MsTeamsChannelData {
    /**
     * Microsoft Teams token connection
     */
    export interface MsTeamsTokenConnection {
      /**
       * The Microsoft Teams channel ID
       */
      ms_teams_channel_id?: string | null;

      /**
       * The Microsoft Teams team ID
       */
      ms_teams_team_id?: string | null;

      /**
       * The Microsoft Teams tenant ID
       */
      ms_teams_tenant_id?: string | null;

      /**
       * The Microsoft Teams user ID
       */
      ms_teams_user_id?: string | null;
    }

    /**
     * Microsoft Teams incoming webhook connection
     */
    export interface MsTeamsIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
    }

    export namespace MsTeamsIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      export interface IncomingWebhook {
        /**
         * The URL of the incoming webhook
         */
        url: string;
      }
    }
  }

  /**
   * Discord channel data
   */
  export interface DiscordChannelData {
    connections: Array<
      DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
    >;
  }

  export namespace DiscordChannelData {
    /**
     * Discord channel connection
     */
    export interface DiscordChannelConnection {
      /**
       * The Discord channel ID
       */
      channel_id: string;
    }

    /**
     * Discord incoming webhook connection
     */
    export interface DiscordIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
    }

    export namespace DiscordIncomingWebhookConnection {
      /**
       * The incoming webhook
       */
      export interface IncomingWebhook {
        /**
         * The URL of the incoming webhook
         */
        url: string;
      }
    }
  }
}

export interface ObjectSetPreferencesParams {
  /**
   * A setting for a preference set, where the key in the object is the category, and
   * the values are the preference settings for that category.
   */
  categories?: Record<
    string,
    boolean | ObjectSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences
   */
  channel_types?: ObjectSetPreferencesParams.ChannelTypes | null;

  /**
   * A setting for a preference set, where the key in the object is the workflow key,
   * and the values are the preference settings for that workflow.
   */
  workflows?: Record<
    string,
    boolean | ObjectSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject
  > | null;
}

export namespace ObjectSetPreferencesParams {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

    conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
  }

  export namespace ChannelTypes {
    /**
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
     * A set of settings for a channel type. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelTypeSettingObject {
      conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
    }

    export namespace PreferenceSetChannelTypeSettingObject {
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
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

    conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    export interface ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
    }

    export namespace ChannelTypes {
      /**
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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
       * A set of settings for a channel type. Currently, this can only be a list of
       * conditions to apply.
       */
      export interface PreferenceSetChannelTypeSettingObject {
        conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
      }

      export namespace PreferenceSetChannelTypeSettingObject {
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

Objects.Bulk = Bulk;

export declare namespace Objects {
  export {
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectAddSubscriptionsResponse as ObjectAddSubscriptionsResponse,
    type ObjectDeleteSubscriptionsResponse as ObjectDeleteSubscriptionsResponse,
    type ObjectGetResponse as ObjectGetResponse,
    type ObjectGetChannelDataResponse as ObjectGetChannelDataResponse,
    type ObjectGetPreferencesResponse as ObjectGetPreferencesResponse,
    type ObjectListMessagesResponse as ObjectListMessagesResponse,
    type ObjectListPreferencesResponse as ObjectListPreferencesResponse,
    type ObjectListSchedulesResponse as ObjectListSchedulesResponse,
    type ObjectListSubscriptionsResponse as ObjectListSubscriptionsResponse,
    type ObjectSetResponse as ObjectSetResponse,
    type ObjectSetChannelDataResponse as ObjectSetChannelDataResponse,
    type ObjectSetPreferencesResponse as ObjectSetPreferencesResponse,
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
    type ObjectListParams as ObjectListParams,
    type ObjectAddSubscriptionsParams as ObjectAddSubscriptionsParams,
    type ObjectDeleteSubscriptionsParams as ObjectDeleteSubscriptionsParams,
    type ObjectGetPreferencesParams as ObjectGetPreferencesParams,
    type ObjectListMessagesParams as ObjectListMessagesParams,
    type ObjectListSchedulesParams as ObjectListSchedulesParams,
    type ObjectListSubscriptionsParams as ObjectListSubscriptionsParams,
    type ObjectSetParams as ObjectSetParams,
    type ObjectSetChannelDataParams as ObjectSetChannelDataParams,
    type ObjectSetPreferencesParams as ObjectSetPreferencesParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkAddSubscriptionsResponse as BulkAddSubscriptionsResponse,
    type BulkSetResponse as BulkSetResponse,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}
