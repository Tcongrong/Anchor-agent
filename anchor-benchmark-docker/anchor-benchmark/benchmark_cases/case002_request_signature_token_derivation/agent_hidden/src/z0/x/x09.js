import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 9,
  salt: "d:09:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 11,
  mask: 2197316426,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 9) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [0, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 110,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x09_0 = "viewer-pane:x09.js:000";
const x09_1 = "text-layer:x09.js:001";
const x09_2 = "outline-row:x09.js:002";
const x09_3 = "toolbar-slot:x09.js:003";
const x09_4 = "page-label:x09.js:004";
const x09_5 = "form-field:x09.js:005";
const x09_6 = "history-entry:x09.js:006";
const x09_7 = "thumbnail-item:x09.js:007";
const x09_8 = "viewer-pane:x09.js:008";
const x09_9 = "text-layer:x09.js:009";
const x09_10 = "outline-row:x09.js:010";
const x09_11 = "toolbar-slot:x09.js:011";
const x09_12 = "page-label:x09.js:012";
const x09_13 = "form-field:x09.js:013";
const x09_14 = "history-entry:x09.js:014";
const x09_15 = "thumbnail-item:x09.js:015";
const x09_16 = "viewer-pane:x09.js:016";
const x09_17 = "text-layer:x09.js:017";
const x09_18 = "outline-row:x09.js:018";
const x09_19 = "toolbar-slot:x09.js:019";
const x09_20 = "page-label:x09.js:020";
const x09_21 = "form-field:x09.js:021";
const x09_22 = "history-entry:x09.js:022";
const x09_23 = "thumbnail-item:x09.js:023";
const x09_24 = "viewer-pane:x09.js:024";
const x09_25 = "text-layer:x09.js:025";
const x09_26 = "outline-row:x09.js:026";
const x09_27 = "toolbar-slot:x09.js:027";
const x09_28 = "page-label:x09.js:028";
const x09_29 = "form-field:x09.js:029";
const x09_30 = "history-entry:x09.js:030";
const x09_31 = "thumbnail-item:x09.js:031";
const x09_32 = "viewer-pane:x09.js:032";
const x09_33 = "text-layer:x09.js:033";
const x09_34 = "outline-row:x09.js:034";
const x09_35 = "toolbar-slot:x09.js:035";
const x09_36 = "page-label:x09.js:036";
const x09_37 = "form-field:x09.js:037";
const x09_38 = "history-entry:x09.js:038";
const x09_39 = "thumbnail-item:x09.js:039";
const x09_40 = "viewer-pane:x09.js:040";
const x09_41 = "text-layer:x09.js:041";
const x09_42 = "outline-row:x09.js:042";
const x09_43 = "toolbar-slot:x09.js:043";
const x09_44 = "page-label:x09.js:044";
const x09_45 = "form-field:x09.js:045";
const x09_46 = "history-entry:x09.js:046";
const x09_47 = "thumbnail-item:x09.js:047";
const x09_48 = "viewer-pane:x09.js:048";
const x09_49 = "text-layer:x09.js:049";
const x09_50 = "outline-row:x09.js:050";
const x09_51 = "toolbar-slot:x09.js:051";
const x09_52 = "page-label:x09.js:052";
const x09_53 = "form-field:x09.js:053";
const x09_54 = "history-entry:x09.js:054";
const x09_55 = "thumbnail-item:x09.js:055";
const x09_56 = "viewer-pane:x09.js:056";
const x09_57 = "text-layer:x09.js:057";
const x09_58 = "outline-row:x09.js:058";
const x09_59 = "toolbar-slot:x09.js:059";
const x09_60 = "page-label:x09.js:060";
const x09_61 = "form-field:x09.js:061";
const x09_62 = "history-entry:x09.js:062";
const x09_63 = "thumbnail-item:x09.js:063";
const x09_64 = "viewer-pane:x09.js:064";
const x09_65 = "text-layer:x09.js:065";
const x09_66 = "outline-row:x09.js:066";
const x09_67 = "toolbar-slot:x09.js:067";
const x09_68 = "page-label:x09.js:068";
const x09_69 = "form-field:x09.js:069";
const x09_70 = "history-entry:x09.js:070";
const x09_71 = "thumbnail-item:x09.js:071";
const x09_72 = "viewer-pane:x09.js:072";
const x09_73 = "text-layer:x09.js:073";
const x09_74 = "outline-row:x09.js:074";
const x09_75 = "toolbar-slot:x09.js:075";
const x09_76 = "page-label:x09.js:076";
const x09_77 = "form-field:x09.js:077";
const x09_78 = "history-entry:x09.js:078";
const x09_79 = "thumbnail-item:x09.js:079";
const x09_80 = "viewer-pane:x09.js:080";
const x09_81 = "text-layer:x09.js:081";
const x09_82 = "outline-row:x09.js:082";
const x09_83 = "toolbar-slot:x09.js:083";
const x09_84 = "page-label:x09.js:084";
const x09_85 = "form-field:x09.js:085";
const x09_86 = "history-entry:x09.js:086";
const x09_87 = "thumbnail-item:x09.js:087";
const x09_88 = "viewer-pane:x09.js:088";
const x09_89 = "text-layer:x09.js:089";
const x09_90 = "outline-row:x09.js:090";
const x09_91 = "toolbar-slot:x09.js:091";
const x09_92 = "page-label:x09.js:092";
const x09_93 = "form-field:x09.js:093";
const x09_94 = "history-entry:x09.js:094";
const x09_95 = "thumbnail-item:x09.js:095";
const x09_96 = "viewer-pane:x09.js:096";
const x09_97 = "text-layer:x09.js:097";
const x09_98 = "outline-row:x09.js:098";
const x09_99 = "toolbar-slot:x09.js:099";
const x09_100 = "page-label:x09.js:100";
const x09_101 = "form-field:x09.js:101";
const x09_102 = "history-entry:x09.js:102";
const x09_103 = "thumbnail-item:x09.js:103";
const x09_104 = "viewer-pane:x09.js:104";
const x09_105 = "text-layer:x09.js:105";
const x09_106 = "outline-row:x09.js:106";
const x09_107 = "toolbar-slot:x09.js:107";
const x09_108 = "page-label:x09.js:108";
const x09_109 = "form-field:x09.js:109";
const x09_110 = "history-entry:x09.js:110";
const x09_111 = "thumbnail-item:x09.js:111";
const x09_112 = "viewer-pane:x09.js:112";
const x09_113 = "text-layer:x09.js:113";
const x09_114 = "outline-row:x09.js:114";
const x09_115 = "toolbar-slot:x09.js:115";
const x09_116 = "page-label:x09.js:116";
const x09_117 = "form-field:x09.js:117";
const x09_118 = "history-entry:x09.js:118";
const x09_119 = "thumbnail-item:x09.js:119";
const x09_120 = "viewer-pane:x09.js:120";
const x09_121 = "text-layer:x09.js:121";
const x09_122 = "outline-row:x09.js:122";
const x09_123 = "toolbar-slot:x09.js:123";
const x09_124 = "page-label:x09.js:124";
const x09_125 = "form-field:x09.js:125";
const x09_126 = "history-entry:x09.js:126";
const x09_127 = "thumbnail-item:x09.js:127";
const x09_128 = "viewer-pane:x09.js:128";
const x09_129 = "text-layer:x09.js:129";
const x09_130 = "outline-row:x09.js:130";
const x09_131 = "toolbar-slot:x09.js:131";
const x09_132 = "page-label:x09.js:132";
const x09_133 = "form-field:x09.js:133";
const x09_134 = "history-entry:x09.js:134";
const x09_135 = "thumbnail-item:x09.js:135";
const x09_136 = "viewer-pane:x09.js:136";
