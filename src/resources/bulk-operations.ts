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
 * A bulk operation entity.
 */
export interface BulkOperation {
  /**
   * Unique identifier for the bulk operation.
   */
  id: string;

  /**
   * The type name of the schema.
   */
  __typename: string;

  /**
   * The estimated total number of rows to process.
   */
  estimated_total_rows: number;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at: string;

  /**
   * The name of the bulk operation.
   */
  name: string;

  /**
   * The number of rows processed so far.
   */
  processed_rows: number;

  /**
   * The status of the bulk operation. One of: queued, processing, completed, failed.
   */
  status: 'queued' | 'processing' | 'completed' | 'failed';

  /**
   * The number of successful operations.
   */
  success_count: number;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * Timestamp when the bulk operation was completed.
   */
  completed_at?: string | null;

  /**
   * The number of failed operations.
   */
  error_count?: number;

  /**
   * A list of items that failed to be processed.
   */
  error_items?: Array<BulkOperation.ErrorItem>;

  /**
   * Timestamp when the bulk operation failed.
   */
  failed_at?: string | null;

  /**
   * Timestamp when the bulk operation was started.
   */
  started_at?: string | null;
}

export namespace BulkOperation {
  export interface ErrorItem {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * The collection this object belongs to.
     */
    collection?: string | null;
  }
}

export declare namespace BulkOperations {
  export { type BulkOperation as BulkOperation };
}
