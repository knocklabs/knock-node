import {
  ChannelData,
  CommonMetadata,
  SetChannelDataProperties,
  PaginatedResponse
} from "../../common/interfaces";
import { Knock } from "../../knock";
import { BulkSetObjectOption, Object, SetObjectProperties } from "./interfaces";
import { BulkOperation } from "../bulk_operations/interfaces";
import {
  Message
} from "../messages/interfaces";

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

  //
  // Messages
  //

  async getMessages(
    collection: string,
    objectId: string,
  ): Promise<PaginatedResponse<Message>> {
    if (!collection || !objectId) {
      throw new Error(
        `Incomplete arguments. You must provide a 'collection' and 'objectId'`,
      );
    }

    const { data } = await this.knock.get(
      `/v1/objects/${collection}/${objectId}/messages`,
    );

    return data;
  }
}
