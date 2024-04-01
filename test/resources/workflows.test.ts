import { afterAll, afterEach, beforeAll, describe, test, expect } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { Knock } from "../../src/knock";
import { ListSchedulesProps } from "../../src/resources/workflows/interfaces";

const restHandlers = [
  http.get("http://api.knock.test/v1/schedules", () => {
    return HttpResponse.json({
      entries: [],
      page_info: {
        __typename: "PageInfo",
        after: null,
        before: null,
        page_size: 50,
        total_count: 0,
      },
    });
  }),
  http.get("http://api.knock.test/v1/users/:userID/schedules", () => {
    return HttpResponse.json({
      entries: [],
      page_info: {
        __typename: "PageInfo",
        after: null,
        before: null,
        page_size: 50,
        total_count: 0,
      },
    });
  }),
];

const server = setupServer(...restHandlers);

const knock = new Knock("sk_test_12345", {
  host: "http://api.knock.test",
});

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

describe("schedules", () => {
  test("it can list schedules", async () => {
    const params: ListSchedulesProps = {
      recipients: ["1", "2", "3"],
    };
    const { url } = await knock.get("/v1/schedules", {
      ...params,
      workflow: "test-workflow",
    });

    // Formats recipients list as a URL-encoded array
    // 'http://api.knock.test/v1/schedules?recipients[]=1&recipients[]=2&recipients[]=3&workflow=test-workflow'
    expect(url).toBe(
      "http://api.knock.test/v1/schedules?recipients%5B%5D=1&recipients%5B%5D=2&recipients%5B%5D=3&workflow=test-workflow",
    );
  });

  test("it can list schedules for a given user", async () => {
    const params: ListSchedulesProps = {
      recipients: [
        "user_id",
        { collection: "object_collection", id: "object_id" },
      ],
    };
    const { url } = await knock.get("/v1/users/user_id/schedules", {
      ...params,
    });

    // Formats recipients list as a URL-encoded array
    // 'http://api.knock.test/v1/users/user_id/schedules?recipients[0]=user_id&recipients[1][collection]=object_collection&recipients[1][id]=object_id'
    expect(url).toBe(
      "http://api.knock.test/v1/users/user_id/schedules?recipients%5B0%5D=user_id&recipients%5B1%5D%5Bcollection%5D=object_collection&recipients%5B1%5D%5Bid%5D=object_id",
    );
  });
});
