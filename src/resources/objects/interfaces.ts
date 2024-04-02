import { CommonMetadata, PaginationOptions } from "../../common/interfaces";
import {
  User,
  IdentifyProperties as IdentifyUserProperties,
} from "../users/interfaces";
import { Recipient, RecipientWithUpsert } from "../workflows/interfaces";

export interface ObjectRef {
  collection: string;
  id: string;
}

export interface Object<T = CommonMetadata> {
  id: string;
  collection: string;
  properties: T;
  created_at?: string;
  updated_at: string;
}

export interface SetObjectProperties {
  name?: string;
  [key: string]: any;
}

export interface BulkSetObjectOption {
  id: string;
  name?: string;
  [key: string]: any;
}

export interface BulkAddSubscriptionsOption<T = CommonMetadata> {
  id: string;
  properties?: T;
  recipients: (IdentifyUserProperties | SetObjectProperties | string)[];
}

export interface ListObjectOptions extends PaginationOptions {
  include?: Array<"preferences">;
}

export interface ListObjectSubscriptionsOptions extends PaginationOptions {
  recipients?: Recipient[];
}

export interface GetObjectSubscriptionsOptions extends PaginationOptions {
  objects?: ObjectRef[];
}

export interface ObjectSubscription<T = CommonMetadata> {
  recipient: User | Object;
  object: Object;
  properties: T;
  inserted_at: string;
  updated_at: string;
}

export interface AddObjectSubscriptionProperties {
  recipients: (Recipient | RecipientWithUpsert)[];
  properties?: CommonMetadata;
}

export interface DeleteObjectSubscriptionProperties {
  recipients: Recipient[];
}
