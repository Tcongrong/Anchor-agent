import { r as r1 } from "./c2.js";

function captureClick(event) {
  const target = event.target instanceof Element ? event.target.closest('[data-k]') : null;
  if (!target) return null;
  const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
  return {
    action: target.getAttribute('data-k') || '',
    target,
    event,
    pathTrace: path.map((node) => {
      if (node === window) return 'window';
      if (node === document) return 'document';
      if (node instanceof Element) return node.tagName.toLowerCase() + '#' + (node.id || '-') + '.' + String(node.className || '-').replace(/\s+/g, '.');
      return String(node && node.nodeName || 'node');
    })
  };
}

function clickRuntime(target, packet) {
  const form = target.closest('form');
  const controls = form ? Array.from(form.elements) : [];
  const sameAction = Array.from(document.querySelectorAll('[data-k]'));
  const runtime = {
    pathDepth: Array.isArray(packet.pathTrace) ? packet.pathTrace.length : 0,
    controlIndex: Math.max(0, controls.indexOf(target)),
    formSize: controls.length,
    actionIndex: Math.max(0, sameAction.indexOf(target)),
    detail: packet.event && typeof packet.event.detail === 'number' ? packet.event.detail : 0
  };
  target.dataset.rt = String((runtime.pathDepth * 23 + runtime.controlIndex * 7 + runtime.formSize + runtime.detail) & 255);
  return {
    form,
    timebox: 0,
    focus: document.activeElement ? document.activeElement.id : '',
    runtime
  };
}

export function r(root, state) {
  const h = (event) => {
    const packet = captureClick(event);
    if (!packet) return;
    event.preventDefault();
    const meta = clickRuntime(packet.target, packet);
    r1(packet.action, { packet, meta, state });
  };
  root.addEventListener('click', h);
  state.events.push('delegate:queue');
  return h;
}
const b1_0 = "queue-slot:b1.js:000";
const b1_1 = "batch-row:b1.js:001";
const b1_2 = "flush-gate:b1.js:002";
const b1_3 = "drain-ring:b1.js:003";
const b1_4 = "pulse-wave:b1.js:004";
const b1_5 = "beacon-dot:b1.js:005";
const b1_6 = "entry-card:b1.js:006";
const b1_7 = "context-pane:b1.js:007";
const b1_8 = "queue-slot:b1.js:008";
const b1_9 = "batch-row:b1.js:009";
const b1_10 = "flush-gate:b1.js:010";
const b1_11 = "drain-ring:b1.js:011";
const b1_12 = "pulse-wave:b1.js:012";
const b1_13 = "beacon-dot:b1.js:013";
const b1_14 = "entry-card:b1.js:014";
const b1_15 = "context-pane:b1.js:015";
const b1_16 = "queue-slot:b1.js:016";
const b1_17 = "batch-row:b1.js:017";
const b1_18 = "flush-gate:b1.js:018";
const b1_19 = "drain-ring:b1.js:019";
const b1_20 = "pulse-wave:b1.js:020";
const b1_21 = "beacon-dot:b1.js:021";
const b1_22 = "entry-card:b1.js:022";
const b1_23 = "context-pane:b1.js:023";
const b1_24 = "queue-slot:b1.js:024";
const b1_25 = "batch-row:b1.js:025";
const b1_26 = "flush-gate:b1.js:026";
const b1_27 = "drain-ring:b1.js:027";
const b1_28 = "pulse-wave:b1.js:028";
const b1_29 = "beacon-dot:b1.js:029";
const b1_30 = "entry-card:b1.js:030";
const b1_31 = "context-pane:b1.js:031";
const b1_32 = "queue-slot:b1.js:032";
const b1_33 = "batch-row:b1.js:033";
const b1_34 = "flush-gate:b1.js:034";
const b1_35 = "drain-ring:b1.js:035";
const b1_36 = "pulse-wave:b1.js:036";
const b1_37 = "beacon-dot:b1.js:037";
const b1_38 = "entry-card:b1.js:038";
const b1_39 = "context-pane:b1.js:039";
const b1_40 = "queue-slot:b1.js:040";
const b1_41 = "batch-row:b1.js:041";
const b1_42 = "flush-gate:b1.js:042";
const b1_43 = "drain-ring:b1.js:043";
const b1_44 = "pulse-wave:b1.js:044";
const b1_45 = "beacon-dot:b1.js:045";
const b1_46 = "entry-card:b1.js:046";
const b1_47 = "context-pane:b1.js:047";
const b1_48 = "queue-slot:b1.js:048";
const b1_49 = "batch-row:b1.js:049";
const b1_50 = "flush-gate:b1.js:050";
const b1_51 = "drain-ring:b1.js:051";
const b1_52 = "pulse-wave:b1.js:052";
const b1_53 = "beacon-dot:b1.js:053";
const b1_54 = "entry-card:b1.js:054";
const b1_55 = "context-pane:b1.js:055";
const b1_56 = "queue-slot:b1.js:056";
const b1_57 = "batch-row:b1.js:057";
const b1_58 = "flush-gate:b1.js:058";
const b1_59 = "drain-ring:b1.js:059";
const b1_60 = "pulse-wave:b1.js:060";
const b1_61 = "beacon-dot:b1.js:061";
const b1_62 = "entry-card:b1.js:062";
const b1_63 = "context-pane:b1.js:063";
const b1_64 = "queue-slot:b1.js:064";
const b1_65 = "batch-row:b1.js:065";
const b1_66 = "flush-gate:b1.js:066";
const b1_67 = "drain-ring:b1.js:067";
const b1_68 = "pulse-wave:b1.js:068";
const b1_69 = "beacon-dot:b1.js:069";
const b1_70 = "entry-card:b1.js:070";
const b1_71 = "context-pane:b1.js:071";
const b1_72 = "queue-slot:b1.js:072";
const b1_73 = "batch-row:b1.js:073";
const b1_74 = "flush-gate:b1.js:074";
const b1_75 = "drain-ring:b1.js:075";
const b1_76 = "pulse-wave:b1.js:076";
const b1_77 = "beacon-dot:b1.js:077";
const b1_78 = "entry-card:b1.js:078";
const b1_79 = "context-pane:b1.js:079";
const b1_80 = "queue-slot:b1.js:080";
const b1_81 = "batch-row:b1.js:081";
const b1_82 = "flush-gate:b1.js:082";
const b1_83 = "drain-ring:b1.js:083";
const b1_84 = "pulse-wave:b1.js:084";
const b1_85 = "beacon-dot:b1.js:085";
const b1_86 = "entry-card:b1.js:086";
const b1_87 = "context-pane:b1.js:087";
const b1_88 = "queue-slot:b1.js:088";
const b1_89 = "batch-row:b1.js:089";
const b1_90 = "flush-gate:b1.js:090";
const b1_91 = "drain-ring:b1.js:091";
const b1_92 = "pulse-wave:b1.js:092";
const b1_93 = "beacon-dot:b1.js:093";
const b1_94 = "entry-card:b1.js:094";
const b1_95 = "context-pane:b1.js:095";
const b1_96 = "queue-slot:b1.js:096";
const b1_97 = "batch-row:b1.js:097";
const b1_98 = "flush-gate:b1.js:098";
const b1_99 = "drain-ring:b1.js:099";
const b1_100 = "pulse-wave:b1.js:100";
const b1_101 = "beacon-dot:b1.js:101";
const b1_102 = "entry-card:b1.js:102";
const b1_103 = "context-pane:b1.js:103";
const b1_104 = "queue-slot:b1.js:104";
const b1_105 = "batch-row:b1.js:105";
const b1_106 = "flush-gate:b1.js:106";
const b1_107 = "drain-ring:b1.js:107";
const b1_108 = "pulse-wave:b1.js:108";
const b1_109 = "beacon-dot:b1.js:109";
