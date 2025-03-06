// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Slack extends APIResource {
  /**
   * Check if a Slack channel is authenticated
   */
  checkAuth(
    channelId: string,
    query: SlackCheckAuthParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SlackCheckAuthResponse> {
    return this._client.get(`/v1/providers/slack/${channelId}/auth_check`, { query, ...options });
  }

  /**
   * Get Slack channels from a Slack workspace
   */
  listChannels(
    channelId: string,
    query: SlackListChannelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SlackListChannelsResponse> {
    return this._client.get(`/v1/providers/slack/${channelId}/channels`, { query, ...options });
  }

  /**
   * Revoke access for a Slack channel
   */
  revokeAccess(
    channelId: string,
    params: SlackRevokeAccessParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { access_token_object } = params;
    return this._client.put(`/v1/providers/slack/${channelId}/revoke_access`, {
      query: { access_token_object },
      ...options,
    });
  }
}

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

/**
 * The response from a Slack channels for provider request
 */
export interface SlackListChannelsResponse {
  next_cursor: string | null;

  slack_channels: Array<SlackListChannelsResponse.SlackChannel>;
}

export namespace SlackListChannelsResponse {
  export interface SlackChannel {
    id: string;

    context_team_id: string;

    is_im: boolean;

    is_private: boolean;

    name: string;
  }
}

export type SlackRevokeAccessResponse = string;

export interface SlackCheckAuthParams {
  /**
   * A JSON encoded string containing the access token object reference
   */
  access_token_object: string;
}

export interface SlackListChannelsParams {
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
    exclude_archived?: string;

    /**
     * The number of channels to return
     */
    limit?: string;

    /**
     * The ID of the Slack team to get channels for
     */
    team_id?: string;

    /**
     * The types of channels to return
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
    type SlackCheckAuthParams as SlackCheckAuthParams,
    type SlackListChannelsParams as SlackListChannelsParams,
    type SlackRevokeAccessParams as SlackRevokeAccessParams,
  };
}
