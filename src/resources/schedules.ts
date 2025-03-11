// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as RecipientsAPI from './recipients/recipients';
import * as TenantsAPI from './tenants/tenants';
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
  list(query: ScheduleListParams, options?: RequestOptions): PagePromise<SchedulesEntriesCursor, Schedule> {
    return this._client.getAPIList('/v1/schedules', EntriesCursor<Schedule>, { query, ...options });
  }

  /**
   * Delete schedules
   */
  delete(body: ScheduleDeleteParams, options?: RequestOptions): APIPromise<ScheduleDeleteResponse> {
    return this._client.delete('/v1/schedules', { body, ...options });
  }
}

export type SchedulesEntriesCursor = EntriesCursor<Schedule>;

/**
 * A schedule that represents a recurring workflow execution
 */
export interface Schedule {
  id: string;

  inserted_at: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: RecipientsAPI.Recipient;

  repeats: Array<ScheduleRepeatRule>;

  updated_at: string;

  workflow: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: RecipientsAPI.Recipient | null;

  data?: Record<string, unknown> | null;

  last_occurrence_at?: string | null;

  next_occurrence_at?: string | null;

  tenant?: string | null;
}

/**
 * A schedule repeat rule
 */
export interface ScheduleRepeatRule {
  __typename: string;

  frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

  day_of_month?: number | null;

  days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

  hours?: number | null;

  interval?: number;

  minutes?: number | null;
}

/**
 * A list of schedules
 */
export type ScheduleCreateResponse = Array<Schedule>;

/**
 * A list of schedules
 */
export type ScheduleUpdateResponse = Array<Schedule>;

/**
 * A list of schedules
 */
export type ScheduleDeleteResponse = Array<Schedule>;

export interface ScheduleCreateParams {
  recipients: Array<string | ScheduleCreateParams.ObjectReference>;

  repeats: Array<ScheduleRepeatRule>;

  workflow: string;

  data?: Record<string, unknown> | null;

  ending_at?: string | null;

  scheduled_at?: string | null;

  /**
   * An inline tenant request
   */
  tenant?: TenantsAPI.InlineTenantRequest | null;
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
  actor?: RecipientsAPI.RecipientRequest | null;

  data?: Record<string, unknown> | null;

  ending_at?: string | null;

  repeats?: Array<ScheduleRepeatRule>;

  scheduled_at?: string | null;

  /**
   * An inline tenant request
   */
  tenant?: TenantsAPI.InlineTenantRequest | null;
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
    type Schedule as Schedule,
    type ScheduleRepeatRule as ScheduleRepeatRule,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type SchedulesEntriesCursor as SchedulesEntriesCursor,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
