// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RecipientsAPI from '../recipients';
import * as MessagesAPI from '../messages/messages';
import { APIPromise } from '../../api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Feeds extends APIResource {
  /**
   * Returns the feed settings for a user.
   */
  getSettings(
    userID: string,
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<FeedGetSettingsResponse> {
    return this._client.get(path`/v1/users/${userID}/feeds/${channelID}/settings`, options);
  }

  /**
   * Returns a paginated list of feed items for a user, including metadata about the
   * feed.
   */
  listItems(
    userID: string,
    channelID: string,
    query: FeedListItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FeedListItemsResponsesEntriesCursor, FeedListItemsResponse> {
    return this._client.getAPIList(
      path`/v1/users/${userID}/feeds/${channelID}`,
      EntriesCursor<FeedListItemsResponse>,
      { query, ...options },
    );
  }
}

export type FeedListItemsResponsesEntriesCursor = EntriesCursor<FeedListItemsResponse>;

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

/**
 * An in-app feed message in a user's feed
 */
export interface FeedListItemsResponse {
  id: string;

  __typename: string;

  activities: Array<MessagesAPI.Activity>;

  actors: Array<RecipientsAPI.Recipient>;

  blocks: Array<
    FeedListItemsResponse.MessageInAppFeedContentBlock | FeedListItemsResponse.MessageInAppFeedButtonSetBlock
  >;

  data: Record<string, unknown> | null;

  inserted_at: string;

  source: FeedListItemsResponse.Source;

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

export namespace FeedListItemsResponse {
  /**
   * A content (text or markdown) block in a message in an app feed
   */
  export interface MessageInAppFeedContentBlock {
    content: string;

    name: string;

    rendered: string;

    type: 'markdown' | 'text';
  }

  /**
   * A set of buttons in a message in an app feed
   */
  export interface MessageInAppFeedButtonSetBlock {
    buttons: Array<MessageInAppFeedButtonSetBlock.Button>;

    name: string;

    type: 'button_set';
  }

  export namespace MessageInAppFeedButtonSetBlock {
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

export interface FeedListItemsParams extends EntriesCursorParams {
  /**
   * The archived status of the feed items to return
   */
  archived?: 'exclude' | 'include' | 'only';

  /**
   * Whether the feed items have a tenant
   */
  has_tenant?: boolean;

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
    type FeedGetSettingsResponse as FeedGetSettingsResponse,
    type FeedListItemsResponse as FeedListItemsResponse,
    type FeedListItemsResponsesEntriesCursor as FeedListItemsResponsesEntriesCursor,
    type FeedListItemsParams as FeedListItemsParams,
  };
}
