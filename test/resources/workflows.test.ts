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
});
