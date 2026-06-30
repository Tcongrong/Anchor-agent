// Shadow note state encoders: semantic decoys kept in bundle but not on the note.add path.
import { encodeShadowNoteState00 } from "./shadow/s00.js";
import { encodeShadowNoteState01 } from "./shadow/s01.js";
import { encodeShadowNoteState02 } from "./shadow/s02.js";
import { encodeShadowNoteState03 } from "./shadow/s03.js";
import { encodeShadowNoteState04 } from "./shadow/s04.js";
import { encodeShadowNoteState05 } from "./shadow/s05.js";
import { encodeShadowNoteState06 } from "./shadow/s06.js";
import { encodeShadowNoteState07 } from "./shadow/s07.js";
import { encodeShadowNoteState08 } from "./shadow/s08.js";
import { encodeShadowNoteState09 } from "./shadow/s09.js";
import { encodeShadowNoteState10 } from "./shadow/s10.js";
import { encodeShadowNoteState11 } from "./shadow/s11.js";

const shadowEncoders = [
  encodeShadowNoteState00,
  encodeShadowNoteState01,
  encodeShadowNoteState02,
  encodeShadowNoteState03,
  encodeShadowNoteState04,
  encodeShadowNoteState05,
  encodeShadowNoteState06,
  encodeShadowNoteState07,
  encodeShadowNoteState08,
  encodeShadowNoteState09,
  encodeShadowNoteState10,
  encodeShadowNoteState11,
];

export function initShadowNoteEncoders() {
  globalThis.__noteShadowEncoders = shadowEncoders;
  return shadowEncoders.length;
}

