// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Bulk extends APIResource {
  /**
   * Bulk deletes a list of users
   */
  delete(params: BulkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<BulkDeleteResponse> {
    const { user_ids } = params;
    return this._client.post('/v1/users/bulk/delete', { query: { user_ids }, ...options });
  }

  /**
   * Bulk identifies a list of users
   */
  identify(options?: Core.RequestOptions): Core.APIPromise<BulkIdentifyResponse> {
    return this._client.post('/v1/users/bulk/identify', options);
  }

  /**
   * Bulk sets user preferences
   */
  setPreferences(options?: Core.RequestOptions): Core.APIPromise<BulkSetPreferencesResponse> {
    return this._client.post('/v1/users/bulk/preferences', options);
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
export interface BulkIdentifyResponse {
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
  error_items?: Array<BulkIdentifyResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkIdentifyResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

/**
 * A bulk operation entity
 */
export interface BulkSetPreferencesResponse {
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
  error_items?: Array<BulkSetPreferencesResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkSetPreferencesResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the users to delete
   */
  user_ids: Array<string>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkIdentifyResponse as BulkIdentifyResponse,
    type BulkSetPreferencesResponse as BulkSetPreferencesResponse,
    type BulkDeleteParams as BulkDeleteParams,
  };
}
