import { PaginationOptions } from "../../common/interfaces";
import { Recipient } from "../workflows/interfaces";

export interface Message {
  id: string;
  channel_id: string;
  recipient: Recipient;
  tenant: string | null;
  status: MessageStatus;
  read_at: string | null;
  seen_at: string | null;
  archived_at: string | null;
  inserted_at: string;
  updated_at: string;
  source: WorkflowSource;
  data: any;

  // only when paginating
  __cursor?: string;
}

export interface MessageEvent {
  id: string;
  environment_id: string;
  recipient: Recipient;
  data: Record<string, any>;
  type: string;
  inserted_at: string;

  // only when paginating
  __cursor?: string;
}

export interface MessageContent {
  id: string;
  data: Record<string, any>;
  inserted_at: string;
}

export interface ListMessagesOptions extends PaginationOptions {
  source?: string;
  tenant?: string;
  status?: MessageStatus[];
  engagement_status?: MessageEngagementStatusFilter[];
  channel_id?: string;
  message_ids?: string[];
  trigger_data?: Record<string, any>;
  workflow_categories?: String[];
  "inserted_at.gt"?: string;
  "inserted_at.gte"?: string;
  "inserted_at.lt"?: string;
  "inserted_at.lte"?: string;
}

export interface ListMessageActivitiesOptions extends PaginationOptions {
  trigger_data?: Record<string, any>;
}

type WorkflowSource = {
  version_id: string;
  key: string;
};

type MessageStatus =
  | "queued"
  | "sent"
  | "delivered"
  | "undelivered"
  | "not_sent"
  | "delivery_attempted"
  | "bounced";

export type MessageEngagementStatus =
  | "seen"
  | "read"
  | "archived"
  | "interacted"
  | "link_clicked";

type MessageEngagementStatusFilter =
  | MessageEngagementStatus
  | "unseen"
  | "unread"
  | "unarchived";
