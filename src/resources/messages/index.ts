import { PaginatedResponse, PaginationOptions } from "../../common/interfaces";
import {
  Message,
  MessageContent,
  MessageEvent,
  ListMessagesOptions,
  MessageEngagementStatus,
} from "./interfaces";
import { Activity } from "../activities/interfaces";
import { Knock } from "../../knock";

export class Messages {
  constructor(readonly knock: Knock) {}

  async list(
    filteringOptions: ListMessagesOptions = {},
  ): Promise<PaginatedResponse<Message>> {
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
  ): Promise<PaginatedResponse<MessageEvent>> {
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
    paginationOptions: PaginationOptions = {},
  ): Promise<PaginatedResponse<Activity>> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.get(
      `/v1/messages/${messageId}/activities`,
      paginationOptions,
    );

    return data;
  }

  async setStatus(
    messageId: string,
    status: MessageEngagementStatus,
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
    status: MessageEngagementStatus,
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
    status: MessageEngagementStatus | "unseen" | "unread" | "unarchived",
  ): Promise<Message[]> {
    const { data } = await this.knock.post(`/v1/messages/batch/${status}`, {
      message_ids: messageIds,
    });

    return data;
  }
}
