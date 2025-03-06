// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class MsTeams extends APIResource {
  /**
   * Check if a connection to Microsoft Teams has been authorized for a given
   * Microsoft Teams tenant object
   */
  checkAuth(
    channelId: string,
    query: MsTeamCheckAuthParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MsTeamCheckAuthResponse> {
    return this._client.get(`/v1/providers/ms-teams/${channelId}/auth_check`, { query, ...options });
  }

  /**
   * Get a list of the Microsoft Teams channels within a team. By default, archived
   * and private channels are excluded from the results.
   */
  listChannels(
    channelId: string,
    query: MsTeamListChannelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MsTeamListChannelsResponse> {
    return this._client.get(`/v1/providers/ms-teams/${channelId}/channels`, { query, ...options });
  }

  /**
   * Get a list of teams belonging to the Microsoft Entra tenant
   */
  listTeams(
    channelId: string,
    query: MsTeamListTeamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MsTeamListTeamsResponse> {
    return this._client.get(`/v1/providers/ms-teams/${channelId}/teams`, { query, ...options });
  }

  /**
   * Remove a Microsoft Entra tenant ID from a Microsoft Teams tenant object
   */
  revokeAccess(
    channelId: string,
    params: MsTeamRevokeAccessParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { ms_teams_tenant_object } = params;
    return this._client.put(`/v1/providers/ms-teams/${channelId}/revoke_access`, {
      query: { ms_teams_tenant_object },
      ...options,
    });
  }
}

/**
 * The response from a Microsoft Teams auth check request
 */
export interface MsTeamCheckAuthResponse {
  connection: MsTeamCheckAuthResponse.Connection;
}

export namespace MsTeamCheckAuthResponse {
  export interface Connection {
    ok: boolean;

    reason?: string | null;
  }
}

/**
 * The response from a channels for Microsoft Teams provider request
 */
export interface MsTeamListChannelsResponse {
  ms_teams_channels: Array<MsTeamListChannelsResponse.MsTeamsChannel>;
}

export namespace MsTeamListChannelsResponse {
  export interface MsTeamsChannel {
    id: string;

    displayName: string;

    createdDateTime?: string;

    description?: string | null;

    isArchived?: boolean;

    membershipType?: string;
  }
}

/**
 * The response from a teams for Microsoft Teams provider request
 */
export interface MsTeamListTeamsResponse {
  ms_teams_teams: Array<MsTeamListTeamsResponse.MsTeamsTeam>;

  skip_token: string | null;
}

export namespace MsTeamListTeamsResponse {
  export interface MsTeamsTeam {
    id: string;

    displayName: string;

    description?: string | null;
  }
}

export type MsTeamRevokeAccessResponse = string;

export interface MsTeamCheckAuthParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference
   */
  ms_teams_tenant_object: string;
}

export interface MsTeamListChannelsParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference
   */
  ms_teams_tenant_object: string;

  /**
   * The ID of the Microsoft Teams team to list channels from
   */
  team_id: string;

  query_options?: MsTeamListChannelsParams.QueryOptions;
}

export namespace MsTeamListChannelsParams {
  export interface QueryOptions {
    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to filter channels
     */
    $filter?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to select fields on a channel
     */
    $select?: string;
  }
}

export interface MsTeamListTeamsParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference
   */
  ms_teams_tenant_object: string;

  query_options?: MsTeamListTeamsParams.QueryOptions;
}

export namespace MsTeamListTeamsParams {
  export interface QueryOptions {
    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to filter teams
     */
    $filter?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to select fields on a team
     */
    $select?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to retrieve the next page of results
     */
    $skiptoken?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to limit the number of teams returned
     */
    $top?: number;
  }
}

export interface MsTeamRevokeAccessParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference
   */
  ms_teams_tenant_object: string;
}

export declare namespace MsTeams {
  export {
    type MsTeamCheckAuthResponse as MsTeamCheckAuthResponse,
    type MsTeamListChannelsResponse as MsTeamListChannelsResponse,
    type MsTeamListTeamsResponse as MsTeamListTeamsResponse,
    type MsTeamRevokeAccessResponse as MsTeamRevokeAccessResponse,
    type MsTeamCheckAuthParams as MsTeamCheckAuthParams,
    type MsTeamListChannelsParams as MsTeamListChannelsParams,
    type MsTeamListTeamsParams as MsTeamListTeamsParams,
    type MsTeamRevokeAccessParams as MsTeamRevokeAccessParams,
  };
}
