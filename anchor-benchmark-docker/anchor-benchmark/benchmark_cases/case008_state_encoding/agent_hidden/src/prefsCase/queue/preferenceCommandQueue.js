import { routePreferenceCommand } from "../router/preferenceCommandRouter.js";

const pendingCommands = [];
let drainScheduled = false;

function stampCommand(command) {
  return { ...command, queuedAt: Date.now() };
}

function scheduleDrain() {
  if (drainScheduled) return;
  drainScheduled = true;
  queueMicrotask(() => {
    drainPreferenceQueue();
  });
}

async function drainPreferenceQueue() {
  drainScheduled = false;

  while (pendingCommands.length > 0) {
    const command = pendingCommands.shift();
    await new Promise((resolve) => setTimeout(resolve, 0));
    await routePreferenceCommand(command);
  }
}

export function enqueuePreferenceCommand(command) {
  pendingCommands.push(stampCommand(command));
  scheduleDrain();
}
