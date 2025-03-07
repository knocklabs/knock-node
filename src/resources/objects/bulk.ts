// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Bulk delete objects
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
   * Add subscriptions for a set of objects in a single collection. If a subscription
   * already exists, it will be updated.
   */
  addSubscriptions(
    collection: string,
    body: BulkAddSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/subscriptions/add`, { body, ...options });
  }

  /**
   * Bulk set objects
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
   * The IDs of the objects to delete
   */
  object_ids: Array<string>;
}

export interface BulkAddSubscriptionsParams {
  subscriptions: Array<BulkAddSubscriptionsParams.Subscription>;
}

export namespace BulkAddSubscriptionsParams {
  export interface Subscription {
    id: string;

    recipients: Array<Shared.RecipientRequest>;

    properties?: Record<string, unknown> | null;
  }
}

export interface BulkSetParams {
  objects: Array<Shared.InlineObjectRequest>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}
