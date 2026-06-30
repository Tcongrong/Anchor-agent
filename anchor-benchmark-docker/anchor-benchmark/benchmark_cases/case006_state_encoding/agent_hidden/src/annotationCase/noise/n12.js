// n12: annotation distractor module (inert; not on the annotation_state_code path).

const n12Table = [
  { id: 'n12_retry_0', kind: 'retry', weight: 63649, label: 'row 0 retry' },
  { id: 'n12_lane_1', kind: 'lane', weight: 24508, label: 'row 1 lane' },
  { id: 'n12_stamp_2', kind: 'stamp', weight: 85387, label: 'row 2 stamp' },
  { id: 'n12_ref_3', kind: 'ref', weight: 40413, label: 'row 3 ref' },
  { id: 'n12_session_4', kind: 'session', weight: 49793, label: 'row 4 session' },
  { id: 'n12_seed_5', kind: 'seed', weight: 61453, label: 'row 5 seed' },
  { id: 'n12_scope_6', kind: 'scope', weight: 27160, label: 'row 6 scope' },
  { id: 'n12_salt_7', kind: 'salt', weight: 63663, label: 'row 7 salt' },
  { id: 'n12_scope_8', kind: 'scope', weight: 90232, label: 'row 8 scope' },
  { id: 'n12_tag_9', kind: 'tag', weight: 14248, label: 'row 9 tag' },
  { id: 'n12_audit_10', kind: 'audit', weight: 34392, label: 'row 10 audit' },
  { id: 'n12_retry_11', kind: 'retry', weight: 29493, label: 'row 11 retry' },
  { id: 'n12_preview_12', kind: 'preview', weight: 28521, label: 'row 12 preview' },
  { id: 'n12_ledger_13', kind: 'ledger', weight: 46572, label: 'row 13 ledger' },
  { id: 'n12_audit_14', kind: 'audit', weight: 21056, label: 'row 14 audit' },
  { id: 'n12_cursor_15', kind: 'cursor', weight: 85003, label: 'row 15 cursor' },
  { id: 'n12_trace_16', kind: 'trace', weight: 68291, label: 'row 16 trace' },
  { id: 'n12_review_17', kind: 'review', weight: 36046, label: 'row 17 review' },
  { id: 'n12_salt_18', kind: 'salt', weight: 84445, label: 'row 18 salt' },
  { id: 'n12_lane_19', kind: 'lane', weight: 10821, label: 'row 19 lane' },
  { id: 'n12_stamp_20', kind: 'stamp', weight: 55525, label: 'row 20 stamp' },
  { id: 'n12_tag_21', kind: 'tag', weight: 50427, label: 'row 21 tag' },
  { id: 'n12_feed_22', kind: 'feed', weight: 71524, label: 'row 22 feed' },
  { id: 'n12_audit_23', kind: 'audit', weight: 3849, label: 'row 23 audit' },
  { id: 'n12_tag_24', kind: 'tag', weight: 3975, label: 'row 24 tag' },
  { id: 'n12_trace_25', kind: 'trace', weight: 41923, label: 'row 25 trace' },
  { id: 'n12_draft_26', kind: 'draft', weight: 28403, label: 'row 26 draft' },
  { id: 'n12_ledger_27', kind: 'ledger', weight: 48148, label: 'row 27 ledger' },
];

export function composeShardN120(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 8 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['lane'] || row.label).slice(0, 64);
    let h = 20448 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 7);
}

export function buildDraftN121(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 25 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['stamp'] || row.label).slice(0, 64);
    let h = 7169 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 24);
}

export function expandLedgerN122(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 5 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['retry'] || row.label).slice(0, 64);
    let h = 12395 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 4);
}

export function filterBadgeN123(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 18 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['ref'] || row.label).slice(0, 64);
    let h = 14618 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 17);
}

export function tokenizeLedgerN124(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 5 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['lane'] || row.label).slice(0, 64);
    let h = 27857 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 4);
}

export function filterPreviewN125(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 16 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['draft'] || row.label).slice(0, 64);
    let h = 18764 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 15);
}

export function expandCursorN126(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 24 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['seed'] || row.label).slice(0, 64);
    let h = 5086 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 23);
}

export function tokenizeShardN127(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 15 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['ref'] || row.label).slice(0, 64);
    let h = 18645 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 14);
}

export function expandPreviewN128(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 17 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['ledger'] || row.label).slice(0, 64);
    let h = 18056 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 16);
}

export function stampShardN129(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 4 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['stamp'] || row.label).slice(0, 64);
    let h = 3226 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 3);
}

export function expandNoteN1210(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 11 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['session'] || row.label).slice(0, 64);
    let h = 27767 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 10);
}

export function deriveScopeN1211(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 4 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['badge'] || row.label).slice(0, 64);
    let h = 11064 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 3);
}

export function buildCursorN1212(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 10 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 18000 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 9);
}

export function composeTagN1213(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 7 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['session'] || row.label).slice(0, 64);
    let h = 3477 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 6);
}

export function collectShardN1214(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 3 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['token'] || row.label).slice(0, 64);
    let h = 1855 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 2);
}

export function buildLaneN1215(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 24 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['salt'] || row.label).slice(0, 64);
    let h = 14635 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 23);
}

export function mixFeedN1216(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 16 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['stamp'] || row.label).slice(0, 64);
    let h = 24734 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 15);
}

export function scoreNoteN1217(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 3 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['feed'] || row.label).slice(0, 64);
    let h = 1205 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 2);
}

export function foldBadgeN1218(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 5 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 6118 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 4);
}

export function tokenizeScopeN1219(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 28 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['seed'] || row.label).slice(0, 64);
    let h = 18091 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 27);
}

export function buildLedgerN1220(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 23 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['review'] || row.label).slice(0, 64);
    let h = 7962 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 22);
}

export function deriveSessionN1221(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 28 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['audit'] || row.label).slice(0, 64);
    let h = 1834 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 27);
}

export function collectTokenN1222(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 7 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['preview'] || row.label).slice(0, 64);
    let h = 10733 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 6);
}

export function expandAuditN1223(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 23 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['lane'] || row.label).slice(0, 64);
    let h = 6015 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 22);
}

export function mixDraftN1224(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 6 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['salt'] || row.label).slice(0, 64);
    let h = 25768 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 5);
}

export function normalizeAnnotationN1225(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 2 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 4943 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 1);
}

export function mergePreviewN1226(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 22 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['shard'] || row.label).slice(0, 64);
    let h = 25781 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 21);
}

export function derivePreviewN1227(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 19 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['session'] || row.label).slice(0, 64);
    let h = 24030 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 18);
}

export function stampPreviewN1228(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 29 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['audit'] || row.label).slice(0, 64);
    let h = 11302 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 28);
}

export function deriveLedgerN1229(input = {}) {
  const rows = n12Table.filter((row) => row.weight % 26 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['lane'] || row.label).slice(0, 64);
    let h = 25448 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 25);
}
