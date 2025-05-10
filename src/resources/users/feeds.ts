// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../messages/messages';
import * as RecipientsAPI from '../recipients/recipients';
import { APIPromise } from '../../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Feeds extends APIResource {
  /**
   * Returns the feed settings for a user.
   *
   * @example
   * ```ts
   * const response = await client.users.feeds.getSettings(
   *   'user_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getSettings(userID: string, id: string, options?: RequestOptions): APIPromise<FeedGetSettingsResponse> {
    return this._client.get(path`/v1/users/${userID}/feeds/${id}/settings`, options);
  }

  /**
   * Returns a paginated list of feed items for a user, including metadata about the
   * feed.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const feedListItemsResponse of client.users.feeds.listItems(
   *   'user_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  listItems(
    userID: string,
    id: string,
    query: FeedListItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FeedListItemsResponsesEntriesCursor, FeedListItemsResponse> {
    return this._client.getAPIList(
      path`/v1/users/${userID}/feeds/${id}`,
      EntriesCursor<FeedListItemsResponse>,
      { query, ...options },
    );
  }
}

export type FeedListItemsResponsesEntriesCursor = EntriesCursor<FeedListItemsResponse>;

/**
 * The response for the user's feed settings.
 */
export interface FeedGetSettingsResponse {
  /**
   * Features configuration for the user's feed.
   */
  features: FeedGetSettingsResponse.Features;
}

export namespace FeedGetSettingsResponse {
  /**
   * Features configuration for the user's feed.
   */
  export interface Features {
    /**
     * Whether branding is required for the user's feed.
     */
    branding_required: boolean;
  }
}

/**
 * An in-app feed message in a user's feed.
 */
export interface FeedListItemsResponse {
  /**
   * Unique identifier for the feed.
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * List of activities associated with this feed item.
   */
  activities: Array<MessagesAPI.Activity>;

  /**
   * List of actors associated with this feed item.
   */
  actors: Array<RecipientsAPI.Recipient>;

  /**
   * Content blocks that make up the feed item.
   */
  blocks: Array<
    FeedListItemsResponse.MessageInAppFeedContentBlock | FeedListItemsResponse.MessageInAppFeedButtonSetBlock
  >;

  /**
   * Additional data associated with the feed item.
   */
  data: Record<string, unknown> | null;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at: string;

  /**
   * Source information for the feed item.
   */
  source: FeedListItemsResponse.Source;

  /**
   * Tenant ID that the feed item belongs to.
   */
  tenant: string | null;

  /**
   * Total number of activities related to this feed item.
   */
  total_activities: number;

  /**
   * Total number of actors related to this feed item.
   */
  total_actors: number;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * Timestamp when the feed item was archived.
   */
  archived_at?: string | null;

  /**
   * Timestamp when the feed item was clicked.
   */
  clicked_at?: string | null;

  /**
   * Timestamp when the feed item was interacted with.
   */
  interacted_at?: string | null;

  /**
   * Timestamp when a link within the feed item was clicked.
   */
  link_clicked_at?: string | null;

  /**
   * Timestamp when the feed item was marked as read.
   */
  read_at?: string | null;

  /**
   * Timestamp when the feed item was marked as seen.
   */
  seen_at?: string | null;
}

export namespace FeedListItemsResponse {
  /**
   * A block in a message in an app feed.
   */
  export interface MessageInAppFeedContentBlock {
    /**
     * The content of the block in a message in an app feed.
     */
    content: string;

    /**
     * The name of the block in a message in an app feed.
     */
    name: string;

    /**
     * The rendered HTML version of the content.
     */
    rendered: string;

    /**
     * The type of block in a message in an app feed.
     */
    type: 'markdown' | 'text';
  }

  /**
   * A button set block in a message in an app feed.
   */
  export interface MessageInAppFeedButtonSetBlock {
    /**
     * A list of buttons in an in app feed message.
     */
    buttons: Array<MessageInAppFeedButtonSetBlock.Button>;

    /**
     * The name of the button set in a message in an app feed.
     */
    name: string;

    /**
     * The type of block in a message in an app feed.
     */
    type: 'button_set';
  }

  export namespace MessageInAppFeedButtonSetBlock {
    /**
     * A button in an in app feed message.
     */
    export interface Button {
      /**
       * The action to take when the button is clicked.
       */
      action: string;

      /**
       * The label of the button.
       */
      label: string;

      /**
       * The name of the button.
       */
      name: string;
    }
  }

  /**
   * Source information for the feed item.
   */
  export interface Source {
    /**
     * The typename of the schema.
     */
    __typename: string;

    /**
     * Categories this workflow belongs to.
     */
    categories: Array<string>;

    /**
     * The key of the workflow.
     */
    key: string;

    /**
     * The workflow version ID.
     */
    version_id: string;
  }
}

export interface FeedListItemsParams extends EntriesCursorParams {
  /**
   * The archived status of the feed items.
   */
  archived?: 'exclude' | 'include' | 'only';

  /**
   * Whether the feed items have a tenant.
   */
  has_tenant?: boolean;

  /**
   * The source of the feed items.
   */
  source?: string;

  /**
   * The status of the feed items.
   */
  status?: 'unread' | 'read' | 'unseen' | 'seen' | 'all';

  /**
   * The tenant associated with the feed items.
   */
  tenant?: string;

  /**
   * The trigger data of the feed items (as a JSON string).
   */
  trigger_data?: string;

  /**
   * The workflow categories of the feed items.
   */
  workflow_categories?: Array<string>;
}

export declare namespace Feeds {
  export {
    type FeedGetSettingsResponse as FeedGetSettingsResponse,
    type FeedListItemsResponse as FeedListItemsResponse,
    type FeedListItemsResponsesEntriesCursor as FeedListItemsResponsesEntriesCursor,
    type FeedListItemsParams as FeedListItemsParams,
  };
}
