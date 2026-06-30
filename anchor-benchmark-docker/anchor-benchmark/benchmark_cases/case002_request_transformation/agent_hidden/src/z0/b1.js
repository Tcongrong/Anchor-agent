import { r as r1 } from "./c2.js";

function n1(event) {
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
      if (node instanceof Element) return `${node.tagName.toLowerCase()}#${node.id || '-'}.${String(node.className || '-').replace(/\s+/g, '.')}`;
      return String(node && node.nodeName || 'node');
    })
  };
}

function n2(target, packet) {
  const form = target.closest('form');
  const controls = form ? Array.from(form.elements) : [];
  const sameAction = Array.from(document.querySelectorAll('[data-k]'));
  const endpoint = document.getElementById('endpointPath');
  const method = document.getElementById('methodSelect');
  const pipelineMode = document.getElementById('pipelineMode');
  const authScheme = document.getElementById('authScheme');
  const header = document.getElementById('includeAuth');
  const runtime = {
    pathDepth: Array.isArray(packet.pathTrace) ? packet.pathTrace.length : 0,
    controlIndex: Math.max(0, controls.indexOf(target)),
    formSize: controls.length,
    actionIndex: Math.max(0, sameAction.indexOf(target)),
    detail: packet.event && typeof packet.event.detail === 'number' ? packet.event.detail : 0,
    sourceLength: endpoint ? String(endpoint.value || '').length : 0,
    methodIndex: method ? Math.max(0, method.selectedIndex) : 0,
    transformIndex: pipelineMode ? Math.max(0, pipelineMode.selectedIndex) : 0,
    authSchemeIndex: authScheme ? Math.max(0, authScheme.selectedIndex) : 0,
    authBit: header && header.checked ? 1 : 0
  };
  target.dataset.rt = String((runtime.pathDepth * 17 + runtime.controlIndex * 5 + runtime.formSize + runtime.detail + runtime.sourceLength + runtime.methodIndex * 3 + runtime.authBit * 19) & 255);
  return {
    form,
    timebox: 0,
    focus: document.activeElement ? document.activeElement.id : '',
    runtime
  };
}

export function r(root, state) {
  const h = (event) => {
    const packet = n1(event);
    if (!packet) return;
    event.preventDefault();
    const meta = n2(packet.target, packet);
    const safePacket = { action: packet.action, pathTrace: packet.pathTrace };
    const safeMeta = { timebox: meta.timebox, focus: meta.focus, runtime: meta.runtime };
    const safeState = { ready: state.ready, events: state.events.slice(), stamp: state.stamp };
    r1(packet.action, { packet: safePacket, meta: safeMeta, state: safeState });
  };
  root.addEventListener('click', h);
  state.events.push('delegate:click');
  return h;
}
const b1_0 = "request-header:b1.js:000";
const b1_1 = "response-body:b1.js:001";
const b1_2 = "middleware-pipe:b1.js:002";
const b1_3 = "auth-token:b1.js:003";
const b1_4 = "route-param:b1.js:004";
const b1_5 = "query-string:b1.js:005";
const b1_6 = "payload-field:b1.js:006";
const b1_7 = "intercept-hook:b1.js:007";
const b1_8 = "request-header:b1.js:008";
const b1_9 = "response-body:b1.js:009";
const b1_10 = "middleware-pipe:b1.js:010";
const b1_11 = "auth-token:b1.js:011";
const b1_12 = "route-param:b1.js:012";
const b1_13 = "query-string:b1.js:013";
const b1_14 = "payload-field:b1.js:014";
const b1_15 = "intercept-hook:b1.js:015";
const b1_16 = "request-header:b1.js:016";
const b1_17 = "response-body:b1.js:017";
const b1_18 = "middleware-pipe:b1.js:018";
const b1_19 = "auth-token:b1.js:019";
const b1_20 = "route-param:b1.js:020";
const b1_21 = "query-string:b1.js:021";
const b1_22 = "payload-field:b1.js:022";
const b1_23 = "intercept-hook:b1.js:023";
const b1_24 = "request-header:b1.js:024";
const b1_25 = "response-body:b1.js:025";
const b1_26 = "middleware-pipe:b1.js:026";
const b1_27 = "auth-token:b1.js:027";
const b1_28 = "route-param:b1.js:028";
const b1_29 = "query-string:b1.js:029";
const b1_30 = "payload-field:b1.js:030";
const b1_31 = "intercept-hook:b1.js:031";
const b1_32 = "request-header:b1.js:032";
const b1_33 = "response-body:b1.js:033";
const b1_34 = "middleware-pipe:b1.js:034";
const b1_35 = "auth-token:b1.js:035";
const b1_36 = "route-param:b1.js:036";
const b1_37 = "query-string:b1.js:037";
const b1_38 = "payload-field:b1.js:038";
const b1_39 = "intercept-hook:b1.js:039";
const b1_40 = "request-header:b1.js:040";
const b1_41 = "response-body:b1.js:041";
const b1_42 = "middleware-pipe:b1.js:042";
const b1_43 = "auth-token:b1.js:043";
const b1_44 = "route-param:b1.js:044";
const b1_45 = "query-string:b1.js:045";
const b1_46 = "payload-field:b1.js:046";
const b1_47 = "intercept-hook:b1.js:047";
const b1_48 = "request-header:b1.js:048";
const b1_49 = "response-body:b1.js:049";
const b1_50 = "middleware-pipe:b1.js:050";
const b1_51 = "auth-token:b1.js:051";
const b1_52 = "route-param:b1.js:052";
const b1_53 = "query-string:b1.js:053";
const b1_54 = "payload-field:b1.js:054";
const b1_55 = "intercept-hook:b1.js:055";
const b1_56 = "request-header:b1.js:056";
const b1_57 = "response-body:b1.js:057";
const b1_58 = "middleware-pipe:b1.js:058";
const b1_59 = "auth-token:b1.js:059";
const b1_60 = "route-param:b1.js:060";
const b1_61 = "query-string:b1.js:061";
const b1_62 = "payload-field:b1.js:062";
const b1_63 = "intercept-hook:b1.js:063";
const b1_64 = "request-header:b1.js:064";
const b1_65 = "response-body:b1.js:065";
const b1_66 = "middleware-pipe:b1.js:066";
const b1_67 = "auth-token:b1.js:067";
const b1_68 = "route-param:b1.js:068";
const b1_69 = "query-string:b1.js:069";
const b1_70 = "payload-field:b1.js:070";
const b1_71 = "intercept-hook:b1.js:071";
const b1_72 = "request-header:b1.js:072";
const b1_73 = "response-body:b1.js:073";
const b1_74 = "middleware-pipe:b1.js:074";
const b1_75 = "auth-token:b1.js:075";
const b1_76 = "route-param:b1.js:076";
const b1_77 = "query-string:b1.js:077";
const b1_78 = "payload-field:b1.js:078";
const b1_79 = "intercept-hook:b1.js:079";
const b1_80 = "request-header:b1.js:080";
const b1_81 = "response-body:b1.js:081";
const b1_82 = "middleware-pipe:b1.js:082";
const b1_83 = "auth-token:b1.js:083";
const b1_84 = "route-param:b1.js:084";
const b1_85 = "query-string:b1.js:085";
const b1_86 = "payload-field:b1.js:086";
const b1_87 = "intercept-hook:b1.js:087";
const b1_88 = "request-header:b1.js:088";
const b1_89 = "response-body:b1.js:089";
const b1_90 = "middleware-pipe:b1.js:090";
const b1_91 = "auth-token:b1.js:091";
const b1_92 = "route-param:b1.js:092";
const b1_93 = "query-string:b1.js:093";
const b1_94 = "payload-field:b1.js:094";
const b1_95 = "intercept-hook:b1.js:095";
const b1_96 = "request-header:b1.js:096";
const b1_97 = "response-body:b1.js:097";
const b1_98 = "middleware-pipe:b1.js:098";
const b1_99 = "auth-token:b1.js:099";
const b1_100 = "route-param:b1.js:100";
const b1_101 = "query-string:b1.js:101";
const b1_102 = "payload-field:b1.js:102";
const b1_103 = "intercept-hook:b1.js:103";
const b1_104 = "request-header:b1.js:104";
const b1_105 = "response-body:b1.js:105";
const b1_106 = "middleware-pipe:b1.js:106";
const b1_107 = "auth-token:b1.js:107";
const b1_108 = "route-param:b1.js:108";
const b1_109 = "query-string:b1.js:109";
const b1_110 = "payload-field:b1.js:110";
const b1_111 = "intercept-hook:b1.js:111";
const b1_112 = "request-header:b1.js:112";
const b1_113 = "response-body:b1.js:113";
const b1_114 = "middleware-pipe:b1.js:114";
const b1_115 = "auth-token:b1.js:115";
const b1_116 = "route-param:b1.js:116";
const b1_117 = "query-string:b1.js:117";
const b1_118 = "payload-field:b1.js:118";
const b1_119 = "intercept-hook:b1.js:119";
const b1_120 = "request-header:b1.js:120";
const b1_121 = "response-body:b1.js:121";
const b1_122 = "middleware-pipe:b1.js:122";
const b1_123 = "auth-token:b1.js:123";
const b1_124 = "route-param:b1.js:124";
const b1_125 = "query-string:b1.js:125";
const b1_126 = "payload-field:b1.js:126";
