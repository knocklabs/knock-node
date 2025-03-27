// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BulkOperations extends APIResource {
  /**
   * Retrieves a bulk operation (if it exists) and displays the current state of it.
   */
  get(id: string, options?: RequestOptions): APIPromise<BulkOperation> {
    return this._client.get(path`/v1/bulk_operations/${id}`, options);
  }
}

/**
 * A bulk operation entity
 */
export interface BulkOperation {
  id: string;

  __typename: string;

  estimated_total_rows: number;

  inserted_at: string;

  name: string;

  processed_rows: number;

  status: 'queued' | 'processing' | 'completed' | 'failed';

  success_count: number;

  updated_at: string;

  completed_at?: string | null;

  error_count?: number;

  /**
   * A list of items that failed to be processed
   */
  error_items?: Array<BulkOperation.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkOperation {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

export declare namespace BulkOperations {
  export { type BulkOperation as BulkOperation };
}
