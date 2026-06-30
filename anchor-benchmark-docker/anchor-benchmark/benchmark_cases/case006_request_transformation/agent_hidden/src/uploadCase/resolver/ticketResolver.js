const ticketResolverRegistry = {
  manifestSegmentFeed: async () => {
    const module = await import("../request/rewriteUploadRequest.js");
    return module.rewriteUploadRequest;
  }
};

function selectResolverName(feed) {
  if (feed.tokens.some((entry) => entry.lane === "file")) {
    return "manifestSegmentFeed";
  }

  return "manifestSegmentFeed";
}

export async function resolveTicketFromFeed(feed, context) {
  const resolverName = selectResolverName(feed);
  const loadResolver = ticketResolverRegistry[resolverName];
  const resolver = await loadResolver();

  return {
    requestPayload: resolver(feed, {
      caseId: context.stableCase,
      lane: context.lane,
      resolverName
    }),
    resolverName
  };
}
