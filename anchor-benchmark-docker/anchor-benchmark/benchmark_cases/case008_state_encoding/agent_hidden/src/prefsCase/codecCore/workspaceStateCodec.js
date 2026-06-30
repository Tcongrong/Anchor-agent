import { FNV_OFFSET, mixToken, spinBits, encodeBase36 } from "./bitMixHelpers.js";

const _k = 3 + 3;

function mkWorkspaceReducer(cfg) {
  return function workspaceStateReducer(envelope) {
    const fields = Array.isArray(envelope.fields) ? envelope.fields : [];

    let trunk = (cfg.trunkSeed ^ (envelope.revision || 0)) >>> 0;
    let branch = spinBits(fields.length + cfg.branchSeed);

    for (let index = 0; index < fields.length; index += 1) {
      const field = fields[index] || {};
      const token = cfg.format(index, field);
      trunk = mixToken(trunk, token);
      branch = spinBits(cfg.branchMix(branch, trunk, index, cfg.slot));
    }

    const merged = (trunk ^ branch) >>> 0;
    return `${encodeBase36(merged, cfg.trunkWidth)}${encodeBase36(branch, cfg.branchWidth)}`;
  };
}

const workspaceSlotTable = [
  {
    slot: 0,
    trunkSeed: FNV_OFFSET ^ 0x11111111,
    branchSeed: 0x2545f490,
    trunkWidth: 6,
    branchWidth: 6,
    branchMix: (branch, trunk) => (branch ^ trunk ^ 0x11) >>> 0,
    format: (index, field) => `${field.key || ""}:${field.value || ""}#${index}`,
    order: [0, 1, 2, 3]
  },
  {
    slot: 1,
    trunkSeed: FNV_OFFSET ^ 0x22222222,
    branchSeed: 0x2545f492,
    trunkWidth: 7,
    branchWidth: 5,
    branchMix: (branch, trunk) => (branch ^ trunk ^ 0x22) >>> 0,
    format: (index, field) => `${index}|${field.key || ""}=${field.value || ""}`,
    order: [3, 2, 1, 0]
  },
  {
    slot: 2,
    trunkSeed: FNV_OFFSET ^ 0x33333333,
    branchSeed: 0x2545f493,
    trunkWidth: 8,
    branchWidth: 4,
    branchMix: (branch, trunk) => (branch ^ trunk ^ 0x33) >>> 0,
    format: (index, field) => `${field.key || ""}~${field.value || ""}~${field.weight || 0}`,
    order: [1, 0, 3, 2]
  },
  {
    slot: 3,
    trunkSeed: FNV_OFFSET ^ 0x44444444,
    branchSeed: 0x2545f494,
    trunkWidth: 5,
    branchWidth: 7,
    branchMix: (branch, trunk) => (branch ^ trunk ^ 0x44) >>> 0,
    format: (index, field) => `${index}:${field.key || ""}@${field.value || ""}`,
    order: [2, 3, 0, 1]
  },
  {
    slot: 4,
    trunkSeed: FNV_OFFSET ^ 0x55555555,
    branchSeed: 0x2545f495,
    trunkWidth: 6,
    branchWidth: 6,
    branchMix: (branch, trunk) => (branch ^ trunk ^ 0x55) >>> 0,
    format: (index, field) => `${field.weight || 0}^${field.key || ""}^${field.value || ""}`,
    order: [0, 2, 1, 3]
  },
  {
    slot: 5,
    trunkSeed: FNV_OFFSET ^ 0x66666666,
    branchSeed: 0x2545f496,
    trunkWidth: 7,
    branchWidth: 5,
    branchMix: (branch, trunk) => (branch ^ trunk ^ 0x66) >>> 0,
    format: (index, field) => `${field.key || ""}&${field.value || ""}&${index}`,
    order: [3, 1, 2, 0]
  },
  {
    slot: 6,
    trunkSeed: FNV_OFFSET,
    branchSeed: 0x2545f491,
    trunkWidth: 7,
    branchWidth: 5,
    branchMix: (branch, trunk) => (branch ^ trunk) >>> 0,
    format: (index, field) => `${index}:${field.key || ""}=${field.value || ""}~${field.weight || 0}`,
    order: [0, 1, 2, 3]
  },
  {
    slot: 7,
    trunkSeed: FNV_OFFSET ^ 0x88888888,
    branchSeed: 0x2545f497,
    trunkWidth: 6,
    branchWidth: 6,
    branchMix: (branch, trunk) => (branch ^ trunk ^ 0x88) >>> 0,
    format: (index, field) => `${field.value || ""}/${field.key || ""}/${index}`,
    order: [2, 0, 3, 1]
  }
];

const _workspaceReducerMap = new Map();
for (const cfg of workspaceSlotTable) {
  _workspaceReducerMap.set(cfg.slot, mkWorkspaceReducer(cfg));
}

const _workspaceEnc = _workspaceReducerMap.get(_k);

export function encodeWorkspaceState(envelope) {
  return _workspaceEnc(envelope);
}

export function probeWorkspaceSlot(slot, envelope) {
  const fn = _workspaceReducerMap.get(slot) || _workspaceReducerMap.get(0);
  return fn(envelope);
}
