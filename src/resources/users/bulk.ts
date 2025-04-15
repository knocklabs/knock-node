// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Bulk deletes a list of users
   */
  delete(params: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    const { user_ids } = params;
    return this._client.post('/v1/users/bulk/delete', { query: { user_ids }, ...options });
  }

  /**
   * Bulk identifies a list of users
   */
  identify(options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/identify', options);
  }

  /**
   * Bulk sets user preferences
   */
  setPreferences(options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/preferences', options);
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the users to delete
   */
  user_ids: Array<string>;
}

export declare namespace Bulk {
  export { type BulkDeleteParams as BulkDeleteParams };
}
