// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BulkAPI from './bulk';
import { Bulk, BulkUpdateMessageStatusParams } from './bulk';

export class Channels extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);
}

Channels.Bulk = Bulk;

export declare namespace Channels {
  export { Bulk as Bulk, type BulkUpdateMessageStatusParams as BulkUpdateMessageStatusParams };
}
