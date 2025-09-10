// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Guides extends APIResource {
  /**
   * Returns a list of eligible in-app guides for a specific user and channel.
   *
   * @example
   * ```ts
   * const response = await client.users.guides.getChannel(
   *   'user_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getChannel(
    userID: string,
    channelID: string,
    query: GuideGetChannelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GuideGetChannelResponse> {
    return this._client.get(path`/v1/users/${userID}/guides/${channelID}`, { query, ...options });
  }

  /**
   * Records that a guide has been archived by a user, triggering any associated
   * archived events.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.guides.markMessageAsArchived(
   *     'user_id',
   *     'message_id',
   *     {
   *       channel_id: '123e4567-e89b-12d3-a456-426614174000',
   *       guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
   *       guide_key: 'tour_notification',
   *       guide_step_ref: 'lab_tours',
   *     },
   *   );
   * ```
   */
  markMessageAsArchived(
    userID: string,
    messageID: string,
    body: GuideMarkMessageAsArchivedParams,
    options?: RequestOptions,
  ): APIPromise<GuideMarkMessageAsArchivedResponse> {
    return this._client.put(path`/v1/users/${userID}/guides/messages/${messageID}/archived`, {
      body,
      ...options,
    });
  }

  /**
   * Records that a user has interacted with a guide, triggering any associated
   * interacted events.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.guides.markMessageAsInteracted(
   *     'user_id',
   *     'message_id',
   *     {
   *       channel_id: '123e4567-e89b-12d3-a456-426614174000',
   *       guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
   *       guide_key: 'tour_notification',
   *       guide_step_ref: 'lab_tours',
   *     },
   *   );
   * ```
   */
  markMessageAsInteracted(
    userID: string,
    messageID: string,
    body: GuideMarkMessageAsInteractedParams,
    options?: RequestOptions,
  ): APIPromise<GuideMarkMessageAsInteractedResponse> {
    return this._client.put(path`/v1/users/${userID}/guides/messages/${messageID}/interacted`, {
      body,
      ...options,
    });
  }

  /**
   * Records that a guide has been seen by a user, triggering any associated seen
   * events.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.guides.markMessageAsSeen(
   *     'user_id',
   *     'message_id',
   *     {
   *       channel_id: '123e4567-e89b-12d3-a456-426614174000',
   *       guide_id: '7e9dc78c-b3b1-4127-a54e-71f1899b831a',
   *       guide_key: 'tour_notification',
   *       guide_step_ref: 'lab_tours',
   *       content: {
   *         body: "Limited spots available for today's behind-the-scenes DNA extraction demonstration.",
   *         title: 'DNA Lab Tour Available',
   *       },
   *       data: {
   *         next_time: '14:30',
   *         spots_left: 8,
   *         tour_id: 'dna_lab_tour',
   *       },
   *       metadata: {
   *         cta: 'Reserve Spot',
   *         theme: 'amber',
   *         type: 'banner',
   *       },
   *       tenant: 'ingen_isla_nublar',
   *     },
   *   );
   * ```
   */
  markMessageAsSeen(
    userID: string,
    messageID: string,
    body: GuideMarkMessageAsSeenParams,
    options?: RequestOptions,
  ): APIPromise<GuideMarkMessageAsSeenResponse> {
    return this._client.put(path`/v1/users/${userID}/guides/messages/${messageID}/seen`, {
      body,
      ...options,
    });
  }
}

/**
 * A response for a list of guides.
 */
export interface GuideGetChannelResponse {
  /**
   * A list of guides.
   */
  guides: Array<GuideGetChannelResponse.Guide>;

  /**
   * The recipient of the guide.
   */
  recipient?: GuideGetChannelResponse.Recipient | null;
}

export namespace GuideGetChannelResponse {
  export interface Guide {
    /**
     * The unique identifier for the guide.
     */
    id?: string;

    /**
     * Whether the guide is active.
     */
    active?: boolean;

    /**
     * The content of the guide.
     */
    content?: string;

    /**
     * The metadata of the guide.
     */
    metadata?: { [key: string]: unknown };

    /**
     * The title of the guide.
     */
    title?: string;
  }

  /**
   * The recipient of the guide.
   */
  export interface Recipient {
    /**
     * Unique identifier for the recipient.
     */
    id?: string;
  }
}

/**
 * A response for a guide action.
 */
export interface GuideMarkMessageAsArchivedResponse {
  /**
   * The status of a guide's action.
   */
  status: string;
}

/**
 * A response for a guide action.
 */
export interface GuideMarkMessageAsInteractedResponse {
  /**
   * The status of a guide's action.
   */
  status: string;
}

/**
 * A response for a guide action.
 */
export interface GuideMarkMessageAsSeenResponse {
  /**
   * The status of a guide's action.
   */
  status: string;
}

export interface GuideGetChannelParams {
  /**
   * The data (JSON encoded object) to use for targeting and rendering guides.
   */
  data?: string;

  /**
   * The tenant ID to use for targeting and rendering guides.
   */
  tenant?: string;

  /**
   * The type of guides to filter by.
   */
  type?: string;
}

export interface GuideMarkMessageAsArchivedParams {
  /**
   * The unique identifier for the channel.
   */
  channel_id: string;

  /**
   * The unique identifier for the guide.
   */
  guide_id: string;

  /**
   * The key of the guide.
   */
  guide_key: string;

  /**
   * The step reference of the guide.
   */
  guide_step_ref: string;

  /**
   * The content of the guide.
   */
  content?: { [key: string]: unknown };

  /**
   * The data of the guide.
   */
  data?: { [key: string]: unknown };

  /**
   * Whether the guide is final.
   */
  is_final?: boolean;

  /**
   * The metadata of the guide.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The tenant ID of the guide.
   */
  tenant?: string | null;
}

export interface GuideMarkMessageAsInteractedParams {
  /**
   * The unique identifier for the channel.
   */
  channel_id: string;

  /**
   * The unique identifier for the guide.
   */
  guide_id: string;

  /**
   * The key of the guide.
   */
  guide_key: string;

  /**
   * The step reference of the guide.
   */
  guide_step_ref: string;

  /**
   * The content of the guide.
   */
  content?: { [key: string]: unknown };

  /**
   * The data of the guide.
   */
  data?: { [key: string]: unknown };

  /**
   * Whether the guide is final.
   */
  is_final?: boolean;

  /**
   * The metadata of the guide.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The tenant ID of the guide.
   */
  tenant?: string | null;
}

export interface GuideMarkMessageAsSeenParams {
  /**
   * The unique identifier for the channel.
   */
  channel_id: string;

  /**
   * The unique identifier for the guide.
   */
  guide_id: string;

  /**
   * The key of the guide.
   */
  guide_key: string;

  /**
   * The step reference of the guide.
   */
  guide_step_ref: string;

  /**
   * The content of the guide.
   */
  content?: { [key: string]: unknown };

  /**
   * The data of the guide.
   */
  data?: { [key: string]: unknown };

  /**
   * Whether the guide is final.
   */
  is_final?: boolean;

  /**
   * The metadata of the guide.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The tenant ID of the guide.
   */
  tenant?: string | null;
}

export declare namespace Guides {
  export {
    type GuideGetChannelResponse as GuideGetChannelResponse,
    type GuideMarkMessageAsArchivedResponse as GuideMarkMessageAsArchivedResponse,
    type GuideMarkMessageAsInteractedResponse as GuideMarkMessageAsInteractedResponse,
    type GuideMarkMessageAsSeenResponse as GuideMarkMessageAsSeenResponse,
    type GuideGetChannelParams as GuideGetChannelParams,
    type GuideMarkMessageAsArchivedParams as GuideMarkMessageAsArchivedParams,
    type GuideMarkMessageAsInteractedParams as GuideMarkMessageAsInteractedParams,
    type GuideMarkMessageAsSeenParams as GuideMarkMessageAsSeenParams,
  };
}
