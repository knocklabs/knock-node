// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as PreferencesAPI from '../recipients/preferences';
import * as UsersAPI from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bulk extends APIResource {
  /**
   * Deletes multiple users in a single operation. Accepts up to 100 user IDs to
   * delete and returns a bulk operation that can be queried for progress.
   */
  delete(body: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/delete', { body, ...options });
  }

  /**
   * Identifies multiple users in a single operation. Allows creating or updating up
   * to 100 users in a single batch with various properties, preferences, and channel
   * data.
   */
  identify(body: BulkIdentifyParams, options?: RequestOptions): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post('/v1/users/bulk/identify', { body, ...options });
  }

  /**
   * Sets preferences for multiple users in a single operation. Supports either
   * setting the same preferences for multiple users or specific preferences for each
   * user.
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
   * A list of user IDs.
   */
  user_ids: Array<string>;
}

export interface BulkIdentifyParams {
  /**
   * A list of users.
   */
  users: Array<UsersAPI.InlineIdentifyUserRequest>;
}

export interface BulkSetPreferencesParams {
  /**
   * A request to set a preference set for a recipient.
   */
  preferences: PreferencesAPI.PreferenceSetRequest;

  /**
   * A list of user IDs.
   */
  user_ids: Array<string>;
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkIdentifyParams as BulkIdentifyParams,
    type BulkSetPreferencesParams as BulkSetPreferencesParams,
  };
}
