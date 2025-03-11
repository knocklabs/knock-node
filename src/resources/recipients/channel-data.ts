// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

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
  connections: Array<
    DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
  >;
}

export namespace DiscordChannelData {
  /**
   * Discord channel connection
   */
  export interface DiscordChannelConnection {
    /**
     * The Discord channel ID
     */
    channel_id: string;
  }

  /**
   * Discord incoming webhook connection
   */
  export interface DiscordIncomingWebhookConnection {
    /**
     * The incoming webhook
     */
    incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
  }

  export namespace DiscordIncomingWebhookConnection {
    /**
     * The incoming webhook
     */
    export interface IncomingWebhook {
      /**
       * The URL of the incoming webhook
       */
      url: string;
    }
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
  connections: Array<
    MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
  >;

  /**
   * The Microsoft Teams tenant ID
   */
  ms_teams_tenant_id?: string | null;
}

export namespace MsTeamsChannelData {
  /**
   * Microsoft Teams token connection
   */
  export interface MsTeamsTokenConnection {
    /**
     * The Microsoft Teams channel ID
     */
    ms_teams_channel_id?: string | null;

    /**
     * The Microsoft Teams team ID
     */
    ms_teams_team_id?: string | null;

    /**
     * The Microsoft Teams tenant ID
     */
    ms_teams_tenant_id?: string | null;

    /**
     * The Microsoft Teams user ID
     */
    ms_teams_user_id?: string | null;
  }

  /**
   * Microsoft Teams incoming webhook connection
   */
  export interface MsTeamsIncomingWebhookConnection {
    /**
     * The incoming webhook
     */
    incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
  }

  export namespace MsTeamsIncomingWebhookConnection {
    /**
     * The incoming webhook
     */
    export interface IncomingWebhook {
      /**
       * The URL of the incoming webhook
       */
      url: string;
    }
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
  connections: Array<SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection>;

  /**
   * A token that's used to store the access token for a Slack workspace.
   */
  token?: SlackChannelData.Token | null;
}

export namespace SlackChannelData {
  /**
   * A Slack connection, which either includes a channel_id or a user_id
   */
  export interface SlackTokenConnection {
    access_token?: string | null;

    channel_id?: string | null;

    user_id?: string | null;
  }

  /**
   * An incoming webhook Slack connection
   */
  export interface SlackIncomingWebhookConnection {
    url: string;
  }

  /**
   * A token that's used to store the access token for a Slack workspace.
   */
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
