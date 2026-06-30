# Maintainer / grader materials

Private to this case:

- `src/` — obfuscated source tree (`src/z4/**`)
- `scripts/` — `build.mjs`, `verify.mjs`, `serve.mjs`, `gen_oracle_spans.mjs`, `grade_submission.mjs`
- `oracle.hidden.json` — span coordinates and scoring roles
- `build_meta.hidden.json` — difficulty and build analysis metadata
- `dist/` — local build output (synced into `../agent_visible/captures/` on build)

```bash
npm run build    # dist + captures + oracle spans
npm run verify   # runtime + structure checks
npm run serve    # manual inspection at http://127.0.0.1:4173/
npm run grade -- path/to/submission.json
```
