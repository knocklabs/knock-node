// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Bulk extends APIResource {
  /**
   * Deletes objects in bulk for a given collection
   */
  delete(
    collection: string,
    params: BulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDeleteResponse> {
    const { object_ids } = params;
    return this._client.post(`/v1/objects/${collection}/bulk/delete`, { query: { object_ids }, ...options });
  }

  /**
   * Bulk upserts subscriptions for a set of objects in a single collection
   */
  addSubscriptions(
    collection: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkAddSubscriptionsResponse> {
    return this._client.post(`/v1/objects/${collection}/bulk/subscriptions/add`, options);
  }

  /**
   * Sets objects in bulk for a given collection
   */
  set(collection: string, options?: Core.RequestOptions): Core.APIPromise<BulkSetResponse> {
    return this._client.post(`/v1/objects/${collection}/bulk/set`, options);
  }
}

/**
 * A bulk operation entity
 */
export interface BulkDeleteResponse {
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
  error_items?: Array<BulkDeleteResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkDeleteResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

/**
 * A bulk operation entity
 */
export interface BulkAddSubscriptionsResponse {
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
  error_items?: Array<BulkAddSubscriptionsResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkAddSubscriptionsResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

/**
 * A bulk operation entity
 */
export interface BulkSetResponse {
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
  error_items?: Array<BulkSetResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkSetResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the objects to delete
   */
  object_ids: Array<string>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkAddSubscriptionsResponse as BulkAddSubscriptionsResponse,
    type BulkSetResponse as BulkSetResponse,
    type BulkDeleteParams as BulkDeleteParams,
  };
}
