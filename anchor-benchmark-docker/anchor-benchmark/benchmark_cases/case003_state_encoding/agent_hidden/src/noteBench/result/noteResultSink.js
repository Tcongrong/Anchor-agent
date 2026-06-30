export function emitNoteResult(packed) {
  const output = {
    action: "note.add",
    ["state_" + "code"]: packed
  };

  console.log(output);

  return output;
}
