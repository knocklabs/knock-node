// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams, BulkSetParams } from './bulk';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Tenants extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * List tenants for the current environment.
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
 * An request to set a tenant inline.
 */
export type InlineTenantRequest = string | TenantRequest;

/**
 * A tenant entity.
 */
export interface Tenant {
  /**
   * The unique identifier for the tenant.
   */
  id: string;

  /**
   * The typename of the schema.
   */
  __typename: string;

  [k: string]: unknown;
}

/**
 * A tenant to be set in the system. You can supply any additional properties on
 * the tenant object.
 */
export interface TenantRequest {
  /**
   * The unique identifier for the tenant.
   */
  id: string;

  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: PreferencesAPI.InlinePreferenceSetRequest | null;

  /**
   * The settings for the tenant. Includes branding and preference set.
   */
  settings?: TenantRequest.Settings;

  [k: string]: unknown;
}

export namespace TenantRequest {
  /**
   * The settings for the tenant. Includes branding and preference set.
   */
  export interface Settings {
    /**
     * The branding for the tenant.
     */
    branding?: Settings.Branding;

    /**
     * A request to set a preference set for a recipient.
     */
    preference_set?: PreferencesAPI.PreferenceSetRequest | null;
  }

  export namespace Settings {
    /**
     * The branding for the tenant.
     */
    export interface Branding {
      /**
       * The icon URL for the tenant.
       */
      icon_url?: string | null;

      /**
       * The logo URL for the tenant.
       */
      logo_url?: string | null;

      /**
       * The primary color for the tenant.
       */
      primary_color?: string | null;

      /**
       * The primary color contrast for the tenant.
       */
      primary_color_contrast?: string | null;
    }
  }
}

export interface TenantListParams extends EntriesCursorParams {
  /**
   * Filter tenants by name.
   */
  name?: string;

  /**
   * Filter tenants by ID.
   */
  tenant_id?: string;
}

Tenants.Bulk = Bulk;

export declare namespace Tenants {
  export {
    type InlineTenantRequest as InlineTenantRequest,
    type Tenant as Tenant,
    type TenantRequest as TenantRequest,
    type TenantsEntriesCursor as TenantsEntriesCursor,
    type TenantListParams as TenantListParams,
  };

  export { Bulk as Bulk, type BulkDeleteParams as BulkDeleteParams, type BulkSetParams as BulkSetParams };
}
