// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RecipientsAPI from './recipients/recipients';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Schedules extends APIResource {
  /**
   * Create schedules
   */
  create(options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    return this._client.post('/v1/schedules', options);
  }

  /**
   * Update schedules
   */
  update(options?: RequestOptions): APIPromise<ScheduleUpdateResponse> {
    return this._client.put('/v1/schedules', options);
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
  delete(options?: RequestOptions): APIPromise<ScheduleDeleteResponse> {
    return this._client.delete('/v1/schedules', options);
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

  data?: unknown | null;

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

export type ScheduleCreateResponse = Array<Schedule>;

export type ScheduleUpdateResponse = Array<Schedule>;

export type ScheduleDeleteResponse = Array<Schedule>;

export interface ScheduleListParams extends EntriesCursorParams {
  /**
   * Filter by workflow
   */
  workflow: string;

  /**
   * Filter by recipient
   */
  recipients?: Array<string | ScheduleListParams.UnionMember1>;

  /**
   * Filter by tenant
   */
  tenant?: string;
}

export namespace ScheduleListParams {
  /**
   * An object reference to a recipient
   */
  export interface UnionMember1 {
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

export declare namespace Schedules {
  export {
    type Schedule as Schedule,
    type ScheduleRepeatRule as ScheduleRepeatRule,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type SchedulesEntriesCursor as SchedulesEntriesCursor,
    type ScheduleListParams as ScheduleListParams,
  };
}
