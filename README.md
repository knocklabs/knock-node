# Knock Node.js library

Knock API access for applications written in server-side Javascript.

## Documentation

See the [documentation](https://docs.knock.app) for Node.js usage examples.

## Installation

```bash
npm install @knocklabs/node
```

## Configuration

To use the library you must provide a secret API key, provided in the Knock dashboard.

You can set it as an environment variable:

```bash
KNOCK_API_KEY="sk_12345"
```

Or, you can set it before your application starts:

```javascript
const { Knock } = require("@knocklabs/node");

const knockClient = new Knock("sk_12345");
```

## Usage

### Identifying users

```javascript
const { Knock } = require("@knocklabs/node");
const knockClient = new Knock("sk_12345");

await knockClient.users.identify("jhammond", {
  name: "John Hammond",
  email: "jhammond@ingen.net",
});
```

### Sending notifies (triggering workflows)

```javascript
const { Knock } = require("@knocklabs/node");
const knockClient = new Knock("sk_12345");

// The key of the workflow (from Knock dashboard)
await knockClient.notify("dinosaurs-loose", {
  // user id of who performed the action
  actor: "dnedry",
  // list of user ids for who should receive the notif
  recipients: ["jhammond", "agrant", "imalcolm", "esattler"],
  // data payload to send through
  data: {
    type: "trex",
    priority: 1,
  },
  // an optional identifier for the tenant that the notifications belong to
  tenant: "jurassic-park",
  // an optional key to provide to cancel a notify
  cancellationKey: triggerAlert.id,
});
```

### Retrieving users

```javascript
const { Knock } = require("@knocklabs/node");
const knockClient = new Knock("sk_12345");

await knockClient.users.get("jhammond");
```

### Deleting users

```javascript
const { Knock } = require("@knocklabs/node");
const knockClient = new Knock("sk_12345");

await knockClient.users.delete("jhammond");
```

### Preferences

```javascript
const { Knock } = require("@knocklabs/node");
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
const { Knock } = require("@knocklabs/node");
const knockClient = new Knock("sk_12345");

// Setting channel data for an APNS
await knockClient.users.setChannelData("jhammond", KNOCK_APNS_CHANNEL_ID, {
  tokens: [apnsToken],
});

// Getting channel data for the APNS channel
await knockClient.users.getChannelData("jhammond", KNOCK_APNS_CHANNEL_ID);
```

### Canceling workflows

```javascript
const { Knock } = require("@knocklabs/node");
const knockClient = new Knock("sk_12345");

await knockClient.workflows.cancel("dinosaurs-loose", triggerAlert.id, {
  // optionally you can specify recipients here
  recipients: ["jhammond"],
});
```

### Signing JWTs

You can use the `jsonwebtoken` package to [sign JWTs easily](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback).
You will need to generate an environment specific signing key, which you can find in the Knock dashboard.

If you're using a signing token you will need to pass this to your client to perform authentication.
You can read more about [client-side authentication here](https://docs.knock.app/client-integration/authenticating-users).

```javascript
const jwt = require("jsonwebtoken");

const currentTime = Math.floor(Date.now() / 1000);

const token = jwt.sign(
  {
    // The user id to sign this key for
    sub: "jhammond",
    // When the token was issued
    iat: currentTime,
    // When the token expires (1 hour)
    exp: currentTime + 60 * 60,
  },
  process.env.KNOCK_SIGNING_KEY,
  { algorithm: "RS256" },
);
```
