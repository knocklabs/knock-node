// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UsersAPI from './users/users';

export class Schedules extends APIResource {
  /**
   * Create schedules
   */
  create(options?: Core.RequestOptions): Core.APIPromise<ScheduleCreateResponse> {
    return this._client.post('/v1/schedules', options);
  }

  /**
   * Update schedules
   */
  update(options?: Core.RequestOptions): Core.APIPromise<ScheduleUpdateResponse> {
    return this._client.put('/v1/schedules', options);
  }

  /**
   * List schedules
   */
  list(query: ScheduleListParams, options?: Core.RequestOptions): Core.APIPromise<ScheduleListResponse> {
    return this._client.get('/v1/schedules', { query, ...options });
  }

  /**
   * Delete schedules
   */
  delete(options?: Core.RequestOptions): Core.APIPromise<ScheduleDeleteResponse> {
    return this._client.delete('/v1/schedules', options);
  }
}

export type ScheduleCreateResponse = Array<ScheduleCreateResponse.ScheduleCreateResponseItem>;

export namespace ScheduleCreateResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleCreateResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ScheduleCreateResponseItem.Object;

    repeats: Array<ScheduleCreateResponseItem.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | ScheduleCreateResponseItem.Object | null;

    data?: unknown | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace ScheduleCreateResponseItem {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }
}

export type ScheduleUpdateResponse = Array<ScheduleUpdateResponse.ScheduleUpdateResponseItem>;

export namespace ScheduleUpdateResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleUpdateResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ScheduleUpdateResponseItem.Object;

    repeats: Array<ScheduleUpdateResponseItem.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | ScheduleUpdateResponseItem.Object | null;

    data?: unknown | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace ScheduleUpdateResponseItem {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }
}

/**
 * A paginated list of schedules in a collection.
 */
export interface ScheduleListResponse {
  /**
   * The list of schedules
   */
  entries: Array<ScheduleListResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: ScheduleListResponse.PageInfo;
}

export namespace ScheduleListResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface Entry {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | Entry.Object;

    repeats: Array<Entry.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | Entry.Object | null;

    data?: unknown | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace Entry {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }

  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

export type ScheduleDeleteResponse = Array<ScheduleDeleteResponse.ScheduleDeleteResponseItem>;

export namespace ScheduleDeleteResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleDeleteResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ScheduleDeleteResponseItem.Object;

    repeats: Array<ScheduleDeleteResponseItem.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | ScheduleDeleteResponseItem.Object | null;

    data?: unknown | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace ScheduleDeleteResponseItem {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }
}

export interface ScheduleListParams {
  /**
   * Filter by workflow
   */
  workflow: string;

  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The page size to fetch
   */
  page_size?: number;

  /**
   * Filter by recipient
   */
  recipients?: Array<string | ScheduleListParams.UnionMember1>;

  /**
   * Filter by tenant
   */
  tenant?: string;
}

export namespace ScheduleListParams {
  /**
   * An object reference to a recipient
   */
  export interface UnionMember1 {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }
}

export declare namespace Schedules {
  export {
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleListParams as ScheduleListParams,
  };
}
