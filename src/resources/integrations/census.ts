// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Census extends APIResource {
  /**
   * Processes a Census custom destination RPC request.
   */
  customDestination(
    body: CensusCustomDestinationParams,
    options?: RequestOptions,
  ): APIPromise<CensusCustomDestinationResponse> {
    return this._client.post('/v1/integrations/census/custom-destination', { body, ...options });
  }
}

export interface CensusCustomDestinationResponse {
  /**
   * The request ID.
   */
  id?: string;

  /**
   * The result of the RPC call.
   */
  result?: { [key: string]: unknown };
}

export interface CensusCustomDestinationParams {
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
  params?: { [key: string]: unknown };
}

export declare namespace Census {
  export {
    type CensusCustomDestinationResponse as CensusCustomDestinationResponse,
    type CensusCustomDestinationParams as CensusCustomDestinationParams,
  };
}
