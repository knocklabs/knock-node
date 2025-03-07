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
    params: BulkUpdateMessageStatusParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    const { channel_id, ...body } = params;
    return this._client.post(path`/v1/channels/${channel_id}/messages/bulk/${action}`, { body, ...options });
  }
}

export interface BulkUpdateMessageStatusParams {
  /**
   * Path param: The ID of the channel to update messages for
   */
  channel_id: string;

  /**
   * Body param:
   */
  archived?: 'exclude' | 'include' | 'only';

  /**
   * Body param:
   */
  delivery_status?:
    | 'queued'
    | 'sent'
    | 'delivered'
    | 'delivery_attempted'
    | 'undelivered'
    | 'not_sent'
    | 'bounced';

  /**
   * Body param:
   */
  engagement_status?:
    | 'seen'
    | 'unseen'
    | 'read'
    | 'unread'
    | 'archived'
    | 'unarchived'
    | 'link_clicked'
    | 'interacted';

  /**
   * Body param:
   */
  has_tenant?: boolean;

  /**
   * Body param:
   */
  newer_than?: string;

  /**
   * Body param:
   */
  older_than?: string;

  /**
   * Body param:
   */
  recipient_ids?: Array<string>;

  /**
   * Body param:
   */
  tenants?: Array<string>;

  /**
   * Body param:
   */
  trigger_data?: string;

  /**
   * Body param:
   */
  workflows?: Array<string>;
}

export declare namespace Bulk {
  export { type BulkUpdateMessageStatusParams as BulkUpdateMessageStatusParams };
}
