# Maintainer / grader material (agent-invisible)

Everything agents **must not** see for this case.

| Path | Role |
|---|---|
| `roles.config.json` | Human-authored anchor + role list (freeze input) |
| `oracle.hidden.json` | Generated gold standard: weighted role spans + hashes |
| `build_meta.hidden.json` | Difficulty / classification / provenance metadata |
| `scripts/` | Thin wrappers over `../../_tooling/` (freeze / verify / grade) |

## Commands (from this directory)

```bash
npm run freeze    # roles.config.json -> oracle.hidden.json
npm run verify    # static checks (no browser)
npm run grade -- submission.json
```

## Notes
- `captured_span` offsets are 0-based UTF-16 code units over the BOM-stripped file.
- Locators in `roles.config.json` come from the **real captured bytes** (grep the
  file), not from `1.json.code` (which is whitespace-beautified).
- The agent-visible `task.json` must never contain the anchor's `answer_function`
  name (verify checks this; add generic names to `_answer_leak_allow` if needed).
