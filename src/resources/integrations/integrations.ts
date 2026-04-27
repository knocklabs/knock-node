// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CensusAPI from './census';
import { Census, CensusCustomDestinationParams, CensusCustomDestinationResponse } from './census';
import * as HightouchAPI from './hightouch';
import {
  Hightouch,
  HightouchEmbeddedDestinationParams,
  HightouchEmbeddedDestinationResponse,
} from './hightouch';

export class Integrations extends APIResource {
  census: CensusAPI.Census = new CensusAPI.Census(this._client);
  hightouch: HightouchAPI.Hightouch = new HightouchAPI.Hightouch(this._client);
}

Integrations.Census = Census;
Integrations.Hightouch = Hightouch;

export declare namespace Integrations {
  export {
    Census as Census,
    type CensusCustomDestinationResponse as CensusCustomDestinationResponse,
    type CensusCustomDestinationParams as CensusCustomDestinationParams,
  };

  export {
    Hightouch as Hightouch,
    type HightouchEmbeddedDestinationResponse as HightouchEmbeddedDestinationResponse,
    type HightouchEmbeddedDestinationParams as HightouchEmbeddedDestinationParams,
  };
}
