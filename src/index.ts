// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AudienceAddMembersParams,
  AudienceAddMembersResponse,
  AudienceListMembersResponse,
  AudienceRemoveMembersParams,
  AudienceRemoveMembersResponse,
  Audiences,
} from './resources/audiences';
import { BulkOperationGetResponse, BulkOperations } from './resources/bulk-operations';
import {
  ScheduleCreateParams,
  ScheduleCreateResponse,
  ScheduleDeleteParams,
  ScheduleDeleteResponse,
  ScheduleListParams,
  ScheduleListResponse,
  ScheduleUpdateParams,
  ScheduleUpdateResponse,
  Schedules,
} from './resources/schedules';
import {
  WorkflowCancelParams,
  WorkflowCancelResponse,
  WorkflowTriggerParams,
  WorkflowTriggerResponse,
  Workflows,
} from './resources/workflows';
import { Channels } from './resources/channels/channels';
import {
  MessageArchiveResponse,
  MessageGetContentResponse,
  MessageGetResponse,
  MessageListActivitiesParams,
  MessageListActivitiesResponse,
  MessageListDeliveryLogsParams,
  MessageListDeliveryLogsResponse,
  MessageListEventsParams,
  MessageListEventsResponse,
  MessageListParams,
  MessageListResponse,
  MessageMarkAsInteractedParams,
  MessageMarkAsInteractedResponse,
  MessageMarkAsReadResponse,
  MessageMarkAsSeenResponse,
  MessageMarkAsUnreadResponse,
  MessageMarkAsUnseenResponse,
  MessageUnarchiveResponse,
  Messages,
} from './resources/messages/messages';
import {
  ObjectAddSubscriptionsParams,
  ObjectAddSubscriptionsResponse,
  ObjectDeleteResponse,
  ObjectDeleteSubscriptionsParams,
  ObjectDeleteSubscriptionsResponse,
  ObjectGetChannelDataResponse,
  ObjectGetPreferencesParams,
  ObjectGetPreferencesResponse,
  ObjectGetResponse,
  ObjectListMessagesParams,
  ObjectListMessagesResponse,
  ObjectListParams,
  ObjectListPreferencesResponse,
  ObjectListResponse,
  ObjectListSchedulesParams,
  ObjectListSchedulesResponse,
  ObjectListSubscriptionsParams,
  ObjectListSubscriptionsResponse,
  ObjectSetChannelDataParams,
  ObjectSetChannelDataResponse,
  ObjectSetParams,
  ObjectSetPreferencesParams,
  ObjectSetPreferencesResponse,
  ObjectSetResponse,
  ObjectUnsetChannelDataResponse,
  Objects,
} from './resources/objects/objects';
import { Providers } from './resources/providers/providers';
import {
  TenantDeleteResponse,
  TenantGetResponse,
  TenantListParams,
  TenantListResponse,
  TenantSetParams,
  TenantSetResponse,
  Tenants,
} from './resources/tenants/tenants';
import {
  User,
  UserDeleteResponse,
  UserGetChannelDataResponse,
  UserGetPreferencesParams,
  UserGetPreferencesResponse,
  UserListMessagesParams,
  UserListMessagesResponse,
  UserListParams,
  UserListPreferencesResponse,
  UserListResponse,
  UserListSchedulesParams,
  UserListSchedulesResponse,
  UserListSubscriptionsParams,
  UserListSubscriptionsResponse,
  UserMergeParams,
  UserSetChannelDataParams,
  UserSetChannelDataResponse,
  UserSetPreferencesParams,
  UserSetPreferencesResponse,
  UserUnsetChannelDataResponse,
  UserUpdateParams,
  Users,
} from './resources/users/users';

export interface ClientOptions {
  /**
   * Defaults to process.env['KNOCK_TOKEN'].
   */
  token?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['KNOCK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Knock API.
 */
export class Knock extends Core.APIClient {
  token: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Knock API.
   *
   * @param {string | undefined} [opts.token=process.env['KNOCK_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['KNOCK_BASE_URL'] ?? https://api.knock.app] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('KNOCK_BASE_URL'),
    token = Core.readEnv('KNOCK_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (token === undefined) {
      throw new Errors.KnockError(
        "The KNOCK_TOKEN environment variable is missing or empty; either provide it, or instantiate the Knock client with an token option, like new Knock({ token: 'My Token' }).",
      );
    }

    const options: ClientOptions = {
      token,
      ...opts,
      baseURL: baseURL || `https://api.knock.app`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.token = token;
  }

  users: API.Users = new API.Users(this);
  objects: API.Objects = new API.Objects(this);
  tenants: API.Tenants = new API.Tenants(this);
  bulkOperations: API.BulkOperations = new API.BulkOperations(this);
  messages: API.Messages = new API.Messages(this);
  providers: API.Providers = new API.Providers(this);
  workflows: API.Workflows = new API.Workflows(this);
  schedules: API.Schedules = new API.Schedules(this);
  channels: API.Channels = new API.Channels(this);
  audiences: API.Audiences = new API.Audiences(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.token}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'brackets' });
  }

  static Knock = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static KnockError = Errors.KnockError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Knock.Users = Users;
Knock.Objects = Objects;
Knock.Tenants = Tenants;
Knock.BulkOperations = BulkOperations;
Knock.Messages = Messages;
Knock.Providers = Providers;
Knock.Workflows = Workflows;
Knock.Schedules = Schedules;
Knock.Channels = Channels;
Knock.Audiences = Audiences;
export declare namespace Knock {
  export type RequestOptions = Core.RequestOptions;

  export {
    Users as Users,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserGetChannelDataResponse as UserGetChannelDataResponse,
    type UserGetPreferencesResponse as UserGetPreferencesResponse,
    type UserListMessagesResponse as UserListMessagesResponse,
    type UserListPreferencesResponse as UserListPreferencesResponse,
    type UserListSchedulesResponse as UserListSchedulesResponse,
    type UserListSubscriptionsResponse as UserListSubscriptionsResponse,
    type UserSetChannelDataResponse as UserSetChannelDataResponse,
    type UserSetPreferencesResponse as UserSetPreferencesResponse,
    type UserUnsetChannelDataResponse as UserUnsetChannelDataResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetPreferencesParams as UserGetPreferencesParams,
    type UserListMessagesParams as UserListMessagesParams,
    type UserListSchedulesParams as UserListSchedulesParams,
    type UserListSubscriptionsParams as UserListSubscriptionsParams,
    type UserMergeParams as UserMergeParams,
    type UserSetChannelDataParams as UserSetChannelDataParams,
    type UserSetPreferencesParams as UserSetPreferencesParams,
  };

  export {
    Objects as Objects,
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectAddSubscriptionsResponse as ObjectAddSubscriptionsResponse,
    type ObjectDeleteSubscriptionsResponse as ObjectDeleteSubscriptionsResponse,
    type ObjectGetResponse as ObjectGetResponse,
    type ObjectGetChannelDataResponse as ObjectGetChannelDataResponse,
    type ObjectGetPreferencesResponse as ObjectGetPreferencesResponse,
    type ObjectListMessagesResponse as ObjectListMessagesResponse,
    type ObjectListPreferencesResponse as ObjectListPreferencesResponse,
    type ObjectListSchedulesResponse as ObjectListSchedulesResponse,
    type ObjectListSubscriptionsResponse as ObjectListSubscriptionsResponse,
    type ObjectSetResponse as ObjectSetResponse,
    type ObjectSetChannelDataResponse as ObjectSetChannelDataResponse,
    type ObjectSetPreferencesResponse as ObjectSetPreferencesResponse,
    type ObjectUnsetChannelDataResponse as ObjectUnsetChannelDataResponse,
    type ObjectListParams as ObjectListParams,
    type ObjectAddSubscriptionsParams as ObjectAddSubscriptionsParams,
    type ObjectDeleteSubscriptionsParams as ObjectDeleteSubscriptionsParams,
    type ObjectGetPreferencesParams as ObjectGetPreferencesParams,
    type ObjectListMessagesParams as ObjectListMessagesParams,
    type ObjectListSchedulesParams as ObjectListSchedulesParams,
    type ObjectListSubscriptionsParams as ObjectListSubscriptionsParams,
    type ObjectSetParams as ObjectSetParams,
    type ObjectSetChannelDataParams as ObjectSetChannelDataParams,
    type ObjectSetPreferencesParams as ObjectSetPreferencesParams,
  };

  export {
    Tenants as Tenants,
    type TenantListResponse as TenantListResponse,
    type TenantDeleteResponse as TenantDeleteResponse,
    type TenantGetResponse as TenantGetResponse,
    type TenantSetResponse as TenantSetResponse,
    type TenantListParams as TenantListParams,
    type TenantSetParams as TenantSetParams,
  };

  export { BulkOperations as BulkOperations, type BulkOperationGetResponse as BulkOperationGetResponse };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageArchiveResponse as MessageArchiveResponse,
    type MessageGetResponse as MessageGetResponse,
    type MessageGetContentResponse as MessageGetContentResponse,
    type MessageListActivitiesResponse as MessageListActivitiesResponse,
    type MessageListDeliveryLogsResponse as MessageListDeliveryLogsResponse,
    type MessageListEventsResponse as MessageListEventsResponse,
    type MessageMarkAsInteractedResponse as MessageMarkAsInteractedResponse,
    type MessageMarkAsReadResponse as MessageMarkAsReadResponse,
    type MessageMarkAsSeenResponse as MessageMarkAsSeenResponse,
    type MessageMarkAsUnreadResponse as MessageMarkAsUnreadResponse,
    type MessageMarkAsUnseenResponse as MessageMarkAsUnseenResponse,
    type MessageUnarchiveResponse as MessageUnarchiveResponse,
    type MessageListParams as MessageListParams,
    type MessageListActivitiesParams as MessageListActivitiesParams,
    type MessageListDeliveryLogsParams as MessageListDeliveryLogsParams,
    type MessageListEventsParams as MessageListEventsParams,
    type MessageMarkAsInteractedParams as MessageMarkAsInteractedParams,
  };

  export { Providers as Providers };

  export {
    Workflows as Workflows,
    type WorkflowCancelResponse as WorkflowCancelResponse,
    type WorkflowTriggerResponse as WorkflowTriggerResponse,
    type WorkflowCancelParams as WorkflowCancelParams,
    type WorkflowTriggerParams as WorkflowTriggerParams,
  };

  export {
    Schedules as Schedules,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };

  export { Channels as Channels };

  export {
    Audiences as Audiences,
    type AudienceAddMembersResponse as AudienceAddMembersResponse,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceRemoveMembersResponse as AudienceRemoveMembersResponse,
    type AudienceAddMembersParams as AudienceAddMembersParams,
    type AudienceRemoveMembersParams as AudienceRemoveMembersParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  KnockError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Knock;
