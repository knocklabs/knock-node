// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams } from './bulk';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Tenants extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * List tenants
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TenantsEntriesCursor, Tenant> {
    return this._client.getAPIList('/v1/tenants', EntriesCursor<Tenant>, { query, ...options });
  }
}

export type TenantsEntriesCursor = EntriesCursor<Tenant>;

/**
 * An inline tenant request
 */
export type InlineTenantRequest = string | TenantRequest;

/**
 * A tenant entity
 */
export interface Tenant {
  id: string;

  __typename: string;

  [k: string]: unknown;
}

/**
 * A tenant to be set in the system
 */
export interface TenantRequest {
  id: string;

  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  settings?: TenantRequest.Settings;

  [k: string]: unknown;
}

export namespace TenantRequest {
  export interface Settings {
    branding?: Settings.Branding;

    /**
     * Set preferences for a recipient
     */
    preference_set?: PreferencesAPI.PreferenceSetRequest | null;
  }

  export namespace Settings {
    export interface Branding {
      icon_url?: string | null;

      logo_url?: string | null;

      primary_color?: string | null;

      primary_color_contrast?: string | null;
    }
  }
}

export interface TenantListParams extends EntriesCursorParams {}

Tenants.Bulk = Bulk;

export declare namespace Tenants {
  export {
    type InlineTenantRequest as InlineTenantRequest,
    type Tenant as Tenant,
    type TenantRequest as TenantRequest,
    type TenantsEntriesCursor as TenantsEntriesCursor,
    type TenantListParams as TenantListParams,
  };

  export { Bulk as Bulk, type BulkDeleteParams as BulkDeleteParams };
}
