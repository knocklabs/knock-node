import {
  CommonMetadata,
  PaginatedEntriesResponse,
} from "../../common/interfaces";
import { Knock } from "../../knock";
import { Tenant, ListTenantsOptions, SetTenantProperties } from "./interfaces";

export class Tenants {
  constructor(readonly knock: Knock) {}

  async list(
    filteringOptions: ListTenantsOptions = {},
  ): Promise<PaginatedEntriesResponse<Tenant>> {
    const { data } = await this.knock.get("/v1/tenants", filteringOptions);

    return data;
  }

  async get<T = CommonMetadata>(id: string): Promise<Tenant<T>> {
    const { data } = await this.knock.get(`/v1/tenants/${id}`);
    return data;
  }

  async set<T = CommonMetadata>(
    id: string,
    tenantData: SetTenantProperties,
  ): Promise<Tenant<T>> {
    const { data } = await this.knock.put(`/v1/tenants/${id}`, tenantData);
    return data;
  }

  async delete(id: string): Promise<null> {
    const { data } = await this.knock.delete(`/v1/tenants/${id}`);
    return data;
  }
}
