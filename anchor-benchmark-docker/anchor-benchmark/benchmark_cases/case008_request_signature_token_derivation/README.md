# case008_request_signature_token_derivation

This benchmark is an API request signer console with a request-signature derivation target.
It uses the canonical split layout.

- `agent_visible/` contains the public task file (`task.json`) and the captured browser
  resources (`captures/devtools-source-dump/**`). The evaluation harness packages only this
  directory.
- `agent_hidden/` contains the private source, build/verify/serve/gen/grade scripts, the case
  metadata (`build_meta.hidden.json`) and the private oracle (`oracle.hidden.json`).

Build, verification, oracle generation, and grading run from `agent_hidden/`:

```bash
cd agent_hidden
npm run build     # rollup -> obfuscate -> refresh agent_visible/captures -> gen_oracle_spans
npm run verify    # Playwright runtime + structural checks
npm run gen-oracle  # recompute oracle captured_span/answer_function from the captured bundle
npm run grade <submission.json>   # score an agent submission against the oracle
npm run serve     # serve dist over http://127.0.0.1:8478/
```

The public task asks for the captured-bundle function that constructs the `req_sig` value
emitted in the `console.log` object whose action is `request.sign`, after staging an API
request, sealing its envelope, and signing the sealed request (Stage, Seal, Sign). The
private anchor is the source function `deriveRequestSignature` (preserved by name in the
obfuscated bundle), reached through the exported `u(config)` factory at slot 23.
