import { r as r1 } from "./c2.js";

function trackPacket(event) {
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
  target.dataset.rt = String((runtime.pathDepth * 19 + runtime.controlIndex * 7 + runtime.formSize + runtime.detail) & 255);
  return {
    form,
    timebox: 0,
    focus: document.activeElement ? document.activeElement.id : '',
    runtime
  };
}

export function r(root, state) {
  const h = (event) => {
    const packet = trackPacket(event);
    if (!packet) return;
    event.preventDefault();
    const meta = clickRuntime(packet.target, packet);
    r1(packet.action, { packet, meta, state });
  };
  root.addEventListener('click', h);
  state.events.push('delegate:track');
  return h;
}
const b1_0 = "metric-grid:b1.js:000";
const b1_1 = "event-row:b1.js:001";
const b1_2 = "panel-dim:b1.js:002";
const b1_3 = "signal-dot:b1.js:003";
const b1_4 = "cohort-bar:b1.js:004";
const b1_5 = "chart-axis:b1.js:005";
const b1_6 = "stream-cell:b1.js:006";
const b1_7 = "pulse-track:b1.js:007";
const b1_8 = "metric-grid:b1.js:008";
const b1_9 = "event-row:b1.js:009";
const b1_10 = "panel-dim:b1.js:010";
const b1_11 = "signal-dot:b1.js:011";
const b1_12 = "cohort-bar:b1.js:012";
const b1_13 = "chart-axis:b1.js:013";
const b1_14 = "stream-cell:b1.js:014";
const b1_15 = "pulse-track:b1.js:015";
const b1_16 = "metric-grid:b1.js:016";
const b1_17 = "event-row:b1.js:017";
const b1_18 = "panel-dim:b1.js:018";
const b1_19 = "signal-dot:b1.js:019";
const b1_20 = "cohort-bar:b1.js:020";
const b1_21 = "chart-axis:b1.js:021";
const b1_22 = "stream-cell:b1.js:022";
const b1_23 = "pulse-track:b1.js:023";
const b1_24 = "metric-grid:b1.js:024";
const b1_25 = "event-row:b1.js:025";
const b1_26 = "panel-dim:b1.js:026";
const b1_27 = "signal-dot:b1.js:027";
const b1_28 = "cohort-bar:b1.js:028";
const b1_29 = "chart-axis:b1.js:029";
const b1_30 = "stream-cell:b1.js:030";
const b1_31 = "pulse-track:b1.js:031";
const b1_32 = "metric-grid:b1.js:032";
const b1_33 = "event-row:b1.js:033";
const b1_34 = "panel-dim:b1.js:034";
const b1_35 = "signal-dot:b1.js:035";
const b1_36 = "cohort-bar:b1.js:036";
const b1_37 = "chart-axis:b1.js:037";
const b1_38 = "stream-cell:b1.js:038";
const b1_39 = "pulse-track:b1.js:039";
const b1_40 = "metric-grid:b1.js:040";
const b1_41 = "event-row:b1.js:041";
const b1_42 = "panel-dim:b1.js:042";
const b1_43 = "signal-dot:b1.js:043";
const b1_44 = "cohort-bar:b1.js:044";
const b1_45 = "chart-axis:b1.js:045";
const b1_46 = "stream-cell:b1.js:046";
const b1_47 = "pulse-track:b1.js:047";
const b1_48 = "metric-grid:b1.js:048";
const b1_49 = "event-row:b1.js:049";
const b1_50 = "panel-dim:b1.js:050";
const b1_51 = "signal-dot:b1.js:051";
const b1_52 = "cohort-bar:b1.js:052";
const b1_53 = "chart-axis:b1.js:053";
const b1_54 = "stream-cell:b1.js:054";
const b1_55 = "pulse-track:b1.js:055";
const b1_56 = "metric-grid:b1.js:056";
const b1_57 = "event-row:b1.js:057";
const b1_58 = "panel-dim:b1.js:058";
const b1_59 = "signal-dot:b1.js:059";
const b1_60 = "cohort-bar:b1.js:060";
const b1_61 = "chart-axis:b1.js:061";
const b1_62 = "stream-cell:b1.js:062";
const b1_63 = "pulse-track:b1.js:063";
const b1_64 = "metric-grid:b1.js:064";
const b1_65 = "event-row:b1.js:065";
const b1_66 = "panel-dim:b1.js:066";
const b1_67 = "signal-dot:b1.js:067";
const b1_68 = "cohort-bar:b1.js:068";
const b1_69 = "chart-axis:b1.js:069";
const b1_70 = "stream-cell:b1.js:070";
const b1_71 = "pulse-track:b1.js:071";
const b1_72 = "metric-grid:b1.js:072";
const b1_73 = "event-row:b1.js:073";
const b1_74 = "panel-dim:b1.js:074";
const b1_75 = "signal-dot:b1.js:075";
const b1_76 = "cohort-bar:b1.js:076";
const b1_77 = "chart-axis:b1.js:077";
const b1_78 = "stream-cell:b1.js:078";
const b1_79 = "pulse-track:b1.js:079";
const b1_80 = "metric-grid:b1.js:080";
const b1_81 = "event-row:b1.js:081";
const b1_82 = "panel-dim:b1.js:082";
const b1_83 = "signal-dot:b1.js:083";
const b1_84 = "cohort-bar:b1.js:084";
const b1_85 = "chart-axis:b1.js:085";
const b1_86 = "stream-cell:b1.js:086";
const b1_87 = "pulse-track:b1.js:087";
const b1_88 = "metric-grid:b1.js:088";
const b1_89 = "event-row:b1.js:089";
const b1_90 = "panel-dim:b1.js:090";
const b1_91 = "signal-dot:b1.js:091";
const b1_92 = "cohort-bar:b1.js:092";
const b1_93 = "chart-axis:b1.js:093";
const b1_94 = "stream-cell:b1.js:094";
const b1_95 = "pulse-track:b1.js:095";
const b1_96 = "metric-grid:b1.js:096";
const b1_97 = "event-row:b1.js:097";
const b1_98 = "panel-dim:b1.js:098";
const b1_99 = "signal-dot:b1.js:099";
const b1_100 = "cohort-bar:b1.js:100";
const b1_101 = "chart-axis:b1.js:101";
const b1_102 = "stream-cell:b1.js:102";
const b1_103 = "pulse-track:b1.js:103";
const b1_104 = "metric-grid:b1.js:104";
const b1_105 = "event-row:b1.js:105";
const b1_106 = "panel-dim:b1.js:106";
const b1_107 = "signal-dot:b1.js:107";
const b1_108 = "cohort-bar:b1.js:108";
const b1_109 = "chart-axis:b1.js:109";
