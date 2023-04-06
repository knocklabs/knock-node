export interface KnockOptions {
  host?: string;
}

export interface HttpException extends Error {
  readonly status: number;
  readonly requestID: string;
}

export interface PostAndPutOptions {
  query?: { [key: string]: any };
  headers?: {[key: string]: any};
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

export interface PaginatedEntriesResponse<T> {
  entries: T[];
  page_info: PageInfo;
}

export interface PaginatedItemsResponse<T> {
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

export interface SignUserTokenOptions {
  /**
   * The signing key to use to sign the token. If not provided, the KNOCK_SIGNING_KEY environment variable will be used.
   */
  signingKey?: string;
  /** The expiration time of the token in seconds. Defaults to 1 hour. */
  expiresInSeconds?: number;
}

export interface MethodOptions {
  idempotencyKey?: string;
}