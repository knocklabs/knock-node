import { describe, expect, test } from "vitest";
import { Knock } from "../src/knock";

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
