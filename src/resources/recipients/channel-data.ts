// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class ChannelData extends APIResource {}

/**
 * Channel data for a given channel type.
 */
export interface ChannelData {
  /**
   * The unique identifier for the channel.
   */
  channel_id: string;

  /**
   * Channel data for a given channel type.
   */
  data: PushChannelData | SlackChannelData | MsTeamsChannelData | DiscordChannelData | OneSignalChannelData;

  /**
   * The type of provider.
   */
  provider:
    | 'push_fcm'
    | 'push_apns'
    | 'push_expo'
    | 'push_one_signal'
    | 'chat_slack'
    | 'chat_ms_teams'
    | 'chat_discord'
    | 'http_knock_webhook';

  /**
   * The typename of the schema.
   */
  __typename?: string;
}

/**
 * A request to set channel data for a type of channel.
 */
export interface ChannelDataRequest {
  /**
   * Channel data for a given channel type.
   */
  data: PushChannelData | OneSignalChannelData | SlackChannelData | MsTeamsChannelData | DiscordChannelData;
}

/**
 * Discord channel data.
 */
export interface DiscordChannelData {
  /**
   * List of Discord channel connections.
   */
  connections: Array<
    DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
  >;

  /**
   * The type of provider.
   */
  type: 'chat_discord';

  /**
   * The typename of the schema.
   */
  __typename?: 'DiscordChannelData';
}

export namespace DiscordChannelData {
  /**
   * Discord channel connection.
   */
  export interface DiscordChannelConnection {
    /**
     * Discord channel ID.
     */
    channel_id: string;
  }

  /**
   * Discord incoming webhook connection.
   */
  export interface DiscordIncomingWebhookConnection {
    /**
     * Discord incoming webhook object.
     */
    incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
  }

  export namespace DiscordIncomingWebhookConnection {
    /**
     * Discord incoming webhook object.
     */
    export interface IncomingWebhook {
      /**
       * Incoming webhook URL.
       */
      url: string;
    }
  }
}

/**
 * A request to set channel data for a type of channel inline.
 */
export type InlineChannelDataRequest = Record<string, ChannelDataRequest>;

/**
 * Microsoft Teams channel connection.
 */
export interface MsTeamsChannelData {
  /**
   * List of Microsoft Teams connections.
   */
  connections: Array<
    MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
  >;

  /**
   * The type of provider.
   */
  type: 'chat_ms_teams';

  /**
   * The typename of the schema.
   */
  __typename?: 'MsTeamsChannelData';

  /**
   * Microsoft Teams tenant ID.
   */
  ms_teams_tenant_id?: string | null;
}

export namespace MsTeamsChannelData {
  /**
   * Microsoft Teams token connection.
   */
  export interface MsTeamsTokenConnection {
    /**
     * Microsoft Teams channel ID.
     */
    ms_teams_channel_id?: string | null;

    /**
     * Microsoft Teams team ID.
     */
    ms_teams_team_id?: string | null;

    /**
     * Microsoft Teams tenant ID.
     */
    ms_teams_tenant_id?: string | null;

    /**
     * Microsoft Teams user ID.
     */
    ms_teams_user_id?: string | null;
  }

  /**
   * Microsoft Teams incoming webhook connection.
   */
  export interface MsTeamsIncomingWebhookConnection {
    /**
     * Microsoft Teams incoming webhook.
     */
    incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
  }

  export namespace MsTeamsIncomingWebhookConnection {
    /**
     * Microsoft Teams incoming webhook.
     */
    export interface IncomingWebhook {
      /**
       * Microsoft Teams incoming webhook URL.
       */
      url: string;
    }
  }
}

/**
 * OneSignal channel data.
 */
export interface OneSignalChannelData {
  /**
   * A list of OneSignal player IDs.
   */
  player_ids: Array<string>;

  /**
   * The type of provider.
   */
  type: 'push_one_signal';

  /**
   * The typename of the schema.
   */
  __typename?: 'OneSignalChannelData';
}

/**
 * The content of a push notification.
 */
export interface PushChannelData {
  /**
   * A list of push channel tokens.
   */
  tokens: Array<string>;

  /**
   * The type of provider.
   */
  type: 'push_fcm' | 'push_apns' | 'push_expo';

  /**
   * The typename of the schema.
   */
  __typename?: 'PushChannelData';
}

/**
 * Slack channel data
 */
export interface SlackChannelData {
  /**
   * List of Slack channel connections.
   */
  connections: Array<SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection>;

  /**
   * The type of provider.
   */
  type: 'chat_slack';

  /**
   * A Slack connection token.
   */
  token?: SlackChannelData.Token | null;

  /**
   * The typename of the schema.
   */
  __typename?: 'SlackChannelData';
}

export namespace SlackChannelData {
  /**
   * A Slack connection token.
   */
  export interface SlackTokenConnection {
    /**
     * A Slack access token.
     */
    access_token?: string | null;

    /**
     * A Slack channel ID from the Slack provider.
     */
    channel_id?: string | null;

    /**
     * A Slack user ID from the Slack provider.
     */
    user_id?: string | null;
  }

  /**
   * A Slack connection incoming webhook.
   */
  export interface SlackIncomingWebhookConnection {
    /**
     * The URL of the incoming webhook for a Slack connection.
     */
    url: string;
  }

  /**
   * A Slack connection token.
   */
  export interface Token {
    /**
     * A Slack access token.
     */
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
