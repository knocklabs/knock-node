// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
import { APIPromise } from '../../api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Objects extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * List objects in a collection
   */
  list(
    collection: string,
    query: ObjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ObjectListResponsesEntriesCursor, ObjectListResponse> {
    return this._client.getAPIList(path`/v1/objects/${collection}`, EntriesCursor<ObjectListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete an object
   */
  delete(id: string, params: ObjectDeleteParams, options?: RequestOptions): APIPromise<string> {
    const { collection } = params;
    return this._client.delete(path`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Add subscriptions for an object. If a subscription already exists, it will be
   * updated.
   */
  addSubscriptions(
    objectID: string,
    params: ObjectAddSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<ObjectAddSubscriptionsResponse> {
    const { collection, ...body } = params;
    return this._client.post(path`/v1/objects/${collection}/${objectID}/subscriptions`, { body, ...options });
  }

  /**
   * Delete subscriptions
   */
  deleteSubscriptions(
    objectID: string,
    params: ObjectDeleteSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<ObjectDeleteSubscriptionsResponse> {
    const { collection, ...body } = params;
    return this._client.delete(path`/v1/objects/${collection}/${objectID}/subscriptions`, {
      body,
      ...options,
    });
  }

  /**
   * Get an object
   */
  get(id: string, params: ObjectGetParams, options?: RequestOptions): APIPromise<ObjectGetResponse> {
    const { collection } = params;
    return this._client.get(path`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Get channel data
   */
  getChannelData(
    channelID: string,
    params: ObjectGetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<ObjectGetChannelDataResponse> {
    const { collection, object_id } = params;
    return this._client.get(path`/v1/objects/${collection}/${object_id}/channel_data/${channelID}`, options);
  }

  /**
   * Get a preference set
   */
  getPreferences(
    id: string,
    params: ObjectGetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<ObjectGetPreferencesResponse> {
    const { collection, object_id, ...query } = params;
    return this._client.get(path`/v1/objects/${collection}/${object_id}/preferences/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * List messages
   */
  listMessages(
    id: string,
    params: ObjectListMessagesParams,
    options?: RequestOptions,
  ): PagePromise<ObjectListMessagesResponsesEntriesCursor, ObjectListMessagesResponse> {
    const { collection, ...query } = params;
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${id}/messages`,
      EntriesCursor<ObjectListMessagesResponse>,
      { query, ...options },
    );
  }

  /**
   * List preference sets
   */
  listPreferences(
    objectID: string,
    params: ObjectListPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<ObjectListPreferencesResponse> {
    const { collection } = params;
    return this._client.get(path`/v1/objects/${collection}/${objectID}/preferences`, options);
  }

  /**
   * List schedules
   */
  listSchedules(
    id: string,
    params: ObjectListSchedulesParams,
    options?: RequestOptions,
  ): PagePromise<ObjectListSchedulesResponsesEntriesCursor, ObjectListSchedulesResponse> {
    const { collection, ...query } = params;
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${id}/schedules`,
      EntriesCursor<ObjectListSchedulesResponse>,
      { query, ...options },
    );
  }

  /**
   * List subscriptions for an object. Either list all subscriptions that belong to
   * the object, or all subscriptions that this object has. Determined by the `mode`
   * query parameter.
   */
  listSubscriptions(
    objectID: string,
    params: ObjectListSubscriptionsParams,
    options?: RequestOptions,
  ): PagePromise<ObjectListSubscriptionsResponsesEntriesCursor, ObjectListSubscriptionsResponse> {
    const { collection, ...query } = params;
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${objectID}/subscriptions`,
      EntriesCursor<ObjectListSubscriptionsResponse>,
      { query, ...options },
    );
  }

  /**
   * Set (identify) an object
   */
  set(id: string, params: ObjectSetParams, options?: RequestOptions): APIPromise<ObjectSetResponse> {
    const { collection, ...body } = params;
    return this._client.put(path`/v1/objects/${collection}/${id}`, { body, ...options });
  }

  /**
   * Set channel data
   */
  setChannelData(
    channelID: string,
    params: ObjectSetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<ObjectSetChannelDataResponse> {
    const { collection, object_id, ...body } = params;
    return this._client.put(path`/v1/objects/${collection}/${object_id}/channel_data/${channelID}`, {
      body,
      ...options,
    });
  }

  /**
   * Update a preference set
   */
  setPreferences(
    id: string,
    params: ObjectSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<ObjectSetPreferencesResponse> {
    const { collection, object_id, ...body } = params;
    return this._client.put(path`/v1/objects/${collection}/${object_id}/preferences/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Unset channel data
   */
  unsetChannelData(
    channelID: string,
    params: ObjectUnsetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { collection, object_id } = params;
    return this._client.delete(
      path`/v1/objects/${collection}/${object_id}/channel_data/${channelID}`,
      options,
    );
  }
}

export type ObjectListResponsesEntriesCursor = EntriesCursor<ObjectListResponse>;

export type ObjectListMessagesResponsesEntriesCursor = EntriesCursor<ObjectListMessagesResponse>;

export type ObjectListSchedulesResponsesEntriesCursor = EntriesCursor<ObjectListSchedulesResponse>;

export type ObjectListSubscriptionsResponsesEntriesCursor = EntriesCursor<ObjectListSubscriptionsResponse>;

/**
 * A custom-object entity which belongs to a collection.
 */
export interface ObjectListResponse {
  id: string;

  __typename: string;

  collection: string;

  updated_at: string;

  created_at?: string | null;
  [k: string]: unknown;
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
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface ObjectListMessagesResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | ObjectListMessagesResponse.ObjectReference>;

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
  recipient?: string | ObjectListMessagesResponse.ObjectReference;

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
  source?: ObjectListMessagesResponse.Source;

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

export namespace ObjectListMessagesResponse {
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
 * A schedule that represents a recurring workflow execution
 */
export interface ObjectListSchedulesResponse {
  id: string;

  inserted_at: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: UsersAPI.User | ObjectListSchedulesResponse.Object;

  repeats: Array<ObjectListSchedulesResponse.Repeat>;

  updated_at: string;

  workflow: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: UsersAPI.User | ObjectListSchedulesResponse.Object | null;

  data?: Record<string, unknown> | null;

  last_occurrence_at?: string | null;

  next_occurrence_at?: string | null;

  tenant?: string | null;
}

export namespace ObjectListSchedulesResponse {
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
 * A subscription object
 */
export interface ObjectListSubscriptionsResponse {
  __typename: string;

  inserted_at: string;

  /**
   * A custom-object entity which belongs to a collection.
   */
  object: ObjectListSubscriptionsResponse.Object;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: UsersAPI.User | ObjectListSubscriptionsResponse.Object;

  updated_at: string;

  /**
   * The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
}

export namespace ObjectListSubscriptionsResponse {
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

export interface ObjectListParams extends EntriesCursorParams {}

export interface ObjectDeleteParams {
  /**
   * Collection name
   */
  collection: string;
}

export interface ObjectAddSubscriptionsParams {
  /**
   * Path param: Collection name
   */
  collection: string;

  /**
   * Body param: The recipients to subscribe to the object
   */
  recipients: Array<
    | string
    | ObjectAddSubscriptionsParams.InlineIdentifyUserRequest
    | ObjectAddSubscriptionsParams.InlineIdentifyObjectRequest
  >;

  /**
   * Body param: The custom properties associated with the subscription
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
  /**
   * Path param: Collection name
   */
  collection: string;

  /**
   * Body param:
   */
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

export interface ObjectGetParams {
  /**
   * Collection name
   */
  collection: string;
}

export interface ObjectGetChannelDataParams {
  /**
   * The collection
   */
  collection: string;

  /**
   * The object ID
   */
  object_id: string;
}

export interface ObjectGetPreferencesParams {
  /**
   * Path param: Collection
   */
  collection: string;

  /**
   * Path param: Object ID
   */
  object_id: string;

  /**
   * Query param: Tenant ID
   */
  tenant?: string;
}

export interface ObjectListMessagesParams extends EntriesCursorParams {
  /**
   * Path param: The collection name
   */
  collection: string;

  /**
   * Query param: The channel ID
   */
  channel_id?: string;

  /**
   * Query param: The engagement status of the message
   */
  engagement_status?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * Query param: The message IDs to filter messages by
   */
  message_ids?: Array<string>;

  /**
   * Query param: The source of the message (workflow key)
   */
  source?: string;

  /**
   * Query param: The status of the message
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * Query param: The tenant ID
   */
  tenant?: string;

  /**
   * Query param: The trigger data to filter messages by. Must be a valid JSON
   * object.
   */
  trigger_data?: string;

  /**
   * Query param: The workflow categories to filter messages by
   */
  workflow_categories?: Array<string>;

  /**
   * Query param: The workflow recipient run ID to filter messages by
   */
  workflow_recipient_run_id?: string;

  /**
   * Query param: The workflow run ID to filter messages by
   */
  workflow_run_id?: string;
}

export interface ObjectListPreferencesParams {
  /**
   * Collection
   */
  collection: string;
}

export interface ObjectListSchedulesParams extends EntriesCursorParams {
  /**
   * Path param: The collection of the object to list schedules for
   */
  collection: string;

  /**
   * Query param: The ID of the tenant to list schedules for
   */
  tenant?: string;

  /**
   * Query param: The ID of the workflow to list schedules for
   */
  workflow?: string;
}

export interface ObjectListSubscriptionsParams extends EntriesCursorParams {
  /**
   * Path param: Collection name
   */
  collection: string;

  /**
   * Query param: Mode of the request
   */
  mode?: 'recipient' | 'object';

  /**
   * Query param: Recipients to filter by (only used if mode is `object`)
   */
  recipients?: Array<string | ObjectListSubscriptionsParams.ObjectReference>;
}

export namespace ObjectListSubscriptionsParams {
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
}

export interface ObjectSetParams {
  /**
   * Path param: Collection name
   */
  collection: string;

  /**
   * Body param: Allows inline setting channel data for a recipient
   */
  channel_data?: Record<string, ObjectSetParams.ChannelData> | null;

  /**
   * Body param: Inline set preferences for a recipient, where the key is the
   * preference set name
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
   * Path param: The collection
   */
  collection: string;

  /**
   * Path param: The object ID
   */
  object_id: string;

  /**
   * Body param: Channel data for push providers
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
   * Path param: Collection
   */
  collection: string;

  /**
   * Path param: Object ID
   */
  object_id: string;

  /**
   * Body param: A setting for a preference set, where the key in the object is the
   * category, and the values are the preference settings for that category.
   */
  categories?: Record<
    string,
    boolean | ObjectSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Body param: Channel type preferences
   */
  channel_types?: ObjectSetPreferencesParams.ChannelTypes | null;

  /**
   * Body param: A setting for a preference set, where the key in the object is the
   * workflow key, and the values are the preference settings for that workflow.
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

export interface ObjectUnsetChannelDataParams {
  /**
   * The collection
   */
  collection: string;

  /**
   * The object ID
   */
  object_id: string;
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
    type ObjectListResponsesEntriesCursor as ObjectListResponsesEntriesCursor,
    type ObjectListMessagesResponsesEntriesCursor as ObjectListMessagesResponsesEntriesCursor,
    type ObjectListSchedulesResponsesEntriesCursor as ObjectListSchedulesResponsesEntriesCursor,
    type ObjectListSubscriptionsResponsesEntriesCursor as ObjectListSubscriptionsResponsesEntriesCursor,
    type ObjectListParams as ObjectListParams,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectAddSubscriptionsParams as ObjectAddSubscriptionsParams,
    type ObjectDeleteSubscriptionsParams as ObjectDeleteSubscriptionsParams,
    type ObjectGetParams as ObjectGetParams,
    type ObjectGetChannelDataParams as ObjectGetChannelDataParams,
    type ObjectGetPreferencesParams as ObjectGetPreferencesParams,
    type ObjectListMessagesParams as ObjectListMessagesParams,
    type ObjectListPreferencesParams as ObjectListPreferencesParams,
    type ObjectListSchedulesParams as ObjectListSchedulesParams,
    type ObjectListSubscriptionsParams as ObjectListSubscriptionsParams,
    type ObjectSetParams as ObjectSetParams,
    type ObjectSetChannelDataParams as ObjectSetChannelDataParams,
    type ObjectSetPreferencesParams as ObjectSetPreferencesParams,
    type ObjectUnsetChannelDataParams as ObjectUnsetChannelDataParams,
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
