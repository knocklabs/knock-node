// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SharedAPI from '../shared';
import * as MessagesAPI from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Activities extends APIResource {
  /**
   * Returns a paginated list of activities for the specified message.
   */
  list(
    messageID: string,
    query: ActivityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActivityListResponse> {
    return this._client.get(path`/v1/messages/${messageID}/activities`, { query, ...options });
  }
}

/**
 * Returns a paginated list of `activities` associated with a given message. For
 * messages produced after a [batch step](/designing-workflows/batch-function),
 * this will contain one or more activities. Non-batched messages will always
 * return a single activity.
 */
export interface ActivityListResponse {
  /**
   * A list of activities.
   */
  entries: Array<MessagesAPI.Activity>;

  /**
   * Pagination information for a list of resources.
   */
  page_info: SharedAPI.PageInfo;
}

export interface ActivityListParams {
  /**
   * The cursor to fetch entries after.
   */
  after?: string;

  /**
   * The cursor to fetch entries before.
   */
  before?: string;

  /**
   * The number of items per page.
   */
  page_size?: number;

  /**
   * The trigger data to filter activities by.
   */
  trigger_data?: string;
}

export declare namespace Activities {
  export { type ActivityListResponse as ActivityListResponse, type ActivityListParams as ActivityListParams };
}
