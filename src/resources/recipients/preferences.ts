// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferencesAPI from './preferences';
import * as Shared from '../shared';

export class Preferences extends APIResource {}

/**
 * Inline set preferences for a recipient, where the key is the preference set id.
 * Preferences that are set inline will be merged into any existing preferences
 * rather than replacing them.
 */
export type InlinePreferenceSetRequest = { [key: string]: PreferenceSetRequest };

/**
 * A preference set represents a specific set of notification preferences for a
 * recipient. A recipient can have multiple preference sets.
 */
export interface PreferenceSet {
  /**
   * Unique identifier for the preference set.
   */
  id: string;

  /**
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: { [key: string]: boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject } | null;

  /**
   * Channel type preferences.
   */
  channel_types?: PreferenceSetChannelTypes | null;

  /**
   * Channel preferences.
   */
  channels?: { [key: string]: boolean | PreferenceSet.PreferenceSetChannelSetting } | null;

  /**
   * Whether the recipient is subscribed to commercial communications. When false,
   * the recipient will not receive commercial workflow notifications.
   */
  commercial_subscribed?: boolean | null;

  /**
   * An object where the key is the workflow key and the values are the preference
   * settings for that workflow.
   */
  workflows?: { [key: string]: boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject } | null;
}

export namespace PreferenceSet {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * Channel preferences.
     */
    channels?: {
      [key: string]: boolean | PreferenceSetWorkflowCategorySettingObject.PreferenceSetChannelSetting;
    } | null;

    /**
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<Shared.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * A set of settings for a specific channel. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelSetting {
      /**
       * A list of conditions to apply to a specific channel.
       */
      conditions: Array<Shared.Condition>;
    }
  }

  /**
   * A set of settings for a specific channel. Currently, this can only be a list of
   * conditions to apply.
   */
  export interface PreferenceSetChannelSetting {
    /**
     * A list of conditions to apply to a specific channel.
     */
    conditions: Array<Shared.Condition>;
  }

  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * Channel preferences.
     */
    channels?: {
      [key: string]: boolean | PreferenceSetWorkflowCategorySettingObject.PreferenceSetChannelSetting;
    } | null;

    /**
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<Shared.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * A set of settings for a specific channel. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelSetting {
      /**
       * A list of conditions to apply to a specific channel.
       */
      conditions: Array<Shared.Condition>;
    }
  }
}

/**
 * A set of settings for a channel type. Currently, this can only be a list of
 * conditions to apply.
 */
export interface PreferenceSetChannelTypeSetting {
  /**
   * A list of conditions to apply to a channel type.
   */
  conditions: Array<Shared.Condition>;
}

/**
 * Channel type preferences.
 */
export interface PreferenceSetChannelTypes {
  /**
   * Whether the channel type is enabled for the preference set.
   */
  chat?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * Whether the channel type is enabled for the preference set.
   */
  email?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * Whether the channel type is enabled for the preference set.
   */
  http?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * Whether the channel type is enabled for the preference set.
   */
  in_app_feed?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * Whether the channel type is enabled for the preference set.
   */
  push?: boolean | PreferenceSetChannelTypeSetting;

  /**
   * Whether the channel type is enabled for the preference set.
   */
  sms?: boolean | PreferenceSetChannelTypeSetting;
}

/**
 * A request to set a preference set for a recipient.
 */
export interface PreferenceSetRequest {
  /**
   * Controls how the preference set is persisted. 'replace' will completely replace
   * the preference set, 'merge' will merge with existing preferences.
   */
  __persistence_strategy__?: 'merge' | 'replace';

  /**
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: {
    [key: string]: boolean | PreferenceSetRequest.PreferenceSetWorkflowCategorySettingObject;
  } | null;

  /**
   * Channel type preferences.
   */
  channel_types?: PreferenceSetChannelTypes | null;

  /**
   * Channel preferences.
   */
  channels?: { [key: string]: boolean | PreferenceSetRequest.PreferenceSetChannelSetting } | null;

  /**
   * Whether the recipient is subscribed to commercial communications. When false,
   * the recipient will not receive commercial workflow notifications.
   */
  commercial_subscribed?: boolean | null;

  /**
   * An object where the key is the workflow key and the values are the preference
   * settings for that workflow.
   */
  workflows?: {
    [key: string]: boolean | PreferenceSetRequest.PreferenceSetWorkflowCategorySettingObject;
  } | null;
}

export namespace PreferenceSetRequest {
  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * Channel preferences.
     */
    channels?: {
      [key: string]: boolean | PreferenceSetWorkflowCategorySettingObject.PreferenceSetChannelSetting;
    } | null;

    /**
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<Shared.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * A set of settings for a specific channel. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelSetting {
      /**
       * A list of conditions to apply to a specific channel.
       */
      conditions: Array<Shared.Condition>;
    }
  }

  /**
   * A set of settings for a specific channel. Currently, this can only be a list of
   * conditions to apply.
   */
  export interface PreferenceSetChannelSetting {
    /**
     * A list of conditions to apply to a specific channel.
     */
    conditions: Array<Shared.Condition>;
  }

  /**
   * The settings object for a workflow or category, where you can specify channel
   * types or conditions.
   */
  export interface PreferenceSetWorkflowCategorySettingObject {
    /**
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * Channel preferences.
     */
    channels?: {
      [key: string]: boolean | PreferenceSetWorkflowCategorySettingObject.PreferenceSetChannelSetting;
    } | null;

    /**
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<Shared.Condition> | null;
  }

  export namespace PreferenceSetWorkflowCategorySettingObject {
    /**
     * A set of settings for a specific channel. Currently, this can only be a list of
     * conditions to apply.
     */
    export interface PreferenceSetChannelSetting {
      /**
       * A list of conditions to apply to a specific channel.
       */
      conditions: Array<Shared.Condition>;
    }
  }
}

export declare namespace Preferences {
  export {
    type InlinePreferenceSetRequest as InlinePreferenceSetRequest,
    type PreferenceSet as PreferenceSet,
    type PreferenceSetChannelTypeSetting as PreferenceSetChannelTypeSetting,
    type PreferenceSetChannelTypes as PreferenceSetChannelTypes,
    type PreferenceSetRequest as PreferenceSetRequest,
  };
}
