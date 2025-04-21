// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as MessagesAPI from '../messages/messages';
import { MessagesEntriesCursor } from '../messages/messages';
import * as BulkAPI from './bulk';
import { Bulk, BulkAddSubscriptionsParams, BulkDeleteParams, BulkSetParams } from './bulk';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as RecipientsAPI from '../recipients/recipients';
import * as SubscriptionsAPI from '../recipients/subscriptions';
import { SubscriptionsEntriesCursor } from '../recipients/subscriptions';
import * as SchedulesAPI from '../schedules/schedules';
import { SchedulesEntriesCursor } from '../schedules/schedules';
import { APIPromise } from '../../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Objects extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Returns a paginated list of objects from the specified collection. Optionally
   * includes preference data for the objects.
   */
  list(
    collection: string,
    query: ObjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ObjectsEntriesCursor, Object> {
    return this._client.getAPIList(path`/v1/objects/${collection}`, EntriesCursor<Object>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently removes an object from the specified collection. This operation
   * cannot be undone.
   */
  delete(collection: string, objectID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/objects/${collection}/${objectID}`, options);
  }

  /**
   * Add subscriptions for an object. If a subscription already exists, it will be
   * updated.
   */
  addSubscriptions(
    collection: string,
    objectID: string,
    body: ObjectAddSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<ObjectAddSubscriptionsResponse> {
    return this._client.post(path`/v1/objects/${collection}/${objectID}/subscriptions`, { body, ...options });
  }

  /**
   * Delete subscriptions for the specified recipients from an object. Returns the
   * list of deleted subscriptions.
   */
  deleteSubscriptions(
    collection: string,
    objectID: string,
    body: ObjectDeleteSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<ObjectDeleteSubscriptionsResponse> {
    return this._client.delete(path`/v1/objects/${collection}/${objectID}/subscriptions`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a specific object by its ID from the specified collection. Returns the
   * object with all its properties.
   */
  get(collection: string, objectID: string, options?: RequestOptions): APIPromise<Object> {
    return this._client.get(path`/v1/objects/${collection}/${objectID}`, options);
  }

  /**
   * Returns the channel data for the specified object and channel.
   */
  getChannelData(
    collection: string,
    objectID: string,
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<ChannelDataAPI.ChannelData> {
    return this._client.get(path`/v1/objects/${collection}/${objectID}/channel_data/${channelID}`, options);
  }

  /**
   * Returns the preference set for the specified object.
   */
  getPreferences(
    collection: string,
    objectID: string,
    preferenceSetID: string,
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.get(
      path`/v1/objects/${collection}/${objectID}/preferences/${preferenceSetID}`,
      options,
    );
  }

  /**
   * Returns a paginated list of messages for a specific object in the given
   * collection. Allows filtering by message status and provides various sorting
   * options.
   */
  listMessages(
    collection: string,
    objectID: string,
    query: ObjectListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesEntriesCursor, MessagesAPI.Message> {
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${objectID}/messages`,
      EntriesCursor<MessagesAPI.Message>,
      { query, ...options },
    );
  }

  /**
   * Returns a paginated list of preference sets for the specified object.
   */
  listPreferences(
    collection: string,
    objectID: string,
    options?: RequestOptions,
  ): APIPromise<ObjectListPreferencesResponse> {
    return this._client.get(path`/v1/objects/${collection}/${objectID}/preferences`, options);
  }

  /**
   * Returns a paginated list of schedules for an object.
   */
  listSchedules(
    collection: string,
    objectID: string,
    query: ObjectListSchedulesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SchedulesEntriesCursor, SchedulesAPI.Schedule> {
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${objectID}/schedules`,
      EntriesCursor<SchedulesAPI.Schedule>,
      { query, ...options },
    );
  }

  /**
   * List subscriptions for an object. Eitherlist the recipients that subscribe to
   * the provided object, or list the objects that the provided object is subscribed
   * to. Determined by the `mode` query parameter.
   */
  listSubscriptions(
    collection: string,
    objectID: string,
    query: ObjectListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SubscriptionsEntriesCursor, SubscriptionsAPI.Subscription> {
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${objectID}/subscriptions`,
      EntriesCursor<SubscriptionsAPI.Subscription>,
      { query, ...options },
    );
  }

  /**
   * Creates a new object or updates an existing one in the specified collection.
   * This operation is used to identify objects with their properties and channel
   * data.
   */
  set(
    collection: string,
    objectID: string,
    body: ObjectSetParams,
    options?: RequestOptions,
  ): APIPromise<Object> {
    return this._client.put(path`/v1/objects/${collection}/${objectID}`, { body, ...options });
  }

  /**
   * Sets the channel data for the specified object and channel.
   */
  setChannelData(
    collection: string,
    objectID: string,
    channelID: string,
    body: ObjectSetChannelDataParams,
    options?: RequestOptions,
  ): APIPromise<ChannelDataAPI.ChannelData> {
    return this._client.put(path`/v1/objects/${collection}/${objectID}/channel_data/${channelID}`, {
      body,
      ...options,
    });
  }

  /**
   * Updates the preference set for the specified object.
   */
  setPreferences(
    collection: string,
    objectID: string,
    preferenceSetID: string,
    body: ObjectSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.put(path`/v1/objects/${collection}/${objectID}/preferences/${preferenceSetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Unsets the channel data for the specified object and channel.
   */
  unsetChannelData(
    collection: string,
    objectID: string,
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.delete(
      path`/v1/objects/${collection}/${objectID}/channel_data/${channelID}`,
      options,
    );
  }
}

export type ObjectsEntriesCursor = EntriesCursor<Object>;

/**
 * A custom object entity which belongs to a collection.
 */
export interface InlineObjectRequest {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * The collection this object belongs to.
   */
  collection: string;

  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * Timestamp when the resource was created.
   */
  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  [k: string]: unknown;
}

/**
 * A custom object entity which belongs to a collection.
 */
export interface Object {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * The collection this object belongs to.
   */
  collection: string;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * Timestamp when the resource was created.
   */
  created_at?: string | null;

  [k: string]: unknown;
}

/**
 * An empty response.
 */
export type ObjectDeleteResponse = string;

/**
 * A response containing a list of subscriptions.
 */
export type ObjectAddSubscriptionsResponse = Array<SubscriptionsAPI.Subscription>;

/**
 * A response containing a list of subscriptions.
 */
export type ObjectDeleteSubscriptionsResponse = Array<SubscriptionsAPI.Subscription>;

/**
 * A list of preference sets for the object
 */
export type ObjectListPreferencesResponse = Array<PreferencesAPI.PreferenceSet>;

/**
 * An empty response.
 */
export type ObjectUnsetChannelDataResponse = string;

export interface ObjectListParams extends EntriesCursorParams {
  /**
   * Includes preferences of the objects in the response.
   */
  include?: Array<'preferences'>;
}

export interface ObjectAddSubscriptionsParams {
  /**
   * The recipients of the subscription.
   */
  recipients: Array<RecipientsAPI.RecipientRequest>;

  /**
   * The custom properties associated with the recipients of the subscription.
   */
  properties?: Record<string, unknown> | null;
}

export interface ObjectDeleteSubscriptionsParams {
  /**
   * The recipients of the subscription.
   */
  recipients: Array<RecipientsAPI.RecipientRequest>;
}

export interface ObjectListMessagesParams extends EntriesCursorParams {
  /**
   * Limits the results to items with the corresponding channel ID.
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

export interface ObjectListSchedulesParams extends EntriesCursorParams {
  /**
   * Filter schedules by tenant id.
   */
  tenant?: string;

  /**
   * Filter schedules by workflow id.
   */
  workflow?: string;
}

export interface ObjectListSubscriptionsParams extends EntriesCursorParams {
  /**
   * Additional fields to include in the response.
   */
  include?: Array<'preferences'>;

  /**
   * Mode of the request.
   */
  mode?: 'recipient' | 'object';

  /**
   * Objects to filter by (only used if mode is `recipient`).
   */
  objects?: Array<string | ObjectListSubscriptionsParams.ObjectReference>;

  /**
   * Recipients to filter by (only used if mode is `object`).
   */
  recipients?: Array<string | ObjectListSubscriptionsParams.ObjectReference>;
}

export namespace ObjectListSubscriptionsParams {
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

export interface ObjectSetParams {
  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  [k: string]: unknown;
}

export interface ObjectSetChannelDataParams {
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

export interface ObjectSetPreferencesParams {
  /**
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: Record<
    string,
    boolean | ObjectSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject
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

Objects.Bulk = Bulk;

export declare namespace Objects {
  export {
    type InlineObjectRequest as InlineObjectRequest,
    type Object as Object,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectAddSubscriptionsResponse as ObjectAddSubscriptionsResponse,
    type ObjectDeleteSubscriptionsResponse as ObjectDeleteSubscriptionsResponse,
    type ObjectListPreferencesResponse as ObjectListPreferencesResponse,
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
    type ObjectsEntriesCursor as ObjectsEntriesCursor,
    type ObjectListParams as ObjectListParams,
    type ObjectAddSubscriptionsParams as ObjectAddSubscriptionsParams,
    type ObjectDeleteSubscriptionsParams as ObjectDeleteSubscriptionsParams,
    type ObjectListMessagesParams as ObjectListMessagesParams,
    type ObjectListSchedulesParams as ObjectListSchedulesParams,
    type ObjectListSubscriptionsParams as ObjectListSubscriptionsParams,
    type ObjectSetParams as ObjectSetParams,
    type ObjectSetChannelDataParams as ObjectSetChannelDataParams,
    type ObjectSetPreferencesParams as ObjectSetPreferencesParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}

export { type MessagesEntriesCursor, type SchedulesEntriesCursor, type SubscriptionsEntriesCursor };
