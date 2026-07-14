import * as qs from '../internal/qs/stringify';

/**
 * Stringify query parameters with smart array handling:
 *
 * 1. Simple arrays (primitives) → 'brackets' format: `tags[]=tag1&tags[]=tag2`
 * 2. Arrays of objects → 'indices' format: `objects[0][id]=1&objects[0][collection]=teams`
 *
 * The Knock API (Phoenix) expects object-array query params in indexed form
 * (`objects[0][id]`), which Plug decodes into a keyed list. Primitive arrays must
 * stay in bracket form (`include[]`) — indexed primitives (`include[0]`) get
 * misparsed as a map `{ "0": ... }` and cause 422s. `qs` only supports a single
 * global `arrayFormat`, so we partition the params and serialize each group with
 * the format it needs.
 *
 * This lives in `src/lib/`, which the Stainless generator never modifies (see
 * CONTRIBUTING.md), so the behavior survives regeneration of the generated query
 * util. See KNO-9922.
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
