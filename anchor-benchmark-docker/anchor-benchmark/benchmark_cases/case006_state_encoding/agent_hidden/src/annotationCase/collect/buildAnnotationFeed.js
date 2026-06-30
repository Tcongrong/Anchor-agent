function splitWords(value) {
  return String(value)
    .split(/[\s\-_:.,!?/]+/g)
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);
}

export function buildAnnotationFeed(normalized) {
  const tokens = [
    ...splitWords(normalized.text),
    ...splitWords(normalized.category),
    ...splitWords(normalized.tag),
    ...splitWords(normalized.seed),
    ...splitWords(normalized.pageRef)
  ];

  return {
    text: normalized.text,
    category: normalized.category,
    tag: normalized.tag,
    seed: normalized.seed,
    ref: normalized.pageRef,
    lane: normalized.lane,
    salt: `${normalized.seed}|${normalized.lane}`,
    tokens
  };
}
