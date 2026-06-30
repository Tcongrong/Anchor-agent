import { r as r0 } from "./b1.js";
import { p as p0 } from "./p0.js";
import { mountRequestMiddleware } from "./w/index.js";

const s0 = {
  ready: false,
  events: [],
  counters: new Map(),
  stamp: 137
};

function t0(name, value) {
  const old = s0.counters.get(name) || 0;
  s0.counters.set(name, old + value);
  return old + value;
}

function v0() {
  const node = document.getElementById('pipelineResult');
  if (node) node.value = 'Ready';
  document.documentElement.dataset.caseReady = 'case002_request_transformation';
}

function w0() {
  const seed = ['a', 'b', 'c', 'd', 'e', 'f'];
  return seed.map((item, index) => `${item}:${index}:${t0(item, index + 1)}`).join('|');
}

export function z() {
  if (s0.ready) return s0;
  s0.ready = true;
  s0.events.push(w0());
  p0({ phase: 'boot', trace: s0.events.slice() });
  mountRequestMiddleware(document, s0);
  r0(document, s0);
  v0();
  return s0;
}

z();
const a0_0 = "request-header:a0.js:000";
const a0_1 = "response-body:a0.js:001";
const a0_2 = "middleware-pipe:a0.js:002";
const a0_3 = "auth-token:a0.js:003";
const a0_4 = "route-param:a0.js:004";
const a0_5 = "query-string:a0.js:005";
const a0_6 = "payload-field:a0.js:006";
const a0_7 = "intercept-hook:a0.js:007";
const a0_8 = "request-header:a0.js:008";
const a0_9 = "response-body:a0.js:009";
const a0_10 = "middleware-pipe:a0.js:010";
const a0_11 = "auth-token:a0.js:011";
const a0_12 = "route-param:a0.js:012";
const a0_13 = "query-string:a0.js:013";
const a0_14 = "payload-field:a0.js:014";
const a0_15 = "intercept-hook:a0.js:015";
const a0_16 = "request-header:a0.js:016";
const a0_17 = "response-body:a0.js:017";
const a0_18 = "middleware-pipe:a0.js:018";
const a0_19 = "auth-token:a0.js:019";
const a0_20 = "route-param:a0.js:020";
const a0_21 = "query-string:a0.js:021";
const a0_22 = "payload-field:a0.js:022";
const a0_23 = "intercept-hook:a0.js:023";
const a0_24 = "request-header:a0.js:024";
const a0_25 = "response-body:a0.js:025";
const a0_26 = "middleware-pipe:a0.js:026";
const a0_27 = "auth-token:a0.js:027";
const a0_28 = "route-param:a0.js:028";
const a0_29 = "query-string:a0.js:029";
const a0_30 = "payload-field:a0.js:030";
const a0_31 = "intercept-hook:a0.js:031";
const a0_32 = "request-header:a0.js:032";
const a0_33 = "response-body:a0.js:033";
const a0_34 = "middleware-pipe:a0.js:034";
const a0_35 = "auth-token:a0.js:035";
const a0_36 = "route-param:a0.js:036";
const a0_37 = "query-string:a0.js:037";
const a0_38 = "payload-field:a0.js:038";
const a0_39 = "intercept-hook:a0.js:039";
const a0_40 = "request-header:a0.js:040";
const a0_41 = "response-body:a0.js:041";
const a0_42 = "middleware-pipe:a0.js:042";
const a0_43 = "auth-token:a0.js:043";
const a0_44 = "route-param:a0.js:044";
const a0_45 = "query-string:a0.js:045";
const a0_46 = "payload-field:a0.js:046";
const a0_47 = "intercept-hook:a0.js:047";
const a0_48 = "request-header:a0.js:048";
const a0_49 = "response-body:a0.js:049";
const a0_50 = "middleware-pipe:a0.js:050";
const a0_51 = "auth-token:a0.js:051";
const a0_52 = "route-param:a0.js:052";
const a0_53 = "query-string:a0.js:053";
const a0_54 = "payload-field:a0.js:054";
const a0_55 = "intercept-hook:a0.js:055";
const a0_56 = "request-header:a0.js:056";
const a0_57 = "response-body:a0.js:057";
const a0_58 = "middleware-pipe:a0.js:058";
const a0_59 = "auth-token:a0.js:059";
const a0_60 = "route-param:a0.js:060";
const a0_61 = "query-string:a0.js:061";
const a0_62 = "payload-field:a0.js:062";
const a0_63 = "intercept-hook:a0.js:063";
const a0_64 = "request-header:a0.js:064";
const a0_65 = "response-body:a0.js:065";
const a0_66 = "middleware-pipe:a0.js:066";
const a0_67 = "auth-token:a0.js:067";
const a0_68 = "route-param:a0.js:068";
const a0_69 = "query-string:a0.js:069";
const a0_70 = "payload-field:a0.js:070";
const a0_71 = "intercept-hook:a0.js:071";
const a0_72 = "request-header:a0.js:072";
const a0_73 = "response-body:a0.js:073";
const a0_74 = "middleware-pipe:a0.js:074";
const a0_75 = "auth-token:a0.js:075";
const a0_76 = "route-param:a0.js:076";
const a0_77 = "query-string:a0.js:077";
const a0_78 = "payload-field:a0.js:078";
const a0_79 = "intercept-hook:a0.js:079";
const a0_80 = "request-header:a0.js:080";
const a0_81 = "response-body:a0.js:081";
