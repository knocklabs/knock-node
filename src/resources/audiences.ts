// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UsersAPI from './users/users';

export class Audiences extends APIResource {
  /**
   * Add members to an audience
   */
  addMembers(key: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/v1/audiences/${key}/members`, options);
  }

  /**
   * List members of an audience
   */
  listMembers(key: string, options?: Core.RequestOptions): Core.APIPromise<AudienceListMembersResponse> {
    return this._client.get(`/v1/audiences/${key}/members`, options);
  }

  /**
   * Remove members from an audience
   */
  removeMembers(key: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/v1/audiences/${key}/members`, options);
  }
}

/**
 * An empty response
 */
export type AudienceAddMembersResponse = string;

/**
 * A response containing a list of audience members
 */
export interface AudienceListMembersResponse {
  entries: Array<AudienceListMembersResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: AudienceListMembersResponse.PageInfo;
}

export namespace AudienceListMembersResponse {
  /**
   * A user belonging to an audience
   */
  export interface Entry {
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
    type AudienceAddMembersResponse as AudienceAddMembersResponse,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceRemoveMembersResponse as AudienceRemoveMembersResponse,
  };
}
