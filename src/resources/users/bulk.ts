// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as RecipientsAPI from '../recipients';
import * as UsersAPI from './users';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Bulk delete users
   */
  delete(params: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    const { query_user_ids, ...body } = params;
    return this._client.post('/v1/users/bulk/delete', {
      query: { user_ids: query_user_ids },
      body,
      ...options,
    });
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
  /**
   * Query param: The IDs of the users to delete
   */
  query_user_ids: Array<string>;

  /**
   * Body param:
   */
  body_user_ids: Array<string>;
}

export interface BulkIdentifyParams {
  users: Array<UsersAPI.InlineIdentifyUserRequest>;
}

export interface BulkSetPreferencesParams {
  /**
   * Set preferences for a recipient
   */
  preferences: RecipientsAPI.PreferenceSetRequest;

  user_ids: Array<string>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}
