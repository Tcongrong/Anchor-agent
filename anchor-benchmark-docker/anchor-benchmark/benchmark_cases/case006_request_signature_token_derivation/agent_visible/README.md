# case006_request_signature_token_derivation — agent-visible corpus

This directory is the complete set of files visible to the tested agent.

- `task.json` — the public task: the interaction sequence, the console observable
  to look for, the question, and `answer_format` (the JSON submission schema:
  `function_name` + `file` + `slice{start_line,end_line,start_offset,end_offset,code}`).
- `captures/devtools-source-dump/` — a frozen DevTools "Sources" dump of the
  built local page. The only JavaScript in scope is the single bundle under
  `captures/.../assets/upload.app.bundle.js`. No source maps are exposed.

The agent inspects the captured bundle, performs the documented interaction,
and submits exactly one complete function (the
`request_sig` constructor) as a single JSON object matching
`task.json: answer_format.response_schema`.

Nothing else from the case (source, oracle, build scripts) is available to the
agent.
