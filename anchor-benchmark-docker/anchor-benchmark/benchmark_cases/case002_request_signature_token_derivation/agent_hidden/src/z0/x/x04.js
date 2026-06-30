import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 4,
  salt: "d:04:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 6,
  mask: 1810039509,
  branch: 15
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
  const tail = ((cfg.slot + (ctx.index || 0) + 4) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 105,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x04_0 = "viewer-pane:x04.js:000";
const x04_1 = "text-layer:x04.js:001";
const x04_2 = "outline-row:x04.js:002";
const x04_3 = "toolbar-slot:x04.js:003";
const x04_4 = "page-label:x04.js:004";
const x04_5 = "form-field:x04.js:005";
const x04_6 = "history-entry:x04.js:006";
const x04_7 = "thumbnail-item:x04.js:007";
const x04_8 = "viewer-pane:x04.js:008";
const x04_9 = "text-layer:x04.js:009";
const x04_10 = "outline-row:x04.js:010";
const x04_11 = "toolbar-slot:x04.js:011";
const x04_12 = "page-label:x04.js:012";
const x04_13 = "form-field:x04.js:013";
const x04_14 = "history-entry:x04.js:014";
const x04_15 = "thumbnail-item:x04.js:015";
const x04_16 = "viewer-pane:x04.js:016";
const x04_17 = "text-layer:x04.js:017";
const x04_18 = "outline-row:x04.js:018";
const x04_19 = "toolbar-slot:x04.js:019";
const x04_20 = "page-label:x04.js:020";
const x04_21 = "form-field:x04.js:021";
const x04_22 = "history-entry:x04.js:022";
const x04_23 = "thumbnail-item:x04.js:023";
const x04_24 = "viewer-pane:x04.js:024";
const x04_25 = "text-layer:x04.js:025";
const x04_26 = "outline-row:x04.js:026";
const x04_27 = "toolbar-slot:x04.js:027";
const x04_28 = "page-label:x04.js:028";
const x04_29 = "form-field:x04.js:029";
const x04_30 = "history-entry:x04.js:030";
const x04_31 = "thumbnail-item:x04.js:031";
const x04_32 = "viewer-pane:x04.js:032";
const x04_33 = "text-layer:x04.js:033";
const x04_34 = "outline-row:x04.js:034";
const x04_35 = "toolbar-slot:x04.js:035";
const x04_36 = "page-label:x04.js:036";
const x04_37 = "form-field:x04.js:037";
const x04_38 = "history-entry:x04.js:038";
const x04_39 = "thumbnail-item:x04.js:039";
const x04_40 = "viewer-pane:x04.js:040";
const x04_41 = "text-layer:x04.js:041";
const x04_42 = "outline-row:x04.js:042";
const x04_43 = "toolbar-slot:x04.js:043";
const x04_44 = "page-label:x04.js:044";
const x04_45 = "form-field:x04.js:045";
const x04_46 = "history-entry:x04.js:046";
const x04_47 = "thumbnail-item:x04.js:047";
const x04_48 = "viewer-pane:x04.js:048";
const x04_49 = "text-layer:x04.js:049";
const x04_50 = "outline-row:x04.js:050";
const x04_51 = "toolbar-slot:x04.js:051";
const x04_52 = "page-label:x04.js:052";
const x04_53 = "form-field:x04.js:053";
const x04_54 = "history-entry:x04.js:054";
const x04_55 = "thumbnail-item:x04.js:055";
const x04_56 = "viewer-pane:x04.js:056";
const x04_57 = "text-layer:x04.js:057";
const x04_58 = "outline-row:x04.js:058";
const x04_59 = "toolbar-slot:x04.js:059";
const x04_60 = "page-label:x04.js:060";
const x04_61 = "form-field:x04.js:061";
const x04_62 = "history-entry:x04.js:062";
const x04_63 = "thumbnail-item:x04.js:063";
const x04_64 = "viewer-pane:x04.js:064";
const x04_65 = "text-layer:x04.js:065";
const x04_66 = "outline-row:x04.js:066";
const x04_67 = "toolbar-slot:x04.js:067";
const x04_68 = "page-label:x04.js:068";
const x04_69 = "form-field:x04.js:069";
const x04_70 = "history-entry:x04.js:070";
const x04_71 = "thumbnail-item:x04.js:071";
const x04_72 = "viewer-pane:x04.js:072";
const x04_73 = "text-layer:x04.js:073";
const x04_74 = "outline-row:x04.js:074";
const x04_75 = "toolbar-slot:x04.js:075";
const x04_76 = "page-label:x04.js:076";
const x04_77 = "form-field:x04.js:077";
const x04_78 = "history-entry:x04.js:078";
const x04_79 = "thumbnail-item:x04.js:079";
const x04_80 = "viewer-pane:x04.js:080";
const x04_81 = "text-layer:x04.js:081";
const x04_82 = "outline-row:x04.js:082";
const x04_83 = "toolbar-slot:x04.js:083";
const x04_84 = "page-label:x04.js:084";
const x04_85 = "form-field:x04.js:085";
const x04_86 = "history-entry:x04.js:086";
const x04_87 = "thumbnail-item:x04.js:087";
const x04_88 = "viewer-pane:x04.js:088";
const x04_89 = "text-layer:x04.js:089";
const x04_90 = "outline-row:x04.js:090";
const x04_91 = "toolbar-slot:x04.js:091";
const x04_92 = "page-label:x04.js:092";
const x04_93 = "form-field:x04.js:093";
const x04_94 = "history-entry:x04.js:094";
const x04_95 = "thumbnail-item:x04.js:095";
const x04_96 = "viewer-pane:x04.js:096";
const x04_97 = "text-layer:x04.js:097";
const x04_98 = "outline-row:x04.js:098";
const x04_99 = "toolbar-slot:x04.js:099";
const x04_100 = "page-label:x04.js:100";
const x04_101 = "form-field:x04.js:101";
const x04_102 = "history-entry:x04.js:102";
const x04_103 = "thumbnail-item:x04.js:103";
const x04_104 = "viewer-pane:x04.js:104";
const x04_105 = "text-layer:x04.js:105";
const x04_106 = "outline-row:x04.js:106";
const x04_107 = "toolbar-slot:x04.js:107";
const x04_108 = "page-label:x04.js:108";
const x04_109 = "form-field:x04.js:109";
const x04_110 = "history-entry:x04.js:110";
const x04_111 = "thumbnail-item:x04.js:111";
const x04_112 = "viewer-pane:x04.js:112";
const x04_113 = "text-layer:x04.js:113";
const x04_114 = "outline-row:x04.js:114";
const x04_115 = "toolbar-slot:x04.js:115";
const x04_116 = "page-label:x04.js:116";
const x04_117 = "form-field:x04.js:117";
const x04_118 = "history-entry:x04.js:118";
const x04_119 = "thumbnail-item:x04.js:119";
const x04_120 = "viewer-pane:x04.js:120";
const x04_121 = "text-layer:x04.js:121";
const x04_122 = "outline-row:x04.js:122";
const x04_123 = "toolbar-slot:x04.js:123";
const x04_124 = "page-label:x04.js:124";
const x04_125 = "form-field:x04.js:125";
const x04_126 = "history-entry:x04.js:126";
const x04_127 = "thumbnail-item:x04.js:127";
const x04_128 = "viewer-pane:x04.js:128";
const x04_129 = "text-layer:x04.js:129";
const x04_130 = "outline-row:x04.js:130";
const x04_131 = "toolbar-slot:x04.js:131";
const x04_132 = "page-label:x04.js:132";
const x04_133 = "form-field:x04.js:133";
const x04_134 = "history-entry:x04.js:134";
const x04_135 = "thumbnail-item:x04.js:135";
const x04_136 = "viewer-pane:x04.js:136";
