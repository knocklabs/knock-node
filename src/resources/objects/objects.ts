// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
   * Add subscriptions for an object. If a subscription already exists, it will be
   * updated. This endpoint also handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `recipient`.
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
   * List subscriptions for an object. Either list the recipients that subscribe to
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
  recipients: Array<RecipientsAPI.RecipientReference>;
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
  objects?: Array<RecipientsAPI.RecipientReference>;

  /**
   * Recipients to filter by (only used if mode is `object`).
   */
  recipients?: Array<RecipientsAPI.RecipientReference>;
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

Objects.Bulk = Bulk;

export declare namespace Objects {
  export {
    type InlineObjectRequest as InlineObjectRequest,
    type Object as Object,
    type ObjectAddSubscriptionsResponse as ObjectAddSubscriptionsResponse,
    type ObjectDeleteSubscriptionsResponse as ObjectDeleteSubscriptionsResponse,
    type ObjectListPreferencesResponse as ObjectListPreferencesResponse,
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
    type ObjectsEntriesCursor as ObjectsEntriesCursor,
    type ObjectListParams as ObjectListParams,
    type ObjectAddSubscriptionsParams as ObjectAddSubscriptionsParams,
    type ObjectDeleteSubscriptionsParams as ObjectDeleteSubscriptionsParams,
    type ObjectListSubscriptionsParams as ObjectListSubscriptionsParams,
    type ObjectSetChannelDataParams as ObjectSetChannelDataParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}

export { type SubscriptionsEntriesCursor };
