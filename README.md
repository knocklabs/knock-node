# Knock Node.js library

Knock API access for applications written in server-side Javascript. This package is compatible with the [Vercel Edge runtime](https://vercel.com/docs/functions/runtimes/edge-runtime) and with [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Documentation

See the [documentation](https://docs.knock.app) for Node.js usage examples.

## Installation

```bash
npm install @knocklabs/node
```

## Configuration

To use the library you must provide a secret API key, provided in the Knock dashboard.

If you are using [enhanced security mode](https://docs.knock.app/client-integration/authenticating-users) you will also need to provide your signing key.

You can set both as environment variables:

```bash
KNOCK_API_KEY="sk_12345"
KNOCK_SIGNING_KEY="S25vY2sga25vY2sh..."
```

You can also pass the Knock API key in the constructor. The signing key is passed separately to the `signUserToken` method (see below):

```javascript
import { Knock } from "@knocklabs/node";

const knockClient = new Knock("sk_12345");
```

## Usage

### Sending notifications (triggering workflows)

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

// The key of the workflow (from Knock dashboard)
await knockClient.workflows.trigger("dinosaurs-loose", {
  // user id of who performed the action
  actor: "dnedry",
  // list of user ids for who should receive the notification
  recipients: ["jhammond", "agrant", "imalcolm", "esattler"],
  // data payload to send through
  data: {
    type: "trex",
    priority: 1,
  },
  // an optional identifier for the tenant that the notifications belong to
  tenant: "jurassic-park",
  // an optional key to provide to cancel a workflow
  cancellationKey: triggerAlert.id,
});
```

### Canceling workflows

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

await knockClient.workflows.cancel("dinosaurs-loose", triggerAlert.id, {
  // optionally you can specify recipients here
  recipients: ["jhammond"],
});
```

### Identifying users

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

await knockClient.users.identify("jhammond", {
  name: "John Hammond",
  email: "jhammond@ingen.net",
});
```

### Retrieving users

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

await knockClient.users.get("jhammond");
```

### Deleting users

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

await knockClient.users.delete("jhammond");
```

### Preferences

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

// Set an entire preference set
await knockClient.users.setPreferences("jhammond", {
  channel_types: { email: true, sms: false },
  workflows: {
    "dinosaurs-loose": {
      channel_types: { email: false, in_app_feed: true },
    },
  },
});

// Retrieve a whole preference set
const preferences = await knockClient.users.getPreferences("jhammond");
```

### Getting and setting channel data

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

// Setting channel data for an APNS
await knockClient.users.setChannelData("jhammond", KNOCK_APNS_CHANNEL_ID, {
  tokens: [apnsToken],
});

// Getting channel data for the APNS channel
await knockClient.users.getChannelData("jhammond", KNOCK_APNS_CHANNEL_ID);
```

### Slack

```javascript
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

const tenantId = "tenant-123";
const knockSlackChannelId = "7c1e0042-5ef2-411a-a43b-e541acb139ed";
// An optional object containing the query options passed to Slack:
// https://api.slack.com/methods/conversations.list#arg_cursor
const queryOptions = {
  cursor: null,
  limit: 200,
  exclude_archived: true,
  team_id: null,
  types: "public_channel",
};

// Retrieve a list of Slack channels
const channelsInput = {
  tenant: tenantId,
  knockChannelId: knockSlackChannelId,
  queryOptions,
};
await knockClient.slack.getChannels(channelsInput);

// Check Slack connection
const authInput = { tenant: tenantId, knockChannelId: knockSlackChannelId };
await knockClient.slack.authCheck(authInput);

// Revoke access token
const revokeInput = { tenant: tenantId, knockChannelId: knockSlackChannelId };
await knockClient.slack.revokeAccessToken(revokeInput);
```

### Signing JWTs

When using [enhanced security mode](https://docs.knock.app/client-integration/authenticating-users) (recommended in production), you will need to sign JWTs server-side to authenticate your users.

You will need to generate an environment specific signing key in the Knock dashboard under "API Keys", and then enable enhanced security mode for your environment.

```javascript
import { Knock } from "@knocklabs/node";

// When signing user tokens, you do not need to instantiate a Knock client.

// jhammond is the user id for which to sign this token
const token = await Knock.signUserToken("jhammond", {
  // The signing key from the Knock Dashboard in base-64 or PEM-encoded format.
  // If not provided, the key will be read from the KNOCK_SIGNING_KEY environment variable.
  signingKey: "S25vY2sga25vY2sh...",
  // Optional: How long the token should be valid for, in seconds (default 1 hour)
  // For long-lived connections, you will need to refresh the token before it expires.
  expiresInSeconds: 60 * 60,
});

// This token can now be safely passed to your client e.g. in a cookie or API response.
```
