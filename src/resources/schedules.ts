// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { SchedulesEntriesCursor } from './shared';
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
  ): PagePromise<SchedulesEntriesCursor, Shared.Schedule> {
    return this._client.getAPIList('/v1/schedules', EntriesCursor<Shared.Schedule>, { query, ...options });
  }

  /**
   * Delete schedules
   */
  delete(body: ScheduleDeleteParams, options?: RequestOptions): APIPromise<ScheduleDeleteResponse> {
    return this._client.delete('/v1/schedules', { body, ...options });
  }
}

/**
 * A list of schedules
 */
export type ScheduleCreateResponse = Array<Shared.Schedule>;

/**
 * A list of schedules
 */
export type ScheduleUpdateResponse = Array<Shared.Schedule>;

/**
 * A list of schedules
 */
export type ScheduleDeleteResponse = Array<Shared.Schedule>;

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
  actor?: Shared.RecipientRequest | null;

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
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}

export { type SchedulesEntriesCursor };
