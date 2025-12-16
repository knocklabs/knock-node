import { buildUserTokenGrant, signUserToken } from '@knocklabs/node';
import { generateKeyPairSync } from 'node:crypto';

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function decodeJwtPayload(token: string): unknown {
  const [, payload] = token.split('.');
  if (!payload) {
    throw new Error('Invalid token format');
  }

  const padded = payload
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .padEnd(Math.ceil(payload.length / 4) * 4, '=');
  return JSON.parse(Buffer.from(padded, 'base64').toString('utf8')) as unknown;
}

function decodeJwtPayloadRecord(token: string): Record<string, unknown> {
  const payload = decodeJwtPayload(token);
  if (!(typeof payload === 'object' && payload !== null)) {
    throw new Error('Invalid JWT payload');
  }

  return payload as Record<string, unknown>;
}

describe('buildUserTokenGrant', () => {
  it('is exported from root of package', () => {
    expect(buildUserTokenGrant).toBeDefined();
  });
});

describe('signUserToken', () => {
  let signingKey: string;

  beforeAll(() => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
    signingKey = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('is exported from root of package', () => {
    expect(signUserToken).toBeDefined();
  });

  describe('shouldGenerateJit', () => {
    it('should include a jti when shouldGenerateJit is true', async () => {
      const inputToken = await signUserToken('user-1', { signingKey, shouldGenerateJit: true });
      const actualPayload = decodeJwtPayloadRecord(inputToken);

      expect(actualPayload['jti']).toEqual(expect.any(String));
      expect(String(actualPayload['jti'])).toMatch(UUID_V4_REGEX);
    });

    it.each([false, undefined])(
      'should not include a jti when shouldGenerateJit is %s',
      async (shouldGenerateJit) => {
        const inputTokenFalse = await signUserToken('user-1', { signingKey, shouldGenerateJit });
        const actualPayloadFalse = decodeJwtPayloadRecord(inputTokenFalse);
        expect(actualPayloadFalse['jti']).toBeUndefined();
      },
    );

    it('should generate a different jti per token when shouldGenerateJit is true', async () => {
      // To make this check deterministic, we need to mock the system time,
      // with the parameter shouldGenerateJit as true, tokens should be
      // different even if the head and payload are the same.
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2025-01-01T00:00:00Z'));

      const inputToken1 = await signUserToken('user-1', { signingKey, shouldGenerateJit: true });
      const inputToken2 = await signUserToken('user-1', { signingKey, shouldGenerateJit: true });

      const actualPayload1 = decodeJwtPayloadRecord(inputToken1);
      const actualPayload2 = decodeJwtPayloadRecord(inputToken2);

      expect(actualPayload1['jti']).toEqual(expect.any(String));
      expect(actualPayload2['jti']).toEqual(expect.any(String));
      expect(actualPayload1['jti']).not.toEqual(actualPayload2['jti']);
    });

    it('should generate the same token when the head and payload are the same and shouldGenerateJit is false', async () => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2025-01-01T00:00:00Z'));

      const inputToken1 = await signUserToken('user-1', { signingKey, shouldGenerateJit: false });
      const inputToken2 = await signUserToken('user-1', { signingKey, shouldGenerateJit: false });

      expect(inputToken1).toEqual(inputToken2);
    });
  });
});
