let syncSequence = 0;

function rotateByte(byte, amount) {
  return ((byte << amount) | (byte >>> (8 - amount))) & 0xff;
}

export function makeSyncTokenStamp() {
  syncSequence += 1;
  const label = `sync-${syncSequence}`;

  let acc = (0x1f83d9ab ^ syncSequence) >>> 0;
  for (let i = 0; i < label.length; i++) {
    acc = (acc + rotateByte(label.charCodeAt(i) & 0xff, (i % 7) + 1)) >>> 0;
  }

  const stamp = acc.toString(16).padStart(8, "0");
  console.log({ action: "prefs.sync", sync_stamp: stamp, sequence: syncSequence });
  return stamp;
}
