/**
 * Token signing functionality for Knock authentication
 */

import * as crypto from 'crypto';
import type { TokenEntity, TokenGrant, TokenGrantOptions } from './userTokens';

// Default hostname for Knock API
const DEFAULT_HOSTNAME = 'https://api.knock.app';

/**
 * Options for signing a user token
 */
export interface SignUserTokenOptions {
  /**
   * The signing key to use (in PEM or base-64 encoded format)
   * If not provided, it will try to use process.env.KNOCK_SIGNING_KEY
   */
  signingKey?: string | undefined;

  /**
   * How long the token should be valid for in seconds
   * @default 3600 (1 hour)
   */
  expiresInSeconds?: number | undefined;

  /**
   * Grants to include in the token
   */
  grants?: TokenGrant[] | undefined;
}

/**
 * Prepare the signing key for use
 */
function prepareSigningKey(key?: string): string {
  const maybeSigningKey = key ?? process.env['KNOCK_SIGNING_KEY'];
  if (!maybeSigningKey)
    throw new Error(
      'No signing key provided. Set KNOCK_SIGNING_KEY environment variable or pass signingKey option.',
    );

  // If it's already in PEM format
  if (maybeSigningKey.startsWith('-----BEGIN')) return maybeSigningKey;

  // LS0tLS1CRUdJTi is the base64 encoded version of "-----BEGIN"
  if (maybeSigningKey.startsWith('LS0tLS1CRUdJTi'))
    return Buffer.from(maybeSigningKey, 'base64').toString('utf-8');

  throw new Error('Invalid signing key format. Must be PEM or base64 encoded PEM.');
}

/**
 * Prepare the token entity URI
 */
function prepareTokenEntityUri(entity: TokenEntity): string {
  switch (entity.type) {
    case 'user':
      return `${DEFAULT_HOSTNAME}/v1/users/${entity.id}`;
    case 'tenant':
      return `${DEFAULT_HOSTNAME}/v1/objects/$tenants/${entity.id}`;
    case 'object':
      return `${DEFAULT_HOSTNAME}/v1/objects/${entity.collection}/${entity.id}`;
  }
}

/**
 * Create and sign a JWT using Node.js crypto
 */
function createJWT(header: object, payload: object, privateKey: string): string {
  // Base64Url encode the header
  const headerBase64 = Buffer.from(JSON.stringify(header))
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  // Base64Url encode the payload
  const payloadBase64 = Buffer.from(JSON.stringify(payload))
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  // Create the content to sign
  const signatureContent = `${headerBase64}.${payloadBase64}`;

  // Sign the content
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signatureContent);

  const signature = signer
    .sign(privateKey, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  // Combine to create the JWT
  return `${signatureContent}.${signature}`;
}

/**
 * Prepare user token grants
 */
export function maybePrepareUserTokenGrants(
  grants: TokenGrant[] | undefined,
): Record<string, TokenGrant['grants']> | undefined {
  if (!grants) return undefined;

  // Given a list of token grants, flattens them into a single object
  // like: { "entity": { "slack/channels_read": [] } }
  return grants.reduce<Record<string, TokenGrant['grants']>>((acc, grant) => {
    if (acc[grant.entity]) {
      const currentGrants = acc[grant.entity];
      return { ...acc, [grant.entity]: { ...currentGrants, ...grant.grants } };
    } else {
      return { ...acc, [grant.entity]: grant.grants };
    }
  }, {});
}

/**
 * Helper function to build user token grants to pass to the `signUserToken` method.
 *
 * @param entity {TokenEntity} The type of entity to build a grant for
 * @param grants {TokenGrantOptions} A list of grants to give to the entity for the user
 *
 * @returns {TokenGrant} A single token grant that can be passed to the signUserToken function
 */
export function buildUserTokenGrant(entity: TokenEntity, grants: TokenGrantOptions): TokenGrant {
  return {
    entity: prepareTokenEntityUri(entity),
    grants: grants.reduce((acc, grant) => ({ ...acc, [grant]: [] }), {}),
  };
}

/**
 * Generate JWT for authenticating client-side requests (e.g. in-app feeds)
 * For more information, visit https://docs.knock.app/in-app-ui/security-and-authentication#authentication-with-enhanced-security-enabled
 *
 * @param userId {string} The ID of the user that needs a token, e.g. the user viewing an in-app feed.
 * @param options Optionally specify the signing key to use (in PEM or base-64 encoded format), and how long the token should be valid for in seconds
 * @returns {Promise<string>} A JWT token that can be used to authenticate requests to the Knock API (e.g. by passing into the <KnockFeedProvider /> component)
 */
export async function signUserToken(userId: string, options?: SignUserTokenOptions): Promise<string> {
  const signingKey = prepareSigningKey(options?.signingKey);

  // JWT NumericDates specified in seconds
  const currentTime = Math.floor(Date.now() / 1000);

  // Default to 1 hour from now
  const expireInSeconds = options?.expiresInSeconds ?? 60 * 60;

  // Create JWT header
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  // Create JWT payload
  const payload = {
    sub: userId,
    grants: maybePrepareUserTokenGrants(options?.grants),
    iat: currentTime,
    exp: currentTime + expireInSeconds,
  };

  // Create and sign the JWT
  return createJWT(header, payload, signingKey);
}
