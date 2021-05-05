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
