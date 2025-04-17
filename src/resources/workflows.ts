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
   */
  cancel(key: string, body: WorkflowCancelParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/workflows/${key}/cancel`, { body, ...options });
  }

  /**
   * Trigger a workflow specified by the key to run for the given recipients, using
   * the parameters provided. Returns an identifier for the workflow run request. All
   * workflow runs are executed asynchronously.
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
 * An empty response.
 */
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
   * The cancellation key provided during the initial notify call. If used in a
   * cancel request, will cancel the notification for the recipients specified in the
   * cancel request.
   */
  cancellation_key: string;

  /**
   * A list of recipients to cancel the notification for. If omitted, cancels for all
   * recipients associated with the cancellation key.
   */
  recipients?: Array<string> | null;

  /**
   * The unique identifier for the tenant.
   */
  tenant?: string | null;
}

export interface WorkflowTriggerParams {
  /**
   * The recipients to trigger the workflow for. Cannot exceed 1000 recipients in a
   * single trigger.
   */
  recipients: Array<RecipientsAPI.RecipientRequest>;

  /**
   * Specifies a recipient in a request. This can either be a user identifier
   * (string), an inline user request (object), or an inline object request, which is
   * determined by the presence of a `collection` property.
   */
  actor?: RecipientsAPI.RecipientRequest | null;

  /**
   * The cancellation key provided during the initial notify call. If used in a
   * cancel request, will cancel the notification for the recipients specified in the
   * cancel request.
   */
  cancellation_key?: string | null;

  /**
   * An optional map of data to pass into the workflow execution.
   */
  data?: Record<string, unknown> | null;

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
