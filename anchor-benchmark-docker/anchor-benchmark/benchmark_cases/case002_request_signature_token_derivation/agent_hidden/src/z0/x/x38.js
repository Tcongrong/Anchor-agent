import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 39,
  salt: "d:38:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 14,
  mask: 226010632,
  branch: 13
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
  const tail = ((cfg.slot + (ctx.index || 0) + 38) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 139,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x38_0 = "viewer-pane:x38.js:000";
const x38_1 = "text-layer:x38.js:001";
const x38_2 = "outline-row:x38.js:002";
const x38_3 = "toolbar-slot:x38.js:003";
const x38_4 = "page-label:x38.js:004";
const x38_5 = "form-field:x38.js:005";
const x38_6 = "history-entry:x38.js:006";
const x38_7 = "thumbnail-item:x38.js:007";
const x38_8 = "viewer-pane:x38.js:008";
const x38_9 = "text-layer:x38.js:009";
const x38_10 = "outline-row:x38.js:010";
const x38_11 = "toolbar-slot:x38.js:011";
const x38_12 = "page-label:x38.js:012";
const x38_13 = "form-field:x38.js:013";
const x38_14 = "history-entry:x38.js:014";
const x38_15 = "thumbnail-item:x38.js:015";
const x38_16 = "viewer-pane:x38.js:016";
const x38_17 = "text-layer:x38.js:017";
const x38_18 = "outline-row:x38.js:018";
const x38_19 = "toolbar-slot:x38.js:019";
const x38_20 = "page-label:x38.js:020";
const x38_21 = "form-field:x38.js:021";
const x38_22 = "history-entry:x38.js:022";
const x38_23 = "thumbnail-item:x38.js:023";
const x38_24 = "viewer-pane:x38.js:024";
const x38_25 = "text-layer:x38.js:025";
const x38_26 = "outline-row:x38.js:026";
const x38_27 = "toolbar-slot:x38.js:027";
const x38_28 = "page-label:x38.js:028";
const x38_29 = "form-field:x38.js:029";
const x38_30 = "history-entry:x38.js:030";
const x38_31 = "thumbnail-item:x38.js:031";
const x38_32 = "viewer-pane:x38.js:032";
const x38_33 = "text-layer:x38.js:033";
const x38_34 = "outline-row:x38.js:034";
const x38_35 = "toolbar-slot:x38.js:035";
const x38_36 = "page-label:x38.js:036";
const x38_37 = "form-field:x38.js:037";
const x38_38 = "history-entry:x38.js:038";
const x38_39 = "thumbnail-item:x38.js:039";
const x38_40 = "viewer-pane:x38.js:040";
const x38_41 = "text-layer:x38.js:041";
const x38_42 = "outline-row:x38.js:042";
const x38_43 = "toolbar-slot:x38.js:043";
const x38_44 = "page-label:x38.js:044";
const x38_45 = "form-field:x38.js:045";
const x38_46 = "history-entry:x38.js:046";
const x38_47 = "thumbnail-item:x38.js:047";
const x38_48 = "viewer-pane:x38.js:048";
const x38_49 = "text-layer:x38.js:049";
const x38_50 = "outline-row:x38.js:050";
const x38_51 = "toolbar-slot:x38.js:051";
const x38_52 = "page-label:x38.js:052";
const x38_53 = "form-field:x38.js:053";
const x38_54 = "history-entry:x38.js:054";
const x38_55 = "thumbnail-item:x38.js:055";
const x38_56 = "viewer-pane:x38.js:056";
const x38_57 = "text-layer:x38.js:057";
const x38_58 = "outline-row:x38.js:058";
const x38_59 = "toolbar-slot:x38.js:059";
const x38_60 = "page-label:x38.js:060";
const x38_61 = "form-field:x38.js:061";
const x38_62 = "history-entry:x38.js:062";
const x38_63 = "thumbnail-item:x38.js:063";
const x38_64 = "viewer-pane:x38.js:064";
const x38_65 = "text-layer:x38.js:065";
const x38_66 = "outline-row:x38.js:066";
const x38_67 = "toolbar-slot:x38.js:067";
const x38_68 = "page-label:x38.js:068";
const x38_69 = "form-field:x38.js:069";
const x38_70 = "history-entry:x38.js:070";
const x38_71 = "thumbnail-item:x38.js:071";
const x38_72 = "viewer-pane:x38.js:072";
const x38_73 = "text-layer:x38.js:073";
const x38_74 = "outline-row:x38.js:074";
const x38_75 = "toolbar-slot:x38.js:075";
const x38_76 = "page-label:x38.js:076";
const x38_77 = "form-field:x38.js:077";
const x38_78 = "history-entry:x38.js:078";
const x38_79 = "thumbnail-item:x38.js:079";
const x38_80 = "viewer-pane:x38.js:080";
const x38_81 = "text-layer:x38.js:081";
const x38_82 = "outline-row:x38.js:082";
const x38_83 = "toolbar-slot:x38.js:083";
const x38_84 = "page-label:x38.js:084";
const x38_85 = "form-field:x38.js:085";
const x38_86 = "history-entry:x38.js:086";
const x38_87 = "thumbnail-item:x38.js:087";
const x38_88 = "viewer-pane:x38.js:088";
const x38_89 = "text-layer:x38.js:089";
const x38_90 = "outline-row:x38.js:090";
const x38_91 = "toolbar-slot:x38.js:091";
const x38_92 = "page-label:x38.js:092";
const x38_93 = "form-field:x38.js:093";
const x38_94 = "history-entry:x38.js:094";
const x38_95 = "thumbnail-item:x38.js:095";
const x38_96 = "viewer-pane:x38.js:096";
const x38_97 = "text-layer:x38.js:097";
const x38_98 = "outline-row:x38.js:098";
const x38_99 = "toolbar-slot:x38.js:099";
const x38_100 = "page-label:x38.js:100";
const x38_101 = "form-field:x38.js:101";
const x38_102 = "history-entry:x38.js:102";
const x38_103 = "thumbnail-item:x38.js:103";
const x38_104 = "viewer-pane:x38.js:104";
const x38_105 = "text-layer:x38.js:105";
const x38_106 = "outline-row:x38.js:106";
const x38_107 = "toolbar-slot:x38.js:107";
const x38_108 = "page-label:x38.js:108";
const x38_109 = "form-field:x38.js:109";
const x38_110 = "history-entry:x38.js:110";
const x38_111 = "thumbnail-item:x38.js:111";
const x38_112 = "viewer-pane:x38.js:112";
const x38_113 = "text-layer:x38.js:113";
const x38_114 = "outline-row:x38.js:114";
const x38_115 = "toolbar-slot:x38.js:115";
const x38_116 = "page-label:x38.js:116";
const x38_117 = "form-field:x38.js:117";
const x38_118 = "history-entry:x38.js:118";
const x38_119 = "thumbnail-item:x38.js:119";
const x38_120 = "viewer-pane:x38.js:120";
const x38_121 = "text-layer:x38.js:121";
const x38_122 = "outline-row:x38.js:122";
const x38_123 = "toolbar-slot:x38.js:123";
const x38_124 = "page-label:x38.js:124";
const x38_125 = "form-field:x38.js:125";
const x38_126 = "history-entry:x38.js:126";
const x38_127 = "thumbnail-item:x38.js:127";
const x38_128 = "viewer-pane:x38.js:128";
const x38_129 = "text-layer:x38.js:129";
const x38_130 = "outline-row:x38.js:130";
const x38_131 = "toolbar-slot:x38.js:131";
const x38_132 = "page-label:x38.js:132";
const x38_133 = "form-field:x38.js:133";
const x38_134 = "history-entry:x38.js:134";
const x38_135 = "thumbnail-item:x38.js:135";
const x38_136 = "viewer-pane:x38.js:136";
