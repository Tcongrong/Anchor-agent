import { collectAnnotationContext } from "../collect/collectAnnotationContext.js";
import { normalizeAnnotation } from "../collect/normalizeAnnotation.js";
import { buildAnnotationFeed } from "../collect/buildAnnotationFeed.js";
import { encodeAnnotationState } from "../core/encodeAnnotationState.js";
import { emitAnnotationState } from "../output/emitAnnotationState.js";

export async function processAnnotation(payload) {
  const context = collectAnnotationContext(payload);

  const normalized = await Promise.resolve(context).then(normalizeAnnotation);

  const feed = buildAnnotationFeed(normalized);

  return emitAnnotationState(encodeAnnotationState(feed));
}
