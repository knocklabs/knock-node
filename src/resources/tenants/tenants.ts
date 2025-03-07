// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { TenantsEntriesCursor } from '../shared';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams, BulkDeleteResponse, BulkSetParams, BulkSetResponse } from './bulk';
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
  ): PagePromise<TenantsEntriesCursor, Shared.Tenant> {
    return this._client.getAPIList('/v1/tenants', EntriesCursor<Shared.Tenant>, { query, ...options });
  }

  /**
   * Delete a tenant
   */
  delete(id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/v1/tenants/${id}`, options);
  }

  /**
   * Get a tenant
   */
  get(id: string, options?: RequestOptions): APIPromise<Shared.Tenant> {
    return this._client.get(path`/v1/tenants/${id}`, options);
  }

  /**
   * Set a tenant
   */
  set(id: string, body: TenantSetParams, options?: RequestOptions): APIPromise<Shared.Tenant> {
    return this._client.put(path`/v1/tenants/${id}`, { body, ...options });
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
  channel_data?: Shared.InlineChannelDataRequest | null;

  /**
   * Inline set preferences for a recipient, where the key is the preference set name
   */
  preferences?: Shared.InlinePreferenceSetRequest | null;

  settings?: TenantSetParams.Settings;
}

export namespace TenantSetParams {
  export interface Settings {
    branding?: Settings.Branding;

    /**
     * Set preferences for a recipient
     */
    preference_set?: Shared.PreferenceSetRequest | null;
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
    type TenantDeleteResponse as TenantDeleteResponse,
    type TenantListParams as TenantListParams,
    type TenantSetParams as TenantSetParams,
  };

  export {
    Bulk as Bulk,
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkSetResponse as BulkSetResponse,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkSetParams as BulkSetParams,
  };
}

export { type TenantsEntriesCursor };
