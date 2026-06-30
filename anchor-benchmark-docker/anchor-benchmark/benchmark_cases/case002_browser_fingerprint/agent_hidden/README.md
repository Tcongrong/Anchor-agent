# Maintainer / grader materials

Private to benchmark maintainers and graders. Contains source, build scripts, oracle, and verification tooling.

```bash
npm install
npm run build    # dist + agent_visible/captures + oracle span regeneration
npm run verify   # structural and runtime checks against dist/
npm run serve    # local static server (default port 4191)
npm run grade -- path/to/submission.json
```

After any change under `src/` or obfuscation settings, always rerun `npm run build` so captures and `oracle.hidden.json` stay aligned.
