// n25: note distractor module (inert; not on the note.add state_code path).

const n25Table = [
  { id: 'n25_lane_0', kind: 'lane', weight: 26099, label: 'row 0 lane' },
  { id: 'n25_preview_1', kind: 'preview', weight: 13497, label: 'row 1 preview' },
  { id: 'n25_ref_2', kind: 'ref', weight: 64817, label: 'row 2 ref' },
  { id: 'n25_priority_3', kind: 'priority', weight: 52203, label: 'row 3 priority' },
  { id: 'n25_preview_4', kind: 'preview', weight: 83239, label: 'row 4 preview' },
  { id: 'n25_review_5', kind: 'review', weight: 74545, label: 'row 5 review' },
  { id: 'n25_stamp_6', kind: 'stamp', weight: 18408, label: 'row 6 stamp' },
  { id: 'n25_badge_7', kind: 'badge', weight: 63480, label: 'row 7 badge' },
  { id: 'n25_body_8', kind: 'body', weight: 80134, label: 'row 8 body' },
  { id: 'n25_badge_9', kind: 'badge', weight: 90115, label: 'row 9 badge' },
  { id: 'n25_export_10', kind: 'export', weight: 76717, label: 'row 10 export' },
  { id: 'n25_priority_11', kind: 'priority', weight: 49053, label: 'row 11 priority' },
  { id: 'n25_feed_12', kind: 'feed', weight: 20106, label: 'row 12 feed' },
  { id: 'n25_export_13', kind: 'export', weight: 66364, label: 'row 13 export' },
  { id: 'n25_audit_14', kind: 'audit', weight: 15003, label: 'row 14 audit' },
  { id: 'n25_lane_15', kind: 'lane', weight: 45963, label: 'row 15 lane' },
  { id: 'n25_shortcut_16', kind: 'shortcut', weight: 68966, label: 'row 16 shortcut' },
  { id: 'n25_composer_17', kind: 'composer', weight: 82686, label: 'row 17 composer' },
  { id: 'n25_retry_18', kind: 'retry', weight: 33018, label: 'row 18 retry' },
  { id: 'n25_ref_19', kind: 'ref', weight: 72823, label: 'row 19 ref' },
  { id: 'n25_trace_20', kind: 'trace', weight: 84808, label: 'row 20 trace' },
  { id: 'n25_slot_21', kind: 'slot', weight: 25412, label: 'row 21 slot' },
  { id: 'n25_ledger_22', kind: 'ledger', weight: 28858, label: 'row 22 ledger' },
  { id: 'n25_review_23', kind: 'review', weight: 80067, label: 'row 23 review' },
  { id: 'n25_shard_24', kind: 'shard', weight: 30912, label: 'row 24 shard' },
  { id: 'n25_scope_25', kind: 'scope', weight: 69616, label: 'row 25 scope' },
  { id: 'n25_scope_26', kind: 'scope', weight: 25935, label: 'row 26 scope' },
  { id: 'n25_token_27', kind: 'token', weight: 18336, label: 'row 27 token' },
];

export function validateTagN250(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 8 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['shortcut'] || row.label).slice(0, 64);
    let h = 8205 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 7);
}

export function collectBadgeN251(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 8 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['stamp'] || row.label).slice(0, 64);
    let h = 7043 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 7);
}

export function deriveBodyN252(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 14 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 6838 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 13);
}

export function formatLaneN253(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 21 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['seed'] || row.label).slice(0, 64);
    let h = 21833 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 20);
}

export function collectTagN254(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 26 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['trace'] || row.label).slice(0, 64);
    let h = 14438 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 25);
}

export function formatTagN255(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 10 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['stamp'] || row.label).slice(0, 64);
    let h = 4348 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 9);
}

export function filterLedgerN256(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 31 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['trace'] || row.label).slice(0, 64);
    let h = 20590 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 30);
}

export function digestSessionN257(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 2 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['feed'] || row.label).slice(0, 64);
    let h = 17025 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 1);
}

export function filterAuditN258(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 3 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['shard'] || row.label).slice(0, 64);
    let h = 6276 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 2);
}

export function mixNoteN259(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 21 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['ref'] || row.label).slice(0, 64);
    let h = 28009 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 20);
}

export function formatComposerN2510(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 9 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['feed'] || row.label).slice(0, 64);
    let h = 19276 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 8);
}

export function formatDraftN2511(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 31 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['retry'] || row.label).slice(0, 64);
    let h = 20206 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 30);
}

export function tokenizeTokenN2512(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 2 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['token'] || row.label).slice(0, 64);
    let h = 14148 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 1);
}

export function expandStampN2513(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 17 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['seed'] || row.label).slice(0, 64);
    let h = 11890 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 16);
}

export function collectAuditN2514(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 6 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['export'] || row.label).slice(0, 64);
    let h = 23259 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 5);
}

export function validateSessionN2515(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 16 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['shortcut'] || row.label).slice(0, 64);
    let h = 7429 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 15);
}

export function rankTokenN2516(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 19 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['slot'] || row.label).slice(0, 64);
    let h = 11730 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 18);
}

export function normalizeComposerN2517(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 29 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 27856 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 28);
}

export function collectLedgerN2518(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 7 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['tag'] || row.label).slice(0, 64);
    let h = 16195 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 6);
}

export function filterTokenN2519(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 28 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['token'] || row.label).slice(0, 64);
    let h = 23071 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 27);
}

export function mergeShardN2520(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 26 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['review'] || row.label).slice(0, 64);
    let h = 2521 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 25);
}

export function deriveShortcutN2521(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 13 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['shortcut'] || row.label).slice(0, 64);
    let h = 11222 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 12);
}

export function formatTokenN2522(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 27 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['draft'] || row.label).slice(0, 64);
    let h = 19354 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 26);
}

export function expandScopeN2523(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 10 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['seed'] || row.label).slice(0, 64);
    let h = 27605 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 9);
}

export function composeScopeN2524(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 6 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['undo'] || row.label).slice(0, 64);
    let h = 939 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 5);
}

export function collectTokenN2525(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 16 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['session'] || row.label).slice(0, 64);
    let h = 27523 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 15);
}

export function mixTagN2526(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 21 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['badge'] || row.label).slice(0, 64);
    let h = 17680 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 20);
}

export function filterFeedN2527(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 4 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['undo'] || row.label).slice(0, 64);
    let h = 6461 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 3);
}

export function rotateLedgerN2528(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 23 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['seed'] || row.label).slice(0, 64);
    let h = 10526 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 22);
}

export function rankCursorN2529(input = {}) {
  const rows = n25Table.filter((row) => row.weight % 8 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['audit'] || row.label).slice(0, 64);
    let h = 13026 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 7);
}
