// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Users extends APIResource {
  /**
   * Identify a user
   */
  update(userId: string, body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.put(`/v1/users/${userId}`, { body, ...options });
  }

  /**
   * Returns a list of users
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/users', { query, ...options });
  }

  /**
   * Deletes a user
   */
  delete(userId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/v1/users/${userId}`, options);
  }

  /**
   * Returns a user
   */
  get(userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/v1/users/${userId}`, options);
  }

  /**
   * Merges two users together
   */
  merge(userId: string, body: UserMergeParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post(`/v1/users/${userId}/merge`, { body, ...options });
  }
}

/**
 * A user object
 */
export interface User {
  id: string;

  updated_at: string;

  __typename?: 'User';

  created_at?: string;
  [k: string]: string | 'User' | undefined;
}

/**
 * A paginated list of users.
 */
export interface UserListResponse {
  /**
   * The list of users
   */
  entries?: Array<User>;

  /**
   * The information about a paginated result
   */
  page_info?: UserListResponse.PageInfo;
}

export namespace UserListResponse {
  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename?: 'PageInfo';

    after?: string;

    before?: string;

    page_size?: number;
  }
}

export type UserDeleteResponse = string;

export interface UserUpdateParams {
  channel_data?: Record<string, UserUpdateParams.ChannelData>;

  created_at?: string;

  preferences?: Record<string, UserUpdateParams.Preferences>;
}

export namespace UserUpdateParams {
  export interface ChannelData {
    data?: ChannelData.Data;
  }

  export namespace ChannelData {
    export interface Data {
      tokens: Array<string>;
    }
  }

  export interface Preferences {
    categories?: boolean | Preferences.UnionMember1;

    channel_types?: Preferences.ChannelTypes;

    workflows?: boolean | Preferences.UnionMember1;
  }

  export namespace Preferences {
    export interface UnionMember1 {
      channel_types?: UnionMember1.ChannelTypes;

      conditions?: Array<UnionMember1.Condition> | null;
    }

    export namespace UnionMember1 {
      export interface ChannelTypes {
        chat?: boolean | ChannelTypes.Conditions;

        email?: boolean | ChannelTypes.Conditions;

        http?: boolean | ChannelTypes.Conditions;

        in_app_feed?: boolean | ChannelTypes.Conditions;

        push?: boolean | ChannelTypes.Conditions;

        sms?: boolean | ChannelTypes.Conditions;
      }

      export namespace ChannelTypes {
        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }
      }

      export interface Condition {
        argument: string;

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
          | 'contains_all';

        variable: string;
      }
    }

    export interface ChannelTypes {
      chat?: boolean | ChannelTypes.Conditions;

      email?: boolean | ChannelTypes.Conditions;

      http?: boolean | ChannelTypes.Conditions;

      in_app_feed?: boolean | ChannelTypes.Conditions;

      push?: boolean | ChannelTypes.Conditions;

      sms?: boolean | ChannelTypes.Conditions;
    }

    export namespace ChannelTypes {
      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        export interface Condition {
          argument: string;

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
            | 'contains_all';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        export interface Condition {
          argument: string;

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
            | 'contains_all';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        export interface Condition {
          argument: string;

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
            | 'contains_all';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        export interface Condition {
          argument: string;

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
            | 'contains_all';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        export interface Condition {
          argument: string;

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
            | 'contains_all';

          variable: string;
        }
      }

      export interface Conditions {
        conditions: Array<Conditions.Condition>;
      }

      export namespace Conditions {
        export interface Condition {
          argument: string;

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
            | 'contains_all';

          variable: string;
        }
      }
    }

    export interface UnionMember1 {
      channel_types?: UnionMember1.ChannelTypes;

      conditions?: Array<UnionMember1.Condition> | null;
    }

    export namespace UnionMember1 {
      export interface ChannelTypes {
        chat?: boolean | ChannelTypes.Conditions;

        email?: boolean | ChannelTypes.Conditions;

        http?: boolean | ChannelTypes.Conditions;

        in_app_feed?: boolean | ChannelTypes.Conditions;

        push?: boolean | ChannelTypes.Conditions;

        sms?: boolean | ChannelTypes.Conditions;
      }

      export namespace ChannelTypes {
        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }

        export interface Conditions {
          conditions: Array<Conditions.Condition>;
        }

        export namespace Conditions {
          export interface Condition {
            argument: string;

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
              | 'contains_all';

            variable: string;
          }
        }
      }

      export interface Condition {
        argument: string;

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
          | 'contains_all';

        variable: string;
      }
    }
  }
}

export interface UserListParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The page size to fetch
   */
  page_size?: number;
}

export interface UserMergeParams {
  from_user_id?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserMergeParams as UserMergeParams,
  };
}
