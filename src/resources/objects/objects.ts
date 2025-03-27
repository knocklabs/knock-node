// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchedulesAPI from '../schedules';
import { SchedulesEntriesCursor } from '../schedules';
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
import { APIPromise } from '../../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<ObjectsEntriesCursor, Object> {
    return this._client.getAPIList(path`/v1/objects/${collection}`, EntriesCursor<Object>, {
      query,
      ...options,
    });
  }

  /**
   * Delete an object
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
   * Delete subscriptions
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
   * Get an object
   */
  get(collection: string, objectID: string, options?: RequestOptions): APIPromise<Object> {
    return this._client.get(path`/v1/objects/${collection}/${objectID}`, options);
  }

  /**
   * Get channel data
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
   * Get a preference set
   */
  getPreferences(
    collection: string,
    objectID: string,
    preferenceSetID: string,
    query: ObjectGetPreferencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.get(path`/v1/objects/${collection}/${objectID}/preferences/${preferenceSetID}`, {
      query,
      ...options,
    });
  }

  /**
   * List messages
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
   * List schedules
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
   * List subscriptions for an object. Either list all subscriptions that belong to
   * the object, or all subscriptions that this object has. Determined by the `mode`
   * query parameter.
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
   * Set (identify) an object
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
   * Set channel data
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
   * Update a preference set
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
   * Unset channel data
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
 * Inline identifies a custom object belonging to a collection
 */
export interface InlineObjectRequest {
  id: string;

  collection: string;

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
 * An empty response
 */
export type ObjectDeleteResponse = string;

/**
 * Response containing a list of subscriptions
 */
export type ObjectAddSubscriptionsResponse = Array<SubscriptionsAPI.Subscription>;

/**
 * Response containing a list of subscriptions
 */
export type ObjectDeleteSubscriptionsResponse = Array<SubscriptionsAPI.Subscription>;

/**
 * An empty response
 */
export type ObjectUnsetChannelDataResponse = string;

export interface ObjectListParams extends EntriesCursorParams {}

export interface ObjectAddSubscriptionsParams {
  /**
   * The recipients to subscribe to the object
   */
  recipients: Array<RecipientsAPI.RecipientRequest>;

  /**
   * The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
}

export interface ObjectDeleteSubscriptionsParams {
  recipients: Array<RecipientsAPI.RecipientRequest>;
}

export interface ObjectGetPreferencesParams {
  /**
   * Tenant ID
   */
  tenant?: string;
}

export interface ObjectListMessagesParams extends EntriesCursorParams {
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

export interface ObjectListSchedulesParams extends EntriesCursorParams {
  /**
   * The ID of the tenant to list schedules for
   */
  tenant?: string;

  /**
   * The ID of the workflow to list schedules for
   */
  workflow?: string;
}

export interface ObjectListSubscriptionsParams extends EntriesCursorParams {
  /**
   * Mode of the request
   */
  mode?: 'recipient' | 'object';

  /**
   * Objects to filter by (only used if mode is `recipient`)
   */
  objects?: Array<string | ObjectListSubscriptionsParams.ObjectReference>;

  /**
   * Recipients to filter by (only used if mode is `object`)
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
   * Allows inline setting channel data for a recipient
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;
}

export interface ObjectSetChannelDataParams {
  /**
   * Channel data for push providers
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
  channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

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
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

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
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

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
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
    type ObjectsEntriesCursor as ObjectsEntriesCursor,
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
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}

export { type MessagesEntriesCursor, type SchedulesEntriesCursor, type SubscriptionsEntriesCursor };
