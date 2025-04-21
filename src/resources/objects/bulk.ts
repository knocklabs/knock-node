// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as ObjectsAPI from './objects';
import * as RecipientsAPI from '../recipients/recipients';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Bulk deletes objects from the specified collection.
   */
  delete(
    collection: string,
    params: BulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    const { object_ids } = params;
    return this._client.post(path`/v1/objects/${collection}/bulk/delete`, {
      query: { object_ids },
      ...options,
    });
  }

  /**
   * Add subscriptions for all objects in a single collection. If a subscription for
   * an object in the collection already exists, it will be updated.
   */
  addSubscriptions(
    collection: string,
    body: BulkAddSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/subscriptions/add`, { body, ...options });
  }

  /**
   * Bulk sets objects in the specified collection.
   */
  set(
    collection: string,
    body: BulkSetParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/set`, { body, ...options });
  }
}

export interface BulkDeleteParams {
  /**
   * A list of object IDs.
   */
  object_ids: Array<string>;
}

export interface BulkAddSubscriptionsParams {
  /**
   * A list of subscriptions.
   */
  subscriptions: Array<BulkAddSubscriptionsParams.Subscription>;
}

export namespace BulkAddSubscriptionsParams {
  export interface Subscription {
    /**
     * Unique identifier for the subscription.
     */
    id: string;

    /**
     * The recipients of the subscription.
     */
    recipients: Array<RecipientsAPI.RecipientRequest>;

    /**
     * The custom properties associated with the recipients of the subscription.
     */
    properties?: Record<string, unknown> | null;
  }
}

export interface BulkSetParams {
  /**
   * A list of objects.
   */
  objects: Array<ObjectsAPI.InlineObjectRequest>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}
