# case008_browser_fingerprint

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

Serve locally on port 8478:

```bash
cd agent_hidden
npm run serve
```

The standard interaction selects scan mode active, hash rounds 2, entropy depth 8, vendor hint chromium, enables extended signals and canvas probe, then clicks Calibrate, Arm, Preview signals, and Scan and Fingerprint. The target observable is a `console.log` object with action `fingerprint.collect` and field `browser_fp` matching `fp_` followed by twelve lowercase base36 characters.
