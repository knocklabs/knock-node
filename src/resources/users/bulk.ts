// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as PreferencesAPI from '../recipients/preferences';
import * as UsersAPI from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Bulk delete users
   */
  delete(body: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/delete', { body, ...options });
  }

  /**
   * Bulk identifies users
   */
  identify(body: BulkIdentifyParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/identify', { body, ...options });
  }

  /**
   * Bulk set preferences
   */
  setPreferences(
    body: BulkSetPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/preferences', { body, ...options });
  }
}

export interface BulkDeleteParams {
  user_ids: Array<string>;
}

export interface BulkIdentifyParams {
  users: Array<UsersAPI.InlineIdentifyUserRequest>;
}

export interface BulkSetPreferencesParams {
  /**
   * Set preferences for a recipient
   */
  preferences: PreferencesAPI.PreferenceSetRequest;

  user_ids: Array<string>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}
