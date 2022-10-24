import { CommonMetadata, PaginationOptions } from "../../common/interfaces";

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

export interface ListObjectOptions extends PaginationOptions {
  object_id?: string;
  name?: string;
}
