// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SlackChannelsCursor, type SlackChannelsCursorParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Slack extends APIResource {
  /**
   * Check if a Slack channel is authenticated
   */
  checkAuth(
    channelID: string,
    query: SlackCheckAuthParams,
    options?: RequestOptions,
  ): APIPromise<SlackCheckAuthResponse> {
    return this._client.get(path`/v1/providers/slack/${channelID}/auth_check`, { query, ...options });
  }

  /**
   * List Slack channels for a Slack workspace
   */
  listChannels(
    channelID: string,
    query: SlackListChannelsParams,
    options?: RequestOptions,
  ): PagePromise<SlackListChannelsResponsesSlackChannelsCursor, SlackListChannelsResponse> {
    return this._client.getAPIList(
      path`/v1/providers/slack/${channelID}/channels`,
      SlackChannelsCursor<SlackListChannelsResponse>,
      { query, ...options },
    );
  }

  /**
   * Revoke access for a Slack channel
   */
  revokeAccess(
    channelID: string,
    params: SlackRevokeAccessParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { access_token_object } = params;
    return this._client.put(path`/v1/providers/slack/${channelID}/revoke_access`, {
      query: { access_token_object },
      ...options,
    });
  }
}

export type SlackListChannelsResponsesSlackChannelsCursor = SlackChannelsCursor<SlackListChannelsResponse>;

/**
 * The response from a Slack auth check request
 */
export interface SlackCheckAuthResponse {
  connection: SlackCheckAuthResponse.Connection;
}

export namespace SlackCheckAuthResponse {
  export interface Connection {
    ok: boolean;

    reason?: string | null;
  }
}

export interface SlackListChannelsResponse {
  id: string;

  context_team_id: string;

  is_im: boolean;

  is_private: boolean;

  name: string;
}

export type SlackRevokeAccessResponse = string;

export interface SlackCheckAuthParams {
  /**
   * A JSON encoded string containing the access token object reference
   */
  access_token_object: string;
}

export interface SlackListChannelsParams extends SlackChannelsCursorParams {
  /**
   * A JSON encoded string containing the access token object reference
   */
  access_token_object: string;

  query_options?: SlackListChannelsParams.QueryOptions;
}

export namespace SlackListChannelsParams {
  export interface QueryOptions {
    /**
     * A cursor to paginate through the channels
     */
    cursor?: string;

    /**
     * Whether to exclude archived channels
     */
    exclude_archived?: boolean;

    /**
     * The number of channels to return
     */
    limit?: number;

    /**
     * The ID of the Slack team to get channels for
     */
    team_id?: string;

    /**
     * The types of channels to return (comma separated list)
     */
    types?: string;
  }
}

export interface SlackRevokeAccessParams {
  /**
   * A JSON encoded string containing the access token object reference
   */
  access_token_object: string;
}

export declare namespace Slack {
  export {
    type SlackCheckAuthResponse as SlackCheckAuthResponse,
    type SlackListChannelsResponse as SlackListChannelsResponse,
    type SlackRevokeAccessResponse as SlackRevokeAccessResponse,
    type SlackListChannelsResponsesSlackChannelsCursor as SlackListChannelsResponsesSlackChannelsCursor,
    type SlackCheckAuthParams as SlackCheckAuthParams,
    type SlackListChannelsParams as SlackListChannelsParams,
    type SlackRevokeAccessParams as SlackRevokeAccessParams,
  };
}
