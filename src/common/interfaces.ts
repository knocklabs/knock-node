export interface KnockOptions {
  host?: string;
}

export interface KnockKeys {
  apiKey: string;
  signingKey?: string;
}

export interface HttpException extends Error {
  readonly status: number;
  readonly requestID: string;
}

export interface PostAndPutOptions {
  query?: { [key: string]: any };
}

export interface UnprocessableEntityError {
  message: string;
  type: string;
  field: string;
}

// Channel types supported in Knock
// TODO: it would be great to pull this in from an external location
export type ChannelType = "email" | "in_app_feed" | "sms" | "push" | "chat";

export type CommonMetadata = Record<string, any>;

export interface ChannelData<T = CommonMetadata> {
  channel_id: string;
  data: T;
}

export interface SetChannelDataProperties {}

type PageInfo = {
  before: string;
  after: string;
  page_size: number;
};

export interface PaginatedFeedResponse<T> {
  entries: T[];
  page_info: PageInfo;
}

export interface PaginatedResponse<T> {
  items: T[];
  page_info: PageInfo;
}

export interface PaginationOptions {
  page_size?: number;
  after?: string;
  before?: string;
}

export interface Condition {
  argument: string;
  variable: string;
  operator: string;
}

export interface SignTokenOptions {
  expiresInSeconds?: number;
}