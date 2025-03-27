// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ObjectsAPI from '../objects/objects';
import * as RecipientsAPI from './recipients';
import { EntriesCursor } from '../../core/pagination';

export class Subscriptions extends APIResource {}

export type SubscriptionsEntriesCursor = EntriesCursor<Subscription>;

/**
 * A subscription object
 */
export interface Subscription {
  __typename: string;

  inserted_at: string;

  /**
   * A custom-object entity which belongs to a collection.
   */
  object: ObjectsAPI.Object;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: RecipientsAPI.Recipient;

  updated_at: string;

  /**
   * The custom properties associated with the subscription
   */
  properties?: Record<string, unknown> | null;
}

export declare namespace Subscriptions {
  export { type Subscription as Subscription };
}
