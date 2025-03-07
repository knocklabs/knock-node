// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Bulk delete objects
   */
  delete(
    collection: string,
    params: BulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BulkDeleteResponse> {
    const { object_ids } = params;
    return this._client.post(path`/v1/objects/${collection}/bulk/delete`, {
      query: { object_ids },
      ...options,
    });
  }

  /**
   * Add subscriptions for a set of objects in a single collection. If a subscription
   * already exists, it will be updated.
   */
  addSubscriptions(
    collection: string,
    body: BulkAddSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<BulkAddSubscriptionsResponse> {
    return this._client.post(path`/v1/objects/${collection}/bulk/subscriptions/add`, { body, ...options });
  }

  /**
   * Bulk set objects
   */
  set(collection: string, body: BulkSetParams, options?: RequestOptions): APIPromise<BulkSetResponse> {
    return this._client.post(path`/v1/objects/${collection}/bulk/set`, { body, ...options });
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

export interface BulkAddSubscriptionsParams {
  subscriptions: Array<BulkAddSubscriptionsParams.Subscription>;
}

export namespace BulkAddSubscriptionsParams {
  export interface Subscription {
    id: string;

    recipients: Array<string | Shared.InlineIdentifyUserRequest | Shared.InlineIdentifyObjectRequest>;

    properties?: Record<string, unknown> | null;
  }
}

export interface BulkSetParams {
  objects: Array<Shared.InlineIdentifyObjectRequest>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkAddSubscriptionsResponse as BulkAddSubscriptionsResponse,
    type BulkSetResponse as BulkSetResponse,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}
