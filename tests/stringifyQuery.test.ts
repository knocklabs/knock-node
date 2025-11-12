// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Knock } from '@knocklabs/node';

const { stringifyQuery } = Knock.prototype as any;

describe(stringifyQuery, () => {
  for (const [input, expected] of [
    [{ a: '1', b: 2, c: true }, 'a=1&b=2&c=true'],
    [{ a: null, b: false, c: undefined }, 'a=&b=false'],
    [{ 'a/b': 1.28341 }, `${encodeURIComponent('a/b')}=1.28341`],
    [
      { 'a/b': 'c/d', 'e=f': 'g&h' },
      `${encodeURIComponent('a/b')}=${encodeURIComponent('c/d')}&${encodeURIComponent(
        'e=f',
      )}=${encodeURIComponent('g&h')}`,
    ],
    // Test arrays of objects - should use indices format (brackets are URL encoded)
    [
      { objects: [{ id: '1', collection: 'teams' }] },
      'objects%5B0%5D%5Bid%5D=1&objects%5B0%5D%5Bcollection%5D=teams',
    ],
    [
      { objects: [{ id: '1', collection: 'teams' }, { id: '2', collection: 'projects' }] },
      'objects%5B0%5D%5Bid%5D=1&objects%5B0%5D%5Bcollection%5D=teams&objects%5B1%5D%5Bid%5D=2&objects%5B1%5D%5Bcollection%5D=projects',
    ],
    // Test simple arrays - should use brackets format (brackets are URL encoded)
    [{ tags: ['tag1', 'tag2'] }, 'tags%5B%5D=tag1&tags%5B%5D=tag2'],
    [{ ids: [1, 2, 3] }, 'ids%5B%5D=1&ids%5B%5D=2&ids%5B%5D=3'],
    // Test mixed: normal params + arrays of objects
    [
      { userId: 'user-123', objects: [{ id: '1', collection: 'teams' }], limit: 10 },
      'userId=user-123&limit=10&objects%5B0%5D%5Bid%5D=1&objects%5B0%5D%5Bcollection%5D=teams',
    ],
    // Test mixed: normal params + simple arrays + arrays of objects
    // Simple arrays should use brackets format, object arrays should use indices format
    [
      { status: 'active', tags: ['tag1', 'tag2'], objects: [{ id: '1', collection: 'teams' }] },
      'status=active&tags%5B%5D=tag1&tags%5B%5D=tag2&objects%5B0%5D%5Bid%5D=1&objects%5B0%5D%5Bcollection%5D=teams',
    ],
    // Test user subscriptions scenario: include array with objects array
    [
      { include: ['preferences'], objects: [{ id: 'test-123', collection: 'new' }] },
      'include%5B%5D=preferences&objects%5B0%5D%5Bid%5D=test-123&objects%5B0%5D%5Bcollection%5D=new',
    ],
  ]) {
    it(`${JSON.stringify(input)} -> ${expected}`, () => {
      expect(stringifyQuery(input)).toEqual(expected);
    });
  }
});
