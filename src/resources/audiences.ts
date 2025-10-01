// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SharedAPI from './shared';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Adds one or more members to the specified audience.
   *
   * @example
   * ```ts
   * await client.audiences.addMembers('key', {
   *   members: [
   *     {
   *       tenant: 'ingen_isla_nublar',
   *       user: { id: 'dr_sattler' },
   *     },
   *   ],
   * });
   * ```
   */
  addMembers(key: string, body: AudienceAddMembersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/audiences/${key}/members`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a paginated list of members for the specified audience.
   *
   * @example
   * ```ts
   * const response = await client.audiences.listMembers('key');
   * ```
   */
  listMembers(key: string, options?: RequestOptions): APIPromise<AudienceListMembersResponse> {
    return this._client.get(path`/v1/audiences/${key}/members`, options);
  }

  /**
   * Removes one or more members from the specified audience.
   *
   * @example
   * ```ts
   * await client.audiences.removeMembers('key', {
   *   members: [{ user: {} }],
   * });
   * ```
   */
  removeMembers(key: string, body: AudienceRemoveMembersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/audiences/${key}/members`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An audience member.
 */
export interface AudienceMember {
  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * Timestamp when the resource was created.
   */
  added_at: string;

  /**
   * A [User](/concepts/users) represents an individual in your system who can
   * receive notifications through Knock. Users are the most common recipients of
   * notifications and are always referenced by your internal identifier.
   */
  user: UsersAPI.User;

  /**
   * The unique identifier of the user.
   */
  user_id: string;

  /**
   * The unique identifier for the tenant.
   */
  tenant?: string | null;
}

/**
 * A paginated list of audience members.
 */
export interface AudienceListMembersResponse {
  /**
   * A list of audience members.
   */
  entries: Array<AudienceMember>;

  /**
   * Pagination information for a list of resources.
   */
  page_info: SharedAPI.PageInfo;
}

export interface AudienceAddMembersParams {
  /**
   * A list of audience members to add. Limited to 1,000 members per request.
   */
  members: Array<AudienceAddMembersParams.Member>;
}

export namespace AudienceAddMembersParams {
  /**
   * An audience member.
   */
  export interface Member {
    /**
     * An object containing the user's ID.
     */
    user: Member.User;

    /**
     * The unique identifier for the tenant.
     */
    tenant?: string | null;
  }

  export namespace Member {
    /**
     * An object containing the user's ID.
     */
    export interface User {
      /**
       * The unique identifier of the user.
       */
      id?: string;
    }
  }
}

export interface AudienceRemoveMembersParams {
  /**
   * A list of audience members to remove.
   */
  members: Array<AudienceRemoveMembersParams.Member>;
}

export namespace AudienceRemoveMembersParams {
  /**
   * An audience member.
   */
  export interface Member {
    /**
     * An object containing the user's ID.
     */
    user: Member.User;

    /**
     * The unique identifier for the tenant.
     */
    tenant?: string | null;
  }

  export namespace Member {
    /**
     * An object containing the user's ID.
     */
    export interface User {
      /**
       * The unique identifier of the user.
       */
      id?: string;
    }
  }
}

export declare namespace Audiences {
  export {
    type AudienceMember as AudienceMember,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceAddMembersParams as AudienceAddMembersParams,
    type AudienceRemoveMembersParams as AudienceRemoveMembersParams,
  };
}
