import { ObjectRef } from "../objects/interfaces";
import { PaginationOptions } from "../../common/interfaces";

export interface Message {
  id: string;
  channel_id: string;
  recipient: string | ObjectRef;
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
  recipient: string | ObjectRef;
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
  channel_id?: string;
}

type WorkflowSource = {
  version_id: string;
  key: string;
}

type MessageStatus = "queued" | "sent" | "delivered" | "undelivered" | "not_sent";
