// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RecipientsAPI from './recipients/recipients';
import * as TenantsAPI from './tenants/tenants';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * When invoked for a workflow using a specific workflow key and cancellation key,
   * will cancel any queued workflow runs associated with that key/cancellation key
   * pair. Can optionally be provided one or more recipients to scope the request to.
   *
   * @example
   * ```ts
   * const response = await client.workflows.cancel('key', {
   *   cancellation_key: 'cancel-workflow-123',
   *   recipients: ['jhammond'],
   * });
   * ```
   */
  cancel(key: string, body: WorkflowCancelParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/workflows/${key}/cancel`, { body, ...options });
  }

  /**
   * Trigger a workflow (specified by the key) to run for the given recipients, using
   * the parameters provided. Returns an identifier for the workflow run request. All
   * workflow runs are executed asynchronously. This endpoint also handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `actor`, `recipient`, and `tenant` fields.
   *
   * @example
   * ```ts
   * const response = await client.workflows.trigger('key', {
   *   recipients: ['dr_grant', 'dr_sattler', 'dr_malcolm'],
   *   actor: 'mr_dna',
   *   cancellation_key: 'isla_nublar_incident_1993',
   *   data: {
   *     affected_areas: [
   *       'visitor_center',
   *       'raptor_pen',
   *       'trex_paddock',
   *     ],
   *     attraction_id: 'paddock_rex_01',
   *     evacuation_protocol: 'active',
   *     message: 'Life finds a way',
   *     severity: 'critical',
   *     system_status: 'fences_failing',
   *   },
   *   tenant: 'ingen_isla_nublar',
   * });
   * ```
   */
  trigger(
    key: string,
    body: WorkflowTriggerParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowTriggerResponse> {
    return this._client.post(path`/v1/workflows/${key}/trigger`, { body, ...options });
  }
}

/**
 * A `204 No Content` response.
 */
export type WorkflowCancelResponse = string;

/**
 * The response from triggering a workflow.
 */
export interface WorkflowTriggerResponse {
  /**
   * This value allows you to track individual messages associated with this trigger
   * request.
   */
  workflow_run_id: string;
}

export interface WorkflowCancelParams {
  /**
   * An optional key that is used to reference a specific workflow trigger request
   * when issuing a [workflow cancellation](/send-notifications/canceling-workflows)
   * request. Must be provided while triggering a workflow in order to enable
   * subsequent cancellation. Should be unique across trigger requests to avoid
   * unintentional cancellations.
   */
  cancellation_key: string;

  /**
   * A list of recipients to cancel the notification for. If omitted, cancels for all
   * recipients associated with the cancellation key.
   */
  recipients?: Array<RecipientsAPI.RecipientReference> | null;
}

export interface WorkflowTriggerParams {
  /**
   * The recipients to trigger the workflow for. Can inline identify users, objects,
   * or use a list of user IDs. Limited to 1,000 recipients.
   */
  recipients: Array<RecipientsAPI.RecipientRequest>;

  /**
   * Specifies a recipient in a request. This can either be a user identifier
   * (string), an inline user request (object), or an inline object request, which is
   * determined by the presence of a `collection` property.
   */
  actor?: RecipientsAPI.RecipientRequest | null;

  /**
   * An optional key that is used to reference a specific workflow trigger request
   * when issuing a [workflow cancellation](/send-notifications/canceling-workflows)
   * request. Must be provided while triggering a workflow in order to enable
   * subsequent cancellation. Should be unique across trigger requests to avoid
   * unintentional cancellations.
   */
  cancellation_key?: string | null;

  /**
   * An optional map of data to pass into the workflow execution. There is a 10MB
   * limit on the size of the full `data` payload. Any individual string value
   * greater than 1024 bytes in length will be
   * [truncated](/developer-tools/api-logs#log-truncation) in your logs.
   */
  data?: { [key: string]: unknown } | null;

  /**
   * An request to set a tenant inline.
   */
  tenant?: TenantsAPI.InlineTenantRequest | null;
}

export declare namespace Workflows {
  export {
    type WorkflowCancelResponse as WorkflowCancelResponse,
    type WorkflowTriggerResponse as WorkflowTriggerResponse,
    type WorkflowCancelParams as WorkflowCancelParams,
    type WorkflowTriggerParams as WorkflowTriggerParams,
  };
}
