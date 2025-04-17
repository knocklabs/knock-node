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
   * The type name of the schema.
   */
  __typename: string;

  /**
   * Timestamp when the resource was created.
   */
  inserted_at: string;

  /**
   * A custom object entity which belongs to a collection.
   */
  object: ObjectsAPI.Object;

  /**
   * A recipient, which is either a user or an object.
   */
  recipient: RecipientsAPI.Recipient;

  /**
   * The timestamp when the resource was last updated.
   */
  updated_at: string;

  /**
   * The custom properties associated with the recipients of the subscription.
   */
  properties?: Record<string, unknown> | null;
}

export declare namespace Subscriptions {
  export { type Subscription as Subscription };
}
