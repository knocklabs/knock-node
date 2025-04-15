// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchArchiveResponse,
  BatchGetContentParams,
  BatchGetContentResponse,
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
import {
  EntriesCursor,
  type EntriesCursorParams,
  ItemsCursor,
  type ItemsCursorParams,
  PagePromise,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Returns a paginated list of messages
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesEntriesCursor, Message> {
    return this._client.getAPIList('/v1/messages', EntriesCursor<Message>, { query, ...options });
  }

  /**
   * Archives a message
   */
  archive(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/archived`, options);
  }

  /**
   * Retrieves a single message
   */
  get(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.get(path`/v1/messages/${messageID}`, options);
  }

  /**
   * Get the contents of a message
   */
  getContent(messageID: string, options?: RequestOptions): APIPromise<MessageGetContentResponse> {
    return this._client.get(path`/v1/messages/${messageID}/content`, options);
  }

  /**
   * Get activities for a message
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
   * Get delivery logs for a message
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
   * Get events for a message
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
   * Marks a message as interacted with
   */
  markAsInteracted(
    messageID: string,
    body: MessageMarkAsInteractedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/interacted`, { body, ...options });
  }

  /**
   * Marks a message as read
   */
  markAsRead(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/read`, options);
  }

  /**
   * Marks a message as seen
   */
  markAsSeen(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.put(path`/v1/messages/${messageID}/seen`, options);
  }

  /**
   * Marks a message as unread
   */
  markAsUnread(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/unread`, options);
  }

  /**
   * Marks a message as unseen
   */
  markAsUnseen(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/unseen`, options);
  }

  /**
   * Unarchives a message
   */
  unarchive(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.delete(path`/v1/messages/${messageID}/unarchived`, options);
  }
}

export type MessagesEntriesCursor = EntriesCursor<Message>;

export type ActivitiesItemsCursor = ItemsCursor<Activity>;

export type MessageDeliveryLogsEntriesCursor = EntriesCursor<MessageDeliveryLog>;

export type MessageEventsEntriesCursor = EntriesCursor<MessageEvent>;

/**
 * An activity associated with a workflow run
 */
export interface Activity {
  id?: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: RecipientsAPI.Recipient | null;

  /**
   * The data associated with the activity
   */
  data?: unknown | null;

  inserted_at?: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient?: RecipientsAPI.Recipient;

  updated_at?: string;
}

/**
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface Message {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | Message.UnionMember1>;

  /**
   * Timestamp when message was archived
   */
  archived_at?: string | null;

  /**
   * Channel ID associated with the message
   */
  channel_id?: string;

  /**
   * Timestamp when message was clicked
   */
  clicked_at?: string | null;

  /**
   * Additional message data
   */
  data?: unknown | null;

  /**
   * List of engagement statuses
   */
  engagement_statuses?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * Timestamp of creation
   */
  inserted_at?: string;

  /**
   * Timestamp when message was interacted with
   */
  interacted_at?: string | null;

  /**
   * Timestamp when a link in the message was clicked
   */
  link_clicked_at?: string | null;

  /**
   * Message metadata
   */
  metadata?: unknown | null;

  /**
   * Timestamp when message was read
   */
  read_at?: string | null;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (id, collection).
   */
  recipient?: string | Message.UnionMember1;

  /**
   * Timestamp when message was scheduled for
   */
  scheduled_at?: string | null;

  /**
   * Timestamp when message was seen
   */
  seen_at?: string | null;

  /**
   * Source information
   */
  source?: Message.Source;

  /**
   * Message delivery status
   */
  status?: 'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced';

  /**
   * Tenant ID that the message belongs to
   */
  tenant?: string | null;

  /**
   * Timestamp of last update
   */
  updated_at?: string;

  /**
   * @deprecated Workflow key used to create the message
   */
  workflow?: string | null;
}

export namespace Message {
  /**
   * An object reference to a recipient
   */
  export interface UnionMember1 {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }

  /**
   * An object reference to a recipient
   */
  export interface UnionMember1 {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }

  /**
   * Source information
   */
  export interface Source {
    __typename: string;

    /**
     * The workflow categories
     */
    categories: Array<string>;

    /**
     * The workflow key
     */
    key: string;

    /**
     * The source version ID
     */
    version_id: string;
  }
}

/**
 * A message delivery log
 */
export interface MessageDeliveryLog {
  id: string;

  __typename: string;

  environment_id: string;

  inserted_at: string;

  /**
   * A message delivery log request
   */
  request: MessageDeliveryLog.Request;

  /**
   * A message delivery log response
   */
  response: MessageDeliveryLog.Response;

  service_name: string;
}

export namespace MessageDeliveryLog {
  /**
   * A message delivery log request
   */
  export interface Request {
    body?: string | unknown;

    headers?: unknown | null;

    host?: string;

    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

    path?: string;

    query?: string | null;
  }

  /**
   * A message delivery log response
   */
  export interface Response {
    body?: string | unknown;

    headers?: unknown | null;

    status?: number;
  }
}

/**
 * A single event that occurred for a message
 */
export interface MessageEvent {
  id: string;

  __typename: string;

  inserted_at: string;

  /**
   * A reference to a recipient, either a user identifier (string) or an object
   * reference (id, collection).
   */
  recipient: string | MessageEvent.UnionMember1;

  type:
    | 'message.queued'
    | 'message.sent'
    | 'message.delivered'
    | 'message.undelivered'
    | 'message.bounced'
    | 'message.read'
    | 'message.unread'
    | 'message.link_clicked'
    | 'message.interacted'
    | 'message.seen'
    | 'message.unseen'
    | 'message.archived'
    | 'message.unarchived';

  /**
   * The data associated with the event. Only present for some event types
   */
  data?: unknown | null;
}

export namespace MessageEvent {
  /**
   * An object reference to a recipient
   */
  export interface UnionMember1 {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }
}

/**
 * The contents of a message
 */
export interface MessageGetContentResponse {
  __typename: string;

  /**
   * The contents of an email message
   */
  data:
    | MessageGetContentResponse.MessageEmailContent
    | MessageGetContentResponse.MessageSMSContent
    | MessageGetContentResponse.MessagePushContent
    | MessageGetContentResponse.MessageChatContent
    | MessageGetContentResponse.MessageInAppFeedContent;

  inserted_at: string;

  message_id: string;
}

export namespace MessageGetContentResponse {
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

    data?: unknown | null;
  }

  /**
   * The contents of a chat message
   */
  export interface MessageChatContent {
    __typename: string;

    /**
     * The channel data connection from the recipient to the underlying provider
     */
    connection: unknown;

    template: MessageChatContent.Template;

    metadata?: unknown | null;
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
      json_content?: unknown | null;

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
    blocks: Array<MessageInAppFeedContent.ContentBlock | MessageInAppFeedContent.ButtonSetBlock>;
  }

  export namespace MessageInAppFeedContent {
    /**
     * A content (text or markdown) block in a message in an app feed
     */
    export interface ContentBlock {
      content: string;

      name: string;

      rendered: string;

      type: 'markdown' | 'text';
    }

    /**
     * A set of buttons in a message in an app feed
     */
    export interface ButtonSetBlock {
      buttons: Array<ButtonSetBlock.Button>;

      name: string;

      type: 'button_set';
    }

    export namespace ButtonSetBlock {
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

export interface MessageListParams extends EntriesCursorParams {
  /**
   * The channel ID
   */
  channel_id?: string;

  /**
   * The engagement status of the message
   */
  engagement_status?: Array<'seen' | 'read' | 'interacted' | 'link_clicked' | 'archived'>;

  /**
   * The message IDs to filter messages by
   */
  message_ids?: Array<string>;

  /**
   * The source of the message (workflow key)
   */
  source?: string;

  /**
   * The status of the message
   */
  status?: Array<
    'queued' | 'sent' | 'delivered' | 'delivery_attempted' | 'undelivered' | 'not_sent' | 'bounced'
  >;

  /**
   * The tenant ID
   */
  tenant?: string;

  /**
   * The trigger data to filter messages by. Must be a valid JSON object.
   */
  trigger_data?: string;

  /**
   * The workflow categories to filter messages by
   */
  workflow_categories?: Array<string>;

  /**
   * The workflow recipient run ID to filter messages by
   */
  workflow_recipient_run_id?: string;

  /**
   * The workflow run ID to filter messages by
   */
  workflow_run_id?: string;
}

export interface MessageListActivitiesParams extends ItemsCursorParams {
  /**
   * The trigger data to filter activities by
   */
  trigger_data?: string;
}

export interface MessageListDeliveryLogsParams extends EntriesCursorParams {}

export interface MessageListEventsParams extends EntriesCursorParams {}

export interface MessageMarkAsInteractedParams {
  /**
   * Metadata about the interaction
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
    type ActivitiesItemsCursor as ActivitiesItemsCursor,
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
    type BatchMarkAsReadParams as BatchMarkAsReadParams,
    type BatchMarkAsSeenParams as BatchMarkAsSeenParams,
    type BatchMarkAsUnreadParams as BatchMarkAsUnreadParams,
    type BatchMarkAsUnseenParams as BatchMarkAsUnseenParams,
    type BatchUnarchiveParams as BatchUnarchiveParams,
  };
}
