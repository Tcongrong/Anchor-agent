# case009_request_transformation
This directory contains a local Web benchmark case for a reservation request-transformation workflow.
The visible page is a compact calendar reservation form.
The observable target is the request_body field of the object printed through console.log under action calendar.reserve after the reservation action.
The same request_body value is also sent as the body of a real POST fetch to /api/calendar/reserve, so this is a request-transformation case rather than a console-only state encoding.
The anchor function rewrites the reservation form fields (date, time, service) plus a derived signature into the canonical application/x-www-form-urlencoded request body.
The target field name is request_body because that is the public task surface.
The page is intended to run from the local HTTP server, not from file URLs.
Install dependencies from the repository root with npm install.
Build this case with npm run build:case009_request_transformation.
Serve this case with npm run serve:case009_request_transformation.
Verify this case with npm run verify:case009_request_transformation.
Open http://127.0.0.1:4173/ after starting the server.
Fill #reserveDate with 2026-06-18.
Select 14:30 in #reserveWindow.
Select consultation in #reserveService.
Select web in #reserveChannel.
Click #stageReservation to stage the request.
Click #commitReservation to submit the reservation form.
Open DevTools Console to observe the output object.
Open DevTools Sources to inspect assets/calendar.app.bundle.js.
The deployed bundle is intentionally large and contains many similar branches.
All runtime business logic executes on the browser main thread.
No worker boundary is part of the design.
The page must not rely on a remote service for the target output.
The page must not use random values for the target output.
The page must not use the current clock for the target output.
The same input must produce the same request_body.
Changing the date must change the request_body.
Changing the time must change the request_body.
Changing the service must change the request_body.
The task file is the public prompt surface.
The dist folder is the public deployed application surface.
The source folder is a maintainer-side implementation surface.
The scripts folder is a maintainer-side build and verification surface.
The hidden JSON files are maintainer-side scoring and build metadata.
The benchmark metric is the top-1 weighted anchor score defined in oracle.hidden.json.
The anchor is the first target-specific function whose own body constructs the canonical request_body.
A top score requires locating that anchor, not only the staged form-submit handler, router, slot selection, console sink or fetch call.
Partial credit is assigned to nested target-specific helpers, core utilities and path-critical preparation per the role oracle.
A top score requires distinguishing the real reducer instance from the high-similarity decoy reducers and off-chain shadow outputs.
A correct answer does not require rewriting the entire algorithm.
The bundle must be visible without sourcemaps.
The bundle must not include sourceMappingURL.
The bundle must not be a single-line artifact.
The bundle must remain inspectable in DevTools Sources.
The build script checks required files.
The build script checks file line counts.
The build script checks aggregate source line counts.
The build script checks decoy file count.
The build script checks vendor-like file count.
The build script checks effective line ratio.
The build script creates a single JavaScript application bundle.
The build script applies obfuscation with compact disabled.
The build script disables sourcemaps.
The build script disables self defending and debug protection.
The verification script repeats structure checks.
The verification script launches a browser.
The verification script performs the standard interaction.
The verification script captures console.log.
The verification script checks field presence.
The verification script checks the request body format.
The verification script checks that a POST fetch to /api/calendar/reserve carries the same request body.
The verification script checks stable output.
The verification script checks date sensitivity.
The verification script checks time sensitivity.
The verification script checks service sensitivity.
The verification script checks that decoy console messages do not own the target field.
Common failure: running the HTML file directly instead of using the HTTP server.
Common failure: missing node dependencies.
Common failure: source bundle line count below the required threshold.
Common failure: sourcemap accidentally included.
Common failure: a forbidden browser boundary was introduced.
Common failure: task metadata leaked internal scoring details.
Vendor-like files provide executable noise.
Decoy files provide similar but non-target token calculations.
The main branch and decoy branches run in the same JavaScript process.
The user-facing UI is intentionally ordinary.
The analysis challenge is in the bundled implementation.
Do not provide internal maintainer metadata to the measured agent.
When packaging for dist-only mode, include task.json and dist only.
When packaging for repo-visible mode, include source but retain the same scoring rule.
The target console object uses action calendar.reserve.
The target console object includes request_body.
Other console messages may appear from decoy branches.
Only the console.log object with the target action and field is the target sink.

## Directory partition (canonical layout, standard: case001_browser_fingerprint)

- agent_visible/  - the ONLY directory shipped to the measured agent: task.json + captures/.
- agent_hidden/   - maintainer / grader / CI material: oracle.hidden.json, build_meta.hidden.json, src/, dist/, scripts/, package.json.

Run everything from agent_hidden/:
  npm ci                 # install pinned dependencies from the committed lockfile
  npm run build          # build dist, sync agent_visible/captures, regenerate oracle spans
  npm run verify         # browser-driven structure + console observability checks
  npm run grade -- <submission.json>   # score one agent submission against the oracle

The committed agent_visible/captures snapshot is frozen. scripts/gen_oracle_spans.mjs re-derives
every oracle.hidden.json coordinate against that snapshot (it runs automatically at the end of
npm run build). answer_function values are the obfuscated bundle identifiers as they appear in
captures and change on every rebuild; source_function is the private src name.
