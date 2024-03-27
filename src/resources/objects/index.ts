import {
  ChannelData,
  CommonMetadata,
  SetChannelDataProperties,
  PaginatedEntriesResponse,
  ChannelType,
  PaginatedItemsResponse,
} from "../../common/interfaces";
import { Knock } from "../../knock";
import {
  AddObjectSubscriptionProperties,
  BulkAddSubscriptionsOption,
  BulkSetObjectOption,
  DeleteObjectSubscriptionProperties,
  GetObjectSubscriptionsOptions,
  ListObjectOptions,
  ListObjectSubscriptionsOptions,
  Object,
  ObjectSubscription,
  SetObjectProperties,
} from "./interfaces";
import { BulkOperation } from "../bulk_operations/interfaces";
import { ListMessagesOptions, Message } from "../messages/interfaces";
import { ListSchedulesProps, Schedule } from "../workflows/interfaces";
import {
  ChannelTypePreferences,
  GetPreferencesOptions,
  PreferenceOptions,
  PreferenceSet,
  SetPreferencesProperties,
  WorkflowPreferences,
  WorkflowPreferenceSetting,
} from "../preferences/interfaces";
import {
  buildUpdateParam,
  DEFAULT_PREFERENCE_SET_ID,
} from "../preferences/helpers";

export class Objects {
  constructor(readonly knock: Knock) {}

  async get<T = CommonMetadata>(
    collection: string,
    id: string,
  ): Promise<Object<T>> {
    const { data } = await this.knock.get(`/v1/objects/${collection}/${id}`);
    return data;
  }

  async set<T = CommonMetadata>(
    collection: string,
    id: string,
    properties: SetObjectProperties,
  ): Promise<Object<T>> {
    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${id}`,
      properties,
    );
    return data;
  }

  async list<T = CommonMetadata>(
    collection: string,
    filteringOptions: ListObjectOptions = {},
  ): Promise<PaginatedEntriesResponse<Object<T>>> {
    const { data } = await this.knock.get(
      `/v1/objects/${collection}`,
      filteringOptions,
    );
    return data;
  }

  // Bulk ops

  async bulkSet(
    collection: string,
    objects: BulkSetObjectOption[],
  ): Promise<BulkOperation> {
    const attrs = { objects };

    const { data } = await this.knock.post(
      `/v1/objects/${collection}/bulk/set`,
      attrs,
    );

    return data;
  }

  async delete(collection: string, id: string): Promise<null> {
    const { data } = await this.knock.delete(`/v1/objects/${collection}/${id}`);
    return data;
  }

  async bulkDelete(
    collection: string,
    objectIds: string[],
  ): Promise<BulkOperation> {
    const attrs = {
      object_ids: objectIds,
    };

    const { data } = await this.knock.post(
      `/v1/objects/${collection}/bulk/delete`,
      attrs,
    );

    return data;
  }

  async bulkAddSubscriptions<T = CommonMetadata>(
    collection: string,
    subscriptions: BulkAddSubscriptionsOption<T>[],
  ): Promise<BulkOperation> {
    const attrs = { subscriptions };

    const { data } = await this.knock.post(
      `/v1/objects/${collection}/bulk/subscriptions/add`,
      attrs,
    );

    return data;
  }

  // Channel data

  async getChannelData<T = CommonMetadata>(
    collection: string,
    id: string,
    channelId: string,
  ): Promise<ChannelData<T>> {
    const { data } = await this.knock.get(
      `/v1/objects/${collection}/${id}/channel_data/${channelId}`,
    );

    return data;
  }

  async setChannelData<T = CommonMetadata>(
    collection: string,
    id: string,
    channelId: string,
    channelData: SetChannelDataProperties,
  ): Promise<ChannelData<T>> {
    const attrs = { data: channelData };

    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${id}/channel_data/${channelId}`,
      attrs,
    );

    return data;
  }

  async unsetChannelData(
    collection: string,
    id: string,
    channelId: string,
  ): Promise<any> {
    const { data } = await this.knock.delete(
      `/v1/objects/${collection}/${id}/channel_data/${channelId}`,
    );

    return data;
  }

  //
  // Messages
  //

  async getMessages(
    collection: string,
    objectId: string,
    filteringOptions: ListMessagesOptions = {},
  ): Promise<PaginatedItemsResponse<Message>> {
    if (!collection || !objectId) {
      throw new Error(
        `Incomplete arguments. You must provide a 'collection' and 'objectId'`,
      );
    }

    const { data } = await this.knock.get(
      `/v1/objects/${collection}/${objectId}/messages`,
      filteringOptions,
    );

    return data;
  }

  //
  // Preferences
  //

  async getAllPreferences(
    collection: string,
    objectId: string,
  ): Promise<PreferenceSet[]> {
    const { data } = await this.knock.get(
      `/v1/objects/${collection}/${objectId}/preferences`,
    );
    return data;
  }

  async getPreferences(
    collection: string,
    objectId: string,
    options: GetPreferencesOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const {
      data,
    } = await this.knock.get(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}`,
      { tenant: options.tenant },
    );

    return data;
  }

  async setPreferences(
    collection: string,
    objectId: string,
    preferenceSet: SetPreferencesProperties,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}`,
      preferenceSet,
    );

    return data;
  }

  async setChannelTypesPreferences(
    collection: string,
    objectId: string,
    channelTypePreferences: ChannelTypePreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}/channel_types`,
      channelTypePreferences,
    );

    return data;
  }

  async setChannelTypePreferences(
    collection: string,
    objectId: string,
    channelType: ChannelType,
    setting: boolean,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const {
      data,
    } = await this.knock.put(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}/channel_types/${channelType}`,
      { subscribed: setting },
    );

    return data;
  }

  async setWorkflowsPreferences(
    collection: string,
    objectId: string,
    workflowPreferences: WorkflowPreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}/workflows`,
      workflowPreferences,
    );

    return data;
  }

  async setWorkflowPreferences(
    collection: string,
    objectId: string,
    workflowKey: string,
    setting: WorkflowPreferenceSetting,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}/workflows/${workflowKey}`,
      buildUpdateParam(setting),
    );

    return data;
  }

  async setCategoriesPreferences(
    collection: string,
    objectId: string,
    categoryPreferences: WorkflowPreferences,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}/categories`,
      categoryPreferences,
    );

    return data;
  }

  async setCategoryPreferences(
    collection: string,
    objectId: string,
    categoryKey: string,
    setting: WorkflowPreferenceSetting,
    options: PreferenceOptions = {},
  ): Promise<PreferenceSet> {
    const preferenceSetId = options.preferenceSet || DEFAULT_PREFERENCE_SET_ID;

    const { data } = await this.knock.put(
      `/v1/objects/${collection}/${objectId}/preferences/${preferenceSetId}/categories/${categoryKey}`,
      buildUpdateParam(setting),
    );

    return data;
  }

  //
  // Subscriptions
  //

  async listSubscriptions(
    collection: string,
    objectId: string,
    options: ListObjectSubscriptionsOptions = {},
  ): Promise<PaginatedEntriesResponse<ObjectSubscription>> {
    const { data } = await this.knock.get(
      `/v1/objects/${collection}/${objectId}/subscriptions`,
      options,
    );

    return data;
  }

  async getSubscriptions(
    collection: string,
    objectId: string,
    options: GetObjectSubscriptionsOptions = {},
  ): Promise<PaginatedEntriesResponse<ObjectSubscription>> {
    const {
      data,
    } = await this.knock.get(
      `/v1/objects/${collection}/${objectId}/subscriptions`,
      { ...options, mode: "recipient" },
    );

    return data;
  }

  async addSubscriptions(
    collection: string,
    objectId: string,
    properties: AddObjectSubscriptionProperties = { recipients: [] },
  ): Promise<ObjectSubscription[]> {
    const { data } = await this.knock.post(
      `/v1/objects/${collection}/${objectId}/subscriptions`,
      properties,
    );

    return data;
  }

  async deleteSubscriptions(
    collection: string,
    objectId: string,
    properties: DeleteObjectSubscriptionProperties = { recipients: [] },
  ): Promise<ObjectSubscription[]> {
    const { data } = await this.knock.delete(
      `/v1/objects/${collection}/${objectId}/subscriptions`,
      properties,
    );

    return data;
  }

  //
  // Schedules
  //

  async getSchedules(
    collection: string,
    objectId: string,
    filteringOptions: ListSchedulesProps = {},
  ): Promise<PaginatedEntriesResponse<Schedule>> {
    if (!collection || !objectId) {
      throw new Error(
        `Incomplete arguments. You must provide a 'collection' and 'objectId'`,
      );
    }

    const { data } = await this.knock.get(
      `/v1/objects/${collection}/${objectId}/schedules`,
      filteringOptions,
    );

    return data;
  }
}
