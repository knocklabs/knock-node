// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferenceCenterAPI from './preference-center';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * The preference center is a hosted page where users can manage their notification preferences.
 */
export class PreferenceCenter extends APIResource {
  /**
   * Generates a signed preference center URL and token for the given user in the
   * current environment.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.preferenceCenter.generateSignedURL(
   *     'user_id',
   *   );
   * ```
   */
  generateSignedURL(
    userID: string,
    options?: RequestOptions,
  ): APIPromise<PreferenceCenterGenerateSignedURLResponse> {
    return this._client.post(path`/v1/users/${userID}/preference_center/signed_url`, options);
  }

  /**
   * Returns the preference center config with environment metadata for the given
   * user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.preferenceCenter.getConfig('user_id');
   * ```
   */
  getConfig(userID: string, options?: RequestOptions): APIPromise<PreferenceCenterGetConfigResponse> {
    return this._client.get(path`/v1/users/${userID}/preference_center/config`, options);
  }
}

/**
 * The branding for the preference center, sourced from public environment
 * variables.
 */
export interface PreferenceCenterBrandingConfig {
  /**
   * The icon URL for the preference center. Must point to a valid image with an
   * image MIME type.
   */
  icon_url?: string | null;

  /**
   * The logo URL for the preference center. Must point to a valid image with an
   * image MIME type.
   */
  logo_url?: string | null;

  /**
   * The primary color for the preference center, provided as a hex value.
   */
  primary_color?: string | null;

  /**
   * The primary color contrast for the preference center, provided as a hex value.
   */
  primary_color_contrast?: string | null;
}

/**
 * A signed preference center URL and token for a user.
 */
export interface PreferenceCenterGenerateSignedURLResponse {
  /**
   * The signed JWT token for the preference center, usable as the `/p/{token}` path
   * segment.
   */
  token: string;

  /**
   * The full URL to the preference center for the user.
   */
  url: string;
}

/**
 * The preference center configuration for an environment. Controls whether the
 * preference center is enabled and defines the rows displayed in the UI.
 */
export interface PreferenceCenterGetConfigResponse {
  /**
   * The name of the account that the preference center is associated with.
   */
  account_name: string | null;

  /**
   * The branding for the preference center, sourced from public environment
   * variables.
   */
  branding: PreferenceCenterGetConfigResponse.Branding;

  /**
   * The preference center configuration data containing the rows to display.
   */
  config: PreferenceCenterGetConfigResponse.Config;

  /**
   * Whether the preference center is enabled for this environment.
   */
  enabled: boolean;

  /**
   * A display label for the user that the preference center is associated with,
   * resolved as email, then user id.
   */
  user_email: string | null;

  /**
   * Whether Knock branding is required in the preference center.
   */
  knock_branding_required?: boolean;
}

export namespace PreferenceCenterGetConfigResponse {
  /**
   * The branding for the preference center, sourced from public environment
   * variables.
   */
  export interface Branding extends PreferenceCenterAPI.PreferenceCenterBrandingConfig {
    /**
     * The branding for the preference center, sourced from public environment
     * variables.
     */
    dark?: PreferenceCenterAPI.PreferenceCenterBrandingConfig;
  }

  /**
   * The preference center configuration data containing the rows to display.
   */
  export interface Config {
    /**
     * The body text displayed below the title.
     */
    body: string;

    /**
     * An ordered list of rows to display in the preference center.
     */
    rows: Array<Config.Row>;

    /**
     * The title displayed at the top of the preference center.
     */
    title: string;

    /**
     * Whether the account name should be displayed in the preference center.
     */
    show_account_name?: boolean;
  }

  export namespace Config {
    /**
     * A preference row in the preference center configuration.
     */
    export interface Row {
      /**
       * The display name of the preference row.
       */
      name: string;

      /**
       * The type of this preference row. `workflow` targets a workflow, `channel`
       * targets a specific channel, `category` targets a workflow category,
       * `channel_types` controls per-channel-type opt-in/out, and
       * `commercial_subscribed` is the commercial notification toggle.
       */
      type: 'workflow' | 'channel' | 'category' | 'channel_types' | 'commercial_subscribed';

      /**
       * The list of channel types this preference is scoped to. An empty list (or
       * `null`) means the preference applies to all channel types. Present for
       * `workflow`, `category`, and `channel_types` types.
       */
      channel_types?: Array<
        | 'email'
        | 'in_app'
        | 'in_app_feed'
        | 'in_app_guide'
        | 'sms'
        | 'push'
        | 'chat'
        | 'http'
        | 'log'
        | 'deferred_log'
      > | null;

      /**
       * A description shown below the preference row name.
       */
      description?: string;

      /**
       * The category name, workflow key, or channel ID this row controls (e.g.
       * `marketing`, `new-project-mentions`, or a channel UUID). Present for `workflow`,
       * `channel`, and `category` types.
       */
      identifier?: string | null;
    }
  }
}

export declare namespace PreferenceCenter {
  export {
    type PreferenceCenterBrandingConfig as PreferenceCenterBrandingConfig,
    type PreferenceCenterGenerateSignedURLResponse as PreferenceCenterGenerateSignedURLResponse,
    type PreferenceCenterGetConfigResponse as PreferenceCenterGetConfigResponse,
  };
}
