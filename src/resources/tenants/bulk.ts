// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Bulk delete tenants
   */
  delete(params: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    const { tenant_ids } = params;
    return this._client.post('/v1/tenants/bulk/delete', { query: { tenant_ids }, ...options });
  }

  /**
   * Bulk set tenants
   */
  set(body: BulkSetParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/tenants/bulk/set', { body, ...options });
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the tenants to delete
   */
  tenant_ids: Array<string>;
}

export interface BulkSetParams {
  tenants: Array<Shared.InlineTenantRequest>;
}

export declare namespace Bulk {
  export { type BulkDeleteParams as BulkDeleteParams, type BulkSetParams as BulkSetParams };
}
