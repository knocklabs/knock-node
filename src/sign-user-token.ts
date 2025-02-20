import { SignJWT, importPKCS8 } from "jose";

import { NoSigningKeyProvidedException } from "./common/exceptions";
import type { SignUserTokenOptions } from "./common/interfaces";
import type { TokenGrant } from "./common/userTokens";

/**
 * Generate JWT for authenticating client-side requests (e.g. in-app feeds)
 * For more information, visit https://docs.knock.app/in-app-ui/security-and-authentication#authentication-with-enhanced-security-enabled
 *
 * @param userId {string} The ID of the user that needs a token, e.g. the user viewing an in-app feed.
 * @param options Optionally specify the signing key to use (in PEM or base-64 encoded format), and how long the token should be valid for in seconds
 * @returns {Promise<string>} A JWT token that can be used to authenticate requests to the Knock API (e.g. by passing into the <KnockFeedProvider /> component)
 */
export async function signUserToken(userId: string, options?: SignUserTokenOptions) {
  const signingKey = prepareSigningKey(options?.signingKey);

  // JWT NumericDates specified in seconds:
  const currentTime = Math.floor(Date.now() / 1000);

  // Default to 1 hour from now
  const expireInSeconds = options?.expiresInSeconds ?? 60 * 60;

  // Convert string key to a Crypto-API compatible KeyLike
  const keyLike = await importPKCS8(signingKey, "RS256");

  return await new SignJWT({
    sub: userId,
    grants: maybePrepareUserTokenGrants(options?.grants),
    iat: currentTime,
    exp: currentTime + expireInSeconds,
  })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .sign(keyLike);
}

function prepareSigningKey(key?: string): string {
  const maybeSigningKey = key ?? process.env.KNOCK_SIGNING_KEY;
  if (!maybeSigningKey) throw new NoSigningKeyProvidedException();
  if (maybeSigningKey.startsWith("-----BEGIN")) return maybeSigningKey;
  // LS0tLS1CRUdJTi is the base64 encoded version of "-----BEGIN"
  if (maybeSigningKey.startsWith("LS0tLS1CRUdJTi"))
    return Buffer.from(maybeSigningKey, "base64").toString("utf-8");

  throw new NoSigningKeyProvidedException();
}

export function maybePrepareUserTokenGrants(
  grants: TokenGrant[] | undefined,
): Record<string, TokenGrant["grants"]> | undefined {
  if (!grants) return undefined;

  // Given a list of token grants, flattens them into a single object
  // like: { "entity": { "slack/channels_read": [] } }
  return grants.reduce<Record<string, TokenGrant["grants"]>>((acc, grant) => {
    if (acc[grant.entity]) {
      const currentGrants = acc[grant.entity];

      return { ...acc, [grant.entity]: { ...currentGrants, ...grant.grants } };
    } else {
      return { ...acc, [grant.entity]: grant.grants };
    }
  }, {});
}
