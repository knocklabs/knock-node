// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MsTeamsPagination, type MsTeamsPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MsTeams extends APIResource {
  /**
   * Check if a connection to Microsoft Teams has been authorized for a given
   * Microsoft Teams tenant object.
   *
   * @example
   * ```ts
   * const response = await client.providers.msTeams.checkAuth(
   *   'channel_id',
   *   { ms_teams_tenant_object: 'ms_teams_tenant_object' },
   * );
   * ```
   */
  checkAuth(
    channelID: string,
    query: MsTeamCheckAuthParams,
    options?: RequestOptions,
  ): APIPromise<MsTeamCheckAuthResponse> {
    return this._client.get(path`/v1/providers/ms-teams/${channelID}/auth_check`, { query, ...options });
  }

  /**
   * List the Microsoft Teams channels within a team. By default, archived and
   * private channels are excluded from the results.
   *
   * @example
   * ```ts
   * const response =
   *   await client.providers.msTeams.listChannels(
   *     'channel_id',
   *     {
   *       ms_teams_tenant_object: 'ms_teams_tenant_object',
   *       team_id: 'team_id',
   *     },
   *   );
   * ```
   */
  listChannels(
    channelID: string,
    query: MsTeamListChannelsParams,
    options?: RequestOptions,
  ): APIPromise<MsTeamListChannelsResponse> {
    return this._client.get(path`/v1/providers/ms-teams/${channelID}/channels`, { query, ...options });
  }

  /**
   * Get a list of teams belonging to the Microsoft Entra tenant. By default,
   * archived and private channels are excluded from the results.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const msTeamListTeamsResponse of client.providers.msTeams.listTeams(
   *   'channel_id',
   *   { ms_teams_tenant_object: 'ms_teams_tenant_object' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listTeams(
    channelID: string,
    query: MsTeamListTeamsParams,
    options?: RequestOptions,
  ): PagePromise<MsTeamListTeamsResponsesMsTeamsPagination, MsTeamListTeamsResponse> {
    return this._client.getAPIList(
      path`/v1/providers/ms-teams/${channelID}/teams`,
      MsTeamsPagination<MsTeamListTeamsResponse>,
      { query, ...options },
    );
  }

  /**
   * Remove a Microsoft Entra tenant ID from a Microsoft Teams tenant object.
   *
   * @example
   * ```ts
   * const response =
   *   await client.providers.msTeams.revokeAccess(
   *     'channel_id',
   *     { ms_teams_tenant_object: 'ms_teams_tenant_object' },
   *   );
   * ```
   */
  revokeAccess(
    channelID: string,
    params: MsTeamRevokeAccessParams,
    options?: RequestOptions,
  ): APIPromise<MsTeamRevokeAccessResponse> {
    const { ms_teams_tenant_object } = params;
    return this._client.put(path`/v1/providers/ms-teams/${channelID}/revoke_access`, {
      query: { ms_teams_tenant_object },
      ...options,
    });
  }
}

export type MsTeamListTeamsResponsesMsTeamsPagination = MsTeamsPagination<MsTeamListTeamsResponse>;

/**
 * The response from a Microsoft Teams auth check request.
 */
export interface MsTeamCheckAuthResponse {
  /**
   * A Microsoft Teams connection object.
   */
  connection: MsTeamCheckAuthResponse.Connection;
}

export namespace MsTeamCheckAuthResponse {
  /**
   * A Microsoft Teams connection object.
   */
  export interface Connection {
    /**
     * Whether the Microsoft Teams connection is valid.
     */
    ok: boolean;

    /**
     * The reason for the Microsoft Teams connection if it is not valid.
     */
    reason?: string | null;
  }
}

/**
 * The response from a Microsoft Teams provider request, containing a list of
 * channels.
 */
export interface MsTeamListChannelsResponse {
  /**
   * List of Microsoft Teams channels.
   */
  ms_teams_channels: Array<MsTeamListChannelsResponse.MsTeamsChannel>;
}

export namespace MsTeamListChannelsResponse {
  export interface MsTeamsChannel {
    /**
     * Microsoft Teams channel ID.
     */
    id: string;

    /**
     * Microsoft Teams channel name.
     */
    displayName: string;

    /**
     * Microsoft Teams channel created date and time.
     */
    createdDateTime?: string;

    /**
     * Microsoft Teams channel description.
     */
    description?: string | null;

    /**
     * Whether the Microsoft Teams channel is archived.
     */
    isArchived?: boolean;

    /**
     * Microsoft Teams channel membership type.
     */
    membershipType?: string;
  }
}

export interface MsTeamListTeamsResponse {
  /**
   * Microsoft Teams team ID.
   */
  id: string;

  /**
   * Microsoft Teams team display name.
   */
  displayName: string;

  /**
   * Microsoft Teams team description.
   */
  description?: string | null;
}

/**
 * A response indicating the operation was successful.
 */
export interface MsTeamRevokeAccessResponse {
  /**
   * OK response.
   */
  ok?: string;
}

export interface MsTeamCheckAuthParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference.
   */
  ms_teams_tenant_object: string;
}

export interface MsTeamListChannelsParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference.
   */
  ms_teams_tenant_object: string;

  /**
   * Microsoft Teams team ID.
   */
  team_id: string;

  query_options?: MsTeamListChannelsParams.QueryOptions;
}

export namespace MsTeamListChannelsParams {
  export interface QueryOptions {
    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to filter channels.
     */
    $filter?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to select specific properties.
     */
    $select?: string;
  }
}

export interface MsTeamListTeamsParams extends MsTeamsPaginationParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference.
   */
  ms_teams_tenant_object: string;

  query_options?: MsTeamListTeamsParams.QueryOptions;
}

export namespace MsTeamListTeamsParams {
  export interface QueryOptions {
    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to filter teams.
     */
    $filter?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to select fields on a team.
     */
    $select?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to retrieve the next page of results.
     */
    $skiptoken?: string;

    /**
     * [OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed
     * to the Microsoft Graph API to limit the number of teams returned.
     */
    $top?: number;
  }
}

export interface MsTeamRevokeAccessParams {
  /**
   * A JSON encoded string containing the Microsoft Teams tenant object reference.
   */
  ms_teams_tenant_object: string;
}

export declare namespace MsTeams {
  export {
    type MsTeamCheckAuthResponse as MsTeamCheckAuthResponse,
    type MsTeamListChannelsResponse as MsTeamListChannelsResponse,
    type MsTeamListTeamsResponse as MsTeamListTeamsResponse,
    type MsTeamRevokeAccessResponse as MsTeamRevokeAccessResponse,
    type MsTeamListTeamsResponsesMsTeamsPagination as MsTeamListTeamsResponsesMsTeamsPagination,
    type MsTeamCheckAuthParams as MsTeamCheckAuthParams,
    type MsTeamListChannelsParams as MsTeamListChannelsParams,
    type MsTeamListTeamsParams as MsTeamListTeamsParams,
    type MsTeamRevokeAccessParams as MsTeamRevokeAccessParams,
  };
}
