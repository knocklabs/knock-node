// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import { EntriesCursor } from '../pagination';

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
 * A condition to be evaluated
 */
export interface Condition {
  argument: string | null;

  operator:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'empty'
    | 'not_empty'
    | 'contains_all'
    | 'is_timestamp'
    | 'is_not_timestamp'
    | 'is_timestamp_after'
    | 'is_timestamp_before'
    | 'is_timestamp_between'
    | 'is_audience_member';

  variable: string;
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
 * A set of parameters to inline-identify a user with. Inline identifying the user
 * will ensure that the user is available before the request is executed in Knock.
 * It will perform an upsert against the user you're supplying, replacing any
 * properties specified.
 */
export interface InlineIdentifyUserRequest {
  /**
   * The ID of the user to identify. This is an ID that you supply.
   */
  id: string;

  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: InlineChannelDataRequest | null;

  /**
   * The creation date of the user from your system.
   */
  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: InlinePreferenceSetRequest | null;
  [k: string]: unknown;
}

/**
 * Inline identifies a custom object belonging to a collection
 */
export interface InlineObjectRequest {
  id: string;

  collection: string;

  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: InlineChannelDataRequest | null;

  created_at?: string | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: InlinePreferenceSetRequest | null;
  [k: string]: unknown;
}

/**
 * Inline set preferences for a recipient, where the key is the preference set name
 */
export type InlinePreferenceSetRequest = Record<string, PreferenceSetRequest>;

/**
 * An inline tenant request
 */
export type InlineTenantRequest = string | TenantRequest;

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
 * A custom-object entity which belongs to a collection.
 */
export interface Object {
  id: string;

  __typename: string;

  collection: string;

  updated_at: string;

  created_at?: string | null;
  [k: string]: unknown;
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
    channel_types?: Shared.PreferenceSetChannelTypes | null;

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
    channel_types?: Shared.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
  }
}

/**
 * A set of settings for a channel type. Currently, this can only be a list of
 * conditions to apply.
 */
export interface PreferenceSetChannelTypeSetting {
  conditions: Array<Condition>;
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
    channel_types?: Shared.PreferenceSetChannelTypes | null;

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
    channel_types?: Shared.PreferenceSetChannelTypes | null;

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
export type Recipient = User | Object;

/**
 * Specifies a recipient in a request. This can either be a user identifier
 * (string), an inline user request (object), or an inline object request, which is
 * determined by the presence of a `collection` property.
 */
export type RecipientRequest = string | InlineIdentifyUserRequest | InlineObjectRequest;

/**
 * A schedule that represents a recurring workflow execution
 */
export interface Schedule {
  id: string;

  inserted_at: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: Recipient;

  repeats: Array<ScheduleRepeatRule>;

  updated_at: string;

  workflow: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: Recipient | null;

  data?: Record<string, unknown> | null;

  last_occurrence_at?: string | null;

  next_occurrence_at?: string | null;

  tenant?: string | null;
}

/**
 * A schedule repeat rule
 */
export interface ScheduleRepeatRule {
  __typename: string;

  frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

  day_of_month?: number | null;

  days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

  hours?: number | null;

  interval?: number;

  minutes?: number | null;
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

/**
 * A subscription object
 */
export interface Subscription {
  __typename: string;

  inserted_at: string;

  /**
   * A custom-object entity which belongs to a collection.
   */
  object: Object;

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

/**
 * A tenant entity
 */
export interface Tenant {
  id: string;

  __typename: string;
  [k: string]: unknown;
}

/**
 * A tenant to be set in the system
 */
export interface TenantRequest {
  id: string;

  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: InlineChannelDataRequest | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: InlinePreferenceSetRequest | null;

  settings?: TenantRequest.Settings;
  [k: string]: unknown;
}

export namespace TenantRequest {
  export interface Settings {
    branding?: Settings.Branding;

    /**
     * Set preferences for a recipient
     */
    preference_set?: Shared.PreferenceSetRequest | null;
  }

  export namespace Settings {
    export interface Branding {
      icon_url?: string | null;

      logo_url?: string | null;

      primary_color?: string | null;

      primary_color_contrast?: string | null;
    }
  }
}

/**
 * A user object
 */
export interface User {
  id: string;

  __typename: string;

  updated_at: string;

  avatar?: string | null;

  created_at?: string | null;

  email?: string | null;

  name?: string | null;

  phone_number?: string | null;

  timezone?: string | null;
  [k: string]: unknown;
}

export type UsersEntriesCursor = EntriesCursor<User>;

export type SchedulesEntriesCursor = EntriesCursor<Schedule>;

export type SubscriptionsEntriesCursor = EntriesCursor<Subscription>;

export type ObjectsEntriesCursor = EntriesCursor<Object>;

export type TenantsEntriesCursor = EntriesCursor<Tenant>;
