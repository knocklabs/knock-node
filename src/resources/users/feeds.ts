// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';

export class Feeds extends APIResource {
  /**
   * Get a user's feed of in-app messages
   */
  get(
    userId: string,
    id: string,
    query?: FeedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeedGetResponse>;
  get(userId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<FeedGetResponse>;
  get(
    userId: string,
    id: string,
    query: FeedGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeedGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(userId, id, {}, query);
    }
    return this._client.get(`/v1/users/${userId}/feeds/${id}`, { query, ...options });
  }

  /**
   * Get a user's feed settings
   */
  getSettings(
    userId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeedGetSettingsResponse> {
    return this._client.get(`/v1/users/${userId}/feeds/${id}/settings`, options);
  }
}

/**
 * The response for the user's feed
 */
export interface FeedGetResponse {
  entries: Array<FeedGetResponse.Entry>;

  meta: FeedGetResponse.Meta;

  page_info: FeedGetResponse.PageInfo;

  vars: Record<string, unknown>;
}

export namespace FeedGetResponse {
  /**
   * An in-app feed message in a user's feed
   */
  export interface Entry {
    id: string;

    __typename: string;

    activities: Array<Entry.Activity>;

    actors: Array<UsersAPI.User | Entry.Object>;

    blocks: Array<Entry.ContentBlock | Entry.ButtonSetBlock>;

    data: Record<string, unknown> | null;

    inserted_at: string;

    source: Entry.Source;

    tenant: string | null;

    total_activities: number;

    total_actors: number;

    updated_at: string;

    archived_at?: string | null;

    clicked_at?: string | null;

    interacted_at?: string | null;

    link_clicked_at?: string | null;

    read_at?: string | null;

    seen_at?: string | null;
  }

  export namespace Entry {
    /**
     * An activity associated with a workflow run
     */
    export interface Activity {
      id?: string;

      __typename?: string;

      /**
       * A recipient, which is either a user or an object
       */
      actor?: UsersAPI.User | Activity.Object | null;

      /**
       * The data associated with the activity
       */
      data?: unknown | null;

      inserted_at?: string;

      /**
       * A recipient, which is either a user or an object
       */
      recipient?: UsersAPI.User | Activity.Object;

      updated_at?: string;
    }

    export namespace Activity {
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
     * A content (text or markdown) block in a message in an app feed
     */
    export interface ContentBlock {
      content: string;

      name: string;

      rendered: string;

      type: 'markdown' | 'text';
    }

    /**
     * A set of buttons in a message in an app feed
     */
    export interface ButtonSetBlock {
      buttons: Array<ButtonSetBlock.Button>;

      name: string;

      type: 'button_set';
    }

    export namespace ButtonSetBlock {
      /**
       * A button in a set of buttons
       */
      export interface Button {
        action: string;

        label: string;

        name: string;
      }
    }

    export interface Source {
      __typename: string;

      categories: Array<string>;

      key: string;

      version_id: string;
    }
  }

  export interface Meta {
    __typename: string;

    total_count: number;

    unread_count: number;

    unseen_count: number;
  }

  export interface PageInfo {
    has_next_page: boolean;

    has_previous_page: boolean;

    total_count: number;
  }
}

/**
 * The response for the user's feed settings
 */
export interface FeedGetSettingsResponse {
  features: FeedGetSettingsResponse.Features;
}

export namespace FeedGetSettingsResponse {
  export interface Features {
    branding_required: boolean;
  }
}

export interface FeedGetParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The archived status of the feed items to return
   */
  archived?: 'exclude' | 'include' | 'only';

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * Whether the feed items have a tenant
   */
  has_tenant?: boolean;

  /**
   * The page size to fetch
   */
  page_size?: number;

  /**
   * The source of the feed items to return
   */
  source?: string;

  /**
   * The status of the feed items to return
   */
  status?: 'unread' | 'read' | 'unseen' | 'seen' | 'all';

  /**
   * The tenant of the feed items to return
   */
  tenant?: string;

  /**
   * The trigger data of the feed items to return (as a JSON string)
   */
  trigger_data?: string;

  /**
   * The workflow categories of the feed items to return
   */
  workflow_categories?: Array<string>;
}

export declare namespace Feeds {
  export {
    type FeedGetResponse as FeedGetResponse,
    type FeedGetSettingsResponse as FeedGetSettingsResponse,
    type FeedGetParams as FeedGetParams,
  };
}
