import { parseManifestSheet } from "../resolver/parseManifestSheet.js";
import { buildSegmentFeed } from "../resolver/buildSegmentFeed.js";
import { resolveTicketFromFeed } from "../resolver/ticketResolver.js";

const manifestBus = new EventTarget();
const CHANNEL = "manifest:packet";

manifestBus.addEventListener(CHANNEL, async (event) => {
  const detail = event.detail || {};

  try {
    const parsed = parseManifestSheet(detail.packet.sheet);
    const feed = buildSegmentFeed(parsed, detail.packet, detail.context);
    const ticketResult = await resolveTicketFromFeed(feed, detail.context);
    detail.settle(ticketResult);
  } catch (error) {
    detail.fail(error);
  }
});

export function submitToLocalManifestBus(packet, context) {
  return new Promise((settle, fail) => {
    queueMicrotask(() => {
      manifestBus.dispatchEvent(new CustomEvent(CHANNEL, {
        detail: {
          packet,
          context,
          settle,
          fail
        }
      }));
    });
  });
}
