# case004_browser_fingerprint

This case uses the canonical benchmark layout.

- `agent_visible/` contains only the public task and captured browser-source dump that a participant may inspect.
- `agent_hidden/` contains source code, build scripts, verification scripts, generated dist files, build metadata and oracle data.

Maintainer workflow:

```bash
cd agent_hidden
npm run build
npm run verify
```

Manual inspection:

```bash
cd agent_hidden
npm run serve
```

Then open `http://127.0.0.1:4173/`.
