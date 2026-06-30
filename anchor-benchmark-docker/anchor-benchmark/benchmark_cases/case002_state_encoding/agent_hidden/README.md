# Maintainer / grader material (agent_hidden)

Private case infrastructure:

- `src/` — page and obfuscated logic sources
- `scripts/` — `build.mjs`, `verify.mjs`, `serve.mjs`, `gen_oracle_spans.mjs`, `grade_submission.mjs`
- `oracle.hidden.json` — grader oracle with `answer_function` / `source_function` spans
- `build_meta.hidden.json` — difficulty and build metadata
- `dist/` — local serve target; copied into `../agent_visible/captures/` on build

```bash
npm install
npm run build    # dist + captures sync + oracle span regeneration
npm run verify   # runtime and structure checks
npm run grade -- path/to/submission.json
```
