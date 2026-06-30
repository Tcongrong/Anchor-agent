const pendingLedgers = [];
let draining = false;

export function enqueueFilterLedger(ledger, consumer) {
  return new Promise((resolve, reject) => {
    pendingLedgers.push({ ledger, consumer, resolve, reject });
    if (!draining) {
      draining = true;
      queueMicrotask(drainLedgerQueue);
    }
  });
}

async function drainLedgerQueue() {
  await Promise.resolve();
  await nextFrame();
  await pauseTurn();

  const current = pendingLedgers.splice(0, pendingLedgers.length);
  for (const item of current) {
    try {
      await item.consumer(item.ledger);
      item.resolve();
    } catch (error) {
      item.reject(error);
    }
  }

  draining = false;
  if (pendingLedgers.length > 0) {
    draining = true;
    queueMicrotask(drainLedgerQueue);
  }
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function pauseTurn() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}
