import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 0,
  salt: "d:00:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 2,
  mask: 4077198353,
  branch: 3
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
  const tail = ((cfg.slot + (ctx.index || 0) + 0) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [0, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 101,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x00_0 = "viewer-pane:x00.js:000";
const x00_1 = "text-layer:x00.js:001";
const x00_2 = "outline-row:x00.js:002";
const x00_3 = "toolbar-slot:x00.js:003";
const x00_4 = "page-label:x00.js:004";
const x00_5 = "form-field:x00.js:005";
const x00_6 = "history-entry:x00.js:006";
const x00_7 = "thumbnail-item:x00.js:007";
const x00_8 = "viewer-pane:x00.js:008";
const x00_9 = "text-layer:x00.js:009";
const x00_10 = "outline-row:x00.js:010";
const x00_11 = "toolbar-slot:x00.js:011";
const x00_12 = "page-label:x00.js:012";
const x00_13 = "form-field:x00.js:013";
const x00_14 = "history-entry:x00.js:014";
const x00_15 = "thumbnail-item:x00.js:015";
const x00_16 = "viewer-pane:x00.js:016";
const x00_17 = "text-layer:x00.js:017";
const x00_18 = "outline-row:x00.js:018";
const x00_19 = "toolbar-slot:x00.js:019";
const x00_20 = "page-label:x00.js:020";
const x00_21 = "form-field:x00.js:021";
const x00_22 = "history-entry:x00.js:022";
const x00_23 = "thumbnail-item:x00.js:023";
const x00_24 = "viewer-pane:x00.js:024";
const x00_25 = "text-layer:x00.js:025";
const x00_26 = "outline-row:x00.js:026";
const x00_27 = "toolbar-slot:x00.js:027";
const x00_28 = "page-label:x00.js:028";
const x00_29 = "form-field:x00.js:029";
const x00_30 = "history-entry:x00.js:030";
const x00_31 = "thumbnail-item:x00.js:031";
const x00_32 = "viewer-pane:x00.js:032";
const x00_33 = "text-layer:x00.js:033";
const x00_34 = "outline-row:x00.js:034";
const x00_35 = "toolbar-slot:x00.js:035";
const x00_36 = "page-label:x00.js:036";
const x00_37 = "form-field:x00.js:037";
const x00_38 = "history-entry:x00.js:038";
const x00_39 = "thumbnail-item:x00.js:039";
const x00_40 = "viewer-pane:x00.js:040";
const x00_41 = "text-layer:x00.js:041";
const x00_42 = "outline-row:x00.js:042";
const x00_43 = "toolbar-slot:x00.js:043";
const x00_44 = "page-label:x00.js:044";
const x00_45 = "form-field:x00.js:045";
const x00_46 = "history-entry:x00.js:046";
const x00_47 = "thumbnail-item:x00.js:047";
const x00_48 = "viewer-pane:x00.js:048";
const x00_49 = "text-layer:x00.js:049";
const x00_50 = "outline-row:x00.js:050";
const x00_51 = "toolbar-slot:x00.js:051";
const x00_52 = "page-label:x00.js:052";
const x00_53 = "form-field:x00.js:053";
const x00_54 = "history-entry:x00.js:054";
const x00_55 = "thumbnail-item:x00.js:055";
const x00_56 = "viewer-pane:x00.js:056";
const x00_57 = "text-layer:x00.js:057";
const x00_58 = "outline-row:x00.js:058";
const x00_59 = "toolbar-slot:x00.js:059";
const x00_60 = "page-label:x00.js:060";
const x00_61 = "form-field:x00.js:061";
const x00_62 = "history-entry:x00.js:062";
const x00_63 = "thumbnail-item:x00.js:063";
const x00_64 = "viewer-pane:x00.js:064";
const x00_65 = "text-layer:x00.js:065";
const x00_66 = "outline-row:x00.js:066";
const x00_67 = "toolbar-slot:x00.js:067";
const x00_68 = "page-label:x00.js:068";
const x00_69 = "form-field:x00.js:069";
const x00_70 = "history-entry:x00.js:070";
const x00_71 = "thumbnail-item:x00.js:071";
const x00_72 = "viewer-pane:x00.js:072";
const x00_73 = "text-layer:x00.js:073";
const x00_74 = "outline-row:x00.js:074";
const x00_75 = "toolbar-slot:x00.js:075";
const x00_76 = "page-label:x00.js:076";
const x00_77 = "form-field:x00.js:077";
const x00_78 = "history-entry:x00.js:078";
const x00_79 = "thumbnail-item:x00.js:079";
const x00_80 = "viewer-pane:x00.js:080";
const x00_81 = "text-layer:x00.js:081";
const x00_82 = "outline-row:x00.js:082";
const x00_83 = "toolbar-slot:x00.js:083";
const x00_84 = "page-label:x00.js:084";
const x00_85 = "form-field:x00.js:085";
const x00_86 = "history-entry:x00.js:086";
const x00_87 = "thumbnail-item:x00.js:087";
const x00_88 = "viewer-pane:x00.js:088";
const x00_89 = "text-layer:x00.js:089";
const x00_90 = "outline-row:x00.js:090";
const x00_91 = "toolbar-slot:x00.js:091";
const x00_92 = "page-label:x00.js:092";
const x00_93 = "form-field:x00.js:093";
const x00_94 = "history-entry:x00.js:094";
const x00_95 = "thumbnail-item:x00.js:095";
const x00_96 = "viewer-pane:x00.js:096";
const x00_97 = "text-layer:x00.js:097";
const x00_98 = "outline-row:x00.js:098";
const x00_99 = "toolbar-slot:x00.js:099";
const x00_100 = "page-label:x00.js:100";
const x00_101 = "form-field:x00.js:101";
const x00_102 = "history-entry:x00.js:102";
const x00_103 = "thumbnail-item:x00.js:103";
const x00_104 = "viewer-pane:x00.js:104";
const x00_105 = "text-layer:x00.js:105";
const x00_106 = "outline-row:x00.js:106";
const x00_107 = "toolbar-slot:x00.js:107";
const x00_108 = "page-label:x00.js:108";
const x00_109 = "form-field:x00.js:109";
const x00_110 = "history-entry:x00.js:110";
const x00_111 = "thumbnail-item:x00.js:111";
const x00_112 = "viewer-pane:x00.js:112";
const x00_113 = "text-layer:x00.js:113";
const x00_114 = "outline-row:x00.js:114";
const x00_115 = "toolbar-slot:x00.js:115";
const x00_116 = "page-label:x00.js:116";
const x00_117 = "form-field:x00.js:117";
const x00_118 = "history-entry:x00.js:118";
const x00_119 = "thumbnail-item:x00.js:119";
const x00_120 = "viewer-pane:x00.js:120";
const x00_121 = "text-layer:x00.js:121";
const x00_122 = "outline-row:x00.js:122";
const x00_123 = "toolbar-slot:x00.js:123";
const x00_124 = "page-label:x00.js:124";
const x00_125 = "form-field:x00.js:125";
const x00_126 = "history-entry:x00.js:126";
const x00_127 = "thumbnail-item:x00.js:127";
const x00_128 = "viewer-pane:x00.js:128";
const x00_129 = "text-layer:x00.js:129";
const x00_130 = "outline-row:x00.js:130";
const x00_131 = "toolbar-slot:x00.js:131";
const x00_132 = "page-label:x00.js:132";
const x00_133 = "form-field:x00.js:133";
const x00_134 = "history-entry:x00.js:134";
const x00_135 = "thumbnail-item:x00.js:135";
const x00_136 = "viewer-pane:x00.js:136";
