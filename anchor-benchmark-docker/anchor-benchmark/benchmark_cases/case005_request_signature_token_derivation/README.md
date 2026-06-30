# case005_request_signature_token_derivation

Behavior-based code-location benchmark case. The visible task: perform the
documented two-click request-signature interaction and locate the function whose
own body constructs the `request_sig` value logged in the `vault.sign` console
object.

## Layout (canonical, see case001_browser_fingerprint)

```
case005_request_signature_token_derivation/
├── README.md                 # this file (maintainer; agent does NOT read it)
├── agent_visible/            # the ONLY directory packaged for the agent
│   ├── README.md
│   ├── task.json             # public task + answer_format.response_schema
│   └── captures/             # frozen DevTools source dump (the visible corpus)
└── agent_hidden/             # maintainer / grader / CI only (never shipped to agent)
    ├── README.md
    ├── package.json
    ├── oracle.hidden.json    # private gold standard (answer_function/source_function)
    ├── build_meta.hidden.json
    ├── src/                  # authored sources (obfuscated into the bundle)
    ├── scripts/              # build.mjs, verify.mjs, serve.mjs, gen_oracle_spans.mjs, grade_submission.mjs
    └── dist/                 # build output; synced into agent_visible/captures/
```

The evaluation harness must package **only** `agent_visible/`.

## Build / verify (maintainer)

```
cd agent_hidden
npm run build     # rollup + obfuscate (fixed seed) -> dist -> sync captures -> regenerate oracle spans
npm run verify    # structural + runtime (Playwright) checks
npm run grade -- <submission.json>   # reference grader for an agent answer
```

`build.mjs` uses a fixed obfuscator seed, so two clean builds are byte-identical,
and it regenerates `oracle.hidden.json` from the freshly synced captures bundle
via `gen_oracle_spans.mjs` (src -> captures -> oracle closure).
