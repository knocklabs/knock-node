import axios, { AxiosResponse, AxiosInstance } from "axios";
import { version } from "../package.json";

import {
  BadRequestException,
  GenericServerException,
  NoApiKeyProvidedException,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from "./common/exceptions";
import { KnockOptions, PostAndPutOptions } from "./common/interfaces";
import { Users } from "./resources/users";
import { Preferences } from "./resources/preferences";
import { Workflows } from "./resources/workflows";
import { TriggerWorkflowProperties } from "./resources/workflows/interfaces";
import { BulkOperations } from "./resources/bulk_operations";
import { Objects } from "./resources/objects";

const DEFAULT_HOSTNAME = "https://api.knock.app";

class Knock {
  readonly host: string;
  private readonly client: AxiosInstance;

  // Service accessors
  readonly users = new Users(this);
  readonly preferences = new Preferences(this);
  readonly workflows = new Workflows(this);
  readonly bulkOperations = new BulkOperations(this);
  readonly objects = new Objects(this);

  constructor(readonly key?: string, readonly options: KnockOptions = {}) {
    if (!key) {
      this.key = process.env.KNOCK_API_KEY;

      if (!this.key) {
        throw new NoApiKeyProvidedException();
      }
    }

    this.host = options.host || DEFAULT_HOSTNAME;

    this.client = axios.create({
      baseURL: this.host,
      headers: {
        Authorization: `Bearer ${this.key}`,
        "User-Agent": `knocklabs/node@${version}`,
      },
    });
  }

  // Delegate the notify function to the workflows trigger
  async notify(workflowKey: string, properties: TriggerWorkflowProperties) {
    return this.workflows.trigger(workflowKey, properties);
  }

  async post(
    path: string,
    entity: any,
    options: PostAndPutOptions = {},
  ): Promise<AxiosResponse> {
    try {
      return await this.client.post(path, entity, {
        params: options.query,
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
  ): Promise<AxiosResponse> {
    try {
      return await this.client.put(path, entity, {
        params: options.query,
      });
    } catch (error) {
      this.handleErrorResponse(path, error);
      throw error;
    }
  }

  async delete(path: string, entity: any = {}): Promise<AxiosResponse> {
    try {
      return await this.client.delete(path, {
        params: entity,
      });
    } catch (error) {
      this.handleErrorResponse(path, error);
      throw error;
    }
  }

  async get(path: string, query?: any): Promise<AxiosResponse> {
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
    if (axios.isAxiosError(error) && error.response) {
      const { status, data, headers } = error.response;
      const requestID = headers["X-Request-ID"];

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

export { Knock };
