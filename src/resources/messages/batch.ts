// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Mark messages as archived
   */
  archive(body: BatchArchiveParams, options?: RequestOptions): APIPromise<BatchArchiveResponse> {
    return this._client.post('/v1/messages/batch/archived', options);
  }

  /**
   * Get the contents of multiple messages in a single request.
   */
  getContent(query: BatchGetContentParams, options?: RequestOptions): APIPromise<BatchGetContentResponse> {
    return this._client.get('/v1/messages/batch/content', { query, ...options });
  }

  /**
   * Mark messages as interacted
   */
  markAsInteracted(
    body: BatchMarkAsInteractedParams,
    options?: RequestOptions,
  ): APIPromise<BatchMarkAsInteractedResponse> {
    return this._client.post('/v1/messages/batch/interacted', { body, ...options });
  }

  /**
   * Mark messages as read
   */
  markAsRead(body: BatchMarkAsReadParams, options?: RequestOptions): APIPromise<BatchMarkAsReadResponse> {
    return this._client.post('/v1/messages/batch/read', options);
  }

  /**
   * Mark messages as seen
   */
  markAsSeen(body: BatchMarkAsSeenParams, options?: RequestOptions): APIPromise<BatchMarkAsSeenResponse> {
    return this._client.post('/v1/messages/batch/seen', options);
  }

  /**
   * Mark messages as unread
   */
  markAsUnread(
    body: BatchMarkAsUnreadParams,
    options?: RequestOptions,
  ): APIPromise<BatchMarkAsUnreadResponse> {
    return this._client.post('/v1/messages/batch/unread', options);
  }

  /**
   * Mark messages as unseen
   */
  markAsUnseen(
    body: BatchMarkAsUnseenParams,
    options?: RequestOptions,
  ): APIPromise<BatchMarkAsUnseenResponse> {
    return this._client.post('/v1/messages/batch/unseen', options);
  }

  /**
   * Mark messages as unarchived
   */
  unarchive(body: BatchUnarchiveParams, options?: RequestOptions): APIPromise<BatchUnarchiveResponse> {
    return this._client.post('/v1/messages/batch/unarchived', options);
  }
}

/**
 * The list of messages that were updated
 */
export type BatchArchiveResponse = Array<MessagesAPI.Message>;

/**
 * A list of message contents
 */
export type BatchGetContentResponse = Array<BatchGetContentResponse.BatchGetContentResponseItem>;

export namespace BatchGetContentResponse {
  /**
   * The contents of a message
   */
  export interface BatchGetContentResponseItem {
    __typename: string;

    /**
     * The contents of an email message
     */
    data:
      | BatchGetContentResponseItem.MessageEmailContent
      | BatchGetContentResponseItem.MessageSMSContent
      | BatchGetContentResponseItem.MessagePushContent
      | BatchGetContentResponseItem.MessageChatContent
      | BatchGetContentResponseItem.MessageInAppFeedContent;

    inserted_at: string;

    message_id: string;
  }

  export namespace BatchGetContentResponseItem {
    /**
     * The contents of an email message
     */
    export interface MessageEmailContent {
      __typename: string;

      from: string;

      html_body: string;

      subject_line: string;

      text_body: string;

      to: string;

      bcc?: string | null;

      cc?: string | null;

      reply_to?: string | null;
    }

    /**
     * The contents of an SMS message
     */
    export interface MessageSMSContent {
      __typename: string;

      body: string;

      to: string;
    }

    /**
     * The contents of a push message
     */
    export interface MessagePushContent {
      token: string;

      __typename: string;

      body: string;

      title: string;

      data?: Record<string, unknown> | null;
    }

    /**
     * The contents of a chat message
     */
    export interface MessageChatContent {
      __typename: string;

      /**
       * The channel data connection from the recipient to the underlying provider
       */
      connection: Record<string, unknown>;

      template: MessageChatContent.Template;

      metadata?: Record<string, unknown> | null;
    }

    export namespace MessageChatContent {
      export interface Template {
        /**
         * The structured blocks of the message
         */
        blocks?: Array<Template.Block> | null;

        /**
         * The JSON content of the message
         */
        json_content?: Record<string, unknown> | null;

        summary?: string | null;
      }

      export namespace Template {
        /**
         * A block in a chat message
         */
        export interface Block {
          content: string;

          name: string;

          type: 'text' | 'markdown';
        }
      }
    }

    /**
     * The contents of a message in an app feed
     */
    export interface MessageInAppFeedContent {
      __typename: string;

      /**
       * The blocks of the message
       */
      blocks: Array<
        | MessageInAppFeedContent.MessageInAppFeedContentBlock
        | MessageInAppFeedContent.MessageInAppFeedButtonSetBlock
      >;
    }

    export namespace MessageInAppFeedContent {
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
    }
  }
}

/**
 * The list of messages that were updated
 */
export type BatchMarkAsInteractedResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated
 */
export type BatchMarkAsReadResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated
 */
export type BatchMarkAsSeenResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated
 */
export type BatchMarkAsUnreadResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated
 */
export type BatchMarkAsUnseenResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated
 */
export type BatchUnarchiveResponse = Array<MessagesAPI.Message>;

export interface BatchArchiveParams {
  /**
   * The message IDs to update
   */
  message_ids: Array<string>;
}

export interface BatchGetContentParams {
  /**
   * The IDs of the messages to fetch contents of
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsInteractedParams {
  /**
   * The message IDs to update
   */
  message_ids: Array<string>;

  /**
   * Metadata about the interaction
   */
  metadata?: Record<string, unknown> | null;
}

export interface BatchMarkAsReadParams {
  /**
   * The message IDs to update
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsSeenParams {
  /**
   * The message IDs to update
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsUnreadParams {
  /**
   * The message IDs to update
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsUnseenParams {
  /**
   * The message IDs to update
   */
  message_ids: Array<string>;
}

export interface BatchUnarchiveParams {
  /**
   * The message IDs to update
   */
  message_ids: Array<string>;
}

export declare namespace Batch {
  export {
    type BatchArchiveResponse as BatchArchiveResponse,
    type BatchGetContentResponse as BatchGetContentResponse,
    type BatchMarkAsInteractedResponse as BatchMarkAsInteractedResponse,
    type BatchMarkAsReadResponse as BatchMarkAsReadResponse,
    type BatchMarkAsSeenResponse as BatchMarkAsSeenResponse,
    type BatchMarkAsUnreadResponse as BatchMarkAsUnreadResponse,
    type BatchMarkAsUnseenResponse as BatchMarkAsUnseenResponse,
    type BatchUnarchiveResponse as BatchUnarchiveResponse,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchGetContentParams as BatchGetContentParams,
    type BatchMarkAsInteractedParams as BatchMarkAsInteractedParams,
    type BatchMarkAsReadParams as BatchMarkAsReadParams,
    type BatchMarkAsSeenParams as BatchMarkAsSeenParams,
    type BatchMarkAsUnreadParams as BatchMarkAsUnreadParams,
    type BatchMarkAsUnseenParams as BatchMarkAsUnseenParams,
    type BatchUnarchiveParams as BatchUnarchiveParams,
  };
}
