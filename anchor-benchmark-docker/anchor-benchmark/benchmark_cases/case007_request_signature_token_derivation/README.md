# case007_request_signature_token_derivation

This benchmark case uses the canonical split layout.

- `agent_visible/` contains the public task file and captured browser resources.
- `agent_hidden/` contains private source, build scripts, verification scripts, metadata, and oracle data.

Build and verification must be run from `agent_hidden/`:

```bash
npm run build
npm run verify
```

The public task asks for the captured-bundle function that constructs the `req_sig` value emitted in the `request.sign` console log after the prescribed request-signature interaction.
