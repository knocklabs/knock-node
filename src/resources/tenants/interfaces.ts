import {
  CommonMetadata,
  PaginationOptions,
  SetChannelDataProperties,
} from "../../common/interfaces";
import { SetPreferencesProperties } from "../preferences/interfaces";

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
  preference_set?: SetPreferencesProperties;
}

export interface Tenant<T = CommonMetadata> {
  id: string;
  properties: T;
  settings?: TenantSettings;
  created_at?: string;
  updated_at: string;
}

export interface SetTenantProperties {
  name?: string;
  channelData?: SetChannelDataProperties;
  settings?: TenantSettings;
  // Can have anything else
  [key: string]: any;
}

export interface ListTenantsOptions extends PaginationOptions {
  tenant_id?: string;
  name?: string;
}
