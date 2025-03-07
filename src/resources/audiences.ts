// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Add members
   */
  addMembers(key: string, body: AudienceAddMembersParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/audiences/${key}/members`, { body, ...options });
  }

  /**
   * List members
   */
  listMembers(key: string, options?: RequestOptions): APIPromise<AudienceListMembersResponse> {
    return this._client.get(path`/v1/audiences/${key}/members`, options);
  }

  /**
   * Remove members
   */
  removeMembers(
    key: string,
    body: AudienceRemoveMembersParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.delete(path`/v1/audiences/${key}/members`, { body, ...options });
  }
}

/**
 * An empty response
 */
export type AudienceAddMembersResponse = string;

/**
 * A response containing a list of audience members
 */
export interface AudienceListMembersResponse {
  entries: Array<AudienceListMembersResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: AudienceListMembersResponse.PageInfo;
}

export namespace AudienceListMembersResponse {
  /**
   * A user belonging to an audience
   */
  export interface Entry {
    __typename: string;

    added_at: string;

    /**
     * A user object
     */
    user: UsersAPI.User;

    user_id: string;

    tenant?: string | null;
  }

  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * An empty response
 */
export type AudienceRemoveMembersResponse = string;

export interface AudienceAddMembersParams {
  members: Array<AudienceAddMembersParams.Member>;
}

export namespace AudienceAddMembersParams {
  /**
   * A request for an individual audience member
   */
  export interface Member {
    /**
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    user: Member.User;

    tenant?: string | null;
  }

  export namespace Member {
    /**
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    export interface User {
      /**
       * The ID of the user to identify. This is an ID that you supply.
       */
      id: string;

      /**
       * Allows inline setting channel data for a recipient
       */
      channel_data?: Record<string, User.ChannelData> | null;

      /**
       * The creation date of the user from your system.
       */
      created_at?: string | null;

      /**
       * Inline set preferences for a recipient, where the key is the preference set name
       */
      preferences?: Record<string, User.Preferences> | null;
      [k: string]: unknown;
    }

    export namespace User {
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

export interface AudienceRemoveMembersParams {
  members: Array<AudienceRemoveMembersParams.Member>;
}

export namespace AudienceRemoveMembersParams {
  /**
   * A request for an individual audience member
   */
  export interface Member {
    /**
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    user: Member.User;

    tenant?: string | null;
  }

  export namespace Member {
    /**
     * A set of parameters to inline-identify a user with. Inline identifying the user
     * will ensure that the user is available before the request is executed in Knock.
     * It will perform an upsert against the user you're supplying, replacing any
     * properties specified.
     */
    export interface User {
      /**
       * The ID of the user to identify. This is an ID that you supply.
       */
      id: string;

      /**
       * Allows inline setting channel data for a recipient
       */
      channel_data?: Record<string, User.ChannelData> | null;

      /**
       * The creation date of the user from your system.
       */
      created_at?: string | null;

      /**
       * Inline set preferences for a recipient, where the key is the preference set name
       */
      preferences?: Record<string, User.Preferences> | null;
      [k: string]: unknown;
    }

    export namespace User {
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

export declare namespace Audiences {
  export {
    type AudienceAddMembersResponse as AudienceAddMembersResponse,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceRemoveMembersResponse as AudienceRemoveMembersResponse,
    type AudienceAddMembersParams as AudienceAddMembersParams,
    type AudienceRemoveMembersParams as AudienceRemoveMembersParams,
  };
}
