# case002_browser_fingerprint

Files are partitioned by agent visibility:

| Directory | Audience | Contents |
|---|---|---|
| [`agent_visible/`](agent_visible/) | **Benchmark agents** | `task.json`, `captures/` |
| [`agent_hidden/`](agent_hidden/) | **Maintainers / graders** | `src/`, `scripts/`, `dist/`, `oracle.hidden.json`, `build_meta.hidden.json`, tooling |

Build and verify from `agent_hidden/`:

```bash
cd agent_hidden
npm install
npm run build
npm run verify
```

The page is a browser signal probe. After configuring platform/canvas/audio/timezone, set probe scope to global and click Run Analysis. The target observable is the `console.log` object whose action is `fingerprint.scan` and whose field is `browser_fingerprint` (format `^fp_[A-Za-z0-9_-]{24}$`).
