/**
 * This example demonstrates how to use the token signing functionality in Knock
 * for authenticating client-side requests, such as for in-app feeds.
 *
 * Learn more: https://docs.knock.app/in-app-ui/security-and-authentication#authentication-with-enhanced-security-enabled
 */
import { signUserToken, buildUserTokenGrant, Grants } from '../src/lib';

/**
 * Helper function to decode a JWT token
 */
function decodeToken(token: string) {
  const [, payload] = token.split('.');
  if (!payload) {
    throw new Error('Invalid token format');
  }
  return JSON.parse(Buffer.from(payload, 'base64').toString());
}

/**
 * Example 1: Basic usage - Sign a token for a user
 */
async function basicTokenSigning() {
  try {
    // Generate a JWT token for user-1
    const token = await signUserToken('user-1');
    console.log('Basic token:', token);

    // Decode and display the token contents
    const decoded = decodeToken(token);
    console.log('Decoded token:', JSON.stringify(decoded, null, 2));
  } catch (error) {
    console.error('Error signing token:', error);
  }
}

/**
 * Example 2: Advanced usage - Sign a token with custom expiration and grants
 */
async function advancedTokenSigning() {
  try {
    // Get signing key from environment or use a test key
    const signingKey = process.env['KNOCK_SIGNING_KEY'] || undefined;

    // Generate a JWT token with custom expiration and grants
    const token = await signUserToken('user-1', {
      // Token valid for 12 hours (43200 seconds)
      expiresInSeconds: 43200,
      // Custom signing key (normally from environment variable)
      signingKey,
      // Grants for tenant and object access
      grants: [
        // Grant access to a tenant
        buildUserTokenGrant({ type: 'tenant', id: 'jurassic-park' }, [Grants.SlackChannelsRead]),

        // Grant access to specific objects
        buildUserTokenGrant({ type: 'object', id: 'dinosaurs-loose', collection: 'videos' }, [
          Grants.ChannelDataRead,
          Grants.ChannelDataWrite,
        ]),

        buildUserTokenGrant({ type: 'object', id: 'raptor-feeding-guide', collection: 'videos' }, [
          Grants.ChannelDataRead,
          Grants.ChannelDataWrite,
        ]),
      ],
    });

    console.log('Advanced token:', token);

    // Decode and display the token contents
    const decoded = decodeToken(token);
    console.log('Decoded token:', JSON.stringify(decoded, null, 2));
  } catch (error) {
    console.error('Error signing token:', error);
  }
}

/**
 * Example 3: Unique tokens with jti
 *
 * JWT tokens use second-precision timestamps, so tokens generated within
 * the same second are identical. Use shouldGenerateJti to include a unique
 * JWT ID (jti) claim, ensuring each token is unique.
 */
async function uniqueTokenSigning() {
  try {
    const token = await signUserToken('user-1', {
      shouldGenerateJit: true,
    });
    console.log('Token with jti:', token);

    const decoded = decodeToken(token);
    console.log('Decoded token:', JSON.stringify(decoded, null, 2));
    console.log('JWT ID (jti):', decoded.jti);
  } catch (error) {
    console.error('Error signing token:', error);
  }
}

// Run the examples
(async () => {
  console.log('===== Knock Token Signing Examples =====');

  await basicTokenSigning();
  console.log('\n---\n');

  await advancedTokenSigning();
  console.log('\n---\n');

  await uniqueTokenSigning();
  console.log('\n===== End of Examples =====');
})();
