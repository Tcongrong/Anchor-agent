# Maintainer / grader material (agent_hidden)

Private to benchmark maintainers and graders. **Do not** ship this directory to agents.

## Key files

- `oracle.hidden.json` — span coordinates, roles, scores, `primary_anchor`
- `build_meta.hidden.json` — difficulty analysis and task contract metadata
- `scripts/build.mjs` — build dist, sync captures, regenerate oracle spans
- `scripts/verify.mjs` — runtime and structural checks
- `scripts/gen_oracle_spans.mjs` — map `src/` functions to captured bundle spans
- `scripts/grade_submission.mjs` — score agent JSON submissions

## Workflow

```bash
npm install
npm run build    # dist + agent_visible/captures + oracle span refresh
npm run verify   # Playwright interaction + bundle checks
```
