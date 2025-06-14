// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Knock } from '../client';

export abstract class APIResource {
  protected _client: Knock;

  constructor(client: Knock) {
    this._client = client;
  }
}
