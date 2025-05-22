// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as RecipientsAPI from '../recipients/recipients';
import * as SchedulesAPI from './schedules';
import * as TenantsAPI from '../tenants/tenants';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Bulk creates up to 1,000 schedules at a time. This endpoint also handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `actor`, `recipient`, and `tenant` fields.
   *
   * @example
   * ```ts
   * const bulkOperation = await client.schedules.bulk.create({
   *   schedules: [
   *     {
   *       data: { ... },
   *       ending_at: null,
   *       recipient: 'dnedry',
   *       repeats: [
   *         { ... },
   *       ],
   *       scheduled_at: null,
   *       tenant: 'acme_corp',
   *       workflow: 'comment-created',
   *     },
   *     {
   *       data: { ... },
   *       ending_at: null,
   *       recipient: 'esattler',
   *       repeats: [
   *         { ... },
   *       ],
   *       scheduled_at: null,
   *       tenant: 'acme_corp',
   *       workflow: 'comment-created',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: BulkCreateParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/schedules/bulk/create', { body, ...options });
  }
}

export interface BulkCreateParams {
  /**
   * A list of schedules.
   */
  schedules: Array<BulkCreateParams.Schedule>;
}

export namespace BulkCreateParams {
  /**
   * A schedule represents a recurring workflow execution.
   */
  export interface Schedule {
    /**
     * The key of the workflow.
     */
    workflow: string;

    /**
     * Specifies a recipient in a request. This can either be a user identifier
     * (string), an inline user request (object), or an inline object request, which is
     * determined by the presence of a `collection` property.
     */
    actor?: RecipientsAPI.RecipientRequest | null;

    /**
     * An optional map of data to pass into the workflow execution. There is a 1024
     * byte limit on the size of any single string value (with the exception of
     * [email attachments](/integrations/email/attachments)), and a 10MB limit on the
     * size of the full `data` payload.
     */
    data?: Record<string, unknown> | null;

    /**
     * The ending date and time for the schedule.
     */
    ending_at?: string | null;

    /**
     * Specifies a recipient in a request. This can either be a user identifier
     * (string), an inline user request (object), or an inline object request, which is
     * determined by the presence of a `collection` property.
     */
    recipient?: RecipientsAPI.RecipientRequest;

    /**
     * The repeat rule for the schedule.
     */
    repeats?: Array<SchedulesAPI.ScheduleRepeatRule>;

    /**
     * The starting date and time for the schedule.
     */
    scheduled_at?: string | null;

    /**
     * An request to set a tenant inline.
     */
    tenant?: TenantsAPI.InlineTenantRequest | null;
  }
}

export declare namespace Bulk {
  export { type BulkCreateParams as BulkCreateParams };
}
