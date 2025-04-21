// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ObjectsAPI from '../objects/objects';
import * as ChannelDataAPI from './channel-data';
import {
  ChannelData,
  ChannelDataRequest,
  DiscordChannelData,
  InlineChannelDataRequest,
  MsTeamsChannelData,
  OneSignalChannelData,
  PushChannelData,
  SlackChannelData,
} from './channel-data';
import * as PreferencesAPI from './preferences';
import {
  InlinePreferenceSetRequest,
  PreferenceSet,
  PreferenceSetChannelTypeSetting,
  PreferenceSetChannelTypes,
  PreferenceSetRequest,
  Preferences,
} from './preferences';
import * as SubscriptionsAPI from './subscriptions';
import { Subscription, Subscriptions } from './subscriptions';
import * as UsersAPI from '../users/users';

export class Recipients extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  channelData: ChannelDataAPI.ChannelData = new ChannelDataAPI.ChannelData(this._client);
}

/**
 * A recipient of a notification, which is either a user or an object.
 */
export type Recipient = UsersAPI.User | ObjectsAPI.Object;

Recipients.Subscriptions = Subscriptions;
Recipients.Preferences = Preferences;

export declare namespace Recipients {
  export { type Recipient as Recipient };

  export { Subscriptions as Subscriptions, type Subscription as Subscription };

  export {
    Preferences as Preferences,
    type InlinePreferenceSetRequest as InlinePreferenceSetRequest,
    type PreferenceSet as PreferenceSet,
    type PreferenceSetChannelTypeSetting as PreferenceSetChannelTypeSetting,
    type PreferenceSetChannelTypes as PreferenceSetChannelTypes,
    type PreferenceSetRequest as PreferenceSetRequest,
  };

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
