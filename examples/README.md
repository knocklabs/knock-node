# Knock Node.js SDK Examples

This directory contains examples demonstrating how to use the Knock Node.js SDK.

## Token Signing

The Knock Node.js SDK provides functionality to sign authentication tokens for client-side requests. This is particularly useful for authenticating in-app feeds and other client-side components.

### Basic Usage

```typescript
import Knock from '@knocklabs/node';

// Generate a JWT token for user-1
const token = await Knock.signUserToken('user-1');

console.log('Token:', token);
```

### Advanced Usage with Grants

You can provide specific grants to control access to different resources:

```typescript
import Knock, { Grants } from '@knocklabs/node';

const token = await Knock.signUserToken('user-1', {
  // Token valid for 12 hours (43200 seconds)
  expiresInSeconds: 43200,
  // Grants for tenant and object access
  grants: [
    // Grant access to a tenant
    Knock.buildUserTokenGrant({ type: 'tenant', id: 'tenant-id' }, [Grants.SlackChannelsRead]),

    // Grant access to specific objects
    Knock.buildUserTokenGrant({ type: 'object', id: 'object-id', collection: 'videos' }, [
      Grants.ChannelDataRead,
      Grants.ChannelDataWrite,
    ]),
  ],
});
```

### Available Grants

The SDK provides several predefined grants:

- `Grants.SlackChannelsRead` - Access to read Slack channels
- `Grants.MsTeamsChannelsRead` - Access to read Microsoft Teams channels
- `Grants.ChannelDataRead` - Access to read channel data
- `Grants.ChannelDataWrite` - Access to write channel data
- `Grants.UserFeedRead` - Access to read user feed

### Running the Examples

To run the examples, first make sure you have the SDK installed and built:

```bash
# Install dependencies
yarn install

# Build the SDK
yarn build
```

Then you can run the examples:

```bash
# Run the token signing example
yarn ts-node examples/token-signing.ts
```

You may need to set up environment variables before running:

```bash
# Set your Knock API key
export KNOCK_API_KEY="your_api_key_here"

# Optionally, set a custom signing key for the advanced example
export CUSTOM_SIGNING_KEY="your_signing_key_here"
```

For more information about authentication and token signing, visit [Knock's Authentication Documentation](https://docs.knock.app/in-app-ui/security-and-authentication#authentication-with-enhanced-security-enabled).
