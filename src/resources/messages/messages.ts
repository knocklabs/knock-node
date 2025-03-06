// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
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
import * as UsersAPI from '../users/users';

export class Messages extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Returns a paginated list of messages
   */
  list(query?: MessageListParams, options?: Core.RequestOptions): Core.APIPromise<MessageListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MessageListResponse>;
  list(
    query: MessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/messages', { query, ...options });
  }

  /**
   * Archives a message
   */
  archive(messageId: string, options?: Core.RequestOptions): Core.APIPromise<MessageArchiveResponse> {
    return this._client.put(`/v1/messages/${messageId}/archived`, options);
  }

  /**
   * Gets a message
   */
  get(messageId: string, options?: Core.RequestOptions): Core.APIPromise<MessageGetResponse> {
    return this._client.get(`/v1/messages/${messageId}`, options);
  }

  /**
   * Get the contents of a message
   */
  getContent(messageId: string, options?: Core.RequestOptions): Core.APIPromise<MessageGetContentResponse> {
    return this._client.get(`/v1/messages/${messageId}/content`, options);
  }

  /**
   * List activities for a message
   */
  listActivities(
    messageId: string,
    query?: MessageListActivitiesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListActivitiesResponse>;
  listActivities(
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListActivitiesResponse>;
  listActivities(
    messageId: string,
    query: MessageListActivitiesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListActivitiesResponse> {
    if (isRequestOptions(query)) {
      return this.listActivities(messageId, {}, query);
    }
    return this._client.get(`/v1/messages/${messageId}/activities`, { query, ...options });
  }

  /**
   * List delivery logs for a message
   */
  listDeliveryLogs(
    messageId: string,
    query?: MessageListDeliveryLogsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListDeliveryLogsResponse>;
  listDeliveryLogs(
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListDeliveryLogsResponse>;
  listDeliveryLogs(
    messageId: string,
    query: MessageListDeliveryLogsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListDeliveryLogsResponse> {
    if (isRequestOptions(query)) {
      return this.listDeliveryLogs(messageId, {}, query);
    }
    return this._client.get(`/v1/messages/${messageId}/delivery_logs`, { query, ...options });
  }

  /**
   * List events for a message
   */
  listEvents(
    messageId: string,
    query?: MessageListEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListEventsResponse>;
  listEvents(messageId: string, options?: Core.RequestOptions): Core.APIPromise<MessageListEventsResponse>;
  listEvents(
    messageId: string,
    query: MessageListEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListEventsResponse> {
    if (isRequestOptions(query)) {
      return this.listEvents(messageId, {}, query);
    }
    return this._client.get(`/v1/messages/${messageId}/events`, { query, ...options });
  }

  /**
   * Marks a message as interacted with
   */
  markAsInteracted(
    messageId: string,
    body?: MessageMarkAsInteractedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageMarkAsInteractedResponse>;
  markAsInteracted(
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageMarkAsInteractedResponse>;
  markAsInteracted(
    messageId: string,
    body: MessageMarkAsInteractedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageMarkAsInteractedResponse> {
    if (isRequestOptions(body)) {
      return this.markAsInteracted(messageId, {}, body);
    }
    return this._client.put(`/v1/messages/${messageId}/interacted`, { body, ...options });
  }

  /**
   * Marks a message as read
   */
  markAsRead(messageId: string, options?: Core.RequestOptions): Core.APIPromise<MessageMarkAsReadResponse> {
    return this._client.put(`/v1/messages/${messageId}/read`, options);
  }

  /**
   * Marks a message as seen
   */
  markAsSeen(messageId: string, options?: Core.RequestOptions): Core.APIPromise<MessageMarkAsSeenResponse> {
    return this._client.put(`/v1/messages/${messageId}/seen`, options);
  }

  /**
   * Marks a message as unread
   */
  markAsUnread(
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageMarkAsUnreadResponse> {
    return this._client.delete(`/v1/messages/${messageId}/unread`, options);
  }

  /**
   * Marks a message as unseen
   */
  markAsUnseen(
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageMarkAsUnseenResponse> {
    return this._client.delete(`/v1/messages/${messageId}/unseen`, options);
  }

  /**
   * Unarchives a message
   */
  unarchive(messageId: string, options?: Core.RequestOptions): Core.APIPromise<MessageUnarchiveResponse> {
    return this._client.delete(`/v1/messages/${messageId}/unarchived`, options);
  }
}

/**
 * A paginated list of messages.
 */
export interface MessageListResponse {
  /**
   * The list of messages
   */
  entries: Array<MessageListResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: MessageListResponse.PageInfo;
}

export namespace MessageListResponse {
  /**
   * Represents a single message that was generated by a workflow for a given
   * channel.
   */
  export interface Entry {
    /**
     * The message ID
     */
    id?: string;

    __typename?: string;

    /**
     * A list of actor representations associated with the message (up to 10)
     */
    actors?: Array<string | Entry.ObjectReference>;

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
    recipient?: string | Entry.ObjectReference;

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
    source?: Entry.Source;

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

  export namespace Entry {
    /**
     * An object reference to a recipient
     */
    export interface ObjectReference {
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
    export interface ObjectReference {
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
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageArchiveResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageArchiveResponse.ObjectReference>;

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
  recipient?: string | MessageArchiveResponse.ObjectReference;

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
  source?: MessageArchiveResponse.Source;

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

export namespace MessageArchiveResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageGetResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageGetResponse.ObjectReference>;

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
  recipient?: string | MessageGetResponse.ObjectReference;

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
  source?: MessageGetResponse.Source;

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

export namespace MessageGetResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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

/**
 * A paginated list of activities
 */
export interface MessageListActivitiesResponse {
  items: Array<MessageListActivitiesResponse.Item>;

  /**
   * The information about a paginated result
   */
  page_info: MessageListActivitiesResponse.PageInfo;
}

export namespace MessageListActivitiesResponse {
  /**
   * An activity associated with a workflow run
   */
  export interface Item {
    id?: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | Item.Object | null;

    /**
     * The data associated with the activity
     */
    data?: unknown | null;

    inserted_at?: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient?: UsersAPI.User | Item.Object;

    updated_at?: string;
  }

  export namespace Item {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }

  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * A paginated list of message delivery logs
 */
export interface MessageListDeliveryLogsResponse {
  entries: Array<MessageListDeliveryLogsResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: MessageListDeliveryLogsResponse.PageInfo;
}

export namespace MessageListDeliveryLogsResponse {
  /**
   * A message delivery log
   */
  export interface Entry {
    id: string;

    __typename: string;

    environment_id: string;

    inserted_at: string;

    /**
     * A message delivery log request
     */
    request: Entry.Request;

    /**
     * A message delivery log response
     */
    response: Entry.Response;

    service_name: string;
  }

  export namespace Entry {
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
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * A paginated list of message events.
 */
export interface MessageListEventsResponse {
  /**
   * The list of message events
   */
  entries: Array<MessageListEventsResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: MessageListEventsResponse.PageInfo;
}

export namespace MessageListEventsResponse {
  /**
   * A single event that occurred for a message
   */
  export interface Entry {
    id: string;

    __typename: string;

    inserted_at: string;

    /**
     * A reference to a recipient, either a user identifier (string) or an object
     * reference (id, collection).
     */
    recipient: string | Entry.ObjectReference;

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

  export namespace Entry {
    /**
     * An object reference to a recipient
     */
    export interface ObjectReference {
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
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageMarkAsInteractedResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageMarkAsInteractedResponse.ObjectReference>;

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
  recipient?: string | MessageMarkAsInteractedResponse.ObjectReference;

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
  source?: MessageMarkAsInteractedResponse.Source;

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

export namespace MessageMarkAsInteractedResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageMarkAsReadResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageMarkAsReadResponse.ObjectReference>;

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
  recipient?: string | MessageMarkAsReadResponse.ObjectReference;

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
  source?: MessageMarkAsReadResponse.Source;

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

export namespace MessageMarkAsReadResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageMarkAsSeenResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageMarkAsSeenResponse.ObjectReference>;

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
  recipient?: string | MessageMarkAsSeenResponse.ObjectReference;

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
  source?: MessageMarkAsSeenResponse.Source;

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

export namespace MessageMarkAsSeenResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageMarkAsUnreadResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageMarkAsUnreadResponse.ObjectReference>;

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
  recipient?: string | MessageMarkAsUnreadResponse.ObjectReference;

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
  source?: MessageMarkAsUnreadResponse.Source;

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

export namespace MessageMarkAsUnreadResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageMarkAsUnseenResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageMarkAsUnseenResponse.ObjectReference>;

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
  recipient?: string | MessageMarkAsUnseenResponse.ObjectReference;

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
  source?: MessageMarkAsUnseenResponse.Source;

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

export namespace MessageMarkAsUnseenResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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
 * Represents a single message that was generated by a workflow for a given
 * channel.
 */
export interface MessageUnarchiveResponse {
  /**
   * The message ID
   */
  id?: string;

  __typename?: string;

  /**
   * A list of actor representations associated with the message (up to 10)
   */
  actors?: Array<string | MessageUnarchiveResponse.ObjectReference>;

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
  recipient?: string | MessageUnarchiveResponse.ObjectReference;

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
  source?: MessageUnarchiveResponse.Source;

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

export namespace MessageUnarchiveResponse {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
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
  export interface ObjectReference {
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

export interface MessageListParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

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
   * The page size to fetch
   */
  page_size?: number;

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

export interface MessageListActivitiesParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The page size to fetch
   */
  page_size?: number;

  /**
   * The trigger data to filter activities by
   */
  trigger_data?: string;
}

export interface MessageListDeliveryLogsParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The page size to fetch
   */
  page_size?: number;
}

export interface MessageListEventsParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The page size to fetch
   */
  page_size?: number;
}

export interface MessageMarkAsInteractedParams {
  /**
   * Metadata about the interaction
   */
  metadata?: Record<string, unknown>;
}

Messages.Batch = Batch;

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageArchiveResponse as MessageArchiveResponse,
    type MessageGetResponse as MessageGetResponse,
    type MessageGetContentResponse as MessageGetContentResponse,
    type MessageListActivitiesResponse as MessageListActivitiesResponse,
    type MessageListDeliveryLogsResponse as MessageListDeliveryLogsResponse,
    type MessageListEventsResponse as MessageListEventsResponse,
    type MessageMarkAsInteractedResponse as MessageMarkAsInteractedResponse,
    type MessageMarkAsReadResponse as MessageMarkAsReadResponse,
    type MessageMarkAsSeenResponse as MessageMarkAsSeenResponse,
    type MessageMarkAsUnreadResponse as MessageMarkAsUnreadResponse,
    type MessageMarkAsUnseenResponse as MessageMarkAsUnseenResponse,
    type MessageUnarchiveResponse as MessageUnarchiveResponse,
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
