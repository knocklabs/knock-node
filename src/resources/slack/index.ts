import { Knock } from "../../knock";
import {
  AuthCheckInput,
  GetSlackChannelsInput,
  PaginatedSlackChannelResponse,
  RevokeAccessTokenInput,
} from "./interfaces";

const TENANT_COLLECTION = "$tenants";

function removeNullKeys<T extends object>(obj: T): Partial<T> {
  Object.keys(obj).forEach((key) => {
    if (obj[key as keyof T] === null) {
      delete obj[key as keyof T];
    }
  });
  return obj;
}

export class Slack {
  constructor(readonly knock: Knock) {}

  async getChannels(
    input: GetSlackChannelsInput,
  ): Promise<PaginatedSlackChannelResponse> {
    const { knockChannelId, tenant } = input;
    const queryOptions = input.queryOptions || {};

    const params = {
      access_token_object: {
        object_id: tenant,
        collection: TENANT_COLLECTION,
      },
      channel_id: knockChannelId,
      query_options: removeNullKeys({
        cursor: queryOptions.cursor || null,
        limit: queryOptions.limit || null,
        exclude_archived: queryOptions.excludeArchived || null,
        team_id: queryOptions.teamId || null,
        types: queryOptions.types || null,
      }),
    };

    const { data } = await this.knock.get(
      `/v1/providers/slack/${knockChannelId}/channels`,
      params,
    );

    return data;
  }

  async authCheck({ tenant, knockChannelId }: AuthCheckInput) {
    const params = {
      access_token_object: {
        object_id: tenant,
        collection: TENANT_COLLECTION,
      },
      channel_id: knockChannelId,
    };

    const { data } = await this.knock.get(
      `/v1/providers/slack/${knockChannelId}/auth_check`,
      params,
    );

    return data;
  }

  async revokeAccessToken({ tenant, knockChannelId }: RevokeAccessTokenInput) {
    const params = {
      access_token_object: {
        object_id: tenant,
        collection: TENANT_COLLECTION,
      },
      channel_id: knockChannelId,
    };

    const { data } = await this.knock.get(
      `/v1/providers/slack/${knockChannelId}/revoke_access`,
      params,
    );

    return data;
  }
}
