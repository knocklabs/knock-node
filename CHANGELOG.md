## v0.6.0

### Major Changes

- Add Vercel Edge runtime compatibility

### Breaking Changes

- `Knock.signUserToken` is now asynchronous and returns `Promise<string>` instead of `string`

## v0.4.18

- Introduce "Idempotency-Key" header for workflow triggers
