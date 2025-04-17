// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Adds one or more members to the specified audience.
   */
  addMembers(key: string, body: AudienceAddMembersParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/audiences/${key}/members`, { body, ...options });
  }

  /**
   * Returns a paginated list of members for the specified audience.
   */
  listMembers(key: string, options?: RequestOptions): APIPromise<AudienceListMembersResponse> {
    return this._client.get(path`/v1/audiences/${key}/members`, options);
  }

  /**
   * Removes one or more members from the specified audience.
   */
  removeMembers(
    key: string,
    body: AudienceRemoveMembersParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.delete(path`/v1/audiences/${key}/members`, { body, ...options });
  }
}

/**
 * An audience member.
 */
export interface AudienceMember {
  /**
   * The type name of the schema.
   */
  __typename: string;

  /**
   * Timestamp when the resource was created.
   */
  added_at: string;

  /**
   * A user object.
   */
  user: UsersAPI.User;

  /**
   * The unique identifier for the user.
   */
  user_id: string;

  /**
   * The unique identifier for the tenant.
   */
  tenant?: string | null;
}

/**
 * An empty response.
 */
export type AudienceAddMembersResponse = string;

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
  page_info: AudienceListMembersResponse.PageInfo;
}

export namespace AudienceListMembersResponse {
  /**
   * Pagination information for a list of resources.
   */
  export interface PageInfo {
    /**
     * The type name of the schema.
     */
    __typename: string;

    /**
     * The number of items per page.
     */
    page_size: number;

    /**
     * The cursor to fetch entries after.
     */
    after?: string | null;

    /**
     * The cursor to fetch entries before.
     */
    before?: string | null;
  }
}

/**
 * An empty response.
 */
export type AudienceRemoveMembersResponse = string;

export interface AudienceAddMembersParams {
  /**
   * A list of audience members to add.
   */
  members: Array<AudienceAddMembersParams.Member>;
}

export namespace AudienceAddMembersParams {
  /**
   * An audience member.
   */
  export interface Member {
    /**
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    user: UsersAPI.InlineIdentifyUserRequest;

    /**
     * The unique identifier for the tenant.
     */
    tenant?: string | null;
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
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    user: UsersAPI.InlineIdentifyUserRequest;

    /**
     * The unique identifier for the tenant.
     */
    tenant?: string | null;
  }
}

export declare namespace Audiences {
  export {
    type AudienceMember as AudienceMember,
    type AudienceAddMembersResponse as AudienceAddMembersResponse,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceRemoveMembersResponse as AudienceRemoveMembersResponse,
    type AudienceAddMembersParams as AudienceAddMembersParams,
    type AudienceRemoveMembersParams as AudienceRemoveMembersParams,
  };
}
