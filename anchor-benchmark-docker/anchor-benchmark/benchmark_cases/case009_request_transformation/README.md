# case009_request_transformation

Canonical two-directory benchmark case (standard: case001_browser_fingerprint).

- **agent_visible/** - everything the measured agent may read: `task.json` and `captures/`.
- **agent_hidden/**  - maintainer/grader/CI only: `oracle.hidden.json`, `build_meta.hidden.json`,
  `src/`, `dist/`, `scripts/`, `package.json`.

The evaluation harness must package **only** `agent_visible/`. See `agent_hidden/README.md` for build,
verify and grading instructions.
