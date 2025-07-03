// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SlackChannelsCursor, type SlackChannelsCursorParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Slack extends APIResource {
  /**
   * Check if a Slack channel is authenticated.
   *
   * @example
   * ```ts
   * const response = await client.providers.slack.checkAuth(
   *   'channel_id',
   *   { access_token_object: 'access_token_object' },
   * );
   * ```
   */
  checkAuth(
    channelID: string,
    query: SlackCheckAuthParams,
    options?: RequestOptions,
  ): APIPromise<SlackCheckAuthResponse> {
    return this._client.get(path`/v1/providers/slack/${channelID}/auth_check`, { query, ...options });
  }

  /**
   * List Slack channels for a Slack workspace.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const slackListChannelsResponse of client.providers.slack.listChannels(
   *   'channel_id',
   *   { access_token_object: 'access_token_object' },
   * )) {
   *   // ...
   * }
   * ```
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
   * Revoke access for a Slack channel.
   *
   * @example
   * ```ts
   * const response = await client.providers.slack.revokeAccess(
   *   'channel_id',
   *   { access_token_object: 'access_token_object' },
   * );
   * ```
   */
  revokeAccess(
    channelID: string,
    params: SlackRevokeAccessParams,
    options?: RequestOptions,
  ): APIPromise<SlackRevokeAccessResponse> {
    const { access_token_object } = params;
    return this._client.put(path`/v1/providers/slack/${channelID}/revoke_access`, {
      query: { access_token_object },
      ...options,
    });
  }
}

export type SlackListChannelsResponsesSlackChannelsCursor = SlackChannelsCursor<SlackListChannelsResponse>;

/**
 * The response from a Slack auth check request.
 */
export interface SlackCheckAuthResponse {
  /**
   * A Slack connection object.
   */
  connection: SlackCheckAuthResponse.Connection;
}

export namespace SlackCheckAuthResponse {
  /**
   * A Slack connection object.
   */
  export interface Connection {
    /**
     * Whether the Slack connection is valid.
     */
    ok: boolean;

    /**
     * The reason for the Slack connection if it is not valid.
     */
    reason?: string | null;
  }
}

/**
 * A Slack channel.
 */
export interface SlackListChannelsResponse {
  /**
   * A Slack channel ID from the Slack provider.
   */
  id: string;

  /**
   * The team ID that the Slack channel belongs to.
   */
  context_team_id: string;

  /**
   * Whether the Slack channel is an IM channel.
   */
  is_im: boolean;

  /**
   * Whether the Slack channel is private.
   */
  is_private: boolean;

  /**
   * Slack channel name.
   */
  name: string;
}

/**
 * A response indicating the operation was successful.
 */
export interface SlackRevokeAccessResponse {
  /**
   * OK response.
   */
  ok?: string;
}

export interface SlackCheckAuthParams {
  /**
   * A JSON encoded string containing the access token object reference.
   */
  access_token_object: string;
}

export interface SlackListChannelsParams extends SlackChannelsCursorParams {
  /**
   * A JSON encoded string containing the access token object reference.
   */
  access_token_object: string;

  query_options?: SlackListChannelsParams.QueryOptions;
}

export namespace SlackListChannelsParams {
  export interface QueryOptions {
    /**
     * Paginate through collections of data by setting the cursor parameter to a
     * next_cursor attribute returned by a previous request's response_metadata.
     * Default value fetches the first "page" of the collection.
     */
    cursor?: string;

    /**
     * Set to true to exclude archived channels from the list. Defaults to `true` when
     * not explicitly provided.
     */
    exclude_archived?: boolean;

    /**
     * The maximum number of channels to return. Defaults to 200.
     */
    limit?: number;

    /**
     * Encoded team ID (T1234) to list channels in, required if org token is used.
     */
    team_id?: string;

    /**
     * Mix and match channel types by providing a comma-separated list of any
     * combination of public_channel, private_channel, mpim, im. Defaults to
     * `"public_channel,private_channel"`. If the user's Slack ID is unavailable, this
     * option is ignored and only public channels are returned.
     */
    types?: string;
  }
}

export interface SlackRevokeAccessParams {
  /**
   * A JSON encoded string containing the access token object reference.
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
