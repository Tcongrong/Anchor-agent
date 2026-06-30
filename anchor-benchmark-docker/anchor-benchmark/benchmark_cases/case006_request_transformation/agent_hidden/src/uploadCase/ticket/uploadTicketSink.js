function appendHistory(context, value) {
  const list = document.querySelector("#historyList");
  if (!list) return;

  const item = document.createElement("li");
  item.textContent = `${context.lane} / ${value}`;
  list.prepend(item);
}

export function publishUploadTicket(ticketResult, context) {
  const requestPayload = ticketResult.requestPayload;
  const output = {
    action: "upload.request",
    status: "queued",
    request_payload: requestPayload
  };

  appendHistory(context, requestPayload?.headers?.["x-upload-ticket"] || "request-ready");
  console.log(output);
  return output;
}
