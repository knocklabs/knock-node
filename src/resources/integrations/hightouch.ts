// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Hightouch extends APIResource {
  /**
   * Processes a Hightouch embedded destination RPC request.
   */
  embeddedDestination(
    body: HightouchEmbeddedDestinationParams,
    options?: RequestOptions,
  ): APIPromise<HightouchEmbeddedDestinationResponse> {
    return this._client.post('/v1/integrations/hightouch/embedded-destination', { body, ...options });
  }
}

export interface HightouchEmbeddedDestinationResponse {
  /**
   * The request ID.
   */
  id?: string;

  /**
   * The result of the RPC call.
   */
  result?: Record<string, unknown>;
}

export interface HightouchEmbeddedDestinationParams {
  /**
   * The unique identifier for the RPC request.
   */
  id: string;

  /**
   * The JSON-RPC version.
   */
  jsonrpc: string;

  /**
   * The method name to execute.
   */
  method: string;

  /**
   * The parameters for the method.
   */
  params?: Record<string, unknown>;
}

export declare namespace Hightouch {
  export {
    type HightouchEmbeddedDestinationResponse as HightouchEmbeddedDestinationResponse,
    type HightouchEmbeddedDestinationParams as HightouchEmbeddedDestinationParams,
  };
}
