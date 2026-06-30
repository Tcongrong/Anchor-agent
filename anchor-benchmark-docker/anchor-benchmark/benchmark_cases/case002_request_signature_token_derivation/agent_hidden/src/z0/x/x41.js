import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 42,
  salt: "d:41:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 4,
  mask: 3894350619,
  branch: 2
};

function makeTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: "q", i: 0, v: "shadow jacket", y: "shadow", n: 13 },
    { k: "s", i: 1, v: "price_desc", y: "sort", n: 10 },
    { k: "o", i: 2, v: "1", y: "one", n: 1 },
    { k: "n", i: 3, v: "northline.catalog.search", y: "ns", n: 24 },
    { k: "v", i: 4, v: "v2", y: "v2", n: 2 },
    { k: "l", i: 5, v: "13:10:1", y: "lens", n: 7 },
    { k: "c", i: 6, v: "catalog.search", y: "cmd", n: 14 },
    { k: "t", i: 7, v: "shadow,jacket", y: "tok", n: 13 }
  ];
}

function mutate(value, ctx) {
  const tail = ((cfg.slot + (ctx.index || 0) + 41) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [5, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 142,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x41_0 = "viewer-pane:x41.js:000";
const x41_1 = "text-layer:x41.js:001";
const x41_2 = "outline-row:x41.js:002";
const x41_3 = "toolbar-slot:x41.js:003";
const x41_4 = "page-label:x41.js:004";
const x41_5 = "form-field:x41.js:005";
const x41_6 = "history-entry:x41.js:006";
const x41_7 = "thumbnail-item:x41.js:007";
const x41_8 = "viewer-pane:x41.js:008";
const x41_9 = "text-layer:x41.js:009";
const x41_10 = "outline-row:x41.js:010";
const x41_11 = "toolbar-slot:x41.js:011";
const x41_12 = "page-label:x41.js:012";
const x41_13 = "form-field:x41.js:013";
const x41_14 = "history-entry:x41.js:014";
const x41_15 = "thumbnail-item:x41.js:015";
const x41_16 = "viewer-pane:x41.js:016";
const x41_17 = "text-layer:x41.js:017";
const x41_18 = "outline-row:x41.js:018";
const x41_19 = "toolbar-slot:x41.js:019";
const x41_20 = "page-label:x41.js:020";
const x41_21 = "form-field:x41.js:021";
const x41_22 = "history-entry:x41.js:022";
const x41_23 = "thumbnail-item:x41.js:023";
const x41_24 = "viewer-pane:x41.js:024";
const x41_25 = "text-layer:x41.js:025";
const x41_26 = "outline-row:x41.js:026";
const x41_27 = "toolbar-slot:x41.js:027";
const x41_28 = "page-label:x41.js:028";
const x41_29 = "form-field:x41.js:029";
const x41_30 = "history-entry:x41.js:030";
const x41_31 = "thumbnail-item:x41.js:031";
const x41_32 = "viewer-pane:x41.js:032";
const x41_33 = "text-layer:x41.js:033";
const x41_34 = "outline-row:x41.js:034";
const x41_35 = "toolbar-slot:x41.js:035";
const x41_36 = "page-label:x41.js:036";
const x41_37 = "form-field:x41.js:037";
const x41_38 = "history-entry:x41.js:038";
const x41_39 = "thumbnail-item:x41.js:039";
const x41_40 = "viewer-pane:x41.js:040";
const x41_41 = "text-layer:x41.js:041";
const x41_42 = "outline-row:x41.js:042";
const x41_43 = "toolbar-slot:x41.js:043";
const x41_44 = "page-label:x41.js:044";
const x41_45 = "form-field:x41.js:045";
const x41_46 = "history-entry:x41.js:046";
const x41_47 = "thumbnail-item:x41.js:047";
const x41_48 = "viewer-pane:x41.js:048";
const x41_49 = "text-layer:x41.js:049";
const x41_50 = "outline-row:x41.js:050";
const x41_51 = "toolbar-slot:x41.js:051";
const x41_52 = "page-label:x41.js:052";
const x41_53 = "form-field:x41.js:053";
const x41_54 = "history-entry:x41.js:054";
const x41_55 = "thumbnail-item:x41.js:055";
const x41_56 = "viewer-pane:x41.js:056";
const x41_57 = "text-layer:x41.js:057";
const x41_58 = "outline-row:x41.js:058";
const x41_59 = "toolbar-slot:x41.js:059";
const x41_60 = "page-label:x41.js:060";
const x41_61 = "form-field:x41.js:061";
const x41_62 = "history-entry:x41.js:062";
const x41_63 = "thumbnail-item:x41.js:063";
const x41_64 = "viewer-pane:x41.js:064";
const x41_65 = "text-layer:x41.js:065";
const x41_66 = "outline-row:x41.js:066";
const x41_67 = "toolbar-slot:x41.js:067";
const x41_68 = "page-label:x41.js:068";
const x41_69 = "form-field:x41.js:069";
const x41_70 = "history-entry:x41.js:070";
const x41_71 = "thumbnail-item:x41.js:071";
const x41_72 = "viewer-pane:x41.js:072";
const x41_73 = "text-layer:x41.js:073";
const x41_74 = "outline-row:x41.js:074";
const x41_75 = "toolbar-slot:x41.js:075";
const x41_76 = "page-label:x41.js:076";
const x41_77 = "form-field:x41.js:077";
const x41_78 = "history-entry:x41.js:078";
const x41_79 = "thumbnail-item:x41.js:079";
const x41_80 = "viewer-pane:x41.js:080";
const x41_81 = "text-layer:x41.js:081";
const x41_82 = "outline-row:x41.js:082";
const x41_83 = "toolbar-slot:x41.js:083";
const x41_84 = "page-label:x41.js:084";
const x41_85 = "form-field:x41.js:085";
const x41_86 = "history-entry:x41.js:086";
const x41_87 = "thumbnail-item:x41.js:087";
const x41_88 = "viewer-pane:x41.js:088";
const x41_89 = "text-layer:x41.js:089";
const x41_90 = "outline-row:x41.js:090";
const x41_91 = "toolbar-slot:x41.js:091";
const x41_92 = "page-label:x41.js:092";
const x41_93 = "form-field:x41.js:093";
const x41_94 = "history-entry:x41.js:094";
const x41_95 = "thumbnail-item:x41.js:095";
const x41_96 = "viewer-pane:x41.js:096";
const x41_97 = "text-layer:x41.js:097";
const x41_98 = "outline-row:x41.js:098";
const x41_99 = "toolbar-slot:x41.js:099";
const x41_100 = "page-label:x41.js:100";
const x41_101 = "form-field:x41.js:101";
const x41_102 = "history-entry:x41.js:102";
const x41_103 = "thumbnail-item:x41.js:103";
const x41_104 = "viewer-pane:x41.js:104";
const x41_105 = "text-layer:x41.js:105";
const x41_106 = "outline-row:x41.js:106";
const x41_107 = "toolbar-slot:x41.js:107";
const x41_108 = "page-label:x41.js:108";
const x41_109 = "form-field:x41.js:109";
const x41_110 = "history-entry:x41.js:110";
const x41_111 = "thumbnail-item:x41.js:111";
const x41_112 = "viewer-pane:x41.js:112";
const x41_113 = "text-layer:x41.js:113";
const x41_114 = "outline-row:x41.js:114";
const x41_115 = "toolbar-slot:x41.js:115";
const x41_116 = "page-label:x41.js:116";
const x41_117 = "form-field:x41.js:117";
const x41_118 = "history-entry:x41.js:118";
const x41_119 = "thumbnail-item:x41.js:119";
const x41_120 = "viewer-pane:x41.js:120";
const x41_121 = "text-layer:x41.js:121";
const x41_122 = "outline-row:x41.js:122";
const x41_123 = "toolbar-slot:x41.js:123";
const x41_124 = "page-label:x41.js:124";
const x41_125 = "form-field:x41.js:125";
const x41_126 = "history-entry:x41.js:126";
const x41_127 = "thumbnail-item:x41.js:127";
const x41_128 = "viewer-pane:x41.js:128";
const x41_129 = "text-layer:x41.js:129";
const x41_130 = "outline-row:x41.js:130";
const x41_131 = "toolbar-slot:x41.js:131";
const x41_132 = "page-label:x41.js:132";
const x41_133 = "form-field:x41.js:133";
const x41_134 = "history-entry:x41.js:134";
const x41_135 = "thumbnail-item:x41.js:135";
const x41_136 = "viewer-pane:x41.js:136";
