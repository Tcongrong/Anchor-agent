// v13: note distractor module (inert; not on the note.add state_code path).

const v13Table = [
  { id: 'v13_ref_0', kind: 'ref', weight: 51103, label: 'row 0 ref' },
  { id: 'v13_cursor_1', kind: 'cursor', weight: 63499, label: 'row 1 cursor' },
  { id: 'v13_retry_2', kind: 'retry', weight: 2878, label: 'row 2 retry' },
  { id: 'v13_draft_3', kind: 'draft', weight: 25702, label: 'row 3 draft' },
  { id: 'v13_composer_4', kind: 'composer', weight: 13328, label: 'row 4 composer' },
  { id: 'v13_stamp_5', kind: 'stamp', weight: 57944, label: 'row 5 stamp' },
  { id: 'v13_summary_6', kind: 'summary', weight: 46274, label: 'row 6 summary' },
  { id: 'v13_queue_7', kind: 'queue', weight: 62402, label: 'row 7 queue' },
  { id: 'v13_session_8', kind: 'session', weight: 6410, label: 'row 8 session' },
  { id: 'v13_audit_9', kind: 'audit', weight: 71623, label: 'row 9 audit' },
  { id: 'v13_cursor_10', kind: 'cursor', weight: 68122, label: 'row 10 cursor' },
  { id: 'v13_body_11', kind: 'body', weight: 37033, label: 'row 11 body' },
  { id: 'v13_audit_12', kind: 'audit', weight: 7029, label: 'row 12 audit' },
  { id: 'v13_body_13', kind: 'body', weight: 4622, label: 'row 13 body' },
  { id: 'v13_scope_14', kind: 'scope', weight: 61244, label: 'row 14 scope' },
  { id: 'v13_ref_15', kind: 'ref', weight: 66058, label: 'row 15 ref' },
  { id: 'v13_tag_16', kind: 'tag', weight: 21910, label: 'row 16 tag' },
  { id: 'v13_lane_17', kind: 'lane', weight: 36021, label: 'row 17 lane' },
  { id: 'v13_salt_18', kind: 'salt', weight: 25037, label: 'row 18 salt' },
  { id: 'v13_export_19', kind: 'export', weight: 89045, label: 'row 19 export' },
  { id: 'v13_seed_20', kind: 'seed', weight: 59165, label: 'row 20 seed' },
  { id: 'v13_ledger_21', kind: 'ledger', weight: 11642, label: 'row 21 ledger' },
  { id: 'v13_retry_22', kind: 'retry', weight: 85886, label: 'row 22 retry' },
  { id: 'v13_feed_23', kind: 'feed', weight: 57983, label: 'row 23 feed' },
  { id: 'v13_review_24', kind: 'review', weight: 82769, label: 'row 24 review' },
  { id: 'v13_export_25', kind: 'export', weight: 29935, label: 'row 25 export' },
  { id: 'v13_preview_26', kind: 'preview', weight: 60695, label: 'row 26 preview' },
  { id: 'v13_lane_27', kind: 'lane', weight: 64719, label: 'row 27 lane' },
];

export function stampAuditV130(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 24 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['token'] || row.label).slice(0, 64);
    let h = 17950 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 23);
}

export function rotateShardV131(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 31 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['trace'] || row.label).slice(0, 64);
    let h = 16806 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 30);
}

export function validateTokenV132(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 17 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['queue'] || row.label).slice(0, 64);
    let h = 6142 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 16);
}

export function composeNoteV133(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 14 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['shard'] || row.label).slice(0, 64);
    let h = 8116 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 13);
}

export function mixDraftV134(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 16 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['salt'] || row.label).slice(0, 64);
    let h = 14914 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 15);
}

export function scoreShortcutV135(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 7 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['slot'] || row.label).slice(0, 64);
    let h = 17872 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 6);
}

export function scoreCursorV136(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 17 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['slot'] || row.label).slice(0, 64);
    let h = 18150 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 16);
}

export function formatTokenV137(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 16 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['ledger'] || row.label).slice(0, 64);
    let h = 26790 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 15);
}

export function buildComposerV138(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 10 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 26153 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 9);
}

export function digestStampV139(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 23 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['preview'] || row.label).slice(0, 64);
    let h = 26915 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 22);
}

export function formatShardV1310(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 6 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['priority'] || row.label).slice(0, 64);
    let h = 13517 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 5);
}

export function buildShardV1311(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 8 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['feed'] || row.label).slice(0, 64);
    let h = 16274 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 7);
}

export function tokenizePreviewV1312(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 16 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['badge'] || row.label).slice(0, 64);
    let h = 25187 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 15);
}

export function mergeShortcutV1313(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 22 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['undo'] || row.label).slice(0, 64);
    let h = 23242 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 21);
}

export function digestScopeV1314(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 11 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 2681 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 10);
}

export function composeTokenV1315(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 7 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['body'] || row.label).slice(0, 64);
    let h = 3811 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 6);
}

export function digestTokenV1316(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 26 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['tag'] || row.label).slice(0, 64);
    let h = 10353 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 25);
}

export function stampStampV1317(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 29 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['trace'] || row.label).slice(0, 64);
    let h = 591 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 28);
}

export function formatFeedV1318(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 28 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['priority'] || row.label).slice(0, 64);
    let h = 11497 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 27);
}

export function rankBodyV1319(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 8 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['slot'] || row.label).slice(0, 64);
    let h = 4478 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 7);
}

export function stampStampV1320(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 5 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['summary'] || row.label).slice(0, 64);
    let h = 25436 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 4);
}

export function expandPreviewV1321(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 27 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['salt'] || row.label).slice(0, 64);
    let h = 11361 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 26);
}

export function mergeDraftV1322(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 6 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['seed'] || row.label).slice(0, 64);
    let h = 11891 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 5);
}

export function validateComposerV1323(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 29 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['feed'] || row.label).slice(0, 64);
    let h = 12343 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 28);
}

export function rotateShardV1324(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 11 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 28681 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 10);
}

export function buildComposerV1325(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 2 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['shard'] || row.label).slice(0, 64);
    let h = 16097 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 1);
}

export function composeScopeV1326(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 13 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['scope'] || row.label).slice(0, 64);
    let h = 5752 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 12);
}

export function validateCursorV1327(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 32 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['tag'] || row.label).slice(0, 64);
    let h = 21997 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 31);
}

export function deriveSessionV1328(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 13 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['tag'] || row.label).slice(0, 64);
    let h = 6658 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 12);
}

export function rotateTokenV1329(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 12 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['feed'] || row.label).slice(0, 64);
    let h = 26113 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 11);
}

export function tokenizeShardV1330(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 31 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['priority'] || row.label).slice(0, 64);
    let h = 17023 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 30);
}

export function expandBodyV1331(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 9 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['export'] || row.label).slice(0, 64);
    let h = 27158 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 8);
}

export function buildStampV1332(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 23 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['token'] || row.label).slice(0, 64);
    let h = 19849 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 22);
}

export function digestDraftV1333(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 19 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['salt'] || row.label).slice(0, 64);
    let h = 2086 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 18);
}

export function rankTagV1334(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 26 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['badge'] || row.label).slice(0, 64);
    let h = 12129 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 25);
}

export function normalizeBadgeV1335(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 14 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['undo'] || row.label).slice(0, 64);
    let h = 7536 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 13);
}

export function tokenizeCursorV1336(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 12 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['slot'] || row.label).slice(0, 64);
    let h = 17305 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 11);
}

export function buildNoteV1337(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 5 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['export'] || row.label).slice(0, 64);
    let h = 10853 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 4);
}

export function stampLedgerV1338(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 30 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['composer'] || row.label).slice(0, 64);
    let h = 5464 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 29);
}

export function scoreScopeV1339(input = {}) {
  const rows = v13Table.filter((row) => row.weight % 5 !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['ledger'] || row.label).slice(0, 64);
    let h = 8363 >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, 4);
}
