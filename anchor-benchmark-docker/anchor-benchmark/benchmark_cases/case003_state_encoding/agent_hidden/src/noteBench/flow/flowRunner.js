import { flowStepRegistry } from "./flowSteps.js";

function makeFlowTrace(flow, initialContext) {
  return {
    flowName: flow.name,
    channel: flow.channel,
    command: initialContext.command,
    stepCount: flow.steps.length
  };
}

export async function runDraftFlow(flow, initialContext) {
  let ctx = {
    ...initialContext,
    flowName: flow.name,
    started: "shortcut_case003_state_encoding",
    trace: makeFlowTrace(flow, initialContext)
  };

  for (const step of flow.steps) {
    const runStep = flowStepRegistry[step];
    if (typeof runStep !== "function") return null;
    ctx = await runStep(ctx);
  }

  return ctx;
}
