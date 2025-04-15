// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Deletes objects in bulk for a given collection
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
   * Bulk upserts subscriptions for a set of objects in a single collection
   */
  addSubscriptions(
    collection: string,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/subscriptions/add`, options);
  }

  /**
   * Sets objects in bulk for a given collection
   */
  set(collection: string, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/set`, options);
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the objects to delete
   */
  object_ids: Array<string>;
}

export declare namespace Bulk {
  export { type BulkDeleteParams as BulkDeleteParams };
}
