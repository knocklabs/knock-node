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
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Returns a paginated list of messages for the current environment.
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesEntriesCursor, Message> {
    return this._client.getAPIList('/v1/messages', EntriesCursor<Message>, { query, ...options });
  }

  /**
   * Archives a message for the current user. Archived messages are hidden from the
   * default message list but can still be accessed and unarchived later.
   */
  archive(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/archived`, options);
  }

  /**
   * Retrieves a specific message by its ID.
   */
  get(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.get(path`/v1/messages/${messageID}`, options);
  }

  /**
   * Returns the fully rendered contents of a message, where the response depends on
   * which channel the message was sent through.
   */
  getContent(messageID: string, options?: RequestOptions): APIPromise<MessageGetContentResponse> {
    return this._client.get(path`/v1/messages/${messageID}/content`, options);
  }

  /**
   * Returns a paginated list of activities for the specified message.
   */
  listActivities(
    messageID: string,
    query: MessageListActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ActivitiesEntriesCursor, Activity> {
    return this._client.getAPIList(path`/v1/messages/${messageID}/activities`, EntriesCursor<Activity>, {
      query,
      ...options,
    });
  }

  /**
   * Returns a paginated list of delivery logs for the specified message.
   */
  listDeliveryLogs(
    messageID: string,
    query: MessageListDeliveryLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessageDeliveryLogsEntriesCursor, MessageDeliveryLog> {
    return this._client.getAPIList(
      path`/v1/messages/${messageID}/delivery_logs`,
      EntriesCursor<MessageDeliveryLog>,
      { query, ...options },
    );
  }

  /**
   * Returns a paginated list of events for the specified message.
   */
  listEvents(
    messageID: string,
    query: MessageListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessageEventsEntriesCursor, MessageEvent> {
    return this._client.getAPIList(path`/v1/messages/${messageID}/events`, EntriesCursor<MessageEvent>, {
      query,
      ...options,
    });
  }

  /**
   * Marks a message as interacted with by the current user. This can include any
   * user action on the message, with optional metadata about the specific
   * interaction.
   */
  markAsInteracted(
    messageID: string,
    body: MessageMarkAsInteractedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/interacted`, { body, ...options });
  }

  /**
   * Marks a message as read for the current user. This indicates that the user has
   * read the message content.
   */
  markAsRead(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/read`, options);
  }

  /**
   * Marks a message as seen for the current user. This indicates that the user has
   * viewed the message in their feed or inbox.
   */
  markAsSeen(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/seen`, options);
  }

  /**
   * Marks a message as unread for the current user, reversing the read state.
   */
  markAsUnread(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/unread`, options);
  }

  /**
   * Marks a message as unseen for the current user, reversing the seen state.
   */
  markAsUnseen(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/unseen`, options);
  }

  /**
   * Removes a message from the archived state, making it visible in the default
   * message list again.
   */
  unarchive(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/unarchived`, options);
  }
}

export type MessagesEntriesCursor = EntriesCursor<Message>;

export type ActivitiesEntriesCursor = EntriesCursor<Activity>;

export type MessageDeliveryLogsEntriesCursor = EntriesCursor<MessageDeliveryLog>;

export type MessageEventsEntriesCursor = EntriesCursor<MessageEvent>;

/**
 * An activity associated with a workflow run.
 */
export interface Activity {
  /**
   * Unique identifier for the activity.
   */
  id?: string;

  /**
   * The type name of the schema.
   */
  __typename?: string;

  /**
   * A recipient, which is either a user or an object.
   */
  actor?: RecipientsAPI.Recipient | null;

  /**
   * The data associated with the activity.
   */
  data?: Record<string, unknown> | null;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at?: string;

  /**
   * A recipient, which is either a user or an object.
   */
  recipient?: RecipientsAPI.Recipient;

  /**
   * The timestamp when the resource was last updated.
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
   * The type name of the schema.
   */
  __typename?: string;

  /**
   * A list of messages.
   */
  actors?: Array<string | Message.RecipientReference>;

  /**
   * Timestamp when the message was archived.
   */
  archived_at?: string | null;

  /**
   * The id for the channel the message was sent through.
   */
  channel_id?: string;

  /**
   * Timestamp when the message was clicked.
   */
  clicked_at?: string | null;

  /**
   * The data associated with the message.
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
   * reference (id, collection).
   */
  recipient?: string | Message.RecipientReference;

  /**
   * Timestamp when the message was scheduled to be sent.
   */
  scheduled_at?: string | null;

  /**
   * Timestamp when the message was seen.
   */
  seen_at?: string | null;

  /**
   * The source that triggered the message.
   */
  source?: Message.Source;

  /**
   * The message delivery status. Can be one of: queued, sent, delivered,
   * delivery_attempted, undelivered, not_sent, bounced.
   */
  status?: 'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced';

  /**
   * The id for the tenant set for the message.
   */
  tenant?: string | null;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at?: string;

  /**
   * @deprecated The key of the worklfow that generated the message.
   */
  workflow?: string | null;
}

export namespace Message {
  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (id, collection).
   */
  export interface RecipientReference {
    /**
     * An identifier for the recipient object.
     */
    id?: string;

    /**
     * The collection the recipient object belongs to.
     */
    collection?: string;
  }

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (id, collection).
   */
  export interface RecipientReference {
    /**
     * An identifier for the recipient object.
     */
    id?: string;

    /**
     * The collection the recipient object belongs to.
     */
    collection?: string;
  }

  /**
   * The source that triggered the message.
   */
  export interface Source {
    __typename: string;

    /**
     * The categories associated with the message.
     */
    categories: Array<string>;

    /**
     * The key of the source that triggered the message.
     */
    key: string;

    /**
     * The id of the version of the source that triggered the message.
     */
    version_id: string;
  }
}

/**
 * A message delivery log.
 */
export interface MessageDeliveryLog {
  /**
   * The unique identifier for the message delivery log.
   */
  id: string;

  /**
   * The type name of the schema.
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
 * A message event.
 */
export interface MessageEvent {
  /**
   * The unique identifier for the message event.
   */
  id: string;

  /**
   * The type name of the schema.
   */
  __typename: string;

  /**
   * Timestamp when the event was created.
   */
  inserted_at: string;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (id, collection).
   */
  recipient: string | MessageEvent.RecipientReference;

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

export namespace MessageEvent {
  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (id, collection).
   */
  export interface RecipientReference {
    /**
     * An identifier for the recipient object.
     */
    id?: string;

    /**
     * The collection the recipient object belongs to.
     */
    collection?: string;
  }
}

/**
 * The content of a message.
 */
export interface MessageGetContentResponse {
  /**
   * The type name of the schema.
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
     * The type name of the schema.
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
     * The type name of the schema.
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
     * The type name of the schema.
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
     * The type name of the schema.
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
     * The type name of the schema.
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

export interface MessageListParams extends EntriesCursorParams {
  /**
   * The unique identifier for the channel.
   */
  channel_id?: string;

  /**
   * The engagement status to filter messages by.
   */
  engagement_status?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * The message IDs to filter messages by.
   */
  message_ids?: Array<string>;

  /**
   * The source of the message (workflow key).
   */
  source?: string;

  /**
   * The delivery status to filter messages by.
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * The unique identifier for the tenant.
   */
  tenant?: string;

  /**
   * The trigger data to filter messages by. Must be a valid JSON object.
   */
  trigger_data?: string;

  /**
   * The workflow categories to filter messages by.
   */
  workflow_categories?: Array<string>;

  /**
   * The workflow recipient run ID to filter messages by.
   */
  workflow_recipient_run_id?: string;

  /**
   * The workflow run ID to filter messages by.
   */
  workflow_run_id?: string;
}

export interface MessageListActivitiesParams extends EntriesCursorParams {
  /**
   * The trigger data to filter activities by.
   */
  trigger_data?: string;
}

export interface MessageListDeliveryLogsParams extends EntriesCursorParams {}

export interface MessageListEventsParams extends EntriesCursorParams {}

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
    type MessagesEntriesCursor as MessagesEntriesCursor,
    type ActivitiesEntriesCursor as ActivitiesEntriesCursor,
    type MessageDeliveryLogsEntriesCursor as MessageDeliveryLogsEntriesCursor,
    type MessageEventsEntriesCursor as MessageEventsEntriesCursor,
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
