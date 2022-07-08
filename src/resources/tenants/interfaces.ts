import { CommonMetadata, PaginationOptions } from "../../common/interfaces";

export interface TenantRef {
  id: string;
}

export interface TenantBrandingSettings {
  primary_color?: string;
  primary_color_contrast?: string;
  logo_url?: string;
  icon_url?: string;
}

export interface TenantSettings {
  branding?: TenantBrandingSettings;
}

export interface Tenant<T = CommonMetadata> {
  id: string;
  properties: T;
  settings?: TenantSettings;
  created_at?: string;
  updated_at: string;
}

export interface SetTenant {
  name?: string;
  settings?: TenantSettings;
}

export interface ListTenantsOptions extends PaginationOptions {
  tenant_id?: string;
  name?: string;
}
