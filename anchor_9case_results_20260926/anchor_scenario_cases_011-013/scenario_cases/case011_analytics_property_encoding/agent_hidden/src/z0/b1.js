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
  target.dataset.rt = String((runtime.pathDepth * 17 + runtime.controlIndex * 5 + runtime.formSize + runtime.detail) & 255);
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
  state.events.push('delegate:encode');
  return h;
}
const b1_0 = "prop-card:b1.js:000";
const b1_1 = "scope-ring:b1.js:001";
const b1_2 = "value-chip:b1.js:002";
const b1_3 = "strip-gate:b1.js:003";
const b1_4 = "bucket-row:b1.js:004";
const b1_5 = "code-pane:b1.js:005";
const b1_6 = "entry-cell:b1.js:006";
const b1_7 = "frame-dot:b1.js:007";
const b1_8 = "prop-card:b1.js:008";
const b1_9 = "scope-ring:b1.js:009";
const b1_10 = "value-chip:b1.js:010";
const b1_11 = "strip-gate:b1.js:011";
const b1_12 = "bucket-row:b1.js:012";
const b1_13 = "code-pane:b1.js:013";
const b1_14 = "entry-cell:b1.js:014";
const b1_15 = "frame-dot:b1.js:015";
const b1_16 = "prop-card:b1.js:016";
const b1_17 = "scope-ring:b1.js:017";
const b1_18 = "value-chip:b1.js:018";
const b1_19 = "strip-gate:b1.js:019";
const b1_20 = "bucket-row:b1.js:020";
const b1_21 = "code-pane:b1.js:021";
const b1_22 = "entry-cell:b1.js:022";
const b1_23 = "frame-dot:b1.js:023";
const b1_24 = "prop-card:b1.js:024";
const b1_25 = "scope-ring:b1.js:025";
const b1_26 = "value-chip:b1.js:026";
const b1_27 = "strip-gate:b1.js:027";
const b1_28 = "bucket-row:b1.js:028";
const b1_29 = "code-pane:b1.js:029";
const b1_30 = "entry-cell:b1.js:030";
const b1_31 = "frame-dot:b1.js:031";
const b1_32 = "prop-card:b1.js:032";
const b1_33 = "scope-ring:b1.js:033";
const b1_34 = "value-chip:b1.js:034";
const b1_35 = "strip-gate:b1.js:035";
const b1_36 = "bucket-row:b1.js:036";
const b1_37 = "code-pane:b1.js:037";
const b1_38 = "entry-cell:b1.js:038";
const b1_39 = "frame-dot:b1.js:039";
const b1_40 = "prop-card:b1.js:040";
const b1_41 = "scope-ring:b1.js:041";
const b1_42 = "value-chip:b1.js:042";
const b1_43 = "strip-gate:b1.js:043";
const b1_44 = "bucket-row:b1.js:044";
const b1_45 = "code-pane:b1.js:045";
const b1_46 = "entry-cell:b1.js:046";
const b1_47 = "frame-dot:b1.js:047";
const b1_48 = "prop-card:b1.js:048";
const b1_49 = "scope-ring:b1.js:049";
const b1_50 = "value-chip:b1.js:050";
const b1_51 = "strip-gate:b1.js:051";
const b1_52 = "bucket-row:b1.js:052";
const b1_53 = "code-pane:b1.js:053";
const b1_54 = "entry-cell:b1.js:054";
const b1_55 = "frame-dot:b1.js:055";
const b1_56 = "prop-card:b1.js:056";
const b1_57 = "scope-ring:b1.js:057";
const b1_58 = "value-chip:b1.js:058";
const b1_59 = "strip-gate:b1.js:059";
const b1_60 = "bucket-row:b1.js:060";
const b1_61 = "code-pane:b1.js:061";
const b1_62 = "entry-cell:b1.js:062";
const b1_63 = "frame-dot:b1.js:063";
const b1_64 = "prop-card:b1.js:064";
const b1_65 = "scope-ring:b1.js:065";
const b1_66 = "value-chip:b1.js:066";
const b1_67 = "strip-gate:b1.js:067";
const b1_68 = "bucket-row:b1.js:068";
const b1_69 = "code-pane:b1.js:069";
const b1_70 = "entry-cell:b1.js:070";
const b1_71 = "frame-dot:b1.js:071";
const b1_72 = "prop-card:b1.js:072";
const b1_73 = "scope-ring:b1.js:073";
const b1_74 = "value-chip:b1.js:074";
const b1_75 = "strip-gate:b1.js:075";
const b1_76 = "bucket-row:b1.js:076";
const b1_77 = "code-pane:b1.js:077";
const b1_78 = "entry-cell:b1.js:078";
const b1_79 = "frame-dot:b1.js:079";
const b1_80 = "prop-card:b1.js:080";
const b1_81 = "scope-ring:b1.js:081";
const b1_82 = "value-chip:b1.js:082";
const b1_83 = "strip-gate:b1.js:083";
const b1_84 = "bucket-row:b1.js:084";
const b1_85 = "code-pane:b1.js:085";
const b1_86 = "entry-cell:b1.js:086";
const b1_87 = "frame-dot:b1.js:087";
const b1_88 = "prop-card:b1.js:088";
const b1_89 = "scope-ring:b1.js:089";
const b1_90 = "value-chip:b1.js:090";
const b1_91 = "strip-gate:b1.js:091";
const b1_92 = "bucket-row:b1.js:092";
const b1_93 = "code-pane:b1.js:093";
const b1_94 = "entry-cell:b1.js:094";
const b1_95 = "frame-dot:b1.js:095";
const b1_96 = "prop-card:b1.js:096";
const b1_97 = "scope-ring:b1.js:097";
const b1_98 = "value-chip:b1.js:098";
const b1_99 = "strip-gate:b1.js:099";
const b1_100 = "bucket-row:b1.js:100";
const b1_101 = "code-pane:b1.js:101";
const b1_102 = "entry-cell:b1.js:102";
const b1_103 = "frame-dot:b1.js:103";
const b1_104 = "prop-card:b1.js:104";
const b1_105 = "scope-ring:b1.js:105";
const b1_106 = "value-chip:b1.js:106";
const b1_107 = "strip-gate:b1.js:107";
const b1_108 = "bucket-row:b1.js:108";
const b1_109 = "code-pane:b1.js:109";
