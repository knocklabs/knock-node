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
