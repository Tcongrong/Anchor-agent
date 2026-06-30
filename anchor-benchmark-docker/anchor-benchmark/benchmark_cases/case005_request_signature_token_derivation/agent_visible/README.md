# agent_visible

This directory is the entire corpus exposed to the solver.

- `task.json` — the public task: interaction steps, the console observable
  (`action: vault.sign`, `field: request_sig`), the required JSON answer schema
  (`function_name` + `file` + `slice`), and the anchor disambiguation rules.
- `captures/devtools-source-dump/` — a frozen DevTools "Save all to file" dump of
  the served page: `index.html`, `styles.css`, and the single obfuscated
  `assets/browser.app.bundle.js`. This bundle is the only JavaScript in scope.

No oracle, source, or build metadata lives here. Answer by inspecting
`captures/` only.
