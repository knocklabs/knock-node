// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkOperationsAPI from '../bulk-operations';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as RecipientsAPI from '../recipients/recipients';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Bulk deletes objects from the specified collection.
   *
   * @example
   * ```ts
   * const bulkOperation = await client.objects.bulk.delete(
   *   'collection',
   *   { object_ids: ['obj_123', 'obj_456', 'obj_789'] },
   * );
   * ```
   */
  delete(
    collection: string,
    body: BulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/delete`, { body, ...options });
  }

  /**
   * Add subscriptions for all objects in a single collection. If a subscription for
   * an object in the collection already exists, it will be updated. This endpoint
   * also handles
   * [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients)
   * for the `recipient` field.
   *
   * @example
   * ```ts
   * const bulkOperation =
   *   await client.objects.bulk.addSubscriptions('projects', {
   *     subscriptions: [
   *       {
   *         id: 'project-1',
   *         properties: null,
   *         recipients: [{ id: 'user_1' }],
   *       },
   *     ],
   *   });
   * ```
   */
  addSubscriptions(
    collection: string,
    body: BulkAddSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/subscriptions/add`, { body, ...options });
  }

  /**
   * Bulk sets up to 1,000 objects at a time in the specified collection.
   *
   * @example
   * ```ts
   * const bulkOperation = await client.objects.bulk.set(
   *   'collection',
   *   {
   *     objects: [
   *       {
   *         id: 'project_1',
   *         name: {
   *           '0': 'M',
   *           '1': 'y',
   *           '2': ' ',
   *           '3': 'p',
   *           '4': 'r',
   *           '5': 'o',
   *           '6': 'j',
   *           '7': 'e',
   *           '8': 'c',
   *           '9': 't',
   *         },
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  set(
    collection: string,
    body: BulkSetParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationsAPI.BulkOperation> {
    return this._client.post(path`/v1/objects/${collection}/bulk/set`, { body, ...options });
  }
}

export interface BulkDeleteParams {
  /**
   * List of object IDs to delete.
   */
  object_ids: Array<string>;
}

export interface BulkAddSubscriptionsParams {
  /**
   * A list of subscriptions.
   */
  subscriptions: Array<BulkAddSubscriptionsParams.Subscription>;
}

export namespace BulkAddSubscriptionsParams {
  export interface Subscription {
    /**
     * The recipients of the subscription. You can subscribe up to 100 recipients to an
     * object at a time.
     */
    recipients: Array<RecipientsAPI.RecipientRequest>;

    /**
     * The custom properties associated with the subscription relationship.
     */
    properties?: { [key: string]: unknown } | null;
  }
}

export interface BulkSetParams {
  /**
   * A list of objects.
   */
  objects: Array<BulkSetParams.Object>;
}

export namespace BulkSetParams {
  /**
   * A custom [Object](/concepts/objects) entity which belongs to a collection.
   */
  export interface Object {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * A request to set channel data for a type of channel inline.
     */
    channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

    /**
     * Timestamp when the resource was created.
     */
    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set id.
     * Preferences that are set inline will be merged into any existing preferences
     * rather than replacing them.
     */
    preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

    [k: string]: unknown;
  }
}

export declare namespace Bulk {
  export {
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}
