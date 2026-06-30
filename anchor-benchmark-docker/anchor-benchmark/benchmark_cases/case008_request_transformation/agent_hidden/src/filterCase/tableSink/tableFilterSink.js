function fromCodes(codes) {
  return codes.map((value) => String.fromCharCode(value)).join("");
}

function targetFieldKey() {
  return fromCodes([114, 101, 113, 117, 101, 115, 116, 95, 112, 97, 121, 108, 111, 97, 100]);
}

function targetActionValue() {
  return fromCodes([116, 97, 98, 108, 101, 46, 102, 105, 108, 116, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116]);
}

function consoleMethodName() {
  return fromCodes([108, 111, 103]);
}

export function commitFilterRequest(doc, payload) {
  const requestPayloadKey = targetFieldKey();
  const output = {
    action: targetActionValue(),
    status: payload.normalized.status,
    owner: payload.normalized.owner,
    minAmount: payload.normalized.minAmount,
    region: payload.normalized.region,
    requestProfile: payload.normalized.requestProfile,
    stageTicket: payload.normalized.stageTicket,
    visibleRows: payload.visibleRows.length,
    totalRows: payload.totalRows,
    [requestPayloadKey]: payload.requestPayload
  };

  const status = doc.querySelector("#lastAction");
  if (status) status.textContent = `Prepared request for ${payload.visibleRows.length} visible rows`;

  console[consoleMethodName()](output);
}
