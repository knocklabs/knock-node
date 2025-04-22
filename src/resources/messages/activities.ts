// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { ActivitiesEntriesCursor } from './messages';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<ActivitiesEntriesCursor, MessagesAPI.Activity> {
    return this._client.getAPIList(
      path`/v1/messages/${messageID}/activities`,
      EntriesCursor<MessagesAPI.Activity>,
      { query, ...options },
    );
  }
}

export interface ActivityListParams extends EntriesCursorParams {
  /**
   * The trigger data to filter activities by.
   */
  trigger_data?: string;
}

export declare namespace Activities {
  export { type ActivityListParams as ActivityListParams };
}

export { type ActivitiesEntriesCursor };
