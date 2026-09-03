// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * A message sent to a single recipient on a channel.
 */
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
   * const messageContents =
   *   await client.messages.batch.getContent({
   *     message_ids: ['string'],
   *   });
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
 * Request to update the status of multiple messages in batch.
 */
export interface BatchMessagesStatusRequest {
  /**
   * The message IDs to update the status of.
   */
  message_ids: Array<string>;
}

/**
 * The list of messages that were updated.
 */
export type BatchArchiveResponse = Array<MessagesAPI.Message>;

/**
 * A list of `MessageContents`
 */
export type BatchGetContentResponse = Array<MessagesAPI.MessageContents>;

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
  metadata?: { [key: string]: unknown } | null;
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
    type BatchMessagesStatusRequest as BatchMessagesStatusRequest,
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
