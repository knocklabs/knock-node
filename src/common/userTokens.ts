export enum Grants {
  SlackChannelsRead = "slack/channels_read",
  ChannelDataRead = "channel_data/read",
  ChannelDataWrite = "channel_data/write",
}

export type TokenGrantOptions = Grants[];

export type TokenEntity =
  | TenantTokenEntity
  | UserTokenEntity
  | ObjectTokenEntity;

export interface TenantTokenEntity {
  type: "tenant";
  id: string;
  collection?: never;
}

export interface ObjectTokenEntity {
  type: "object";
  id: string;
  collection: string;
}

export interface UserTokenEntity {
  type: "user";
  id: string;
  collection?: never;
}

export type TokenGrant = {
  entity: string;
  grants: Partial<Record<Grants, []>>;
};
