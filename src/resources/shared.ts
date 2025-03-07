// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
