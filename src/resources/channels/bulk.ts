// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Bulk extends APIResource {
  /**
   * Bulk update messages for a specific channel
   */
  updateMessageStatus(
    channelId: string,
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkUpdateMessageStatusResponse> {
    return this._client.post(`/v1/channels/${channelId}/messages/bulk/${action}`, { body, ...options });
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
  export {
    type BulkUpdateMessageStatusResponse as BulkUpdateMessageStatusResponse,
    type BulkUpdateMessageStatusParams as BulkUpdateMessageStatusParams,
  };
}
