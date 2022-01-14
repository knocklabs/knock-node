export interface KnockOptions {
  host?: string;
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
