// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Creates up to 1,000 schedules in a single asynchronous bulk operation. The list
   * of schedules can include inline-identifications for each recipient, tenant, and
   * actor specified on a schedule.
   */
  create(options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/schedules/bulk/create', options);
  }
}
