// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Marks the given messages as archived. Archived messages are hidden from the
   * default message list in the feed but can still be accessed and unarchived later.
   *
   * @example
   * ```ts
   * const messages = await client.messages.batch.archive({
   *   message_ids: [
   *     '2w3YUpTTOxuDvZFji8OMsKrG176',
   *     '2w3YVRbPXMIh8Zq6oBFcVDA5xes',
   *   ],
   * });
   * ```
   */
  archive(body: BatchArchiveParams, options?: RequestOptions): APIPromise<BatchArchiveResponse> {
    return this._client.post('/v1/messages/batch/archived', { body, ...options });
  }

  /**
   * Get the contents of multiple messages in a single request.
   *
   * @example
   * ```ts
   * const response = await client.messages.batch.getContent({
   *   message_ids: ['string'],
   * });
   * ```
   */
  getContent(query: BatchGetContentParams, options?: RequestOptions): APIPromise<BatchGetContentResponse> {
    return this._client.get('/v1/messages/batch/content', { query, ...options });
  }

  /**
   * Marks the given messages as interacted with by the user. This can include any
   * user action on the message, with optional metadata about the specific
   * interaction. Cannot include more than 5 key-value pairs, must not contain nested
   * data. Read more about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const messages =
   *   await client.messages.batch.markAsInteracted({
   *     message_ids: ['1jNaXzB2RZX3LY8wVQnfCKyPnv7'],
   *     metadata: { key: 'value' },
   *   });
   * ```
   */
  markAsInteracted(
    body: BatchMarkAsInteractedParams,
    options?: RequestOptions,
  ): APIPromise<BatchMarkAsInteractedResponse> {
    return this._client.post('/v1/messages/batch/interacted', { body, ...options });
  }

  /**
   * Marks the given messages as `read`. Read more about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const messages = await client.messages.batch.markAsRead({
   *   message_ids: [
   *     '2w3YUpTTOxuDvZFji8OMsKrG176',
   *     '2w3YVRbPXMIh8Zq6oBFcVDA5xes',
   *   ],
   * });
   * ```
   */
  markAsRead(body: BatchMarkAsReadParams, options?: RequestOptions): APIPromise<BatchMarkAsReadResponse> {
    return this._client.post('/v1/messages/batch/read', { body, ...options });
  }

  /**
   * Marks the given messages as `seen`. This indicates that the user has viewed the
   * message in their feed or inbox. Read more about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const messages = await client.messages.batch.markAsSeen({
   *   message_ids: [
   *     '2w3YUpTTOxuDvZFji8OMsKrG176',
   *     '2w3YVRbPXMIh8Zq6oBFcVDA5xes',
   *   ],
   * });
   * ```
   */
  markAsSeen(body: BatchMarkAsSeenParams, options?: RequestOptions): APIPromise<BatchMarkAsSeenResponse> {
    return this._client.post('/v1/messages/batch/seen', { body, ...options });
  }

  /**
   * Marks the given messages as `unread`. This reverses the `read` state. Read more
   * about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const messages = await client.messages.batch.markAsUnread({
   *   message_ids: [
   *     '2w3YUpTTOxuDvZFji8OMsKrG176',
   *     '2w3YVRbPXMIh8Zq6oBFcVDA5xes',
   *   ],
   * });
   * ```
   */
  markAsUnread(
    body: BatchMarkAsUnreadParams,
    options?: RequestOptions,
  ): APIPromise<BatchMarkAsUnreadResponse> {
    return this._client.post('/v1/messages/batch/unread', { body, ...options });
  }

  /**
   * Marks the given messages as `unseen`. This reverses the `seen` state. Read more
   * about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const messages = await client.messages.batch.markAsUnseen({
   *   message_ids: [
   *     '2w3YUpTTOxuDvZFji8OMsKrG176',
   *     '2w3YVRbPXMIh8Zq6oBFcVDA5xes',
   *   ],
   * });
   * ```
   */
  markAsUnseen(
    body: BatchMarkAsUnseenParams,
    options?: RequestOptions,
  ): APIPromise<BatchMarkAsUnseenResponse> {
    return this._client.post('/v1/messages/batch/unseen', { body, ...options });
  }

  /**
   * Marks the given messages as unarchived. This reverses the `archived` state.
   * Archived messages are hidden from the default message list in the feed but can
   * still be accessed and unarchived later.
   *
   * @example
   * ```ts
   * const messages = await client.messages.batch.unarchive({
   *   message_ids: [
   *     '2w3YUpTTOxuDvZFji8OMsKrG176',
   *     '2w3YVRbPXMIh8Zq6oBFcVDA5xes',
   *   ],
   * });
   * ```
   */
  unarchive(body: BatchUnarchiveParams, options?: RequestOptions): APIPromise<BatchUnarchiveResponse> {
    return this._client.post('/v1/messages/batch/unarchived', { body, ...options });
  }
}

/**
 * The list of messages that were updated.
 */
export type BatchArchiveResponse = Array<MessagesAPI.Message>;

/**
 * A list of `MessageContents`
 */
export type BatchGetContentResponse = Array<BatchGetContentResponse.BatchGetContentResponseItem>;

export namespace BatchGetContentResponse {
  /**
   * The content of a message.
   */
  export interface BatchGetContentResponseItem {
    /**
     * The typename of the schema.
     */
    __typename: string;

    /**
     * Content data specific to the channel type.
     */
    data:
      | BatchGetContentResponseItem.MessageEmailContent
      | BatchGetContentResponseItem.MessageSMSContent
      | BatchGetContentResponseItem.MessagePushContent
      | BatchGetContentResponseItem.MessageChatContent
      | BatchGetContentResponseItem.MessageInAppFeedContent;

    /**
     * Timestamp when the message content was created.
     */
    inserted_at: string;

    /**
     * The unique identifier for the message content.
     */
    message_id: string;
  }

  export namespace BatchGetContentResponseItem {
    /**
     * The content of an email message.
     */
    export interface MessageEmailContent {
      /**
       * The typename of the schema.
       */
      __typename: string;

      /**
       * The sender's email address.
       */
      from: string;

      /**
       * The HTML body of the email message.
       */
      html_body: string;

      /**
       * The subject line of the email message.
       */
      subject_line: string;

      /**
       * The text body of the email message.
       */
      text_body: string;

      /**
       * The recipient's email address.
       */
      to: string;

      /**
       * The BCC email addresses.
       */
      bcc?: string | null;

      /**
       * The CC email addresses.
       */
      cc?: string | null;

      /**
       * The reply-to email address.
       */
      reply_to?: string | null;
    }

    /**
     * The content of an SMS message.
     */
    export interface MessageSMSContent {
      /**
       * The typename of the schema.
       */
      __typename: string;

      /**
       * The content body of the SMS message.
       */
      body: string;

      /**
       * The phone number the SMS was sent to.
       */
      to: string;
    }

    /**
     * The content of a push notification.
     */
    export interface MessagePushContent {
      /**
       * The device token to send the push notification to.
       */
      token: string;

      /**
       * The typename of the schema.
       */
      __typename: string;

      /**
       * The content body of the push notification.
       */
      body: string;

      /**
       * The title of the push notification.
       */
      title: string;

      /**
       * Additional data payload for the push notification.
       */
      data?: Record<string, unknown> | null;
    }

    /**
     * The content of a chat message.
     */
    export interface MessageChatContent {
      /**
       * The typename of the schema.
       */
      __typename: string;

      /**
       * The channel data connection from the recipient to the underlying provider.
       */
      connection: Record<string, unknown>;

      /**
       * The template structure for the chat message.
       */
      template: MessageChatContent.Template;

      /**
       * Additional metadata associated with the chat message.
       */
      metadata?: Record<string, unknown> | null;
    }

    export namespace MessageChatContent {
      /**
       * The template structure for the chat message.
       */
      export interface Template {
        /**
         * The blocks of the message in a chat.
         */
        blocks?: Array<Template.Block> | null;

        /**
         * The JSON content of the message.
         */
        json_content?: Record<string, unknown> | null;

        /**
         * The summary of the chat message.
         */
        summary?: string | null;
      }

      export namespace Template {
        /**
         * A block in a message in a chat.
         */
        export interface Block {
          /**
           * The actual content of the block.
           */
          content: string;

          /**
           * The name of the block for identification.
           */
          name: string;

          /**
           * The type of block in a message in a chat (text or markdown).
           */
          type: 'text' | 'markdown';
        }
      }
    }

    /**
     * The content of an in-app feed message.
     */
    export interface MessageInAppFeedContent {
      /**
       * The typename of the schema.
       */
      __typename: string;

      /**
       * The blocks of the message in an app feed.
       */
      blocks: Array<
        | MessageInAppFeedContent.MessageInAppFeedContentBlock
        | MessageInAppFeedContent.MessageInAppFeedButtonSetBlock
      >;
    }

    export namespace MessageInAppFeedContent {
      /**
       * A block in a message in an app feed.
       */
      export interface MessageInAppFeedContentBlock {
        /**
         * The content of the block in a message in an app feed.
         */
        content: string;

        /**
         * The name of the block in a message in an app feed.
         */
        name: string;

        /**
         * The rendered HTML version of the content.
         */
        rendered: string;

        /**
         * The type of block in a message in an app feed.
         */
        type: 'markdown' | 'text';
      }

      /**
       * A button set block in a message in an app feed.
       */
      export interface MessageInAppFeedButtonSetBlock {
        /**
         * A list of buttons in an in app feed message.
         */
        buttons: Array<MessageInAppFeedButtonSetBlock.Button>;

        /**
         * The name of the button set in a message in an app feed.
         */
        name: string;

        /**
         * The type of block in a message in an app feed.
         */
        type: 'button_set';
      }

      export namespace MessageInAppFeedButtonSetBlock {
        /**
         * A button in an in app feed message.
         */
        export interface Button {
          /**
           * The action to take when the button is clicked.
           */
          action: string;

          /**
           * The label of the button.
           */
          label: string;

          /**
           * The name of the button.
           */
          name: string;
        }
      }
    }
  }
}

/**
 * The list of messages that were updated.
 */
export type BatchMarkAsInteractedResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated.
 */
export type BatchMarkAsReadResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated.
 */
export type BatchMarkAsSeenResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated.
 */
export type BatchMarkAsUnreadResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated.
 */
export type BatchMarkAsUnseenResponse = Array<MessagesAPI.Message>;

/**
 * The list of messages that were updated.
 */
export type BatchUnarchiveResponse = Array<MessagesAPI.Message>;

export interface BatchArchiveParams {
  /**
   * The message IDs to update the status of.
   */
  message_ids: Array<string>;
}

export interface BatchGetContentParams {
  /**
   * The IDs of the messages to fetch contents of.
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsInteractedParams {
  /**
   * The message IDs to batch mark as interacted with.
   */
  message_ids: Array<string>;

  /**
   * Metadata about the interaction.
   */
  metadata?: Record<string, unknown> | null;
}

export interface BatchMarkAsReadParams {
  /**
   * The message IDs to update the status of.
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsSeenParams {
  /**
   * The message IDs to update the status of.
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsUnreadParams {
  /**
   * The message IDs to update the status of.
   */
  message_ids: Array<string>;
}

export interface BatchMarkAsUnseenParams {
  /**
   * The message IDs to update the status of.
   */
  message_ids: Array<string>;
}

export interface BatchUnarchiveParams {
  /**
   * The message IDs to update the status of.
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
