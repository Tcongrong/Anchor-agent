# case009_request_signature_token_derivation

A function-localization benchmark case. The participating agent is given an obfuscated web bundle and must
locate the single function that constructs a target console-observable value.

This case is physically partitioned (canonical reference layout: case001_browser_fingerprint):

```
case009_request_signature_token_derivation/
  README.md            # this file (maintainer; agent does not read it)
  agent_visible/       # the ONLY directory packaged for the agent
    task.json          # public task: question + answer_format (function_name + slice)
    captures/          # frozen DevTools source dump (the obfuscated bundle + page)
  agent_hidden/        # maintainer / grader / CI only; never shipped to the agent
    README.md          # build + anchor notes
    package.json + package-lock.json
    oracle.hidden.json        # private gold standard (primary_anchor + role_oracle)
    build_meta.hidden.json    # task contract + difficulty analysis
    src/               # source (host page + z0/** business / decoy / vendor modules)
    scripts/           # build.mjs, gen_oracle_spans.mjs, verify.mjs, serve.mjs, grade_submission.mjs
    dist/              # build output (bundle synced into agent_visible/captures)
```

The task: after filling the reservation request fields, enabling replay protection and clicking Arm then
Sign, the page logs an object under action `reservation.sign`; the agent must return the anchor function
for that object's `req_sig` signature token, as a complete function plus its location in the captures bundle.

Build / verify / grade from `agent_hidden/` (`npm ci && npm run build && npm run verify`). The build is
byte-reproducible (fixed obfuscator seed + pinned deps) and regenerates `captures/` and `oracle.hidden.json`
together, so the agent corpus and the gold standard never drift.
