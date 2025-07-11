// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ObjectsAPI from '../objects/objects';
import * as RecipientsAPI from './recipients';
import { EntriesCursor } from '../../core/pagination';

export class Subscriptions extends APIResource {}

export type SubscriptionsEntriesCursor = EntriesCursor<Subscription>;

/**
 * A subscription object.
 */
export interface Subscription {
  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at: string;

  /**
   * A custom [Object](/concepts/objects) entity which belongs to a collection.
   */
  object: ObjectsAPI.Object;

  /**
   * A recipient of a notification, which is either a user or an object.
   */
  recipient: RecipientsAPI.Recipient;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * The custom properties associated with the subscription relationship.
   */
  properties?: { [key: string]: unknown } | null;
}

export declare namespace Subscriptions {
  export { type Subscription as Subscription };
}
