// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams, BulkSetParams } from './bulk';
import { APIPromise } from '../../api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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

  /**
   * Delete a tenant
   */
  delete(tenantID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/tenants/${tenantID}`, options);
  }

  /**
   * Get a tenant
   */
  get(tenantID: string, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.get(path`/v1/tenants/${tenantID}`, options);
  }

  /**
   * Set a tenant
   */
  set(tenantID: string, body: TenantSetParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.put(path`/v1/tenants/${tenantID}`, { body, ...options });
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

/**
 * An empty response
 */
export type TenantDeleteResponse = string;

export interface TenantListParams extends EntriesCursorParams {}

export interface TenantSetParams {
  /**
   * Allows inline setting channel data for a recipient
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  settings?: TenantSetParams.Settings;
}

export namespace TenantSetParams {
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

Tenants.Bulk = Bulk;

export declare namespace Tenants {
  export {
    type InlineTenantRequest as InlineTenantRequest,
    type Tenant as Tenant,
    type TenantRequest as TenantRequest,
    type TenantDeleteResponse as TenantDeleteResponse,
    type TenantsEntriesCursor as TenantsEntriesCursor,
    type TenantListParams as TenantListParams,
    type TenantSetParams as TenantSetParams,
  };

  export { Bulk as Bulk, type BulkDeleteParams as BulkDeleteParams, type BulkSetParams as BulkSetParams };
}
