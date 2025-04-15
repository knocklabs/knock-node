// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Deletes tenants in bulk
   */
  delete(params: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    const { tenant_ids } = params;
    return this._client.post('/v1/tenants/bulk/delete', { query: { tenant_ids }, ...options });
  }

  /**
   * Sets tenants in bulk
   */
  set(options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/tenants/bulk/set', options);
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the tenants to delete
   */
  tenant_ids: Array<string>;
}

export declare namespace Bulk {
  export { type BulkDeleteParams as BulkDeleteParams };
}
