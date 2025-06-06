// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Bulk update the status of messages for a specific channel. The channel is
   * specified by the `channel_id` parameter. The action to perform is specified by
   * the `action` parameter, where the action is a status change action (e.g.
   * `archive`, `unarchive`).
   *
   * @example
   * ```ts
   * const bulkOperation =
   *   await client.channels.bulk.updateMessageStatus(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'seen',
   *     {
   *       archived: 'include',
   *       delivery_status: 'delivered',
   *       engagement_status: 'seen',
   *       has_tenant: true,
   *       newer_than: '2024-01-01T00:00:00Z',
   *       older_than: '2024-01-01T00:00:00Z',
   *       recipient_ids: ['recipient1', 'recipient2'],
   *       tenants: ['tenant1', 'tenant2'],
   *       trigger_data: '{"key":"value"}',
   *       workflows: ['workflow1', 'workflow2'],
   *     },
   *   );
   * ```
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
   * Limits the results to messages with the given archived status.
   */
  archived?: 'exclude' | 'include' | 'only';

  /**
   * Limits the results to messages with the given delivery status.
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
   * Limits the results to messages with the given engagement status.
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
   * Limits the results to messages that have a tenant or not.
   */
  has_tenant?: boolean;

  /**
   * Limits the results to messages inserted after the given date.
   */
  newer_than?: string;

  /**
   * Limits the results to messages inserted before the given date.
   */
  older_than?: string;

  /**
   * Limits the results to messages with the given recipient IDs.
   */
  recipient_ids?: Array<string>;

  /**
   * Limits the results to messages with the given tenant IDs.
   */
  tenants?: Array<string>;

  /**
   * Limits the results to only messages that were generated with the given data. See
   * [trigger data filtering](/api-reference/overview/trigger-data-filtering) for
   * more information.
   */
  trigger_data?: string;

  /**
   * Limits the results to messages with the given workflow keys.
   */
  workflows?: Array<string>;
}

export declare namespace Bulk {
  export { type BulkUpdateMessageStatusParams as BulkUpdateMessageStatusParams };
}
