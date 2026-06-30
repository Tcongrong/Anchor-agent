# Maintainer Notes

This directory contains private build, source, oracle, and grading material for
`case007_request_transformation`. It is not distributed to benchmark agents.

## Commands

```bash
npm install
npm run build
npm run verify
npm run gen
npm run grade
```

`npm run build` creates `dist/`, synchronizes the built page and bundle into
`../agent_visible/captures/`, regenerates `oracle.hidden.json` captured spans, and updates
`build_meta.hidden.json`.

`npm run verify` serves the private `dist/` directory on an ephemeral port and checks the
runtime console observable declared in `../agent_visible/task.json`.

`npm run grade` scores a submitted JSON answer against `oracle.hidden.json` and the
agent-visible captured bundle.
