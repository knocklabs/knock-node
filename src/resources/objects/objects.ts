// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../messages/messages';
import { MessagesEntriesCursor } from '../messages/messages';
import * as BulkAPI from './bulk';
import { Bulk, BulkAddSubscriptionsParams, BulkDeleteParams, BulkSetParams } from './bulk';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
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
  delete(collection: string, id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Retrieves a specific object by its ID from the specified collection. Returns the
   * object with all its properties.
   */
  get(collection: string, id: string, options?: RequestOptions): APIPromise<Object> {
    return this._client.get(path`/v1/objects/${collection}/${id}`, options);
  }

  /**
   * Returns a paginated list of messages for a specific object in the given
   * collection. Allows filtering by message status and provides various sorting
   * options.
   */
  listMessages(
    collection: string,
    id: string,
    query: ObjectListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesEntriesCursor, MessagesAPI.Message> {
    return this._client.getAPIList(
      path`/v1/objects/${collection}/${id}/messages`,
      EntriesCursor<MessagesAPI.Message>,
      { query, ...options },
    );
  }

  /**
   * Returns a paginated list of schedules for an object.
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
   * Creates a new object or updates an existing one in the specified collection.
   * This operation is used to identify objects with their properties, as well as
   * optional preferences and channel data.
   */
  set(collection: string, id: string, body: ObjectSetParams, options?: RequestOptions): APIPromise<Object> {
    return this._client.put(path`/v1/objects/${collection}/${id}`, { body, ...options });
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
 * A `204 No Content` response.
 */
export type ObjectDeleteResponse = string;

export interface ObjectListParams extends EntriesCursorParams {
  /**
   * Includes preferences of the objects in the response.
   */
  include?: Array<'preferences'>;
}

export interface ObjectListMessagesParams extends EntriesCursorParams {
  /**
   * Limits the results to items with the corresponding channel ID.
   */
  channel_id?: string;

  /**
   * Limits the results to messages with the given engagement status.
   */
  engagement_status?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

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
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest;

  /**
   * The timezone of the object. Must be a valid
   * [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   * Used for
   * [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).
   */
  timezone?: string | null;

  [k: string]: unknown;
}

Objects.Bulk = Bulk;

export declare namespace Objects {
  export {
    type InlineObjectRequest as InlineObjectRequest,
    type Object as Object,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectsEntriesCursor as ObjectsEntriesCursor,
    type ObjectListParams as ObjectListParams,
    type ObjectListMessagesParams as ObjectListMessagesParams,
    type ObjectListSchedulesParams as ObjectListSchedulesParams,
    type ObjectSetParams as ObjectSetParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}

export { type MessagesEntriesCursor, type SchedulesEntriesCursor };
