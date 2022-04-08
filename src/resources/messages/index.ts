import {
  PaginatedResponse,
} from "../../common/interfaces";
import {
  Message,
  MessageContent,
  MessageEvent,
} from "./interfaces";
import {
  Activity
} from "../activities/interfaces";
import { Knock } from "../../knock";

export class Messages {
  constructor(readonly knock: Knock) {}

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

  async getEvents(messageId: string): Promise<PaginatedResponse<MessageEvent>> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.get(`/v1/messages/${messageId}/events`);
    return data;
  }

  async getActivities(messageId: string): Promise<PaginatedResponse<Activity>> {
    if (!messageId) {
      throw new Error(`Incomplete arguments. You must provide a 'messageId'`);
    }

    const { data } = await this.knock.get(`/v1/messages/${messageId}/activities`);
    return data;
  }
}
