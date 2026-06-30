# case010_state_encoding — agent-visible corpus

This directory is the only material a benchmark agent may read:

- `task.json` — the task statement, interaction steps, observable, and the
  required answer JSON schema.
- `captures/devtools-source-dump/` — a frozen DevTools "Sources" dump of the
  page during initial load: `index.html`, `styles.css`, `favicon.svg`, and the
  single application bundle `assets/media.app.bundle.js`.

Answer by inspecting only the JavaScript under
`captures/devtools-source-dump/**/*.js` and returning one complete function as
the JSON object described in `task.json: answer_format`.
