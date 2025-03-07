// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Bulk delete users
   */
  delete(params: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkDeleteResponse> {
    const { query_user_ids, ...body } = params;
    return this._client.post('/v1/users/bulk/delete', {
      query: { user_ids: query_user_ids },
      body,
      ...options,
    });
  }

  /**
   * Bulk identifies users
   */
  identify(body: BulkIdentifyParams, options?: RequestOptions): APIPromise<BulkIdentifyResponse> {
    return this._client.post('/v1/users/bulk/identify', { body, ...options });
  }

  /**
   * Bulk set preferences
   */
  setPreferences(
    body: BulkSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<BulkSetPreferencesResponse> {
    return this._client.post('/v1/users/bulk/preferences', { body, ...options });
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
   * Query param: The IDs of the users to delete
   */
  query_user_ids: Array<string>;

  /**
   * Body param:
   */
  body_user_ids: Array<string>;
}

export interface BulkIdentifyParams {
  users: Array<Shared.InlineIdentifyUserRequest>;
}

export interface BulkSetPreferencesParams {
  /**
   * Set preferences for a recipient
   */
  preferences: Shared.PreferenceSetRequest;

  user_ids: Array<string>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkIdentifyResponse as BulkIdentifyResponse,
    type BulkSetPreferencesResponse as BulkSetPreferencesResponse,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}
