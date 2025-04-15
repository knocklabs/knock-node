// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams } from './bulk';
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
   * Upsert subscriptions for an object
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
   * Delete subscriptions for an object
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
   * Get channel data for an object
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
   * Set channel data for an object
   */
  setChannelData(
    collection: string,
    objectID: string,
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<ChannelDataAPI.ChannelData> {
    return this._client.put(path`/v1/objects/${collection}/${objectID}/channel_data/${channelID}`, options);
  }

  /**
   * Unset channel data for an object
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

export interface ObjectListSubscriptionsParams extends EntriesCursorParams {
  /**
   * Mode of the request
   */
  mode?: 'recipient' | 'object';

  /**
   * Objects to filter by (only used if mode is `recipient`)
   */
  objects?: Array<string | ObjectListSubscriptionsParams.UnionMember1>;

  /**
   * Recipients to filter by (only used if mode is `object`)
   */
  recipients?: Array<string | ObjectListSubscriptionsParams.UnionMember1>;
}

export namespace ObjectListSubscriptionsParams {
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
}

Objects.Bulk = Bulk;

export declare namespace Objects {
  export {
    type InlineObjectRequest as InlineObjectRequest,
    type Object as Object,
    type ObjectAddSubscriptionsResponse as ObjectAddSubscriptionsResponse,
    type ObjectDeleteSubscriptionsResponse as ObjectDeleteSubscriptionsResponse,
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
    type ObjectsEntriesCursor as ObjectsEntriesCursor,
    type ObjectListParams as ObjectListParams,
    type ObjectAddSubscriptionsParams as ObjectAddSubscriptionsParams,
    type ObjectDeleteSubscriptionsParams as ObjectDeleteSubscriptionsParams,
    type ObjectListSubscriptionsParams as ObjectListSubscriptionsParams,
  };

  export { Bulk as Bulk, type BulkDeleteParams as BulkDeleteParams };
}

export { type SubscriptionsEntriesCursor };
