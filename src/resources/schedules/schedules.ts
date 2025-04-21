// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecipientsAPI from '../recipients/recipients';
import * as BulkAPI from './bulk';
import { Bulk, BulkCreateParams } from './bulk';
import * as TenantsAPI from '../tenants/tenants';
import { APIPromise } from '../../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Schedules extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Creates one or more schedules for a workflow with the specified recipients,
   * timing, and data. Schedules can be one-time or recurring. This endpoint also
   * handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `actor`, `recipient`, and `tenant` fields.
   */
  create(body: ScheduleCreateParams, options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    return this._client.post('/v1/schedules', { body, ...options });
  }

  /**
   * Updates one or more existing schedules with new timing, data, or other
   * properties. All specified schedule IDs will be updated with the same values.
   * This endpoint also handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `actor`, `recipient`, and `tenant` fields.
   */
  update(body: ScheduleUpdateParams, options?: RequestOptions): APIPromise<ScheduleUpdateResponse> {
    return this._client.put('/v1/schedules', { body, ...options });
  }

  /**
   * Returns a paginated list of schedules for the current environment, filtered by
   * workflow and optionally by recipients and tenant.
   */
  list(query: ScheduleListParams, options?: RequestOptions): PagePromise<SchedulesEntriesCursor, Schedule> {
    return this._client.getAPIList('/v1/schedules', EntriesCursor<Schedule>, { query, ...options });
  }

  /**
   * Permanently deletes one or more schedules identified by the provided schedule
   * IDs. This operation cannot be undone.
   */
  delete(body: ScheduleDeleteParams, options?: RequestOptions): APIPromise<ScheduleDeleteResponse> {
    return this._client.delete('/v1/schedules', { body, ...options });
  }
}

export type SchedulesEntriesCursor = EntriesCursor<Schedule>;

/**
 * A schedule represents a recurring workflow execution.
 */
export interface Schedule {
  /**
   * Unique identifier for the schedule.
   */
  id: string;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at: string;

  /**
   * A recipient of a notification, which is either a user or an object.
   */
  recipient: RecipientsAPI.Recipient;

  /**
   * The repeat rule for the schedule.
   */
  repeats: Array<ScheduleRepeatRule>;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * The workflow the schedule is applied to.
   */
  workflow: string;

  /**
   * The typename of the schema.
   */
  __typename?: string;

  /**
   * A recipient of a notification, which is either a user or an object.
   */
  actor?: RecipientsAPI.Recipient | null;

  /**
   * An optional map of data to pass into the workflow execution.
   */
  data?: Record<string, unknown> | null;

  /**
   * The last occurrence of the schedule.
   */
  last_occurrence_at?: string | null;

  /**
   * The next occurrence of the schedule.
   */
  next_occurrence_at?: string | null;

  /**
   * The tenant to trigger the workflow for. Triggering with a tenant will use any
   * tenant-level overrides associated with the tenant object, and all messages
   * produced from workflow runs will be tagged with the tenant.
   */
  tenant?: string | null;
}

/**
 * The repeat rule for the schedule.
 */
export interface ScheduleRepeatRule {
  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * The frequency of the schedule.
   */
  frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

  /**
   * The day of the month to repeat the schedule.
   */
  day_of_month?: number | null;

  /**
   * The days of the week to repeat the schedule.
   */
  days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

  /**
   * The hour of the day to repeat the schedule.
   */
  hours?: number | null;

  /**
   * The interval of the schedule.
   */
  interval?: number;

  /**
   * The minute of the hour to repeat the schedule.
   */
  minutes?: number | null;
}

/**
 * A list of schedules.
 */
export type ScheduleCreateResponse = Array<Schedule>;

/**
 * A list of schedules.
 */
export type ScheduleUpdateResponse = Array<Schedule>;

/**
 * A list of schedules.
 */
export type ScheduleDeleteResponse = Array<Schedule>;

export interface ScheduleCreateParams {
  /**
   * The recipients to trigger the workflow for. Can inline identify users, objects,
   * or use a list of user IDs. Limited to 1,000 recipients.
   */
  recipients: Array<RecipientsAPI.RecipientRequest>;

  /**
   * The repeat rule for the schedule.
   */
  repeats: Array<ScheduleRepeatRule>;

  /**
   * The key of the workflow.
   */
  workflow: string;

  /**
   * An optional map of data to pass into the workflow execution.
   */
  data?: Record<string, unknown> | null;

  /**
   * The ending date and time for the schedule.
   */
  ending_at?: string | null;

  /**
   * The starting date and time for the schedule.
   */
  scheduled_at?: string | null;

  /**
   * An request to set a tenant inline.
   */
  tenant?: TenantsAPI.InlineTenantRequest | null;
}

export interface ScheduleUpdateParams {
  /**
   * A list of schedule IDs.
   */
  schedule_ids: Array<string>;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (ID, collection).
   */
  actor?: RecipientsAPI.RecipientReference | null;

  /**
   * An optional map of data to pass into the workflow execution.
   */
  data?: Record<string, unknown> | null;

  /**
   * The ending date and time for the schedule.
   */
  ending_at?: string | null;

  /**
   * The repeat rule for the schedule.
   */
  repeats?: Array<ScheduleRepeatRule>;

  /**
   * The starting date and time for the schedule.
   */
  scheduled_at?: string | null;

  /**
   * An request to set a tenant inline.
   */
  tenant?: TenantsAPI.InlineTenantRequest | null;
}

export interface ScheduleListParams extends EntriesCursorParams {
  /**
   * Filter by workflow key.
   */
  workflow: string;

  /**
   * Filter by recipient IDs.
   */
  recipients?: Array<string>;

  /**
   * Filter by tenant ID.
   */
  tenant?: string;
}

export interface ScheduleDeleteParams {
  /**
   * A list of schedule IDs.
   */
  schedule_ids: Array<string>;
}

Schedules.Bulk = Bulk;

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

  export { Bulk as Bulk, type BulkCreateParams as BulkCreateParams };
}
