// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../core/api-promise';
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
  /**
   * The archived status to filter messages by.
   */
  archived?: 'exclude' | 'include' | 'only';

  /**
   * The delivery status to filter messages by.
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
   * The engagement status to filter messages by.
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
   * Whether to include only messages that have a tenant or not.
   */
  has_tenant?: boolean;

  /**
   * The timestamp to filter messages by. Only include messages created after this
   * timestamp.
   */
  newer_than?: string;

  /**
   * The timestamp to filter messages by. Only include messages created before this
   * timestamp.
   */
  older_than?: string;

  /**
   * The recipient IDs to filter messages by.
   */
  recipient_ids?: Array<string>;

  /**
   * The tenant IDs to filter messages by.
   */
  tenants?: Array<string>;

  /**
   * The trigger data to filter messages by. Must be a valid JSON object.
   */
  trigger_data?: string;

  /**
   * The workflow keys to filter messages by.
   */
  workflows?: Array<string>;
}

export declare namespace Bulk {
  export { type BulkUpdateMessageStatusParams as BulkUpdateMessageStatusParams };
}
