// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChannelDataAPI from '../recipients/channel-data';
import * as PreferencesAPI from '../recipients/preferences';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams, BulkSetParams } from './bulk';
import { APIPromise } from '../../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tenants extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * List tenants for the current environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tenant of client.tenants.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TenantsEntriesCursor, Tenant> {
    return this._client.getAPIList('/v1/tenants', EntriesCursor<Tenant>, { query, ...options });
  }

  /**
   * Delete a tenant and all associated data. This operation cannot be undone.
   *
   * @example
   * ```ts
   * await client.tenants.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/tenants/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a tenant by ID.
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.get(path`/v1/tenants/${id}`, options);
  }

  /**
   * Sets a tenant within an environment, performing an upsert operation. Any
   * existing properties will be merged with the incoming properties.
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.set('id', {
   *   settings: {
   *     branding: {
   *       icon_url:
   *         'https://example.com/trex_silhouette_icon.png',
   *       logo_url: 'https://example.com/amber_fossil_logo.png',
   *       primary_color: '#DF1A22',
   *       primary_color_contrast: '#FFDE00',
   *     },
   *   },
   * });
   * ```
   */
  set(id: string, body: TenantSetParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.put(path`/v1/tenants/${id}`, { body, ...options });
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

  /**
   * An optional name for the tenant.
   */
  name?: string | null;

  /**
   * The settings for the tenant. Includes branding and preference set.
   */
  settings?: Tenant.Settings | null;

  [k: string]: unknown;
}

export namespace Tenant {
  /**
   * The settings for the tenant. Includes branding and preference set.
   */
  export interface Settings {
    /**
     * The branding for the tenant.
     */
    branding?: Settings.Branding | null;

    /**
     * A preference set represents a specific set of notification preferences for a
     * recipient. A recipient can have multiple preference sets.
     */
    preference_set?: PreferencesAPI.PreferenceSet | null;
  }

  export namespace Settings {
    /**
     * The branding for the tenant.
     */
    export interface Branding {
      /**
       * The icon URL for the tenant. Must point to a valid image with an image MIME
       * type.
       */
      icon_url?: string | null;

      /**
       * The logo URL for the tenant. Must point to a valid image with an image MIME
       * type.
       */
      logo_url?: string | null;

      /**
       * The primary color for the tenant, provided as a hex value.
       */
      primary_color?: string | null;

      /**
       * The primary color contrast for the tenant, provided as a hex value.
       */
      primary_color_contrast?: string | null;
    }
  }
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
   * Inline set preferences for a recipient, where the key is the preference set id.
   * Preferences that are set inline will be merged into any existing preferences
   * rather than replacing them.
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
       * The icon URL for the tenant. Must point to a valid image with an image MIME
       * type.
       */
      icon_url?: string | null;

      /**
       * The logo URL for the tenant. Must point to a valid image with an image MIME
       * type.
       */
      logo_url?: string | null;

      /**
       * The primary color for the tenant, provided as a hex value.
       */
      primary_color?: string | null;

      /**
       * The primary color contrast for the tenant, provided as a hex value.
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

export interface TenantSetParams {
  /**
   * A request to set channel data for a type of channel inline.
   */
  channel_data?: ChannelDataAPI.InlineChannelDataRequest | null;

  /**
   * The settings for the tenant. Includes branding and preference set.
   */
  settings?: TenantSetParams.Settings;

  [k: string]: unknown;
}

export namespace TenantSetParams {
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
       * The icon URL for the tenant. Must point to a valid image with an image MIME
       * type.
       */
      icon_url?: string | null;

      /**
       * The logo URL for the tenant. Must point to a valid image with an image MIME
       * type.
       */
      logo_url?: string | null;

      /**
       * The primary color for the tenant, provided as a hex value.
       */
      primary_color?: string | null;

      /**
       * The primary color contrast for the tenant, provided as a hex value.
       */
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
    type TenantsEntriesCursor as TenantsEntriesCursor,
    type TenantListParams as TenantListParams,
    type TenantSetParams as TenantSetParams,
  };

  export { Bulk as Bulk, type BulkDeleteParams as BulkDeleteParams, type BulkSetParams as BulkSetParams };
}
