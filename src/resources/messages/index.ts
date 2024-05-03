import {
  PaginatedItemsResponse,
  PaginationOptions,
} from "../../common/interfaces";
import {
  Message,
  MessageContent,
  MessageEvent,
  ListMessageActivitiesOptions,
  ListMessagesOptions,
  MessageEngagementStatus,
} from "./interfaces";
import { Activity } from "../activities/interfaces";
import { Knock } from "../../knock";

export class Messages {
  constructor(readonly knock: Knock) {}

  async list(
    filteringOptions: ListMessagesOptions = {},
  ): Promise<PaginatedItemsResponse<Message>> {
    const { data } = await this.knock.get("/v1/messages", filteringOptions);

    return data;
  }

  async get(messageId: string): Promise<Message> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.get(`/v1/messages/${messageId}`);
    return data;
  }

  async getContent(messageId: string): Promise<MessageContent> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.get(`/v1/messages/${messageId}/content`);
    return data;
  }

  async getEvents(
    messageId: string,
    paginationOptions: PaginationOptions = {},
  ): Promise<PaginatedItemsResponse<MessageEvent>> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.get(
      `/v1/messages/${messageId}/events`,
      paginationOptions,
    );

    return data;
  }

  async getActivities(
    messageId: string,
    filteringOptions: ListMessageActivitiesOptions = {},
  ): Promise<PaginatedItemsResponse<Activity>> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.get(
      `/v1/messages/${messageId}/activities`,
      filteringOptions,
    );

    return data;
  }

  async setStatus(
    messageId: string,
    status: Exclude<MessageEngagementStatus, "link_clicked">,
  ): Promise<Message> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.put(
      `/v1/messages/${messageId}/${status}`,
      {},
    );

    return data;
  }

  async deleteStatus(
    messageId: string,
    status: Exclude<MessageEngagementStatus, "link_clicked">,
  ): Promise<Message> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.delete(
      `/v1/messages/${messageId}/${status}`,
    );

    return data;
  }

  async batchSetStatus(
    messageIds: string[],
    status:
      | Exclude<MessageEngagementStatus, "link_clicked">
      | "unseen"
      | "unread"
      | "unarchived",
  ): Promise<Message[]> {
    const { data } = await this.knock.post(`/v1/messages/batch/${status}`, {
      message_ids: messageIds,
    });

    return data;
  }
}
