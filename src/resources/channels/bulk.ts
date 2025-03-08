// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Bulk update messages for a specific channel. The channel is specified by the
   * `channel_id` parameter. The action to perform is specified by the `action`
   * parameter, where the action is a status change action (e.g. `archive`,
   * `unarchive`).
   */
  updateMessageStatus(
    channelID: string,
    action:
      | 'seen'
      | 'unseen'
      | 'read'
      | 'unread'
      | 'archived'
      | 'unarchived'
      | 'interacted'
      | 'archive'
      | 'unarchive'
      | 'delete',
    body: BulkUpdateMessageStatusParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/channels/${channelID}/messages/bulk/${action}`, { body, ...options });
  }
}

export interface BulkUpdateMessageStatusParams {
  archived?: 'exclude' | 'include' | 'only';

  delivery_status?:
    | 'queued'
    | 'sent'
    | 'delivered'
    | 'delivery_attempted'
    | 'undelivered'
    | 'not_sent'
    | 'bounced';

  engagement_status?:
    | 'seen'
    | 'unseen'
    | 'read'
    | 'unread'
    | 'archived'
    | 'unarchived'
    | 'link_clicked'
    | 'interacted';

  has_tenant?: boolean;

  newer_than?: string;

  older_than?: string;

  recipient_ids?: Array<string>;

  tenants?: Array<string>;

  trigger_data?: string;

  workflows?: Array<string>;
}

export declare namespace Bulk {
  export { type BulkUpdateMessageStatusParams as BulkUpdateMessageStatusParams };
}
