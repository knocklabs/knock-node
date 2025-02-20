import { describe, expect, test } from "vitest";
import { Knock } from "../src/knock";
import { maybePrepareUserTokenGrants } from "../src/sign-user-token";
import {
  Grants,
  ObjectTokenEntity,
  TenantTokenEntity,
  UserTokenEntity,
} from "../src/common/userTokens";

describe("it can create a Knock client", () => {
  test("it sets configuration values", () => {
    const knock = new Knock("sk_test_12345", {
      host: "http://test.knock.app",
    });

    expect(knock.key).toBe("sk_test_12345");
    expect(knock.host).toBe("http://test.knock.app");
  });

  test("it defaults to reading the api key from env vars", () => {
    process.env.KNOCK_API_KEY = "sk_test_12345";
    const knock = new Knock();
    expect(knock.key).toBe("sk_test_12345");
    delete process.env.KNOCK_API_KEY;
  });

  test("it throws an error if no api key is provided", () => {
    expect(() => new Knock(undefined)).toThrowError();
  });
});

describe("it can correctly build a user token grant", () => {
  test("it can build a token grant for a user", () => {
    const entity = { type: "user", id: "user-123" } as UserTokenEntity;
    const tokenGrant = Knock.buildUserTokenGrant(entity, [
      Grants.ChannelDataRead,
    ]);

    expect(tokenGrant.entity).toBe(`https://api.knock.app/v1/users/user-123`);
    expect(tokenGrant.grants).toStrictEqual({ "channel_data/read": [] });
  });

  test("it can build a token grant for a tenant", () => {
    const entity = { type: "tenant", id: "tenant-123" } as TenantTokenEntity;
    const tokenGrant = Knock.buildUserTokenGrant(entity, [
      Grants.ChannelDataRead,
    ]);

    expect(tokenGrant.entity).toBe(
      `https://api.knock.app/v1/objects/$tenants/tenant-123`,
    );
    expect(tokenGrant.grants).toStrictEqual({ "channel_data/read": [] });
  });

  test("it can build a token grant for a tenant", () => {
    const entity = {
      type: "object",
      id: "project-123",
      collection: "projects",
    } as ObjectTokenEntity;

    const tokenGrant = Knock.buildUserTokenGrant(entity, [
      Grants.ChannelDataRead,
    ]);

    expect(tokenGrant.entity).toBe(
      `https://api.knock.app/v1/objects/projects/project-123`,
    );
    expect(tokenGrant.grants).toStrictEqual({ "channel_data/read": [] });
  });
});

describe("preparing token grants", () => {
  test("it will correctly handle undefined grants", () => {
    expect(maybePrepareUserTokenGrants(undefined)).toBe(undefined);
  });

  test("it will build an object of token grants", () => {
    const grants = [
      Knock.buildUserTokenGrant({ type: "user", id: "user-1" }, [
        Grants.ChannelDataRead,
      ]),
      Knock.buildUserTokenGrant({ type: "user", id: "user-2" }, [
        Grants.ChannelDataWrite,
      ]),
    ];

    const result = maybePrepareUserTokenGrants(grants);

    expect(result).toStrictEqual({
      "https://api.knock.app/v1/users/user-1": {
        "channel_data/read": [],
      },
      "https://api.knock.app/v1/users/user-2": {
        "channel_data/write": [],
      },
    });
  });

  test("it will work with duplicate entities", () => {
    const grants = [
      Knock.buildUserTokenGrant({ type: "user", id: "user-1" }, [
        Grants.ChannelDataRead,
      ]),
      Knock.buildUserTokenGrant({ type: "user", id: "user-1" }, [
        Grants.ChannelDataWrite,
      ]),
    ];

    const result = maybePrepareUserTokenGrants(grants);

    expect(result).toStrictEqual({
      "https://api.knock.app/v1/users/user-1": {
        "channel_data/read": [],
        "channel_data/write": [],
      },
    });
  });
});
