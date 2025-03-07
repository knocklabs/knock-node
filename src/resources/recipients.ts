// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as RecipientsAPI from './recipients';
import * as Shared from './shared';
import * as ObjectsAPI from './objects/objects';
import * as UsersAPI from './users/users';
import { EntriesCursor } from '../pagination';

export class Recipients extends APIResource {}

export type SubscriptionsEntriesCursor = EntriesCursor<Subscription>;

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
 * Inline set preferences for a recipient, where the key is the preference set name
 */
export type InlinePreferenceSetRequest = Record<string, PreferenceSetRequest>;

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
 * A preference set object.
 */
export interface PreferenceSet {
  id: string;

  __typename: string;

  /**
   * A map of categories and their settings
   */
  categories?: Record<string, boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject> | null;

  /**
   * Channel type preferences
   */
  channel_types?: PreferenceSetChannelTypes | null;

  /**
   * A map of workflows and their settings
   */
  workflows?: Record<string, boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject> | null;
}

export namespace PreferenceSet {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: RecipientsAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }

  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: RecipientsAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }
}

/**
 * A set of settings for a channel type. Currently, this can only be a list of
 * conditions to apply.
 */
export interface PreferenceSetChannelTypeSetting {
  conditions: Array<Shared.Condition>;
}

/**
 * Channel type preferences
 */
export interface PreferenceSetChannelTypes {
  /**
   * A set of settings for a channel type. Currently, this can only be a list of
   * conditions to apply.
   */
  chat?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * A set of settings for a channel type. Currently, this can only be a list of
   * conditions to apply.
   */
  email?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * A set of settings for a channel type. Currently, this can only be a list of
   * conditions to apply.
   */
  http?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * A set of settings for a channel type. Currently, this can only be a list of
   * conditions to apply.
   */
  in_app_feed?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * A set of settings for a channel type. Currently, this can only be a list of
   * conditions to apply.
   */
  push?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * A set of settings for a channel type. Currently, this can only be a list of
   * conditions to apply.
   */
  sms?: boolean | PreferenceSetChannelTypeSetting;
}

/**
 * Set preferences for a recipient
 */
export interface PreferenceSetRequest {
  /**
   * A setting for a preference set, where the key in the object is the category, and
   * the values are the preference settings for that category.
   */
  categories?: Record<
    string,
    boolean | PreferenceSetRequest.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences
   */
  channel_types?: PreferenceSetChannelTypes | null;

  /**
   * A setting for a preference set, where the key in the object is the workflow key,
   * and the values are the preference settings for that workflow.
   */
  workflows?: Record<
    string,
    boolean | PreferenceSetRequest.PreferenceSetWorkflowCategorySettingObject
  > | null;
}

export namespace PreferenceSetRequest {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: RecipientsAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }

  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences
     */
    channel_types?: RecipientsAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }
}

/**
 * Channel data for push providers
 */
export interface PushChannelData {
  tokens: Array<string>;
}

/**
 * A recipient, which is either a user or an object
 */
export type Recipient = UsersAPI.User | ObjectsAPI.Object;

/**
 * Specifies a recipient in a request. This can either be a user identifier
 * (string), an inline user request (object), or an inline object request, which is
 * determined by the presence of a `collection` property.
 */
export type RecipientRequest = string | UsersAPI.InlineIdentifyUserRequest | ObjectsAPI.InlineObjectRequest;

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

/**
 * A subscription object
 */
export interface Subscription {
  __typename: string;

  inserted_at: string;

  /**
   * A custom-object entity which belongs to a collection.
   */
  object: ObjectsAPI.Object;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: Recipient;

  updated_at: string;

  /**
   * The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
}

export declare namespace Recipients {
  export {
    type ChannelData as ChannelData,
    type ChannelDataRequest as ChannelDataRequest,
    type DiscordChannelData as DiscordChannelData,
    type InlineChannelDataRequest as InlineChannelDataRequest,
    type InlinePreferenceSetRequest as InlinePreferenceSetRequest,
    type MsTeamsChannelData as MsTeamsChannelData,
    type OneSignalChannelData as OneSignalChannelData,
    type PreferenceSet as PreferenceSet,
    type PreferenceSetChannelTypeSetting as PreferenceSetChannelTypeSetting,
    type PreferenceSetChannelTypes as PreferenceSetChannelTypes,
    type PreferenceSetRequest as PreferenceSetRequest,
    type PushChannelData as PushChannelData,
    type Recipient as Recipient,
    type RecipientRequest as RecipientRequest,
    type SlackChannelData as SlackChannelData,
    type Subscription as Subscription,
  };
}
