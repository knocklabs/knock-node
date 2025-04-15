// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class ChannelData extends APIResource {}

/**
 * Channel data for various channel types
 */
export interface ChannelData {
  __typename: string;

  channel_id: string;

  /**
   * Channel data for push providers
   */
  data: PushChannelData | SlackChannelData | MsTeamsChannelData | DiscordChannelData | OneSignalChannelData;
}

/**
 * Set channel data for a type of channel
 */
export interface ChannelDataRequest {
  /**
   * Channel data for push providers
   */
  data: PushChannelData | OneSignalChannelData | SlackChannelData | MsTeamsChannelData | DiscordChannelData;
}

/**
 * Discord channel data
 */
export interface DiscordChannelData {
  connections: Array<DiscordChannelData.ChannelConnection | DiscordChannelData.IncomingWebhookConnection>;
}

export namespace DiscordChannelData {
  /**
   * Discord channel connection
   */
  export interface ChannelConnection {
    /**
     * The Discord channel ID
     */
    channel_id: string;
  }

  /**
   * An incoming webhook Slack connection
   */
  export interface IncomingWebhookConnection {
    url: string;
  }
}

/**
 * Allows inline setting channel data for a recipient
 */
export type InlineChannelDataRequest = Record<string, ChannelDataRequest>;

/**
 * Microsoft Teams channel data
 */
export interface MsTeamsChannelData {
  connections: Array<MsTeamsChannelData.TokenConnection | MsTeamsChannelData.IncomingWebhookConnection>;

  /**
   * The Microsoft Teams tenant ID
   */
  ms_teams_tenant_id?: string | null;
}

export namespace MsTeamsChannelData {
  /**
   * A Slack connection, which either includes a channel_id or a user_id
   */
  export interface TokenConnection {
    access_token?: string | null;

    channel_id?: string | null;

    user_id?: string | null;
  }

  /**
   * An incoming webhook Slack connection
   */
  export interface IncomingWebhookConnection {
    url: string;
  }
}

/**
 * OneSignal channel data
 */
export interface OneSignalChannelData {
  /**
   * The OneSignal player IDs
   */
  player_ids: Array<string>;
}

/**
 * Channel data for push providers
 */
export interface PushChannelData {
  tokens: Array<string>;
}

/**
 * Slack channel data
 */
export interface SlackChannelData {
  connections: Array<SlackChannelData.TokenConnection | SlackChannelData.IncomingWebhookConnection>;

  token?: SlackChannelData.Token | null;
}

export namespace SlackChannelData {
  /**
   * A Slack connection, which either includes a channel_id or a user_id
   */
  export interface TokenConnection {
    access_token?: string | null;

    channel_id?: string | null;

    user_id?: string | null;
  }

  /**
   * An incoming webhook Slack connection
   */
  export interface IncomingWebhookConnection {
    url: string;
  }

  export interface Token {
    access_token: string | null;
  }
}

export declare namespace ChannelData {
  export {
    type ChannelData as ChannelData,
    type ChannelDataRequest as ChannelDataRequest,
    type DiscordChannelData as DiscordChannelData,
    type InlineChannelDataRequest as InlineChannelDataRequest,
    type MsTeamsChannelData as MsTeamsChannelData,
    type OneSignalChannelData as OneSignalChannelData,
    type PushChannelData as PushChannelData,
    type SlackChannelData as SlackChannelData,
  };
}
