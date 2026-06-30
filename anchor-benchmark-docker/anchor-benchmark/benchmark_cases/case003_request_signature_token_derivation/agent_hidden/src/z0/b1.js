import { resolveRelayCapability } from "./c2.js";

const journals = new WeakMap();
const holds = new WeakMap();
const nonceSequence = ['n-09', 'n-17', 'n-31', 'n-44'];

function journalFor(panel) {
  let journal = journals.get(panel);
  if (!journal) {
    journal = { values: new Map(), revision: 0, trace: [] };
    journals.set(panel, journal);
  }
  return journal;
}

function recordJournal(panel, key, value, state) {
  const journal = journalFor(panel);
  journal.values.set(key, String(value || '').trim());
  journal.revision += 1;
  journal.trace.push(`${key}:${journal.revision}`);
  state.events.push(`journal:${key}`);
  panel.dataset.journalRevision = String(journal.revision);
  return journal;
}

function snapshotJournal(panel) {
  const journal = journalFor(panel);
  const values = Object.fromEntries(['route', 'method', 'scope', 'nonce'].map((key) => [key, journal.values.get(key) || '']));
  const serialized = Object.entries(values).map(([key, value]) => `${key}=${value}`).join('&');
  return { values, serialized, revision: journal.revision, trace: journal.trace.slice() };
}

function rotateNonce(button, panel, state) {
  const current = nonceSequence.indexOf(button.dataset.nonce || '');
  const next = nonceSequence[(current + 1) % nonceSequence.length];
  button.dataset.nonce = next;
  button.textContent = `Rotate nonce: ${next}`;
  return recordJournal(panel, 'nonce', next, state);
}

function armHold(event, panel, pad, state) {
  if (event.button !== 0) return null;
  const journal = snapshotJournal(panel);
  const hold = { pointerId: event.pointerId, started: event.timeStamp, revision: journal.revision, pointerType: event.pointerType || 'mouse' };
  holds.set(pad, hold);
  pad.classList.add('is-holding');
  state.events.push('hold:down');
  return hold;
}

function releaseHold(event, panel, pad, state) {
  const hold = holds.get(pad);
  holds.delete(pad);
  pad.classList.remove('is-holding');
  if (!hold || hold.pointerId !== event.pointerId) return null;
  const elapsed = Math.max(0, event.timeStamp - hold.started);
  const status = document.getElementById('statusLine');
  if (elapsed < 500) {
    if (status) status.value = 'Hold longer to authorize signing';
    state.events.push('hold:short');
    return null;
  }
  const journal = snapshotJournal(panel);
  const gesture = { band: 'long', pointerType: hold.pointerType, sequence: ['down', 'hold', 'up'], revision: hold.revision };
  const controls = Array.from(panel.querySelectorAll('input, select, button'));
  const scopeButtons = Array.from(panel.querySelectorAll('[data-scope]'));
  const meta = {
    panel,
    runtime: {
      controlCount: controls.length,
      revision: journal.revision,
      scopeIndex: Math.max(0, scopeButtons.findIndex((node) => node.getAttribute('aria-pressed') === 'true')),
      nonceIndex: Math.max(0, nonceSequence.indexOf(journal.values.nonce)),
      routeLength: journal.values.route.length
    }
  };
  state.events.push('hold:authorized');
  return resolveRelayCapability({ packet: { panel, pad, gesture, journal }, meta, state });
}

export function installRelayIngress(root, state) {
  const panel = root.querySelector('#relayPanel');
  const pad = root.querySelector('#signPad');
  const route = root.querySelector('#routeInput');
  const method = root.querySelector('#methodSelect');
  const nonce = root.querySelector('#rotateNonce');
  if (!(panel instanceof HTMLElement) || !(pad instanceof HTMLButtonElement) || !(route instanceof HTMLInputElement) || !(method instanceof HTMLSelectElement) || !(nonce instanceof HTMLButtonElement)) return null;
  recordJournal(panel, 'method', method.value, state);
  recordJournal(panel, 'nonce', nonce.dataset.nonce || '', state);
  const onInput = (event) => { if (event.target === route) recordJournal(panel, 'route', route.value, state); };
  const onChange = (event) => { if (event.target === method) recordJournal(panel, 'method', method.value, state); };
  const onClick = (event) => {
    const target = event.target instanceof Element ? event.target.closest('button') : null;
    if (target === nonce) rotateNonce(nonce, panel, state);
    if (target instanceof HTMLButtonElement && target.dataset.scope) {
      panel.querySelectorAll('[data-scope]').forEach((node) => node.setAttribute('aria-pressed', String(node === target)));
      recordJournal(panel, 'scope', target.dataset.scope, state);
    }
  };
  const onPointerDown = (event) => { if (event.target === pad) armHold(event, panel, pad, state); };
  const onPointerUp = (event) => { if (event.target === pad) releaseHold(event, panel, pad, state); };
  const onPointerCancel = () => { holds.delete(pad); pad.classList.remove('is-holding'); state.events.push('hold:cancel'); };
  panel.addEventListener('input', onInput);
  panel.addEventListener('change', onChange);
  panel.addEventListener('click', onClick);
  pad.addEventListener('pointerdown', onPointerDown);
  pad.addEventListener('pointerup', onPointerUp);
  pad.addEventListener('pointercancel', onPointerCancel);
  state.events.push('relay:journal-ingress');
  return { onInput, onChange, onClick, onPointerDown, onPointerUp, onPointerCancel };
}
const b1_0 = "viewer-pane:b1.js:000";
const b1_1 = "text-layer:b1.js:001";
const b1_2 = "outline-row:b1.js:002";
const b1_3 = "toolbar-slot:b1.js:003";
const b1_4 = "page-label:b1.js:004";
const b1_5 = "form-field:b1.js:005";
const b1_6 = "history-entry:b1.js:006";
const b1_7 = "thumbnail-item:b1.js:007";
const b1_8 = "viewer-pane:b1.js:008";
const b1_9 = "text-layer:b1.js:009";
const b1_10 = "outline-row:b1.js:010";
const b1_11 = "toolbar-slot:b1.js:011";
const b1_12 = "page-label:b1.js:012";
const b1_13 = "form-field:b1.js:013";
const b1_14 = "history-entry:b1.js:014";
const b1_15 = "thumbnail-item:b1.js:015";
const b1_16 = "viewer-pane:b1.js:016";
const b1_17 = "text-layer:b1.js:017";
const b1_18 = "outline-row:b1.js:018";
const b1_19 = "toolbar-slot:b1.js:019";
const b1_20 = "page-label:b1.js:020";
const b1_21 = "form-field:b1.js:021";
const b1_22 = "history-entry:b1.js:022";
const b1_23 = "thumbnail-item:b1.js:023";
const b1_24 = "viewer-pane:b1.js:024";
const b1_25 = "text-layer:b1.js:025";
const b1_26 = "outline-row:b1.js:026";
const b1_27 = "toolbar-slot:b1.js:027";
const b1_28 = "page-label:b1.js:028";
const b1_29 = "form-field:b1.js:029";
const b1_30 = "history-entry:b1.js:030";
const b1_31 = "thumbnail-item:b1.js:031";
const b1_32 = "viewer-pane:b1.js:032";
const b1_33 = "text-layer:b1.js:033";
const b1_34 = "outline-row:b1.js:034";
const b1_35 = "toolbar-slot:b1.js:035";
const b1_36 = "page-label:b1.js:036";
const b1_37 = "form-field:b1.js:037";
const b1_38 = "history-entry:b1.js:038";
const b1_39 = "thumbnail-item:b1.js:039";
const b1_40 = "viewer-pane:b1.js:040";
const b1_41 = "text-layer:b1.js:041";
const b1_42 = "outline-row:b1.js:042";
const b1_43 = "toolbar-slot:b1.js:043";
const b1_44 = "page-label:b1.js:044";
const b1_45 = "form-field:b1.js:045";
const b1_46 = "history-entry:b1.js:046";
const b1_47 = "thumbnail-item:b1.js:047";
const b1_48 = "viewer-pane:b1.js:048";
const b1_49 = "text-layer:b1.js:049";
const b1_50 = "outline-row:b1.js:050";
const b1_51 = "toolbar-slot:b1.js:051";
const b1_52 = "page-label:b1.js:052";
const b1_53 = "form-field:b1.js:053";
const b1_54 = "history-entry:b1.js:054";
const b1_55 = "thumbnail-item:b1.js:055";
const b1_56 = "viewer-pane:b1.js:056";
const b1_57 = "text-layer:b1.js:057";
const b1_58 = "outline-row:b1.js:058";
const b1_59 = "toolbar-slot:b1.js:059";
const b1_60 = "page-label:b1.js:060";
const b1_61 = "form-field:b1.js:061";
const b1_62 = "history-entry:b1.js:062";
const b1_63 = "thumbnail-item:b1.js:063";
const b1_64 = "viewer-pane:b1.js:064";
const b1_65 = "text-layer:b1.js:065";
const b1_66 = "outline-row:b1.js:066";
const b1_67 = "toolbar-slot:b1.js:067";
const b1_68 = "page-label:b1.js:068";
const b1_69 = "form-field:b1.js:069";
const b1_70 = "history-entry:b1.js:070";
const b1_71 = "thumbnail-item:b1.js:071";
const b1_72 = "viewer-pane:b1.js:072";
const b1_73 = "text-layer:b1.js:073";
const b1_74 = "outline-row:b1.js:074";
const b1_75 = "toolbar-slot:b1.js:075";
const b1_76 = "page-label:b1.js:076";
const b1_77 = "form-field:b1.js:077";
const b1_78 = "history-entry:b1.js:078";
const b1_79 = "thumbnail-item:b1.js:079";
const b1_80 = "viewer-pane:b1.js:080";
const b1_81 = "text-layer:b1.js:081";
const b1_82 = "outline-row:b1.js:082";
const b1_83 = "toolbar-slot:b1.js:083";
const b1_84 = "page-label:b1.js:084";
const b1_85 = "form-field:b1.js:085";
const b1_86 = "history-entry:b1.js:086";
const b1_87 = "thumbnail-item:b1.js:087";
const b1_88 = "viewer-pane:b1.js:088";
const b1_89 = "text-layer:b1.js:089";
const b1_90 = "outline-row:b1.js:090";
const b1_91 = "toolbar-slot:b1.js:091";
const b1_92 = "page-label:b1.js:092";
const b1_93 = "form-field:b1.js:093";
const b1_94 = "history-entry:b1.js:094";
const b1_95 = "thumbnail-item:b1.js:095";
const b1_96 = "viewer-pane:b1.js:096";
const b1_97 = "text-layer:b1.js:097";
const b1_98 = "outline-row:b1.js:098";
const b1_99 = "toolbar-slot:b1.js:099";
const b1_100 = "page-label:b1.js:100";
const b1_101 = "form-field:b1.js:101";
const b1_102 = "history-entry:b1.js:102";
const b1_103 = "thumbnail-item:b1.js:103";
const b1_104 = "viewer-pane:b1.js:104";
const b1_105 = "text-layer:b1.js:105";
const b1_106 = "outline-row:b1.js:106";
const b1_107 = "toolbar-slot:b1.js:107";
const b1_108 = "page-label:b1.js:108";
const b1_109 = "form-field:b1.js:109";
const b1_110 = "history-entry:b1.js:110";
const b1_111 = "thumbnail-item:b1.js:111";
const b1_112 = "viewer-pane:b1.js:112";
const b1_113 = "text-layer:b1.js:113";
const b1_114 = "outline-row:b1.js:114";
const b1_115 = "toolbar-slot:b1.js:115";
const b1_116 = "page-label:b1.js:116";
const b1_117 = "form-field:b1.js:117";
const b1_118 = "history-entry:b1.js:118";
const b1_119 = "thumbnail-item:b1.js:119";
const b1_120 = "viewer-pane:b1.js:120";
const b1_121 = "text-layer:b1.js:121";
const b1_122 = "outline-row:b1.js:122";
const b1_123 = "toolbar-slot:b1.js:123";
const b1_124 = "page-label:b1.js:124";
const b1_125 = "form-field:b1.js:125";
const b1_126 = "history-entry:b1.js:126";
