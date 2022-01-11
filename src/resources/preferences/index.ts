import { ChannelType } from "../../common/interfaces";
import { Knock } from "../../knock";
import {
  ChannelTypePreferences,
  WorkflowPreferenceSetting,
  WorkflowPreferences,
  PreferenceOptions,
  SetPreferencesProperties,
  PreferenceSet,
} from "./interfaces";

// Deprecated all of the methods in this to be removed in `0.5.0`
export class Preferences {
  constructor(readonly knock: Knock) {}

  /**
   * @deprecated Use `users.getAllPreferences` instead
   */
  async getAll(userId: string): Promise<PreferenceSet[]> {
    return this.knock.users.getAllPreferences(userId);
  }

  /**
   * @deprecated Use `users.getPreferences` instead
   */
  async get(
    userId: string,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.getPrefences(userId, options);
  }

  /**
   * @deprecated Use `users.setPreferences` instead
   */
  async set(
    userId: string,
    preferenceSet: SetPreferencesProperties,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.setPreferences(userId, preferenceSet, options);
  }

  /**
   * @deprecated Use `users.setChannelTypesPreferences` instead
   */
  async setChannelTypes(
    userId: string,
    channelTypePreferences: ChannelTypePreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.setChannelTypesPreferences(
      userId,
      channelTypePreferences,
      options,
    );
  }

  /**
   * @deprecated Use `users.setChannelTypePreferences` instead
   */
  async setChannelType(
    userId: string,
    channelType: ChannelType,
    setting: boolean,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.setChannelTypePreferences(
      userId,
      channelType,
      setting,
      options,
    );
  }

  /**
   * @deprecated Use `users.setWorkflowsPreferences` instead
   */
  async setWorkflows(
    userId: string,
    workflowPreferences: WorkflowPreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.setWorkflowsPreferences(
      userId,
      workflowPreferences,
      options,
    );
  }

  /**
   * @deprecated Use `users.setWorkflowPreferences` instead
   */
  async setWorkflow(
    userId: string,
    workflowKey: string,
    setting: WorkflowPreferenceSetting,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.setWorkflowPreferences(
      userId,
      workflowKey,
      setting,
      options,
    );
  }

  /**
   * @deprecated Use `users.setCategoriesPreferences` instead
   */
  async setCategories(
    userId: string,
    categoryPreferences: WorkflowPreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.setCategoriesPreferences(
      userId,
      categoryPreferences,
      options,
    );
  }

  /**
   * @deprecated Use `users.setCategoryPreferences` instead
   */
  async setCategory(
    userId: string,
    categoryKey: string,
    setting: WorkflowPreferenceSetting,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    return this.knock.users.setCategoryPreferences(
      userId,
      categoryKey,
      setting,
      options,
    );
  }
}
