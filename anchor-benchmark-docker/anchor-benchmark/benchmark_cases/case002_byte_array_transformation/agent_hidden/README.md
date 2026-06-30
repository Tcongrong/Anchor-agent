# case002_byte_array_transformation
This benchmark case presents a byte packet builder page with a deterministic browser-main-thread execution path.
The page is served from the local dist directory and the loaded bundle is visible as assets/packet.app.bundle.js.
The test interaction fills #sourceBytes, sets #chunkSize, selects #encodingMode and #profileSelect, checks #includeHeader, clicks #stagePacket, then clicks #emitPacket.
The observable result is the console.log object whose action is packet.transform and whose target field is byte_payload.
The same stage/emit interaction also emits non-target console.log objects with byte_payload-like values.
Those decoys are intentionally valid-looking byte payload strings and must not be treated as the answer.
The expected value format is /^bp_[A-Za-z0-9_-]{24}$/.
Install dependencies from the repository root with npm install.
Build with npm run build:case002_byte_array_transformation.
Serve with npm run serve:case002_byte_array_transformation.
Verify with npm run verify:case002_byte_array_transformation.
Open the printed http://127.0.0.1 URL in a browser.
Do not use file:// because module loading and path behavior must match the benchmark server.
The public task file is task.json and the deployed page under dist.
oracle.hidden.json and build_meta.hidden.json are not provided to the measured agent.
All runtime business behavior stays on the browser main thread.
The benchmark intentionally uses local events, routing layers, middleware-style state movement, and a state-machine trampoline.
There is no remote code loading.
There is no anti-debugging behavior.
There is no environment-specific branch for Playwright or DevTools.
The byte-array converter is shared by real and decoy branches, and the selected reducer branch is derived from config and runtime route state.
Many decoy branches produce similar byte-like strings through console.debug, console.info, DOM dataset, window cache, and internal queues.
Only the console.log object with action packet.transform and field byte_payload is the target output.
The dist bundle is intentionally multiline and sourcemap-free.
The bundle must remain inspectable in DevTools Sources.
The build script checks file existence, minimum lines, source totals, dist totals, and forbidden runtime boundaries.
The verify script repeats those checks and performs browser interaction tests.
