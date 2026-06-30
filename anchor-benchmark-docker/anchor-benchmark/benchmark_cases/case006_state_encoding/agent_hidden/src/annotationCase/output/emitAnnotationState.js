export function emitAnnotationState(stateCode) {
  const result = {
    action: "note.commit",
    status: stateCode ? "encoded" : "empty",
    ["annotation_" + "state_code"]: stateCode || ""
  };

  console.log(result);

  return result;
}
