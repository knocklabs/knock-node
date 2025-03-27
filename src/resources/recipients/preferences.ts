// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferencesAPI from './preferences';
import * as Shared from '../shared';

export class Preferences extends APIResource {}

/**
 * Inline set preferences for a recipient, where the key is the preference set name
 */
export type InlinePreferenceSetRequest = Record<string, PreferenceSetRequest>;

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
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

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
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

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
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

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
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition> | null;
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
