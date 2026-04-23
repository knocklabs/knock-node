// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RecipientsAPI from './recipients/recipients';
import { APIPromise } from '../core/api-promise';
import { ItemsCursor, type ItemsCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A workflow run represents an individual execution of a workflow for a specific recipient.
 */
export class WorkflowRecipientRuns extends APIResource {
  /**
   * Returns a paginated list of workflow recipient runs for the current environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const workflowRecipientRun of client.workflowRecipientRuns.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WorkflowRecipientRunListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkflowRecipientRunsItemsCursor, WorkflowRecipientRun> {
    return this._client.getAPIList('/v1/workflow_recipient_runs', ItemsCursor<WorkflowRecipientRun>, {
      query,
      ...options,
    });
  }

  /**
   * Returns a single workflow recipient run with its associated events.
   *
   * @example
   * ```ts
   * const workflowRecipientRunDetail =
   *   await client.workflowRecipientRuns.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<WorkflowRecipientRunDetail> {
    return this._client.get(path`/v1/workflow_recipient_runs/${id}`, options);
  }
}

export type WorkflowRecipientRunsItemsCursor = ItemsCursor<WorkflowRecipientRun>;

/**
 * A workflow recipient run represents an individual execution of a workflow for a
 * specific recipient.
 */
export interface WorkflowRecipientRun {
  /**
   * The unique identifier for the workflow recipient run (per-recipient).
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at: string;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (ID, collection).
   */
  recipient: RecipientsAPI.RecipientReference;

  /**
   * The current status of the workflow recipient run. One of `queued`, `processing`,
   * `paused`, `completed`, or `cancelled`.
   */
  status: 'queued' | 'processing' | 'paused' | 'completed' | 'cancelled';

  /**
   * Describes how the workflow was triggered.
   */
  trigger_source: WorkflowRecipientRun.TriggerSource;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * The key of the workflow that was executed.
   */
  workflow: string;

  /**
   * The identifier for the top-level workflow run shared across all recipients in a
   * single trigger.
   */
  workflow_run_id: string;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (ID, collection).
   */
  actor?: RecipientsAPI.RecipientReference | null;

  /**
   * The number of errors encountered during the workflow recipient run.
   */
  error_count?: number;

  /**
   * The tenant associated with the workflow recipient run.
   */
  tenant?: string | null;
}

export namespace WorkflowRecipientRun {
  /**
   * Describes how the workflow was triggered.
   */
  export interface TriggerSource {
    /**
     * The type of trigger source. One of `api`, `audience`, `schedule`, `broadcast`,
     * `workflow_step`, `integration`, or `rehearsal`.
     */
    type: 'api' | 'audience' | 'schedule' | 'broadcast' | 'workflow_step' | 'integration' | 'rehearsal';

    /**
     * The key of the audience that triggered the workflow.
     */
    audience_key?: string | null;

    /**
     * The cancellation key provided when the workflow was triggered via the API.
     */
    cancellation_key?: string | null;

    /**
     * The ID of the schedule that triggered the workflow.
     */
    schedule_id?: string | null;
  }
}

/**
 * A single workflow recipient run with its events.
 */
export interface WorkflowRecipientRunDetail extends WorkflowRecipientRun {
  /**
   * A list of events that occurred during the workflow recipient run.
   */
  events: Array<WorkflowRecipientRunEvent>;
}

/**
 * An event that occurred during a workflow recipient run.
 */
export interface WorkflowRecipientRunEvent {
  /**
   * The unique identifier for the event.
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * The type of event that occurred.
   */
  event: string;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at: string;

  /**
   * Whether the event represents a successful or error state.
   */
  status: 'ok' | 'error';

  /**
   * The attempt number of the workflow recipient run event. Increments for each
   * retry.
   */
  attempt?: number;

  /**
   * Event-specific data associated with the event.
   */
  data?: { [key: string]: unknown } | null;

  /**
   * The reference of the workflow step associated with this event.
   */
  step_ref?: string | null;

  /**
   * The type of workflow step associated with this event.
   */
  step_type?: string | null;
}

export interface WorkflowRecipientRunListParams extends ItemsCursorParams {
  /**
   * Limits the results to workflow recipient runs started before the given date.
   */
  ending_at?: string;

  /**
   * Limits the results to workflow recipient runs that have errors.
   */
  has_errors?: boolean;

  /**
   * Limits the results to workflow recipient runs for the given recipient. Accepts a
   * user ID string or an object reference with `id` and `collection`.
   */
  recipient?: RecipientsAPI.RecipientReference;

  /**
   * Limits the results to workflow recipient runs started after the given date.
   */
  starting_at?: string;

  /**
   * Limits the results to workflow recipient runs with the given status.
   */
  status?: Array<'queued' | 'processing' | 'paused' | 'completed' | 'cancelled'>;

  /**
   * Limits the results to workflow recipient runs for the given tenant.
   */
  tenant?: string;

  /**
   * Limits the results to workflow recipient runs for the given workflow key.
   */
  workflow?: string;
}

export declare namespace WorkflowRecipientRuns {
  export {
    type WorkflowRecipientRun as WorkflowRecipientRun,
    type WorkflowRecipientRunDetail as WorkflowRecipientRunDetail,
    type WorkflowRecipientRunEvent as WorkflowRecipientRunEvent,
    type WorkflowRecipientRunsItemsCursor as WorkflowRecipientRunsItemsCursor,
    type WorkflowRecipientRunListParams as WorkflowRecipientRunListParams,
  };
}
