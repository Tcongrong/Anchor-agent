const intentQueue = [];

function makeIntentQueueKey(intent) {
  return [
    intent.command,
    intent.source,
    intent.focus,
    intent.keyChord,
    intent.lane,
    intent.formId
  ].join("|");
}

function cloneIntent(intent) {
  return {
    ...intent,
    queueKey: makeIntentQueueKey(intent)
  };
}

export function dispatchDraftIntent(intent) {
  document.dispatchEvent(
    new CustomEvent("note:draft-intent", {
      detail: intent
    })
  );

  return intent;
}

export function enqueueDraftIntent(intent) {
  intentQueue.push(cloneIntent(intent));

  return Promise.resolve().then(() => {
    const next = intentQueue.shift();
    return next ? dispatchDraftIntent(next) : null;
  });
}
