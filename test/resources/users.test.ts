import { afterAll, afterEach, beforeAll, describe, test, expect } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { Knock } from "../../src/knock";

const mockUsers = [
  {
    __typename: "User",
    created_at: null,
    id: "e8534d44-8f7f-41a9-9b81-931ca9bf4962",
    updated_at: "2023-10-18T17:19:26.286Z",
    email: "dnedry@ingen.net",
    name: "Dennis Nedry",
  },
  {
    __typename: "User",
    created_at: null,
    id: "49fc5f5a-516d-42aa-b47c-60fdab7adf99",
    updated_at: "2023-10-18T17:19:26.457Z",
    email: "jhammond@ingen.net",
    name: "John Hammond",
  },
  {
    __typename: "User",
    created_at: null,
    id: "cbcdacc5-ab59-444c-8abc-33df05b8535e",
    updated_at: "2023-10-18T17:19:26.568Z",
    email: "agrant@ingen.net",
    name: "Alan Grant",
  },
  {
    __typename: "User",
    created_at: null,
    id: "bdd33263-ad89-4ea3-98f3-3b0e80e32fa6",
    updated_at: "2023-10-18T17:19:26.678Z",
    email: "imalcolm@ingen.net",
    name: "Ian Malcolm",
  },
  {
    __typename: "User",
    created_at: null,
    id: "0a2131d6-ed83-4140-9d89-d0904e57fb4e",
    updated_at: "2023-10-18T17:19:26.785Z",
    email: "esattler@ingen.net",
    name: "Ellie Sattler",
  },
];

const restHandlers = [
  http.get("http://api.knock.test/v1/users", () => {
    return HttpResponse.json({
      entries: mockUsers,
      page_info: {
        __typename: "PageInfo",
        after: null,
        before: null,
        page_size: 50,
        total_count: mockUsers.length,
      },
    });
  }),
  http.get("http://api.knock.test/v1/users/:userId", ({ params }) => {
    const user = mockUsers.find((u) => u.id === params.userId);
    if (!user) {
      return new HttpResponse(null, {
        status: 404,
      });
    }
    return HttpResponse.json(user);
  }),
];

const server = setupServer(...restHandlers);

const knock = new Knock("sk_test_12345", {
  host: "http://api.knock.test",
});

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

describe("it can get users", () => {
  test("it can list users", async () => {
    const { entries, page_info } = await knock.users.list();
    expect(entries).toStrictEqual(mockUsers);
    expect(page_info.total_count).toBe(mockUsers.length);
  });

  test("it can get a user by id", async () => {
    const user = await knock.users.get("e8534d44-8f7f-41a9-9b81-931ca9bf4962");
    expect(user).toBeDefined();
    expect(user.id).toBe("e8534d44-8f7f-41a9-9b81-931ca9bf4962");
    expect(user.name).toBe("Dennis Nedry");
  });
});
