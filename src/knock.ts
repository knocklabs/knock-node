import { SignJWT, importPKCS8 } from "jose";

import { version } from "../package.json";

import {
  BadRequestException,
  GenericServerException,
  NoApiKeyProvidedException,
  NoSigningKeyProvidedException,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from "./common/exceptions";
import {
  KnockOptions,
  PostAndPutOptions,
  SignUserTokenOptions,
  MethodOptions,
} from "./common/interfaces";
import { Users } from "./resources/users";
import { Workflows } from "./resources/workflows";
import { TriggerWorkflowProperties } from "./resources/workflows/interfaces";
import { BulkOperations } from "./resources/bulk_operations";
import { Objects } from "./resources/objects";
import { Messages } from "./resources/messages";
import { Tenants } from "./resources/tenants";
import FetchClient, { FetchResponse } from "./common/fetchClient";

const DEFAULT_HOSTNAME = "https://api.knock.app";

class Knock {
  readonly host: string;
  private readonly client: FetchClient;

  // Service accessors
  readonly users = new Users(this);
  readonly workflows = new Workflows(this);
  readonly bulkOperations = new BulkOperations(this);
  readonly objects = new Objects(this);
  readonly messages = new Messages(this);
  readonly tenants = new Tenants(this);

  constructor(readonly key?: string, readonly options: KnockOptions = {}) {
    if (!key) {
      this.key = process.env.KNOCK_API_KEY;

      if (!this.key) {
        throw new NoApiKeyProvidedException();
      }
    }

    this.host = options.host || DEFAULT_HOSTNAME;

    this.client = new FetchClient({
      baseURL: this.host,
      headers: {
        Authorization: `Bearer ${this.key}`,
        "User-Agent": `knocklabs/node@${version}`,
      },
    });
  }

  // Delegate the notify function to the workflows trigger
  async notify(
    workflowKey: string,
    properties: TriggerWorkflowProperties,
    options?: MethodOptions,
  ) {
    return this.workflows.trigger(workflowKey, properties, options);
  }

  /**
   * Generate JWT for authenticating client-side requests (e.g. in-app feeds)
   * For more information, visit https://docs.knock.app/in-app-ui/security-and-authentication#authentication-with-enhanced-security-enabled
   *
   * @param userId {string} The ID of the user that needs a token, e.g. the user viewing an in-app feed.
   * @param options Optionally specify the signing key to use (in PEM or base-64 encoded format), and how long the token should be valid for in seconds
   * @returns {Promise<string>} A JWT token that can be used to authenticate requests to the Knock API (e.g. by passing into the <KnockFeedProvider /> component)
   */
  static async signUserToken(userId: string, options?: SignUserTokenOptions) {
    const signingKey = prepareSigningKey(options?.signingKey);

    // JWT NumericDates specified in seconds:
    const currentTime = Math.floor(Date.now() / 1000);

    // Default to 1 hour from now
    const expireInSeconds = options?.expiresInSeconds ?? 60 * 60;

    // Convert string key to a Crypto-API compatible KeyLike
    const keyLike = await importPKCS8(signingKey, "RS256");

    return await new SignJWT({
      sub: userId,
      iat: currentTime,
      exp: currentTime + expireInSeconds,
    })
      .setProtectedHeader({ alg: "RS256", typ: "JWT" })
      .sign(keyLike);
  }

  async post(
    path: string,
    entity: any,
    options: PostAndPutOptions = {},
  ): Promise<FetchResponse> {
    try {
      return await this.client.post(path, {
        params: options.query,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...options.headers,
        },
        body: entity,
      });
    } catch (error) {
      this.handleErrorResponse(path, error);
      throw error;
    }
  }

  async put(
    path: string,
    entity: any,
    options: PostAndPutOptions = {},
  ): Promise<FetchResponse> {
    try {
      return await this.client.put(path, {
        params: options.query,
        body: entity,
      });
    } catch (error) {
      this.handleErrorResponse(path, error);
      throw error;
    }
  }

  async delete(path: string, entity: any = {}): Promise<FetchResponse> {
    try {
      return await this.client.delete(path, {
        params: entity,
      });
    } catch (error) {
      this.handleErrorResponse(path, error);
      throw error;
    }
  }

  async get(path: string, query?: any): Promise<FetchResponse> {
    try {
      return await this.client.get(path, {
        params: query,
      });
    } catch (error) {
      this.handleErrorResponse(path, error);
      throw error;
    }
  }

  handleErrorResponse(path: string, error: any) {
    if (error.response) {
      const { status, data, headers } = error.response;
      const requestID = headers.get("X-Request-ID");

      switch (status) {
        case 401: {
          const { message, code } = data;
          throw new UnauthorizedException(code, message, requestID);
        }
        case 400: {
          const { message, code } = data;
          throw new BadRequestException(code, message, requestID);
        }
        case 422: {
          const { errors } = data;
          throw new UnprocessableEntityException(errors, requestID);
        }
        case 404: {
          throw new NotFoundException(path, requestID);
        }
        default: {
          throw new GenericServerException(status, data.message, requestID);
        }
      }
    }
  }

  emitWarning(warning: string) {
    if (typeof process.emitWarning !== "function") {
      //  tslint:disable:no-console
      return console.warn(`Knock: ${warning}`);
    }

    return process.emitWarning(warning, "Knock");
  }
}

function prepareSigningKey(key?: string): string {
  const maybeSigningKey = key ?? process.env.KNOCK_SIGNING_KEY;
  if (!maybeSigningKey) throw new NoSigningKeyProvidedException();
  if (maybeSigningKey.startsWith("-----BEGIN")) return maybeSigningKey;
  // LS0tLS1CRUdJTi is the base64 encoded version of "-----BEGIN"
  if (maybeSigningKey.startsWith("LS0tLS1CRUdJTi"))
    return Buffer.from(maybeSigningKey, "base64").toString("utf-8");

  throw new NoSigningKeyProvidedException();
}

export { Knock };
