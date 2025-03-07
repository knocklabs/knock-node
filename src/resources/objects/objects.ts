// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { ObjectsEntriesCursor } from '../shared';
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
  ): PagePromise<ObjectsEntriesCursor, Shared.Object> {
    return this._client.getAPIList(path`/v1/objects/${collection}`, EntriesCursor<Shared.Object>, {
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
  get(id: string, params: ObjectGetParams, options?: RequestOptions): APIPromise<Shared.Object> {
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
  set(id: string, params: ObjectSetParams, options?: RequestOptions): APIPromise<Shared.Object> {
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

export type ObjectListMessagesResponsesEntriesCursor = EntriesCursor<ObjectListMessagesResponse>;

export type ObjectListSchedulesResponsesEntriesCursor = EntriesCursor<ObjectListSchedulesResponse>;

export type ObjectListSubscriptionsResponsesEntriesCursor = EntriesCursor<ObjectListSubscriptionsResponse>;

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
    object: Shared.Object;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Shared.Object;

    updated_at: string;

    /**
     * The custom properties associated with the subscription
     */
    properties?: Record<string, unknown> | null;
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
    object: Shared.Object;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Shared.Object;

    updated_at: string;

    /**
     * The custom properties associated with the subscription
     */
    properties?: Record<string, unknown> | null;
  }
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
    | Shared.PushChannelData
    | Shared.SlackChannelData
    | Shared.MsTeamsChannelData
    | Shared.DiscordChannelData
    | Shared.OneSignalChannelData;
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
  channel_types?: Shared.PreferenceSetChannelTypes | null;

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
    channel_types?: Shared.PreferenceSetChannelTypes | null;

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
export interface ObjectListSchedulesResponse {
  id: string;

  inserted_at: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: UsersAPI.User | Shared.Object;

  repeats: Array<Shared.ScheduleRepeatRule>;

  updated_at: string;

  workflow: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: UsersAPI.User | Shared.Object | null;

  data?: Record<string, unknown> | null;

  last_occurrence_at?: string | null;

  next_occurrence_at?: string | null;

  tenant?: string | null;
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
  object: Shared.Object;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: UsersAPI.User | Shared.Object;

  updated_at: string;

  /**
   * The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
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
    | Shared.PushChannelData
    | Shared.SlackChannelData
    | Shared.MsTeamsChannelData
    | Shared.DiscordChannelData
    | Shared.OneSignalChannelData;
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
  channel_types?: Shared.PreferenceSetChannelTypes | null;

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
  recipients: Array<string | Shared.InlineIdentifyUserRequest | Shared.InlineIdentifyObjectRequest>;

  /**
   * Body param: The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
}

export interface ObjectDeleteSubscriptionsParams {
  /**
   * Path param: Collection name
   */
  collection: string;

  /**
   * Body param:
   */
  recipients: Array<string | Shared.InlineIdentifyUserRequest | Shared.InlineIdentifyObjectRequest>;
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
  channel_data?: Shared.InlineChannelDataRequest | null;

  /**
   * Body param: Inline set preferences for a recipient, where the key is the
   * preference set name
   */
  preferences?: Shared.InlinePreferenceSetRequest | null;
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
    | Shared.PushChannelData
    | Shared.OneSignalChannelData
    | Shared.SlackChannelData
    | Shared.MsTeamsChannelData
    | Shared.DiscordChannelData;
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
  channel_types?: Shared.PreferenceSetChannelTypes | null;

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
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectAddSubscriptionsResponse as ObjectAddSubscriptionsResponse,
    type ObjectDeleteSubscriptionsResponse as ObjectDeleteSubscriptionsResponse,
    type ObjectGetChannelDataResponse as ObjectGetChannelDataResponse,
    type ObjectGetPreferencesResponse as ObjectGetPreferencesResponse,
    type ObjectListMessagesResponse as ObjectListMessagesResponse,
    type ObjectListPreferencesResponse as ObjectListPreferencesResponse,
    type ObjectListSchedulesResponse as ObjectListSchedulesResponse,
    type ObjectListSubscriptionsResponse as ObjectListSubscriptionsResponse,
    type ObjectSetChannelDataResponse as ObjectSetChannelDataResponse,
    type ObjectSetPreferencesResponse as ObjectSetPreferencesResponse,
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
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

export { type ObjectsEntriesCursor };
