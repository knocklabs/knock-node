// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Add members
   */
  addMembers(key: string, body: AudienceAddMembersParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/audiences/${key}/members`, { body, ...options });
  }

  /**
   * List members
   */
  listMembers(key: string, options?: RequestOptions): APIPromise<AudienceListMembersResponse> {
    return this._client.get(path`/v1/audiences/${key}/members`, options);
  }

  /**
   * Remove members
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
 * A user belonging to an audience
 */
export interface AudienceMember {
  __typename: string;

  added_at: string;

  /**
   * A user object
   */
  user: UsersAPI.User;

  user_id: string;

  tenant?: string | null;
}

/**
 * An empty response
 */
export type AudienceAddMembersResponse = string;

/**
 * A response containing a list of audience members
 */
export interface AudienceListMembersResponse {
  entries: Array<AudienceMember>;

  /**
   * The information about a paginated result
   */
  page_info: AudienceListMembersResponse.PageInfo;
}

export namespace AudienceListMembersResponse {
  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * An empty response
 */
export type AudienceRemoveMembersResponse = string;

export interface AudienceAddMembersParams {
  members: Array<AudienceAddMembersParams.Member>;
}

export namespace AudienceAddMembersParams {
  /**
   * A request for an individual audience member
   */
  export interface Member {
    /**
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    user: UsersAPI.InlineIdentifyUserRequest;

    tenant?: string | null;
  }
}

export interface AudienceRemoveMembersParams {
  members: Array<AudienceRemoveMembersParams.Member>;
}

export namespace AudienceRemoveMembersParams {
  /**
   * A request for an individual audience member
   */
  export interface Member {
    /**
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    user: UsersAPI.InlineIdentifyUserRequest;

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
