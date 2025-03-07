// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { ObjectsEntriesCursor, SchedulesEntriesCursor, SubscriptionsEntriesCursor } from '../shared';
import * as MessagesAPI from '../messages/messages';
import { MessagesEntriesCursor } from '../messages/messages';
import * as BulkAPI from './bulk';
import { Bulk, BulkAddSubscriptionsParams, BulkDeleteParams, BulkSetParams } from './bulk';
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
  ): APIPromise<Shared.ChannelData> {
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
  ): APIPromise<Shared.PreferenceSet> {
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
  ): PagePromise<MessagesEntriesCursor, MessagesAPI.Message> {
    const { collection, ...query } = params;
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${id}/messages`,
      EntriesCursor<MessagesAPI.Message>,
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
  ): PagePromise<SchedulesEntriesCursor, Shared.Schedule> {
    const { collection, ...query } = params;
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${id}/schedules`,
      EntriesCursor<Shared.Schedule>,
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
  ): PagePromise<SubscriptionsEntriesCursor, Shared.Subscription> {
    const { collection, ...query } = params;
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${objectID}/subscriptions`,
      EntriesCursor<Shared.Subscription>,
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
  ): APIPromise<Shared.ChannelData> {
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
  ): APIPromise<Shared.PreferenceSet> {
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

/**
 * An empty response
 */
export type ObjectDeleteResponse = string;

/**
 * Response containing a list of subscriptions
 */
export type ObjectAddSubscriptionsResponse = Array<Shared.Subscription>;

/**
 * Response containing a list of subscriptions
 */
export type ObjectDeleteSubscriptionsResponse = Array<Shared.Subscription>;

/**
 * A list of preference sets for the object
 */
export type ObjectListPreferencesResponse = Array<Shared.PreferenceSet>;

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
  recipients: Array<Shared.RecipientRequest>;

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
  recipients: Array<Shared.RecipientRequest>;
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
    type ObjectListPreferencesResponse as ObjectListPreferencesResponse,
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
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
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}

export {
  type ObjectsEntriesCursor,
  type MessagesEntriesCursor,
  type SchedulesEntriesCursor,
  type SubscriptionsEntriesCursor,
};
