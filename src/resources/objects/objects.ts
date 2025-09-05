// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SharedAPI from '../shared';
import * as MessagesAPI from '../messages/messages';
import { MessagesItemsCursor } from '../messages/messages';
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
import {
  EntriesCursor,
  type EntriesCursorParams,
  ItemsCursor,
  type ItemsCursorParams,
  PagePromise,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Objects extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Returns a paginated list of objects from the specified collection. Optionally
   * includes preference data for the objects.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const object of client.objects.list(
   *   'collection',
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const object = await client.objects.delete(
   *   'collection',
   *   'id',
   * );
   * ```
   */
  delete(collection: string, id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Add subscriptions for an object. If a subscription already exists, it will be
   * updated. This endpoint also handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `recipient`.
   *
   * @example
   * ```ts
   * const subscriptions = await client.objects.addSubscriptions(
   *   'collection',
   *   'object_id',
   *   {
   *     recipients: ['user_1', 'user_2'],
   *     properties: { key: 'value' },
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const subscriptions =
   *   await client.objects.deleteSubscriptions(
   *     'collection',
   *     'object_id',
   *     { recipients: ['user_123'] },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const object = await client.objects.get('collection', 'id');
   * ```
   */
  get(collection: string, id: string, options?: RequestOptions): APIPromise<Object> {
    return this._client.get(path`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Returns the channel data for the specified object and channel.
   *
   * @example
   * ```ts
   * const channelData = await client.objects.getChannelData(
   *   'collection',
   *   'object_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
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
   * Returns the preference set for the specified object and preference set `id`.
   *
   * @example
   * ```ts
   * const preferenceSet = await client.objects.getPreferences(
   *   'collection',
   *   'object_id',
   *   'default',
   * );
   * ```
   */
  getPreferences(
    collection: string,
    objectID: string,
    id: string,
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.get(path`/v1/objects/${collection}/${objectID}/preferences/${id}`, options);
  }

  /**
   * Returns a paginated list of messages for a specific object in the given
   * collection. Allows filtering by message status and provides various sorting
   * options.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const message of client.objects.listMessages(
   *   'projects',
   *   'project-123',
   * )) {
   *   // ...
   * }
   * ```
   */
  listMessages(
    collection: string,
    id: string,
    query: ObjectListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesItemsCursor, MessagesAPI.Message> {
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${id}/messages`,
      ItemsCursor<MessagesAPI.Message>,
      { query, ...options },
    );
  }

  /**
   * Returns a paginated list of preference sets for the specified object.
   *
   * @example
   * ```ts
   * const preferenceSets = await client.objects.listPreferences(
   *   'collection',
   *   'object_id',
   * );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const schedule of client.objects.listSchedules(
   *   'collection',
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listSchedules(
    collection: string,
    id: string,
    query: ObjectListSchedulesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SchedulesEntriesCursor, SchedulesAPI.Schedule> {
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${id}/schedules`,
      EntriesCursor<SchedulesAPI.Schedule>,
      { query, ...options },
    );
  }

  /**
   * List subscriptions for an object. Either list the recipients that subscribe to
   * the provided object, or list the objects that the provided object is subscribed
   * to. Determined by the `mode` query parameter.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const subscription of client.objects.listSubscriptions(
   *   'collection',
   *   'object_id',
   * )) {
   *   // ...
   * }
   * ```
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
   * This operation is used to identify objects with their properties, as well as
   * optional preferences and channel data.
   *
   * @example
   * ```ts
   * const object = await client.objects.set(
   *   'collection',
   *   'id',
   *   {
   *     channel_data: {
   *       '97c5837d-c65c-4d54-aa39-080eeb81c69d': {
   *         tokens: ['push_token_123'],
   *       },
   *     },
   *     locale: 'en-US',
   *     preferences: {
   *       default: {
   *         channel_types: { email: true },
   *         workflows: {
   *           'dinosaurs-loose': {
   *             channel_types: { email: true },
   *           },
   *         },
   *       },
   *     },
   *     timezone: 'America/New_York',
   *   },
   * );
   * ```
   */
  set(collection: string, id: string, body: ObjectSetParams, options?: RequestOptions): APIPromise<Object> {
    return this._client.put(path`/v1/objects/${collection}/${id}`, { body, ...options });
  }

  /**
   * Sets the channel data for the specified object and channel. If no object exists
   * in the current environment for the given `collection` and `object_id`, Knock
   * will create the object as part of this request.
   *
   * @example
   * ```ts
   * const channelData = await client.objects.setChannelData(
   *   'collection',
   *   'object_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { data: { tokens: ['push_token_1'] } },
   * );
   * ```
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
   * Sets preferences within the given preference set. By default, this is a
   * destructive operation and will replace any existing preferences with the
   * preferences given. Use '\_\_persistence_strategy': 'merge' to merge with
   * existing preferences instead. If no object exists in the current environment for
   * the given `:collection` and `:object_id`, Knock will create the object as part
   * of this request. The preference set `:id` can be either `default` or a
   * `tenant.id`. Learn more about
   * [per-tenant preferences](/preferences/tenant-preferences).
   *
   * @example
   * ```ts
   * const preferenceSet = await client.objects.setPreferences(
   *   'collection',
   *   'object_id',
   *   'default',
   *   {
   *     __persistence_strategy__: 'merge',
   *     categories: {
   *       marketing: false,
   *       transactional: { channel_types: { email: false } },
   *     },
   *     channel_types: { email: true },
   *     workflows: {
   *       'dinosaurs-loose': {
   *         channel_types: { email: false },
   *       },
   *     },
   *   },
   * );
   * ```
   */
  setPreferences(
    collection: string,
    objectID: string,
    id: string,
    body: ObjectSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<PreferencesAPI.PreferenceSet> {
    return this._client.put(path`/v1/objects/${collection}/${objectID}/preferences/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Unsets the channel data for the specified object and channel.
   *
   * @example
   * ```ts
   * const response = await client.objects.unsetChannelData(
   *   'collection',
   *   'object_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
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
 * A custom [Object](/concepts/objects) entity which belongs to a collection.
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
   * Inline set preferences for a recipient, where the key is the preference set id.
   * Preferences that are set inline will be merged into any existing preferences
   * rather than replacing them.
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  [k: string]: unknown;
}

/**
 * A custom [Object](/concepts/objects) entity which belongs to a collection.
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

  /**
   * The custom properties associated with the object.
   */
  properties?: { [key: string]: unknown };
}

/**
 * A `204 No Content` response.
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
 * A `204 No Content` response.
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
   * The recipients of the subscription. You can subscribe up to 100 recipients to an
   * object at a time.
   */
  recipients: Array<RecipientsAPI.RecipientRequest>;

  /**
   * The custom properties associated with the subscription relationship.
   */
  properties?: { [key: string]: unknown } | null;
}

export interface ObjectDeleteSubscriptionsParams {
  /**
   * The recipients of the subscription. You can subscribe up to 100 recipients to an
   * object at a time.
   */
  recipients: Array<RecipientsAPI.RecipientReference>;
}

export interface ObjectListMessagesParams extends ItemsCursorParams {
  /**
   * Limits the results to items with the corresponding channel ID.
   */
  channel_id?: string;

  /**
   * Limits the results to messages with the given engagement status.
   */
  engagement_status?: Array<
    'seen' | 'unseen' | 'read' | 'unread' | 'archived' | 'unarchived' | 'link_clicked' | 'interacted'
  >;

  inserted_at?: ObjectListMessagesParams.InsertedAt;

  /**
   * Limits the results to only the message IDs given (max 50). Note: when using this
   * option, the results will be subject to any other filters applied to the query.
   */
  message_ids?: Array<string>;

  /**
   * Limits the results to messages triggered by the given workflow key.
   */
  source?: string;

  /**
   * Limits the results to messages with the given delivery status.
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * Limits the results to items with the corresponding tenant.
   */
  tenant?: string;

  /**
   * Limits the results to only messages that were generated with the given data. See
   * [trigger data filtering](/api-reference/overview/trigger-data-filtering) for
   * more information.
   */
  trigger_data?: string;

  /**
   * Limits the results to messages related to any of the provided categories.
   */
  workflow_categories?: Array<string>;

  /**
   * Limits the results to messages for a specific recipient's workflow run.
   */
  workflow_recipient_run_id?: string;

  /**
   * Limits the results to messages associated with the top-level workflow run ID
   * returned by the workflow trigger request.
   */
  workflow_run_id?: string;
}

export namespace ObjectListMessagesParams {
  export interface InsertedAt {
    /**
     * Limits the results to messages inserted after the given date.
     */
    gt?: string;

    /**
     * Limits the results to messages inserted after or on the given date.
     */
    gte?: string;

    /**
     * Limits the results to messages inserted before the given date.
     */
    lt?: string;

    /**
     * Limits the results to messages inserted before or on the given date.
     */
    lte?: string;
  }
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
   * Mode of the request. `recipient` to list the objects that the provided object is
   * subscribed to, `object` to list the recipients that subscribe to the provided
   * object.
   */
  mode?: 'recipient' | 'object';

  /**
   * Objects to filter by (only used if mode is `recipient`).
   */
  objects?: Array<ObjectListSubscriptionsParams.Object>;

  /**
   * Recipients to filter by (only used if mode is `object`).
   */
  recipients?: Array<RecipientsAPI.RecipientReference>;
}

export namespace ObjectListSubscriptionsParams {
  /**
   * A reference to a recipient object.
   */
  export interface Object {
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
  channel_data?: ChannelDataAPI.InlineChannelDataRequest;

  /**
   * The locale of the object. Used for
   * [message localization](/concepts/translations).
   */
  locale?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set id.
   * Preferences that are set inline will be merged into any existing preferences
   * rather than replacing them.
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest;

  /**
   * The timezone of the object. Must be a
   * valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   * Used
   * for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).
   */
  timezone?: string | null;

  [k: string]: unknown;
}

export interface ObjectSetChannelDataParams {
  /**
   * Channel data for a given channel type.
   */
  data:
    | ChannelDataAPI.PushChannelData
    | ChannelDataAPI.OneSignalChannelData
    | ObjectSetChannelDataParams.AwsSnsPushChannelData
    | ChannelDataAPI.SlackChannelData
    | ChannelDataAPI.MsTeamsChannelData
    | ChannelDataAPI.DiscordChannelData;
}

export namespace ObjectSetChannelDataParams {
  /**
   * AWS SNS push channel data.
   */
  export interface AwsSnsPushChannelData {
    /**
     * A list of platform endpoint ARNs. See
     * [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).
     */
    target_arns: Array<string>;
  }
}

export interface ObjectSetPreferencesParams {
  /**
   * Controls how the preference set is persisted. 'replace' will completely replace
   * the preference set, 'merge' will merge with existing preferences.
   */
  __persistence_strategy__?: 'merge' | 'replace';

  /**
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: {
    [key: string]: boolean | ObjectSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject;
  } | null;

  /**
   * Channel type preferences.
   */
  channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

  /**
   * An object where the key is the workflow key and the values are the preference
   * settings for that workflow.
   */
  workflows?: {
    [key: string]: boolean | ObjectSetPreferencesParams.PreferenceSetWorkflowCategorySettingObject;
  } | null;
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
    conditions?: Array<SharedAPI.Condition> | null;
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
    conditions?: Array<SharedAPI.Condition> | null;
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

export { type MessagesItemsCursor, type SchedulesEntriesCursor, type SubscriptionsEntriesCursor };
