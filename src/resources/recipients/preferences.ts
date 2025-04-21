// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferencesAPI from './preferences';
import * as SharedAPI from '../shared';

export class Preferences extends APIResource {}

/**
 * Inline set preferences for a recipient, where the key is the preference set name
 */
export type InlinePreferenceSetRequest = Array<InlinePreferenceSetRequest.InlinePreferenceSetRequestItem>;

export namespace InlinePreferenceSetRequest {
  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  export interface InlinePreferenceSetRequestItem {
    /**
     * The ID of the preference set
     */
    id: string;

    /**
     * An object where the key is the category and the values are the preference
     * settings for that category.
     */
    categories?: Record<
      string,
      boolean | InlinePreferenceSetRequestItem.PreferenceSetWorkflowCategorySettingObject
    > | null;

    /**
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * An object where the key is the workflow key and the values are the preference
     * settings for that workflow.
     */
    workflows?: Record<
      string,
      boolean | InlinePreferenceSetRequestItem.PreferenceSetWorkflowCategorySettingObject
    > | null;
  }

  export namespace InlinePreferenceSetRequestItem {
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
       * A list of conditions to apply to a channel type.
       */
      conditions?: Array<SharedAPI.Condition> | null;
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
       * A list of conditions to apply to a channel type.
       */
      conditions?: Array<SharedAPI.Condition> | null;
    }
  }
}

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
   * The typename of the schema.
   */
  __typename: string;

  /**
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: Record<string, boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject> | null;

  /**
   * Channel type preferences.
   */
  channel_types?: PreferenceSetChannelTypes | null;

  /**
   * An object where the key is the workflow key and the values are the preference
   * settings for that workflow.
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
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<SharedAPI.Condition> | null;
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
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<SharedAPI.Condition> | null;
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
  conditions: Array<SharedAPI.Condition>;
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
   * An object where the key is the category and the values are the preference
   * settings for that category.
   */
  categories?: Record<
    string,
    boolean | PreferenceSetRequest.PreferenceSetWorkflowCategorySettingObject
  > | null;

  /**
   * Channel type preferences.
   */
  channel_types?: PreferenceSetChannelTypes | null;

  /**
   * An object where the key is the workflow key and the values are the preference
   * settings for that workflow.
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
     * Channel type preferences.
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    /**
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<SharedAPI.Condition> | null;
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
     * A list of conditions to apply to a channel type.
     */
    conditions?: Array<SharedAPI.Condition> | null;
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
