import { buildUserTokenGrant, Grants, signUserToken } from '@knocklabs/node';

describe('buildUserTokenGrant', () => {
  it('is exported from root of package', () => {
    expect(buildUserTokenGrant).toBeDefined();
  });
});

describe('signUserToken', () => {
  it('is exported from root of package', () => {
    expect(signUserToken).toBeDefined();
  });
});

describe('Grants', () => {
  it('is exported from root of package', () => {
    expect(Grants).toBeDefined();
  });
});
