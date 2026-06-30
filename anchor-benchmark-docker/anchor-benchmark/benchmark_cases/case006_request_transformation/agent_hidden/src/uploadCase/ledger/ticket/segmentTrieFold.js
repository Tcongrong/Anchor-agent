const LANE_SALTS = {
  case: 0x41c64e6d,
  lane: 0x165667b1,
  file: 0x27d4eb2f,
  class: 0x9e3779b1,
  desc: 0x85ebca6b,
  seed: 0xc2b2ae35,
  title: 0x7feb352d,
  visual: 0x846ca68b
};

function rotateLeft(value, count) {
  return (value << count) | (value >>> (32 - count));
}

function laneSalt(lane) {
  return LANE_SALTS[lane] || 0x45d9f3b;
}

function six(value) {
  return (value >>> 0)
    .toString(36)
    .padStart(6, "0")
    .slice(-6);
}

function foldPrefixPath(branchBook, lane, token, weight) {
  let pathMix = Math.imul(laneSalt(lane) ^ weight, 0x1000193);
  let prefix = lane;

  for (let index = 0; index < token.length; index += 1) {
    const code = token.charCodeAt(index);
    prefix = `${prefix}/${token.slice(0, index + 1)}`;

    const previous = branchBook.get(prefix) || 0;
    const visit = (previous + code + weight + index + 1) >>> 0;
    branchBook.set(prefix, visit);

    pathMix ^= Math.imul(code ^ visit ^ (index + 17), 0x45d9f3b);
    pathMix = rotateLeft(pathMix >>> 0, (index % 7) + 5);
  }

  return pathMix >>> 0;
}

function compressBranchBook(branchBook) {
  let left = 0x811c9dc5;
  let middle = 0x7f4a7c15;
  let right = 0x94d049bb;
  let ordinal = 1;

  for (const [path, count] of branchBook.entries()) {
    let local = Math.imul(count ^ ordinal, 0x27d4eb2d);

    for (let index = 0; index < path.length; index += 1) {
      local ^= Math.imul(path.charCodeAt(index) + index + ordinal, 0x165667b1);
      local = rotateLeft(local >>> 0, 9);
    }

    left = Math.imul(left ^ local, 0x85ebca6b) >>> 0;
    middle = (middle + rotateLeft(local, ordinal % 13)) >>> 0;
    right ^= Math.imul(local + path.length, 0xc2b2ae35);
    ordinal += 1;
  }

  return [left >>> 0, middle >>> 0, right >>> 0];
}

export function foldSegmentLedger(feed, options = {}) {
  const branchBook = new Map();
  const lanes = new Map();
  const totals = [0x1234abcd, 0xfeed9917, 0x6d2b79f5];

  for (const entry of feed.tokens) {
    const lane = entry.lane || "misc";
    const token = String(entry.token || "");
    const weight = Number(entry.weight || 1);
    const laneState = lanes.get(lane) || laneSalt(lane);
    const pathMix = foldPrefixPath(branchBook, lane, token, weight);

    let characterMix = Math.imul(token.length + weight + lane.length, 0x9e3779b1);
    for (let index = 0; index < token.length; index += 1) {
      const code = token.charCodeAt(index);
      characterMix ^= Math.imul(code + index + weight, 0x7feb352d);
      characterMix = rotateLeft(characterMix >>> 0, (code % 11) + 3);
    }

    const nextLaneState = Math.imul(laneState ^ pathMix ^ characterMix, 0x85ebca6b) >>> 0;
    lanes.set(lane, nextLaneState);

    totals[0] = Math.imul(totals[0] ^ nextLaneState ^ weight, 0x45d9f3b) >>> 0;
    totals[1] = (totals[1] + rotateLeft(characterMix >>> 0, weight % 17)) >>> 0;
    totals[2] ^= Math.imul(pathMix + token.length + feed.sheetSize, 0x27d4eb2f);
  }

  const branchTotals = compressBranchBook(branchBook);
  const laneNames = [...lanes.keys()].sort();

  laneNames.forEach((lane, index) => {
    const laneValue = lanes.get(lane);
    totals[index % 3] ^= Math.imul(laneValue + laneSalt(lane) + index, 0x165667b1);
    totals[(index + 1) % 3] = rotateLeft(totals[(index + 1) % 3] >>> 0, (index % 5) + 7);
  });

  const contextMix = Math.imul(
    String(options.caseId || "").length +
      String(options.lane || "").length +
      Number(feed.rowCount || 0),
    0x9e3779b1
  );

  const first = (totals[0] ^ branchTotals[0] ^ contextMix) >>> 0;
  const second = Math.imul(totals[1] ^ branchTotals[1] ^ feed.sheetSize, 0x85ebca6b) >>> 0;
  const third = (totals[2] + branchTotals[2] + laneNames.length * 97) >>> 0;

  return `ut_${six(first)}-${six(second)}-${six(third)}`;
}
