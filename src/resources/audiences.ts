// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Add members to an audience
   */
  addMembers(key: string, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/audiences/${key}/members`, options);
  }

  /**
   * List members of an audience
   */
  listMembers(key: string, options?: RequestOptions): APIPromise<AudienceListMembersResponse> {
    return this._client.get(path`/v1/audiences/${key}/members`, options);
  }

  /**
   * Remove members from an audience
   */
  removeMembers(key: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/audiences/${key}/members`, options);
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

export declare namespace Audiences {
  export {
    type AudienceMember as AudienceMember,
    type AudienceAddMembersResponse as AudienceAddMembersResponse,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceRemoveMembersResponse as AudienceRemoveMembersResponse,
  };
}
