import { Knock } from "../../knock";
import {
  ChannelType,
  ChannelTypePreferences,
  WorkflowPreferenceSetting,
  WorkflowPreferences,
  PreferenceOptions,
  SetPreferencesProperties,
  PreferenceSet,
} from "./interfaces";

const DEFAULT_PREFERENCE_SET_ID = "default";

export class Preferences {
  constructor(readonly knock: Knock) {}

  async getAll(userId: string): Promise<PreferenceSet[]> {
    const { data } = await this.knock.get(`/v1/users/${userId}/preferences`);
    return data;
  }

  async get(
    userId: string,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.get(
      `/v1/users/${userId}/preferences/${preferenceSetId}`,
    );

    return data;
  }

  async set(
    userId: string,
    preferenceSet: SetPreferencesProperties,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/users/${userId}/preferences/${preferenceSetId}`,
      preferenceSet,
    );

    return data;
  }

  async setChannelTypes(
    userId: string,
    channelTypePreferences: ChannelTypePreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/users/${userId}/preferences/${preferenceSetId}/channel_types`,
      channelTypePreferences,
    );

    return data;
  }

  async setChannelType(
    userId: string,
    channelType: ChannelType,
    setting: boolean,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const {
      data,
    } = await this.knock.put(
      `/v1/users/${userId}/preferences/${preferenceSetId}/channel_types/${channelType}`,
      { subscribed: setting },
    );

    return data;
  }

  async setWorkflows(
    userId: string,
    workflowPreferences: WorkflowPreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/users/${userId}/preferences/${preferenceSetId}/workflows`,
      workflowPreferences,
    );

    return data;
  }

  async setWorkflow(
    userId: string,
    workflowKey: string,
    setting: WorkflowPreferenceSetting,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const {
      data,
    } = await this.knock.put(
      `/v1/users/${userId}/preferences/${preferenceSetId}/workflows/${workflowKey}`,
      { subscribed: setting },
    );

    return data;
  }

  async setCategories(
    userId: string,
    categoryPreferences: WorkflowPreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/users/${userId}/preferences/${preferenceSetId}/categories`,
      categoryPreferences,
    );

    return data;
  }

  async setCategory(
    userId: string,
    categoryKey: string,
    setting: WorkflowPreferenceSetting,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const {
      data,
    } = await this.knock.put(
      `/v1/users/${userId}/preferences/${preferenceSetId}/categories/${categoryKey}`,
      { subscribed: setting },
    );

    return data;
  }
}
