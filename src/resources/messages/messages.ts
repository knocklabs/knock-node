// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchArchiveResponse,
  BatchGetContentParams,
  BatchGetContentResponse,
  BatchMarkAsInteractedParams,
  BatchMarkAsInteractedResponse,
  BatchMarkAsReadParams,
  BatchMarkAsReadResponse,
  BatchMarkAsSeenParams,
  BatchMarkAsSeenResponse,
  BatchMarkAsUnreadParams,
  BatchMarkAsUnreadResponse,
  BatchMarkAsUnseenParams,
  BatchMarkAsUnseenResponse,
  BatchUnarchiveParams,
  BatchUnarchiveResponse,
} from './batch';
import * as RecipientsAPI from '../recipients/recipients';
import { APIPromise } from '../../core/api-promise';
import { ItemsCursor, type ItemsCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Returns a paginated list of messages for the current environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const message of client.messages.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesItemsCursor, Message> {
    return this._client.getAPIList('/v1/messages', ItemsCursor<Message>, { query, ...options });
  }

  /**
   * Archives a message for the user. Archived messages are hidden from the default
   * message list in the feed but can still be accessed and unarchived later.
   *
   * @example
   * ```ts
   * const message = await client.messages.archive(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  archive(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/archived`, options);
  }

  /**
   * Retrieves a specific message by its ID.
   *
   * @example
   * ```ts
   * const message = await client.messages.get(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  get(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.get(path`/v1/messages/${messageID}`, options);
  }

  /**
   * Returns the fully rendered contents of a message, where the response depends on
   * which channel the message was sent through.
   *
   * @example
   * ```ts
   * const response = await client.messages.getContent(
   *   'message_id',
   * );
   * ```
   */
  getContent(messageID: string, options?: RequestOptions): APIPromise<MessageGetContentResponse> {
    return this._client.get(path`/v1/messages/${messageID}/content`, options);
  }

  /**
   * Returns a paginated list of activities for the specified message.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const activity of client.messages.listActivities(
   *   'message_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listActivities(
    messageID: string,
    query: MessageListActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ActivitiesItemsCursor, Activity> {
    return this._client.getAPIList(path`/v1/messages/${messageID}/activities`, ItemsCursor<Activity>, {
      query,
      ...options,
    });
  }

  /**
   * Returns a paginated list of delivery logs for the specified message.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const messageDeliveryLog of client.messages.listDeliveryLogs(
   *   'message_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listDeliveryLogs(
    messageID: string,
    query: MessageListDeliveryLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessageDeliveryLogsItemsCursor, MessageDeliveryLog> {
    return this._client.getAPIList(
      path`/v1/messages/${messageID}/delivery_logs`,
      ItemsCursor<MessageDeliveryLog>,
      { query, ...options },
    );
  }

  /**
   * Returns a paginated list of events for the specified message.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const messageEvent of client.messages.listEvents(
   *   'message_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listEvents(
    messageID: string,
    query: MessageListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessageEventsItemsCursor, MessageEvent> {
    return this._client.getAPIList(path`/v1/messages/${messageID}/events`, ItemsCursor<MessageEvent>, {
      query,
      ...options,
    });
  }

  /**
   * Marks a message as `interacted` with by the user. This can include any user
   * action on the message, with optional metadata about the specific interaction.
   * Cannot include more than 5 key-value pairs, must not contain nested data. Read
   * more about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const message = await client.messages.markAsInteracted(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  markAsInteracted(
    messageID: string,
    body: MessageMarkAsInteractedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/interacted`, { body, ...options });
  }

  /**
   * Marks a message as `read`. This indicates that the user has read the message
   * content. Read more about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const message = await client.messages.markAsRead(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  markAsRead(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/read`, options);
  }

  /**
   * Marks a message as `seen`. This indicates that the user has viewed the message
   * in their feed or inbox. Read more about message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const message = await client.messages.markAsSeen(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  markAsSeen(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/seen`, options);
  }

  /**
   * Marks a message as `unread`. This reverses the `read` state. Read more about
   * message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const message = await client.messages.markAsUnread(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  markAsUnread(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/read`, options);
  }

  /**
   * Marks a message as `unseen`. This reverses the `seen` state. Read more about
   * message engagement statuses
   * [here](/send-notifications/message-statuses#engagement-status).
   *
   * @example
   * ```ts
   * const message = await client.messages.markAsUnseen(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  markAsUnseen(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/seen`, options);
  }

  /**
   * Removes a message from the archived state, making it visible in the default
   * message list in the feed again.
   *
   * @example
   * ```ts
   * const message = await client.messages.unarchive(
   *   '1jNaXzB2RZX3LY8wVQnfCKyPnv7',
   * );
   * ```
   */
  unarchive(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/archived`, options);
  }
}

export type MessagesItemsCursor = ItemsCursor<Message>;

export type ActivitiesItemsCursor = ItemsCursor<Activity>;

export type MessageDeliveryLogsItemsCursor = ItemsCursor<MessageDeliveryLog>;

export type MessageEventsItemsCursor = ItemsCursor<MessageEvent>;

/**
 * An activity associated with a workflow trigger request. Messages produced after
 * a [batch step](/designing-workflows/batch-function) can be associated with one
 * or more activities. Non-batched messages will always be associated with a single
 * activity.
 */
export interface Activity {
  /**
   * Unique identifier for the activity.
   */
  id?: string;

  /**
   * The typename of the schema.
   */
  __typename?: string;

  /**
   * A recipient of a notification, which is either a user or an object.
   */
  actor?: RecipientsAPI.Recipient | null;

  /**
   * The workflow trigger `data` payload associated with the activity.
   */
  data?: Record<string, unknown> | null;

  /**
   * Timestamp when the activity was created.
   */
  inserted_at?: string;

  /**
   * A recipient of a notification, which is either a user or an object.
   */
  recipient?: RecipientsAPI.Recipient;

  /**
   * Timestamp when the activity was last updated.
   */
  updated_at?: string;
}

/**
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface Message {
  /**
   * The unique identifier for the message.
   */
  id?: string;

  /**
   * The typename of the schema.
   */
  __typename?: string;

  /**
   * One or more actors that are associated with this message. Note: this is a list
   * that can contain up to 10 actors if the message is produced from a
   * [batch](/designing-workflows/batch-function).
   */
  actors?: Array<RecipientsAPI.RecipientReference>;

  /**
   * Timestamp when the message was archived.
   */
  archived_at?: string | null;

  /**
   * The ID for the channel the message was sent through.
   */
  channel_id?: string;

  /**
   * Timestamp when the message was clicked.
   */
  clicked_at?: string | null;

  /**
   * Data associated with the message’s workflow run. Includes the workflow trigger
   * request’s `data` payload merged with any additional data returned by a
   * [fetch function](/designing-workflows/fetch-function). For messages produced
   * after a [batch step](/designing-workflows/batch-function), includes the payload
   * `data` from the most-recent trigger request (the final `activity` in the batch).
   */
  data?: Record<string, unknown> | null;

  /**
   * A list of engagement statuses.
   */
  engagement_statuses?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at?: string;

  /**
   * Timestamp when the message was interacted with.
   */
  interacted_at?: string | null;

  /**
   * Timestamp when a link in the message was clicked.
   */
  link_clicked_at?: string | null;

  /**
   * The metadata associated with the message.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Timestamp when the message was read.
   */
  read_at?: string | null;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (ID, collection).
   */
  recipient?: RecipientsAPI.RecipientReference;

  /**
   * Timestamp when the message was scheduled to be sent.
   */
  scheduled_at?: string | null;

  /**
   * Timestamp when the message was seen.
   */
  seen_at?: string | null;

  /**
   * The workflow that triggered the message.
   */
  source?: Message.Source;

  /**
   * The message delivery status.
   */
  status?: 'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced';

  /**
   * The ID of the `tenant` associated with the message. Only present when a `tenant`
   * is provided on a workflow trigger request.
   */
  tenant?: string | null;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at?: string;

  /**
   * @deprecated The key of the workflow that generated the message.
   */
  workflow?: string | null;
}

export namespace Message {
  /**
   * The workflow that triggered the message.
   */
  export interface Source {
    __typename: string;

    /**
     * The categories associated with the message.
     */
    categories: Array<string>;

    /**
     * The key of the workflow that triggered the message.
     */
    key: string;

    /**
     * The ID of the version of the workflow that triggered the message.
     */
    version_id: string;
  }
}

/**
 * A message delivery log contains a `request` from Knock to a downstream provider
 * and the `response` that was returned.
 */
export interface MessageDeliveryLog {
  /**
   * The unique identifier for the message delivery log.
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * The ID of the environment in which the message delivery occurred.
   */
  environment_id: string;

  /**
   * Timestamp when the message delivery log was created.
   */
  inserted_at: string;

  /**
   * A message delivery log request.
   */
  request: MessageDeliveryLog.Request;

  /**
   * A message delivery log response.
   */
  response: MessageDeliveryLog.Response;

  /**
   * The name of the service that processed the delivery.
   */
  service_name: string;
}

export namespace MessageDeliveryLog {
  /**
   * A message delivery log request.
   */
  export interface Request {
    /**
     * The body content that was sent with the request.
     */
    body?: string | Record<string, unknown>;

    /**
     * The headers that were sent with the request.
     */
    headers?: Record<string, unknown> | null;

    /**
     * The host to which the request was sent.
     */
    host?: string;

    /**
     * The HTTP method used for the request.
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

    /**
     * The path of the URL that was requested.
     */
    path?: string;

    /**
     * The query string of the URL that was requested.
     */
    query?: string | null;
  }

  /**
   * A message delivery log response.
   */
  export interface Response {
    /**
     * The body content that was received with the response.
     */
    body?: string | Record<string, unknown>;

    /**
     * The headers that were received with the response.
     */
    headers?: Record<string, unknown> | null;

    /**
     * The HTTP status code of the response.
     */
    status?: number;
  }
}

/**
 * A message event. Occurs when a message
 * [delivery or engagement status](/send-notifications/message-statuses) changes.
 */
export interface MessageEvent {
  /**
   * The unique identifier for the message event.
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * Timestamp when the event was created.
   */
  inserted_at: string;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (ID, collection).
   */
  recipient: RecipientsAPI.RecipientReference;

  /**
   * The type of event that occurred.
   */
  type:
    | 'message.archived'
    | 'message.bounced'
    | 'message.delivered'
    | 'message.delivery_attempted'
    | 'message.interacted'
    | 'message.link_clicked'
    | 'message.not_sent'
    | 'message.queued'
    | 'message.read'
    | 'message.seen'
    | 'message.sent'
    | 'message.unarchived'
    | 'message.undelivered'
    | 'message.unread'
    | 'message.unseen';

  /**
   * The data associated with the message event. Only present for some event types.
   */
  data?: Record<string, unknown> | null;
}

/**
 * The content of a message.
 */
export interface MessageGetContentResponse {
  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * Content data specific to the channel type.
   */
  data:
    | MessageGetContentResponse.MessageEmailContent
    | MessageGetContentResponse.MessageSMSContent
    | MessageGetContentResponse.MessagePushContent
    | MessageGetContentResponse.MessageChatContent
    | MessageGetContentResponse.MessageInAppFeedContent;

  /**
   * Timestamp when the message content was created.
   */
  inserted_at: string;

  /**
   * The unique identifier for the message content.
   */
  message_id: string;
}

export namespace MessageGetContentResponse {
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

export interface MessageListParams extends ItemsCursorParams {
  /**
   * Limits the results to items with the corresponding channel ID.
   */
  channel_id?: string;

  /**
   * Limits the results to messages with the given engagement status.
   */
  engagement_status?: Array<
    'seen' | 'unseen' | 'read' | 'unread' | 'archived' | 'unarchived' | 'link_clicked' | 'interacted'
  >;

  inserted_at?: MessageListParams.InsertedAt;

  /**
   * Limits the results to only the message IDs given (max 50). Note: when using this
   * option, the results will be subject to any other filters applied to the query.
   */
  message_ids?: Array<string>;

  /**
   * Limits the results to messages triggered by the given workflow key.
   */
  source?: string;

  /**
   * Limits the results to messages with the given delivery status.
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * Limits the results to items with the corresponding tenant.
   */
  tenant?: string;

  /**
   * Limits the results to only messages that were generated with the given data. See
   * [trigger data filtering](/api-reference/overview/trigger-data-filtering) for
   * more information.
   */
  trigger_data?: string;

  /**
   * Limits the results to messages related to any of the provided categories.
   */
  workflow_categories?: Array<string>;

  /**
   * Limits the results to messages for a specific recipient's workflow run.
   */
  workflow_recipient_run_id?: string;

  /**
   * Limits the results to messages associated with the top-level workflow run ID
   * returned by the workflow trigger request.
   */
  workflow_run_id?: string;
}

export namespace MessageListParams {
  export interface InsertedAt {
    /**
     * Limits the results to messages inserted after the given date.
     */
    gt?: string;

    /**
     * Limits the results to messages inserted after or on the given date.
     */
    gte?: string;

    /**
     * Limits the results to messages inserted before the given date.
     */
    lt?: string;

    /**
     * Limits the results to messages inserted before or on the given date.
     */
    lte?: string;
  }
}

export interface MessageListActivitiesParams extends ItemsCursorParams {
  /**
   * The trigger data to filter activities by.
   */
  trigger_data?: string;
}

export interface MessageListDeliveryLogsParams extends ItemsCursorParams {}

export interface MessageListEventsParams extends ItemsCursorParams {}

export interface MessageMarkAsInteractedParams {
  /**
   * Metadata about the interaction.
   */
  metadata?: Record<string, unknown>;
}

Messages.Batch = Batch;

export declare namespace Messages {
  export {
    type Activity as Activity,
    type Message as Message,
    type MessageDeliveryLog as MessageDeliveryLog,
    type MessageEvent as MessageEvent,
    type MessageGetContentResponse as MessageGetContentResponse,
    type MessagesItemsCursor as MessagesItemsCursor,
    type ActivitiesItemsCursor as ActivitiesItemsCursor,
    type MessageDeliveryLogsItemsCursor as MessageDeliveryLogsItemsCursor,
    type MessageEventsItemsCursor as MessageEventsItemsCursor,
    type MessageListParams as MessageListParams,
    type MessageListActivitiesParams as MessageListActivitiesParams,
    type MessageListDeliveryLogsParams as MessageListDeliveryLogsParams,
    type MessageListEventsParams as MessageListEventsParams,
    type MessageMarkAsInteractedParams as MessageMarkAsInteractedParams,
  };

  export {
    Batch as Batch,
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
