# case010_request_signature_token_derivation

A function-localization benchmark case. The participating agent is given an obfuscated web bundle and must
locate the single function that constructs a target console-observable value.

This case is physically partitioned (canonical reference layout: case001_browser_fingerprint):

```
case010_request_signature_token_derivation/
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
    dist/              # build output (kept identical to the captures snapshot)
```

The task: after configuring the manifest delivery controls (carrier route, priority band, delivery window,
manifest ID), selecting the integrity binding, clicking Snapshot manifest and then submitting Issue seal,
the page logs an object under action `media.sign`; the agent must return the anchor function for that
object's `req_sig` signature token, as a complete function plus its location in the captures bundle.

Verify / grade from `agent_hidden/` (`npm ci && npm run verify`). The committed `agent_visible/captures`
bundle and `oracle.hidden.json` are a frozen, runtime-verified snapshot; `scripts/gen_oracle_spans.mjs`
re-derives every oracle coordinate against that bundle structurally (the obfuscator mangles all answer
function names, so resolution is by surviving numeric fingerprints + the AST call graph, not by name).
A fixed obfuscator seed and pinned deps + lockfile make any future `npm run build` deterministic.
