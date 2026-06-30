const stagedRequests = new WeakMap();

export function createRequestStage(doc, ledger, normalized, visual, context) {
  const ticket = makeStageTicket(normalized, visual, context);
  const stage = {
    ticket,
    ledger,
    normalized: { ...normalized },
    page: context.page,
    profile: normalized.requestProfile,
    visibleCount: visual.visibleRows.length,
    createdAtSlot: Math.floor(performance.now() / 50)
  };

  stagedRequests.set(doc, stage);
  doc.documentElement.dataset.requestStage = ticket;
  const ticketNode = doc.querySelector("#stageTicket");
  if (ticketNode) ticketNode.textContent = ticket;
  doc.dispatchEvent(new CustomEvent("request-stage:ready", {
    detail: { ticket, visibleCount: visual.visibleRows.length }
  }));
  return stage;
}

export function readRequestStage(doc) {
  const stage = stagedRequests.get(doc);
  const ticket = doc.documentElement.dataset.requestStage;
  if (!stage || stage.ticket !== ticket) {
    throw new Error("Request scope has not been analyzed.");
  }
  return stage;
}

export async function hydrateRequestEnvelope(doc, envelope) {
  const marker = Number(doc.documentElement.dataset.requestHydration || "0") + 1;
  doc.documentElement.dataset.requestHydration = String(marker);

  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {});
    observer.observe(doc.documentElement, {
      attributes: true,
      attributeFilter: ["data-request-hydration"]
    });

    const eventName = "request-envelope:hydrate";
    const finish = (event) => {
      observer.disconnect();
      queueMicrotask(() => {
        resolve({
          ...event.detail.envelope,
          hydration: {
            marker,
            ticket: event.detail.ticket,
            stageAge: 0
          }
        });
      });
    };

    doc.addEventListener(eventName, finish, { once: true });
    setTimeout(() => {
      doc.dispatchEvent(new CustomEvent(eventName, {
        detail: {
          ticket: envelope.stage.ticket,
          stageAge: Math.max(0, Math.floor(performance.now() / 50) - envelope.stage.createdAtSlot),
          envelope
        }
      }));
    }, 0);
  });
}

export function mergeStageWithCurrent(stage, ledger, normalized, visual, context) {
  return {
    ...ledger,
    action: "table.filter.request",
    normalized: {
      ...normalized,
      stageTicket: stage.ticket,
      stagedProfile: stage.profile,
      stagedVisibleCount: stage.visibleCount
    },
    rows: [
      ...stage.ledger.rows,
      ...ledger.rows,
      makeStageCell("stage:ticket", stage.ticket, 101),
      makeStageCell("stage:profile", stage.profile, 103),
      makeStageCell("runtime:layout", context.layoutMode, 107),
      makeStageCell("runtime:page", String(context.page.page), 109)
    ],
    rowIds: [...new Set([...stage.ledger.rowIds, ...ledger.rowIds])],
    page: context.page,
    stage: {
      ticket: stage.ticket,
      profile: stage.profile,
      createdAtSlot: stage.createdAtSlot
    },
    totals: {
      visible: visual.visibleRows.length,
      amount: visual.visibleRows.reduce((sum, row) => sum + row.amount, 0),
      age: visual.visibleRows.reduce((sum, row) => sum + row.age, 0)
    }
  };
}

function makeStageTicket(normalized, visual, context) {
  const text = [
    normalized.status,
    normalized.minAmount,
    normalized.owner || "_",
    normalized.region,
    normalized.requestProfile,
    normalized.agedOnly ? "aged" : "all",
    visual.visibleRows.length,
    context.page.page
  ].join("|");

  let acc = 0x4f1bbcdc;
  for (let index = 0; index < text.length; index += 1) {
    acc ^= text.charCodeAt(index) + index * 17;
    acc = Math.imul((acc << 5) | (acc >>> 27), 0x45d9f3b) >>> 0;
  }
  return `rq_${acc.toString(36).padStart(8, "0").slice(-8)}`;
}

function makeStageCell(key, value, weight) {
  return {
    key,
    value: String(value),
    weight,
    bytesHint: `${key.length}:${String(value).length}:${weight}`
  };
}
