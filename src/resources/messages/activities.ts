// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { ActivitiesItemsCursor } from './messages';
import { ItemsCursor, type ItemsCursorParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<ActivitiesItemsCursor, MessagesAPI.Activity> {
    return this._client.getAPIList(
      path`/v1/messages/${messageID}/activities`,
      ItemsCursor<MessagesAPI.Activity>,
      { query, ...options },
    );
  }
}

export interface ActivityListParams extends ItemsCursorParams {
  /**
   * The trigger data to filter activities by.
   */
  trigger_data?: string;
}

export declare namespace Activities {
  export { type ActivityListParams as ActivityListParams };
}

export { type ActivitiesItemsCursor };
