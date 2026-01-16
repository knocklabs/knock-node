// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * A condition to be evaluated.
 */
export interface Condition {
  /**
   * The argument value to compare against in the condition.
   */
  argument: string | null;

  /**
   * The operator to use in the condition evaluation.
   */
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
    | 'is_timestamp_on_or_after'
    | 'is_timestamp_before'
    | 'is_timestamp_between'
    | 'is_audience_member'
    | 'is_not_audience_member';

  /**
   * The variable to be evaluated in the condition.
   */
  variable: string;
}

/**
 * Pagination information for a list of resources.
 */
export interface PageInfo {
  /**
   * The typename of the schema.
   */
  __typename: string;

  /**
   * The number of items per page (defaults to 50).
   */
  page_size: number;

  /**
   * The cursor to fetch entries after.
   */
  after?: string | null;

  /**
   * The cursor to fetch entries before.
   */
  before?: string | null;
}
