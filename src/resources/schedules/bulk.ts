// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Bulk creates up to 1,000 schedules at a time. This endpoint also handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `actor`, `recipient`, and `tenant` fields.
   */
  create(options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/schedules/bulk/create', options);
  }
}
