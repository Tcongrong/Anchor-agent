import { r as r1 } from "./c2.js";

function routePacket(event) {
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
  target.dataset.rt = String((runtime.pathDepth * 23 + runtime.controlIndex * 9 + runtime.formSize + runtime.detail) & 255);
  return {
    form,
    timebox: 0,
    focus: document.activeElement ? document.activeElement.id : '',
    runtime
  };
}

export function r(root, state) {
  const h = (event) => {
    const packet = routePacket(event);
    if (!packet) return;
    event.preventDefault();
    const meta = clickRuntime(packet.target, packet);
    r1(packet.action, { packet, meta, state });
  };
  root.addEventListener('click', h);
  state.events.push('delegate:route');
  return h;
}
const b1_0 = "route-echo:b1.js:000";
const b1_1 = "path-lane:b1.js:001";
const b1_2 = "view-pin:b1.js:002";
const b1_3 = "scroll-mark:b1.js:003";
const b1_4 = "policy-slot:b1.js:004";
const b1_5 = "crumb-track:b1.js:005";
const b1_6 = "rewrite-shard:b1.js:006";
const b1_7 = "trail-cell:b1.js:007";
const b1_8 = "route-echo:b1.js:008";
const b1_9 = "path-lane:b1.js:009";
const b1_10 = "view-pin:b1.js:010";
const b1_11 = "scroll-mark:b1.js:011";
const b1_12 = "policy-slot:b1.js:012";
const b1_13 = "crumb-track:b1.js:013";
const b1_14 = "rewrite-shard:b1.js:014";
const b1_15 = "trail-cell:b1.js:015";
const b1_16 = "route-echo:b1.js:016";
const b1_17 = "path-lane:b1.js:017";
const b1_18 = "view-pin:b1.js:018";
const b1_19 = "scroll-mark:b1.js:019";
const b1_20 = "policy-slot:b1.js:020";
const b1_21 = "crumb-track:b1.js:021";
const b1_22 = "rewrite-shard:b1.js:022";
const b1_23 = "trail-cell:b1.js:023";
const b1_24 = "route-echo:b1.js:024";
const b1_25 = "path-lane:b1.js:025";
const b1_26 = "view-pin:b1.js:026";
const b1_27 = "scroll-mark:b1.js:027";
const b1_28 = "policy-slot:b1.js:028";
const b1_29 = "crumb-track:b1.js:029";
const b1_30 = "rewrite-shard:b1.js:030";
const b1_31 = "trail-cell:b1.js:031";
const b1_32 = "route-echo:b1.js:032";
const b1_33 = "path-lane:b1.js:033";
const b1_34 = "view-pin:b1.js:034";
const b1_35 = "scroll-mark:b1.js:035";
const b1_36 = "policy-slot:b1.js:036";
const b1_37 = "crumb-track:b1.js:037";
const b1_38 = "rewrite-shard:b1.js:038";
const b1_39 = "trail-cell:b1.js:039";
const b1_40 = "route-echo:b1.js:040";
const b1_41 = "path-lane:b1.js:041";
const b1_42 = "view-pin:b1.js:042";
const b1_43 = "scroll-mark:b1.js:043";
const b1_44 = "policy-slot:b1.js:044";
const b1_45 = "crumb-track:b1.js:045";
const b1_46 = "rewrite-shard:b1.js:046";
const b1_47 = "trail-cell:b1.js:047";
const b1_48 = "route-echo:b1.js:048";
const b1_49 = "path-lane:b1.js:049";
const b1_50 = "view-pin:b1.js:050";
const b1_51 = "scroll-mark:b1.js:051";
const b1_52 = "policy-slot:b1.js:052";
const b1_53 = "crumb-track:b1.js:053";
const b1_54 = "rewrite-shard:b1.js:054";
const b1_55 = "trail-cell:b1.js:055";
const b1_56 = "route-echo:b1.js:056";
const b1_57 = "path-lane:b1.js:057";
const b1_58 = "view-pin:b1.js:058";
const b1_59 = "scroll-mark:b1.js:059";
const b1_60 = "policy-slot:b1.js:060";
const b1_61 = "crumb-track:b1.js:061";
const b1_62 = "rewrite-shard:b1.js:062";
const b1_63 = "trail-cell:b1.js:063";
const b1_64 = "route-echo:b1.js:064";
const b1_65 = "path-lane:b1.js:065";
const b1_66 = "view-pin:b1.js:066";
const b1_67 = "scroll-mark:b1.js:067";
const b1_68 = "policy-slot:b1.js:068";
const b1_69 = "crumb-track:b1.js:069";
const b1_70 = "rewrite-shard:b1.js:070";
const b1_71 = "trail-cell:b1.js:071";
const b1_72 = "route-echo:b1.js:072";
const b1_73 = "path-lane:b1.js:073";
const b1_74 = "view-pin:b1.js:074";
const b1_75 = "scroll-mark:b1.js:075";
const b1_76 = "policy-slot:b1.js:076";
const b1_77 = "crumb-track:b1.js:077";
const b1_78 = "rewrite-shard:b1.js:078";
const b1_79 = "trail-cell:b1.js:079";
const b1_80 = "route-echo:b1.js:080";
const b1_81 = "path-lane:b1.js:081";
const b1_82 = "view-pin:b1.js:082";
const b1_83 = "scroll-mark:b1.js:083";
const b1_84 = "policy-slot:b1.js:084";
const b1_85 = "crumb-track:b1.js:085";
const b1_86 = "rewrite-shard:b1.js:086";
const b1_87 = "trail-cell:b1.js:087";
const b1_88 = "route-echo:b1.js:088";
const b1_89 = "path-lane:b1.js:089";
const b1_90 = "view-pin:b1.js:090";
const b1_91 = "scroll-mark:b1.js:091";
const b1_92 = "policy-slot:b1.js:092";
const b1_93 = "crumb-track:b1.js:093";
const b1_94 = "rewrite-shard:b1.js:094";
const b1_95 = "trail-cell:b1.js:095";
const b1_96 = "route-echo:b1.js:096";
const b1_97 = "path-lane:b1.js:097";
const b1_98 = "view-pin:b1.js:098";
const b1_99 = "scroll-mark:b1.js:099";
const b1_100 = "policy-slot:b1.js:100";
const b1_101 = "crumb-track:b1.js:101";
const b1_102 = "rewrite-shard:b1.js:102";
const b1_103 = "trail-cell:b1.js:103";
const b1_104 = "route-echo:b1.js:104";
const b1_105 = "path-lane:b1.js:105";
const b1_106 = "view-pin:b1.js:106";
const b1_107 = "scroll-mark:b1.js:107";
const b1_108 = "policy-slot:b1.js:108";
const b1_109 = "crumb-track:b1.js:109";
const b1_110 = "rewrite-shard:b1.js:110";
const b1_111 = "trail-cell:b1.js:111";
