import { collectUploadManifest } from "./collectUploadManifest.js";
import { encodeManifestSheet } from "./encodeManifestSheet.js";
import { normalizeFileDescriptor } from "./normalizeFileDescriptor.js";
import { submitToLocalManifestBus } from "./localManifestBus.js";
import { publishUploadTicket } from "../ticket/uploadTicketSink.js";

export function runUploadManifestFlow(context) {
  const manifest = collectUploadManifest();
  const descriptor = normalizeFileDescriptor(manifest);
  const encoded = encodeManifestSheet(descriptor, context);

  return Promise.resolve(encoded)
    .then((packet) => new Promise((resolve) => {
      queueMicrotask(() => resolve(packet));
    }))
    .then((packet) => submitToLocalManifestBus(packet, context))
    .then((ticketResult) => publishUploadTicket(ticketResult, context));
}
