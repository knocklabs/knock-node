// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../pagination';
import { RequestOptions } from '../internal/request-options';

export class Schedules extends APIResource {
  /**
   * Create schedules
   */
  create(body: ScheduleCreateParams, options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    return this._client.post('/v1/schedules', { body, ...options });
  }

  /**
   * Update schedules
   */
  update(body: ScheduleUpdateParams, options?: RequestOptions): APIPromise<ScheduleUpdateResponse> {
    return this._client.put('/v1/schedules', { body, ...options });
  }

  /**
   * List schedules
   */
  list(
    query: ScheduleListParams,
    options?: RequestOptions,
  ): PagePromise<ScheduleListResponsesEntriesCursor, ScheduleListResponse> {
    return this._client.getAPIList('/v1/schedules', EntriesCursor<ScheduleListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete schedules
   */
  delete(body: ScheduleDeleteParams, options?: RequestOptions): APIPromise<ScheduleDeleteResponse> {
    return this._client.delete('/v1/schedules', { body, ...options });
  }
}

export type ScheduleListResponsesEntriesCursor = EntriesCursor<ScheduleListResponse>;

/**
 * A list of schedules
 */
export type ScheduleCreateResponse = Array<ScheduleCreateResponse.ScheduleCreateResponseItem>;

export namespace ScheduleCreateResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleCreateResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ScheduleCreateResponseItem.Object;

    repeats: Array<ScheduleCreateResponseItem.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | ScheduleCreateResponseItem.Object | null;

    data?: Record<string, unknown> | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace ScheduleCreateResponseItem {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }
}

/**
 * A list of schedules
 */
export type ScheduleUpdateResponse = Array<ScheduleUpdateResponse.ScheduleUpdateResponseItem>;

export namespace ScheduleUpdateResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleUpdateResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ScheduleUpdateResponseItem.Object;

    repeats: Array<ScheduleUpdateResponseItem.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | ScheduleUpdateResponseItem.Object | null;

    data?: Record<string, unknown> | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace ScheduleUpdateResponseItem {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }
}

/**
 * A schedule that represents a recurring workflow execution
 */
export interface ScheduleListResponse {
  id: string;

  inserted_at: string;

  /**
   * A recipient, which is either a user or an object
   */
  recipient: UsersAPI.User | ScheduleListResponse.Object;

  repeats: Array<ScheduleListResponse.Repeat>;

  updated_at: string;

  workflow: string;

  __typename?: string;

  /**
   * A recipient, which is either a user or an object
   */
  actor?: UsersAPI.User | ScheduleListResponse.Object | null;

  data?: Record<string, unknown> | null;

  last_occurrence_at?: string | null;

  next_occurrence_at?: string | null;

  tenant?: string | null;
}

export namespace ScheduleListResponse {
  /**
   * A custom-object entity which belongs to a collection.
   */
  export interface Object {
    id: string;

    __typename: string;

    collection: string;

    updated_at: string;

    created_at?: string | null;
    [k: string]: unknown;
  }

  /**
   * A schedule repeat rule
   */
  export interface Repeat {
    __typename: string;

    frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

    day_of_month?: number | null;

    days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

    hours?: number | null;

    interval?: number;

    minutes?: number | null;
  }

  /**
   * A custom-object entity which belongs to a collection.
   */
  export interface Object {
    id: string;

    __typename: string;

    collection: string;

    updated_at: string;

    created_at?: string | null;
    [k: string]: unknown;
  }
}

/**
 * A list of schedules
 */
export type ScheduleDeleteResponse = Array<ScheduleDeleteResponse.ScheduleDeleteResponseItem>;

export namespace ScheduleDeleteResponse {
  /**
   * A schedule that represents a recurring workflow execution
   */
  export interface ScheduleDeleteResponseItem {
    id: string;

    inserted_at: string;

    /**
     * A recipient, which is either a user or an object
     */
    recipient: UsersAPI.User | ScheduleDeleteResponseItem.Object;

    repeats: Array<ScheduleDeleteResponseItem.Repeat>;

    updated_at: string;

    workflow: string;

    __typename?: string;

    /**
     * A recipient, which is either a user or an object
     */
    actor?: UsersAPI.User | ScheduleDeleteResponseItem.Object | null;

    data?: Record<string, unknown> | null;

    last_occurrence_at?: string | null;

    next_occurrence_at?: string | null;

    tenant?: string | null;
  }

  export namespace ScheduleDeleteResponseItem {
    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }

    /**
     * A schedule repeat rule
     */
    export interface Repeat {
      __typename: string;

      frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

      day_of_month?: number | null;

      days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

      hours?: number | null;

      interval?: number;

      minutes?: number | null;
    }

    /**
     * A custom-object entity which belongs to a collection.
     */
    export interface Object {
      id: string;

      __typename: string;

      collection: string;

      updated_at: string;

      created_at?: string | null;
      [k: string]: unknown;
    }
  }
}

export interface ScheduleCreateParams {
  recipients: Array<string | ScheduleCreateParams.ObjectReference>;

  repeats: Array<ScheduleCreateParams.Repeat>;

  workflow: string;

  data?: Record<string, unknown> | null;

  ending_at?: string | null;

  scheduled_at?: string | null;

  /**
   * An inline tenant request
   */
  tenant?: string | ScheduleCreateParams.TenantRequest | null;
}

export namespace ScheduleCreateParams {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }

  /**
   * A schedule repeat rule
   */
  export interface Repeat {
    __typename: string;

    frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

    day_of_month?: number | null;

    days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

    hours?: number | null;

    interval?: number;

    minutes?: number | null;
  }

  /**
   * A tenant to be set in the system
   */
  export interface TenantRequest {
    id: string;

    /**
     * Allows inline setting channel data for a recipient
     */
    channel_data?: Record<string, TenantRequest.ChannelData> | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, TenantRequest.Preferences> | null;

    settings?: TenantRequest.Settings;
    [k: string]: unknown;
  }

  export namespace TenantRequest {
    /**
     * Set channel data for a type of channel
     */
    export interface ChannelData {
      /**
       * Channel data for push providers
       */
      data:
        | ChannelData.PushChannelData
        | ChannelData.OneSignalChannelData
        | ChannelData.SlackChannelData
        | ChannelData.MsTeamsChannelData
        | ChannelData.DiscordChannelData;
    }

    export namespace ChannelData {
      /**
       * Channel data for push providers
       */
      export interface PushChannelData {
        tokens: Array<string>;
      }

      /**
       * OneSignal channel data
       */
      export interface OneSignalChannelData {
        /**
         * The OneSignal player IDs
         */
        player_ids: Array<string>;
      }

      /**
       * Slack channel data
       */
      export interface SlackChannelData {
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    export interface Settings {
      branding?: Settings.Branding;

      /**
       * Set preferences for a recipient
       */
      preference_set?: Settings.PreferenceSet | null;
    }

    export namespace Settings {
      export interface Branding {
        icon_url?: string | null;

        logo_url?: string | null;

        primary_color?: string | null;

        primary_color_contrast?: string | null;
      }

      /**
       * Set preferences for a recipient
       */
      export interface PreferenceSet {
        /**
         * A setting for a preference set, where the key in the object is the category, and
         * the values are the preference settings for that category.
         */
        categories?: Record<
          string,
          boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject
        > | null;

        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSet.ChannelTypes | null;

        /**
         * A setting for a preference set, where the key in the object is the workflow key,
         * and the values are the preference settings for that workflow.
         */
        workflows?: Record<string, boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject> | null;
      }

      export namespace PreferenceSet {
        /**
         * The settings object for a workflow or category, where you can specify channel
         * types or conditions.
         */
        export interface PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

          conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
        }

        export namespace PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          export interface ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
          }

          export namespace ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }
          }

          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * The settings object for a workflow or category, where you can specify channel
         * types or conditions.
         */
        export interface PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

          conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
        }

        export namespace PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          export interface ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
          }

          export namespace ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }
          }

          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }
    }
  }
}

export interface ScheduleUpdateParams {
  schedule_ids: Array<string>;

  /**
   * Specifies a recipient in a request. This can either be a user identifier
   * (string), an inline user request (object), or an inline object request, which is
   * determined by the presence of a `collection` property.
   */
  actor?:
    | string
    | ScheduleUpdateParams.InlineIdentifyUserRequest
    | ScheduleUpdateParams.InlineIdentifyObjectRequest
    | null;

  data?: Record<string, unknown> | null;

  ending_at?: string | null;

  repeats?: Array<ScheduleUpdateParams.Repeat>;

  scheduled_at?: string | null;

  /**
   * An inline tenant request
   */
  tenant?: string | ScheduleUpdateParams.TenantRequest | null;
}

export namespace ScheduleUpdateParams {
  /**
   * A set of parameters to inline-identify a user with. Inline identifying the user
   * will ensure that the user is available before the request is executed in Knock.
   * It will perform an upsert against the user you're supplying, replacing any
   * properties specified.
   */
  export interface InlineIdentifyUserRequest {
    /**
     * The ID of the user to identify. This is an ID that you supply.
     */
    id: string;

    /**
     * Allows inline setting channel data for a recipient
     */
    channel_data?: Record<string, InlineIdentifyUserRequest.ChannelData> | null;

    /**
     * The creation date of the user from your system.
     */
    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, InlineIdentifyUserRequest.Preferences> | null;
    [k: string]: unknown;
  }

  export namespace InlineIdentifyUserRequest {
    /**
     * Set channel data for a type of channel
     */
    export interface ChannelData {
      /**
       * Channel data for push providers
       */
      data:
        | ChannelData.PushChannelData
        | ChannelData.OneSignalChannelData
        | ChannelData.SlackChannelData
        | ChannelData.MsTeamsChannelData
        | ChannelData.DiscordChannelData;
    }

    export namespace ChannelData {
      /**
       * Channel data for push providers
       */
      export interface PushChannelData {
        tokens: Array<string>;
      }

      /**
       * OneSignal channel data
       */
      export interface OneSignalChannelData {
        /**
         * The OneSignal player IDs
         */
        player_ids: Array<string>;
      }

      /**
       * Slack channel data
       */
      export interface SlackChannelData {
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }
  }

  /**
   * Inline identifies a custom object belonging to a collection
   */
  export interface InlineIdentifyObjectRequest {
    id: string;

    collection: string;

    /**
     * Allows inline setting channel data for a recipient
     */
    channel_data?: Record<string, InlineIdentifyObjectRequest.ChannelData> | null;

    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, InlineIdentifyObjectRequest.Preferences> | null;
    [k: string]: unknown;
  }

  export namespace InlineIdentifyObjectRequest {
    /**
     * Set channel data for a type of channel
     */
    export interface ChannelData {
      /**
       * Channel data for push providers
       */
      data:
        | ChannelData.PushChannelData
        | ChannelData.OneSignalChannelData
        | ChannelData.SlackChannelData
        | ChannelData.MsTeamsChannelData
        | ChannelData.DiscordChannelData;
    }

    export namespace ChannelData {
      /**
       * Channel data for push providers
       */
      export interface PushChannelData {
        tokens: Array<string>;
      }

      /**
       * OneSignal channel data
       */
      export interface OneSignalChannelData {
        /**
         * The OneSignal player IDs
         */
        player_ids: Array<string>;
      }

      /**
       * Slack channel data
       */
      export interface SlackChannelData {
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }
  }

  /**
   * A schedule repeat rule
   */
  export interface Repeat {
    __typename: string;

    frequency: 'daily' | 'weekly' | 'monthly' | 'hourly';

    day_of_month?: number | null;

    days?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'> | null;

    hours?: number | null;

    interval?: number;

    minutes?: number | null;
  }

  /**
   * A tenant to be set in the system
   */
  export interface TenantRequest {
    id: string;

    /**
     * Allows inline setting channel data for a recipient
     */
    channel_data?: Record<string, TenantRequest.ChannelData> | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, TenantRequest.Preferences> | null;

    settings?: TenantRequest.Settings;
    [k: string]: unknown;
  }

  export namespace TenantRequest {
    /**
     * Set channel data for a type of channel
     */
    export interface ChannelData {
      /**
       * Channel data for push providers
       */
      data:
        | ChannelData.PushChannelData
        | ChannelData.OneSignalChannelData
        | ChannelData.SlackChannelData
        | ChannelData.MsTeamsChannelData
        | ChannelData.DiscordChannelData;
    }

    export namespace ChannelData {
      /**
       * Channel data for push providers
       */
      export interface PushChannelData {
        tokens: Array<string>;
      }

      /**
       * OneSignal channel data
       */
      export interface OneSignalChannelData {
        /**
         * The OneSignal player IDs
         */
        player_ids: Array<string>;
      }

      /**
       * Slack channel data
       */
      export interface SlackChannelData {
        connections: Array<
          SlackChannelData.SlackTokenConnection | SlackChannelData.SlackIncomingWebhookConnection
        >;

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        token?: SlackChannelData.Token | null;
      }

      export namespace SlackChannelData {
        /**
         * A Slack connection, which either includes a channel_id or a user_id
         */
        export interface SlackTokenConnection {
          access_token?: string | null;

          channel_id?: string | null;

          user_id?: string | null;
        }

        /**
         * An incoming webhook Slack connection
         */
        export interface SlackIncomingWebhookConnection {
          url: string;
        }

        /**
         * A token that's used to store the access token for a Slack workspace.
         */
        export interface Token {
          access_token: string | null;
        }
      }

      /**
       * Microsoft Teams channel data
       */
      export interface MsTeamsChannelData {
        connections: Array<
          MsTeamsChannelData.MsTeamsTokenConnection | MsTeamsChannelData.MsTeamsIncomingWebhookConnection
        >;

        /**
         * The Microsoft Teams tenant ID
         */
        ms_teams_tenant_id?: string | null;
      }

      export namespace MsTeamsChannelData {
        /**
         * Microsoft Teams token connection
         */
        export interface MsTeamsTokenConnection {
          /**
           * The Microsoft Teams channel ID
           */
          ms_teams_channel_id?: string | null;

          /**
           * The Microsoft Teams team ID
           */
          ms_teams_team_id?: string | null;

          /**
           * The Microsoft Teams tenant ID
           */
          ms_teams_tenant_id?: string | null;

          /**
           * The Microsoft Teams user ID
           */
          ms_teams_user_id?: string | null;
        }

        /**
         * Microsoft Teams incoming webhook connection
         */
        export interface MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: MsTeamsIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace MsTeamsIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }

      /**
       * Discord channel data
       */
      export interface DiscordChannelData {
        connections: Array<
          DiscordChannelData.DiscordChannelConnection | DiscordChannelData.DiscordIncomingWebhookConnection
        >;
      }

      export namespace DiscordChannelData {
        /**
         * Discord channel connection
         */
        export interface DiscordChannelConnection {
          /**
           * The Discord channel ID
           */
          channel_id: string;
        }

        /**
         * Discord incoming webhook connection
         */
        export interface DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          incoming_webhook: DiscordIncomingWebhookConnection.IncomingWebhook;
        }

        export namespace DiscordIncomingWebhookConnection {
          /**
           * The incoming webhook
           */
          export interface IncomingWebhook {
            /**
             * The URL of the incoming webhook
             */
            url: string;
          }
        }
      }
    }

    /**
     * Set preferences for a recipient
     */
    export interface Preferences {
      /**
       * A setting for a preference set, where the key in the object is the category, and
       * the values are the preference settings for that category.
       */
      categories?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;

      /**
       * Channel type preferences
       */
      channel_types?: Preferences.ChannelTypes | null;

      /**
       * A setting for a preference set, where the key in the object is the workflow key,
       * and the values are the preference settings for that workflow.
       */
      workflows?: Record<string, boolean | Preferences.PreferenceSetWorkflowCategorySettingObject> | null;
    }

    export namespace Preferences {
      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }

      /**
       * Channel type preferences
       */
      export interface ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
      }

      export namespace ChannelTypes {
        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * A set of settings for a channel type. Currently, this can only be a list of
         * conditions to apply.
         */
        export interface PreferenceSetChannelTypeSettingObject {
          conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
        }

        export namespace PreferenceSetChannelTypeSettingObject {
          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }

      /**
       * The settings object for a workflow or category, where you can specify channel
       * types or conditions.
       */
      export interface PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

        conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
      }

      export namespace PreferenceSetWorkflowCategorySettingObject {
        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * A condition to be evaluated
         */
        export interface Condition {
          argument: string | null;

          operator:
            | 'equal_to'
            | 'not_equal_to'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equal_to'
            | 'less_than_or_equal_to'
            | 'contains'
            | 'not_contains'
            | 'empty'
            | 'not_empty'
            | 'contains_all'
            | 'is_timestamp'
            | 'is_not_timestamp'
            | 'is_timestamp_after'
            | 'is_timestamp_before'
            | 'is_timestamp_between'
            | 'is_audience_member';

          variable: string;
        }
      }
    }

    export interface Settings {
      branding?: Settings.Branding;

      /**
       * Set preferences for a recipient
       */
      preference_set?: Settings.PreferenceSet | null;
    }

    export namespace Settings {
      export interface Branding {
        icon_url?: string | null;

        logo_url?: string | null;

        primary_color?: string | null;

        primary_color_contrast?: string | null;
      }

      /**
       * Set preferences for a recipient
       */
      export interface PreferenceSet {
        /**
         * A setting for a preference set, where the key in the object is the category, and
         * the values are the preference settings for that category.
         */
        categories?: Record<
          string,
          boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject
        > | null;

        /**
         * Channel type preferences
         */
        channel_types?: PreferenceSet.ChannelTypes | null;

        /**
         * A setting for a preference set, where the key in the object is the workflow key,
         * and the values are the preference settings for that workflow.
         */
        workflows?: Record<string, boolean | PreferenceSet.PreferenceSetWorkflowCategorySettingObject> | null;
      }

      export namespace PreferenceSet {
        /**
         * The settings object for a workflow or category, where you can specify channel
         * types or conditions.
         */
        export interface PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

          conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
        }

        export namespace PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          export interface ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
          }

          export namespace ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }
          }

          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }

        /**
         * Channel type preferences
         */
        export interface ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
        }

        export namespace ChannelTypes {
          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }

          /**
           * A set of settings for a channel type. Currently, this can only be a list of
           * conditions to apply.
           */
          export interface PreferenceSetChannelTypeSettingObject {
            conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
          }

          export namespace PreferenceSetChannelTypeSettingObject {
            /**
             * A condition to be evaluated
             */
            export interface Condition {
              argument: string | null;

              operator:
                | 'equal_to'
                | 'not_equal_to'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equal_to'
                | 'less_than_or_equal_to'
                | 'contains'
                | 'not_contains'
                | 'empty'
                | 'not_empty'
                | 'contains_all'
                | 'is_timestamp'
                | 'is_not_timestamp'
                | 'is_timestamp_after'
                | 'is_timestamp_before'
                | 'is_timestamp_between'
                | 'is_audience_member';

              variable: string;
            }
          }
        }

        /**
         * The settings object for a workflow or category, where you can specify channel
         * types or conditions.
         */
        export interface PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          channel_types?: PreferenceSetWorkflowCategorySettingObject.ChannelTypes | null;

          conditions?: Array<PreferenceSetWorkflowCategorySettingObject.Condition> | null;
        }

        export namespace PreferenceSetWorkflowCategorySettingObject {
          /**
           * Channel type preferences
           */
          export interface ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            chat?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            email?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            http?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            in_app_feed?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            push?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            sms?: boolean | ChannelTypes.PreferenceSetChannelTypeSettingObject;
          }

          export namespace ChannelTypes {
            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }

            /**
             * A set of settings for a channel type. Currently, this can only be a list of
             * conditions to apply.
             */
            export interface PreferenceSetChannelTypeSettingObject {
              conditions: Array<PreferenceSetChannelTypeSettingObject.Condition>;
            }

            export namespace PreferenceSetChannelTypeSettingObject {
              /**
               * A condition to be evaluated
               */
              export interface Condition {
                argument: string | null;

                operator:
                  | 'equal_to'
                  | 'not_equal_to'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equal_to'
                  | 'less_than_or_equal_to'
                  | 'contains'
                  | 'not_contains'
                  | 'empty'
                  | 'not_empty'
                  | 'contains_all'
                  | 'is_timestamp'
                  | 'is_not_timestamp'
                  | 'is_timestamp_after'
                  | 'is_timestamp_before'
                  | 'is_timestamp_between'
                  | 'is_audience_member';

                variable: string;
              }
            }
          }

          /**
           * A condition to be evaluated
           */
          export interface Condition {
            argument: string | null;

            operator:
              | 'equal_to'
              | 'not_equal_to'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equal_to'
              | 'less_than_or_equal_to'
              | 'contains'
              | 'not_contains'
              | 'empty'
              | 'not_empty'
              | 'contains_all'
              | 'is_timestamp'
              | 'is_not_timestamp'
              | 'is_timestamp_after'
              | 'is_timestamp_before'
              | 'is_timestamp_between'
              | 'is_audience_member';

            variable: string;
          }
        }
      }
    }
  }
}

export interface ScheduleListParams extends EntriesCursorParams {
  /**
   * Filter by workflow
   */
  workflow: string;

  /**
   * Filter by recipient
   */
  recipients?: Array<string | ScheduleListParams.ObjectReference>;

  /**
   * Filter by tenant
   */
  tenant?: string;
}

export namespace ScheduleListParams {
  /**
   * An object reference to a recipient
   */
  export interface ObjectReference {
    /**
     * An object identifier
     */
    id: string;

    /**
     * The collection the object belongs to
     */
    collection: string;
  }
}

export interface ScheduleDeleteParams {
  schedule_ids: Array<string>;
}

export declare namespace Schedules {
  export {
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleListResponsesEntriesCursor as ScheduleListResponsesEntriesCursor,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
