// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Bulk delete objects
   */
  delete(
    collection: string,
    params: BulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BulkDeleteResponse> {
    const { object_ids } = params;
    return this._client.post(path`/v1/objects/${collection}/bulk/delete`, {
      query: { object_ids },
      ...options,
    });
  }

  /**
   * Add subscriptions for a set of objects in a single collection. If a subscription
   * already exists, it will be updated.
   */
  addSubscriptions(
    collection: string,
    body: BulkAddSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<BulkAddSubscriptionsResponse> {
    return this._client.post(path`/v1/objects/${collection}/bulk/subscriptions/add`, { body, ...options });
  }

  /**
   * Bulk set objects
   */
  set(collection: string, body: BulkSetParams, options?: RequestOptions): APIPromise<BulkSetResponse> {
    return this._client.post(path`/v1/objects/${collection}/bulk/set`, { body, ...options });
  }
}

/**
 * A bulk operation entity
 */
export interface BulkDeleteResponse {
  id: string;

  __typename: string;

  estimated_total_rows: number;

  inserted_at: string;

  name: string;

  processed_rows: number;

  status: 'queued' | 'processing' | 'completed' | 'failed';

  success_count: number;

  updated_at: string;

  completed_at?: string | null;

  error_count?: number;

  /**
   * A list of items that failed to be processed
   */
  error_items?: Array<BulkDeleteResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkDeleteResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

/**
 * A bulk operation entity
 */
export interface BulkAddSubscriptionsResponse {
  id: string;

  __typename: string;

  estimated_total_rows: number;

  inserted_at: string;

  name: string;

  processed_rows: number;

  status: 'queued' | 'processing' | 'completed' | 'failed';

  success_count: number;

  updated_at: string;

  completed_at?: string | null;

  error_count?: number;

  /**
   * A list of items that failed to be processed
   */
  error_items?: Array<BulkAddSubscriptionsResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkAddSubscriptionsResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

/**
 * A bulk operation entity
 */
export interface BulkSetResponse {
  id: string;

  __typename: string;

  estimated_total_rows: number;

  inserted_at: string;

  name: string;

  processed_rows: number;

  status: 'queued' | 'processing' | 'completed' | 'failed';

  success_count: number;

  updated_at: string;

  completed_at?: string | null;

  error_count?: number;

  /**
   * A list of items that failed to be processed
   */
  error_items?: Array<BulkSetResponse.ErrorItem>;

  failed_at?: string | null;

  started_at?: string | null;
}

export namespace BulkSetResponse {
  export interface ErrorItem {
    id: string;

    collection?: string | null;
  }
}

export interface BulkDeleteParams {
  /**
   * The IDs of the objects to delete
   */
  object_ids: Array<string>;
}

export interface BulkAddSubscriptionsParams {
  subscriptions: Array<BulkAddSubscriptionsParams.Subscription>;
}

export namespace BulkAddSubscriptionsParams {
  export interface Subscription {
    id: string;

    recipients: Array<
      string | Subscription.InlineIdentifyUserRequest | Subscription.InlineIdentifyObjectRequest
    >;

    properties?: Record<string, unknown> | null;
  }

  export namespace Subscription {
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
  }
}

export interface BulkSetParams {
  objects: Array<BulkSetParams.Object>;
}

export namespace BulkSetParams {
  /**
   * Inline identifies a custom object belonging to a collection
   */
  export interface Object {
    id: string;

    collection: string;

    /**
     * Allows inline setting channel data for a recipient
     */
    channel_data?: Record<string, Object.ChannelData> | null;

    created_at?: string | null;

    /**
     * Inline set preferences for a recipient, where the key is the preference set name
     */
    preferences?: Record<string, Object.Preferences> | null;
    [k: string]: unknown;
  }

  export namespace Object {
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
}

export declare namespace Bulk {
  export {
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkAddSubscriptionsResponse as BulkAddSubscriptionsResponse,
    type BulkSetResponse as BulkSetResponse,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkAddSubscriptionsParams as BulkAddSubscriptionsParams,
    type BulkSetParams as BulkSetParams,
  };
}
