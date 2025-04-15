// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RecipientsAPI from './recipients/recipients';
import * as TenantsAPI from './tenants/tenants';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Issues a cancellation request to inflight workflow runs
   */
  cancel(key: string, body: WorkflowCancelParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/workflows/${key}/cancel`, { body, ...options });
  }

  /**
   * Triggers a workflow
   */
  trigger(
    key: string,
    body: WorkflowTriggerParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowTriggerResponse> {
    return this._client.post(path`/v1/workflows/${key}/trigger`, { body, ...options });
  }
}

export type WorkflowCancelResponse = string;

/**
 * The response from triggering a workflow
 */
export interface WorkflowTriggerResponse {
  /**
   * The ID of the workflow trigger. This value allows you to track individual
   * workflow runs associated with this trigger request.
   */
  workflow_run_id: string;
}

export interface WorkflowCancelParams {
  /**
   * The cancellation key supplied to the workflow trigger endpoint to use for
   * cancelling one or more workflow runs.
   */
  cancellation_key: string;

  /**
   * An optional list of recipients to cancel the workflow for using the cancellation
   * key.
   */
  recipients?: Array<string> | null;

  tenant?: string | null;
}

export interface WorkflowTriggerParams {
  /**
   * Specifies a recipient in a request. This can either be a user identifier
   * (string), an inline user request (object), or an inline object request, which is
   * determined by the presence of a `collection` property.
   */
  actor?: RecipientsAPI.RecipientRequest | null;

  /**
   * An optional key that is used in the workflow cancellation endpoint to target a
   * cancellation of any workflow runs associated with this trigger.
   */
  cancellation_key?: string | null;

  /**
   * An optional map of data to be used in the workflow. This data will be available
   * to the workflow as a map in the `data` field.
   */
  data?: Record<string, string> | null;

  /**
   * The recipients to trigger the workflow for.
   */
  recipients?: Array<RecipientsAPI.RecipientRequest>;

  /**
   * An inline tenant request
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
