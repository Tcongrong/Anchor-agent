# case006_request_signature_token_derivation

Local API request-signing workbench. The page accepts an endpoint path, HTTP
method, endpoint class, signing algorithm, request body and replay-protection
consent, then — after the three-step validate / lock / commit flow — logs one
console object `{ action: "vault.req.commit", request_sig: "rs_XXXXXX-XXXXXX", ... }`.
The benchmark task is to localize the single function that constructs the
`request_sig` value.

## Directory partition (canonical, see `benchmark_cases/审查.md` §14)

```
case006_request_signature_token_derivation/
├── README.md                 # this file (maintainer-facing; agent does not read it)
├── agent_visible/            # the ONLY directory shipped to the agent
│   ├── README.md
│   ├── task.json             # public task + answer_format submission schema
│   └── captures/             # frozen DevTools source dump (the visible corpus)
└── agent_hidden/             # maintainer / grader / CI only
    ├── README.md
    ├── package.json
    ├── oracle.hidden.json    # private grading key (answer_function + captured_span)
    ├── build_meta.hidden.json
    ├── src/                  # authored source (obfuscated into the bundle)
    ├── scripts/              # build.mjs, gen_oracle_spans.mjs, verify.mjs, serve.mjs, grade_submission.mjs
    └── dist/                 # build output (synced into agent_visible/captures/)
```

The evaluation harness must package **only** `agent_visible/`.

## Build / verify / grade

```bash
cd agent_hidden
npm ci
npm run build     # build dist -> sync captures -> regenerate oracle spans
npm run verify    # structural + runtime (Playwright) checks
npm run grade -- <submission.json>   # reference grader for an agent answer
```

The bundle is byte-reproducible (fixed obfuscator seed). `build.mjs` keeps the
oracle's `captured_span` coordinates in sync with the frozen captures bundle, so
the answer key never drifts from the corpus the agent actually sees.
