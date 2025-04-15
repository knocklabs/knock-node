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

  categories?: Record<string, boolean | PreferenceSet.UnionMember1> | null;

  /**
   * Channel type preferences
   */
  channel_types?: PreferenceSetChannelTypes | null;

  workflows?: Record<string, boolean | PreferenceSet.UnionMember1> | null;
}

export namespace PreferenceSet {
  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition>;
  }

  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition>;
  }
}

/**
 * Channel type preferences
 */
export interface PreferenceSetChannelTypes {
  chat?: boolean | PreferenceSetChannelTypes.Conditions;

  email?: boolean | PreferenceSetChannelTypes.Conditions;

  http?: boolean | PreferenceSetChannelTypes.Conditions;

  in_app_feed?: boolean | PreferenceSetChannelTypes.Conditions;

  push?: boolean | PreferenceSetChannelTypes.Conditions;

  sms?: boolean | PreferenceSetChannelTypes.Conditions;
}

export namespace PreferenceSetChannelTypes {
  export interface Conditions {
    conditions: Array<Shared.Condition>;
  }

  export interface Conditions {
    conditions: Array<Shared.Condition>;
  }

  export interface Conditions {
    conditions: Array<Shared.Condition>;
  }

  export interface Conditions {
    conditions: Array<Shared.Condition>;
  }

  export interface Conditions {
    conditions: Array<Shared.Condition>;
  }

  export interface Conditions {
    conditions: Array<Shared.Condition>;
  }
}

/**
 * Set preferences for a recipient
 */
export interface PreferenceSetRequest {
  categories?: Record<string, boolean | PreferenceSetRequest.UnionMember1> | null;

  /**
   * Channel type preferences
   */
  channel_types?: PreferenceSetChannelTypes | null;

  workflows?: Record<string, boolean | PreferenceSetRequest.UnionMember1> | null;
}

export namespace PreferenceSetRequest {
  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition>;
  }

  export interface UnionMember1 {
    /**
     * Channel type preferences
     */
    channel_types?: PreferencesAPI.PreferenceSetChannelTypes | null;

    conditions?: Array<Shared.Condition>;
  }
}

export declare namespace Preferences {
  export {
    type InlinePreferenceSetRequest as InlinePreferenceSetRequest,
    type PreferenceSet as PreferenceSet,
    type PreferenceSetChannelTypes as PreferenceSetChannelTypes,
    type PreferenceSetRequest as PreferenceSetRequest,
  };
}
