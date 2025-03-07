// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import * as UsersAPI from './users/users';
import { APIPromise } from '../api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../pagination';
import { RequestOptions } from '../internal/request-options';

export class Schedules extends APIResource {
  /**
   * Create schedules
   */
  create(body: ScheduleCreateParams, options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    return this._client.post('/v1/schedules', { body, ...options });
  }

  /**
   * Update schedules
   */
  update(body: ScheduleUpdateParams, options?: RequestOptions): APIPromise<ScheduleUpdateResponse> {
    return this._client.put('/v1/schedules', { body, ...options });
  }

  /**
   * List schedules
   */
  list(
    query: ScheduleListParams,
    options?: RequestOptions,
  ): PagePromise<ScheduleListResponsesEntriesCursor, ScheduleListResponse> {
    return this._client.getAPIList('/v1/schedules', EntriesCursor<ScheduleListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete schedules
   */
  delete(body: ScheduleDeleteParams, options?: RequestOptions): APIPromise<ScheduleDeleteResponse> {
    return this._client.delete('/v1/schedules', { body, ...options });
  }
}

export type ScheduleListResponsesEntriesCursor = EntriesCursor<ScheduleListResponse>;

/**
 * A list of schedules
 */
export type ScheduleCreateResponse = Array<ScheduleCreateResponse.ScheduleCreateResponseItem>;

export namespace ScheduleCreateResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleCreateResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Shared.Object;

    repeats: Array<Shared.ScheduleRepeatRule>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | Shared.Object | null;

    data?: Record<string, unknown> | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }
}

/**
 * A list of schedules
 */
export type ScheduleUpdateResponse = Array<ScheduleUpdateResponse.ScheduleUpdateResponseItem>;

export namespace ScheduleUpdateResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleUpdateResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Shared.Object;

    repeats: Array<Shared.ScheduleRepeatRule>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | Shared.Object | null;

    data?: Record<string, unknown> | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }
}

/**
 * A schedule that represents a recurring workflow execution
 */
export interface ScheduleListResponse {
  id: string;

  inserted_at: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: UsersAPI.User | Shared.Object;

  repeats: Array<Shared.ScheduleRepeatRule>;

  updated_at: string;

  workflow: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: UsersAPI.User | Shared.Object | null;

  data?: Record<string, unknown> | null;

  last_occurrence_at?: string | null;

  next_occurrence_at?: string | null;

  tenant?: string | null;
}

/**
 * A list of schedules
 */
export type ScheduleDeleteResponse = Array<ScheduleDeleteResponse.ScheduleDeleteResponseItem>;

export namespace ScheduleDeleteResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleDeleteResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Shared.Object;

    repeats: Array<Shared.ScheduleRepeatRule>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | Shared.Object | null;

    data?: Record<string, unknown> | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }
}

export interface ScheduleCreateParams {
  recipients: Array<string | ScheduleCreateParams.ObjectReference>;

  repeats: Array<Shared.ScheduleRepeatRule>;

  workflow: string;

  data?: Record<string, unknown> | null;

  ending_at?: string | null;

  scheduled_at?: string | null;

  /**
   * An inline tenant request
   */
  tenant?: Shared.InlineTenantRequest | null;
}

export namespace ScheduleCreateParams {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }
}

export interface ScheduleUpdateParams {
  schedule_ids: Array<string>;

  /**
   * Specifies a recipient in a request. This can either be a user identifier
   * (string), an inline user request (object), or an inline object request, which is
   * determined by the presence of a `collection` property.
   */
  actor?: string | Shared.InlineIdentifyUserRequest | Shared.InlineIdentifyObjectRequest | null;

  data?: Record<string, unknown> | null;

  ending_at?: string | null;

  repeats?: Array<Shared.ScheduleRepeatRule>;

  scheduled_at?: string | null;

  /**
   * An inline tenant request
   */
  tenant?: Shared.InlineTenantRequest | null;
}

export interface ScheduleListParams extends EntriesCursorParams {
  /**
   * Filter by workflow
   */
  workflow: string;

  /**
   * Filter by recipient
   */
  recipients?: Array<string | ScheduleListParams.ObjectReference>;

  /**
   * Filter by tenant
   */
  tenant?: string;
}

export namespace ScheduleListParams {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }
}

export interface ScheduleDeleteParams {
  schedule_ids: Array<string>;
}

export declare namespace Schedules {
  export {
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleListResponsesEntriesCursor as ScheduleListResponsesEntriesCursor,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
