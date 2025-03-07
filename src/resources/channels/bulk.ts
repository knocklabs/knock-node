// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
  ): APIPromise<BulkUpdateMessageStatusResponse> {
    const { channel_id, ...body } = params;
    return this._client.post(path`/v1/channels/${channel_id}/messages/bulk/${action}`, { body, ...options });
  }
}

/**
 * A bulk operation entity
 */
export interface BulkUpdateMessageStatusResponse {
  id: string;

  __typename: string;

  estimated_total_rows: number;

  inserted_at: string;

  name: string;

  processed_rows: number;

  status: 'queued' | 'processing' | 'completed' | 'failed';

  success_count: number;

  updated_at: string;

  completed_at?: string | null;

  error_count?: number;

  /**
   * A list of items that failed to be processed
   */
  error_items?: Array<BulkUpdateMessageStatusResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkUpdateMessageStatusResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
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
  export {
    type BulkUpdateMessageStatusResponse as BulkUpdateMessageStatusResponse,
    type BulkUpdateMessageStatusParams as BulkUpdateMessageStatusParams,
  };
}
