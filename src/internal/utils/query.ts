// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as qs from '../qs/stringify';

/**
 * Stringify query parameters with smart array handling:
 * 1. Simple arrays → 'brackets' format: `tags[]=tag1&tags[]=tag2`
 * 2. Arrays of objects → 'indices' format: `objects[0][id]=1&objects[0][collection]=teams`
 */
export function stringifyQuery(query: object | Record<string, unknown>): string {
  const record = query as Record<string, unknown>;
  const objectArrays: Record<string, unknown> = {};
  const otherParams: Record<string, unknown> = {};

  for (const key in record) {
    const value = record[key];
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && value[0] !== null) {
      objectArrays[key] = value;
    } else {
      otherParams[key] = value;
    }
  }

  const otherParamsString = qs.stringify(otherParams, { arrayFormat: 'brackets' });
  const objectArraysString = qs.stringify(objectArrays, { arrayFormat: 'indices' });

  if (otherParamsString && objectArraysString) {
    return `${otherParamsString}&${objectArraysString}`;
  }
  return otherParamsString || objectArraysString;
}
