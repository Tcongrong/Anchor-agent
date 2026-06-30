# Maintainer / grader material (agent_hidden)

Private case infrastructure:

- `src/` — page and obfuscated logic sources
- `scripts/` — build, verify, serve, oracle sync, and grading tools
- `oracle.hidden.json` — grader oracle with `answer_function` / `source_function` spans
- `build_meta.hidden.json` — difficulty and build metadata
- `dist/` — local serve target; copied into `../agent_visible/captures/` on build

## Maintainer rebuild workflow

Run from this directory (`agent_hidden/`):

```bash
npm install
npm run build
npm run verify
npm run grade -- path/to/submission.json
```

### What `npm run build` does

1. Rollup + obfuscate `src/noteBench/main.js` → `dist/assets/note.app.bundle.js`
2. Copy `dist/` into `../agent_visible/captures/devtools-source-dump/`
3. `node scripts/gen_oracle_spans.mjs` — recompute spans/hash/`answer_function` for all on-chain `role_oracle` rows and `primary_anchor` from `src/` ↔ bundle mapping
4. `node scripts/sync_offchain_oracle.mjs` — append/update Off-chain rows for:
   - 12 shadow encoders (`encodeShadowNoteState00`–`11`)
   - 3 name-confusion decoys (`composeDraftStateCode` / `Codec` / `Preview`)
   - 69 haystack modules (`haystack:n00`–`n43`, `haystack:v00`–`v24`)

### Regenerating source trees (only when changing haystack size)

```bash
node scripts/gen_note_distractors.mjs   # 44 noise + 25 vendor modules
node scripts/gen_note_shadow_decoys.mjs   # 12 shadow encoder modules
npm run build
```

After editing `src/` or obfuscation settings, always run **`npm run build`** (not `gen_oracle_spans` alone) so captures, on-chain oracle spans, and off-chain rows stay aligned.

### Anchor identity

- **Live anchor (score 1):** `sealDraftFrameCode` in `src/noteBench/pack/final/noteStateCodec.js`
- **Name decoys (score 0):** `composeDraftStateCode`, `composeDraftStateCodec`, `composeDraftStatePreview` in `src/noteBench/decoys/nameConfusionDecoys.js`

Agents must trace the `note.add` keyboard path; grepping `composeDraftStateCode` alone hits decoys, not the anchor.
