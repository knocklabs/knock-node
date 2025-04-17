// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as TenantsAPI from './tenants';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Delete multiple tenants in a single operation. This operation cannot be undone.
   */
  delete(params: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    const { tenant_ids } = params;
    return this._client.post('/v1/tenants/bulk/delete', { query: { tenant_ids }, ...options });
  }

  /**
   * Set or update multiple tenants in a single operation. This operation allows you
   * to create or update multiple tenants with their properties and settings.
   */
  set(body: BulkSetParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/tenants/bulk/set', { body, ...options });
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the tenants to delete.
   */
  tenant_ids: Array<string>;
}

export interface BulkSetParams {
  /**
   * The tenants to be upserted.
   */
  tenants: Array<TenantsAPI.InlineTenantRequest>;
}

export declare namespace Bulk {
  export { type BulkDeleteParams as BulkDeleteParams, type BulkSetParams as BulkSetParams };
}
