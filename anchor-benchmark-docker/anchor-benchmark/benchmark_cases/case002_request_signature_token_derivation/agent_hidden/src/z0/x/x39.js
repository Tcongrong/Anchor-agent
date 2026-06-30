import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 40,
  salt: "d:39:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 2,
  mask: 2880446393,
  branch: 4
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
  const tail = ((cfg.slot + (ctx.index || 0) + 39) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [3, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 140,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x39_0 = "viewer-pane:x39.js:000";
const x39_1 = "text-layer:x39.js:001";
const x39_2 = "outline-row:x39.js:002";
const x39_3 = "toolbar-slot:x39.js:003";
const x39_4 = "page-label:x39.js:004";
const x39_5 = "form-field:x39.js:005";
const x39_6 = "history-entry:x39.js:006";
const x39_7 = "thumbnail-item:x39.js:007";
const x39_8 = "viewer-pane:x39.js:008";
const x39_9 = "text-layer:x39.js:009";
const x39_10 = "outline-row:x39.js:010";
const x39_11 = "toolbar-slot:x39.js:011";
const x39_12 = "page-label:x39.js:012";
const x39_13 = "form-field:x39.js:013";
const x39_14 = "history-entry:x39.js:014";
const x39_15 = "thumbnail-item:x39.js:015";
const x39_16 = "viewer-pane:x39.js:016";
const x39_17 = "text-layer:x39.js:017";
const x39_18 = "outline-row:x39.js:018";
const x39_19 = "toolbar-slot:x39.js:019";
const x39_20 = "page-label:x39.js:020";
const x39_21 = "form-field:x39.js:021";
const x39_22 = "history-entry:x39.js:022";
const x39_23 = "thumbnail-item:x39.js:023";
const x39_24 = "viewer-pane:x39.js:024";
const x39_25 = "text-layer:x39.js:025";
const x39_26 = "outline-row:x39.js:026";
const x39_27 = "toolbar-slot:x39.js:027";
const x39_28 = "page-label:x39.js:028";
const x39_29 = "form-field:x39.js:029";
const x39_30 = "history-entry:x39.js:030";
const x39_31 = "thumbnail-item:x39.js:031";
const x39_32 = "viewer-pane:x39.js:032";
const x39_33 = "text-layer:x39.js:033";
const x39_34 = "outline-row:x39.js:034";
const x39_35 = "toolbar-slot:x39.js:035";
const x39_36 = "page-label:x39.js:036";
const x39_37 = "form-field:x39.js:037";
const x39_38 = "history-entry:x39.js:038";
const x39_39 = "thumbnail-item:x39.js:039";
const x39_40 = "viewer-pane:x39.js:040";
const x39_41 = "text-layer:x39.js:041";
const x39_42 = "outline-row:x39.js:042";
const x39_43 = "toolbar-slot:x39.js:043";
const x39_44 = "page-label:x39.js:044";
const x39_45 = "form-field:x39.js:045";
const x39_46 = "history-entry:x39.js:046";
const x39_47 = "thumbnail-item:x39.js:047";
const x39_48 = "viewer-pane:x39.js:048";
const x39_49 = "text-layer:x39.js:049";
const x39_50 = "outline-row:x39.js:050";
const x39_51 = "toolbar-slot:x39.js:051";
const x39_52 = "page-label:x39.js:052";
const x39_53 = "form-field:x39.js:053";
const x39_54 = "history-entry:x39.js:054";
const x39_55 = "thumbnail-item:x39.js:055";
const x39_56 = "viewer-pane:x39.js:056";
const x39_57 = "text-layer:x39.js:057";
const x39_58 = "outline-row:x39.js:058";
const x39_59 = "toolbar-slot:x39.js:059";
const x39_60 = "page-label:x39.js:060";
const x39_61 = "form-field:x39.js:061";
const x39_62 = "history-entry:x39.js:062";
const x39_63 = "thumbnail-item:x39.js:063";
const x39_64 = "viewer-pane:x39.js:064";
const x39_65 = "text-layer:x39.js:065";
const x39_66 = "outline-row:x39.js:066";
const x39_67 = "toolbar-slot:x39.js:067";
const x39_68 = "page-label:x39.js:068";
const x39_69 = "form-field:x39.js:069";
const x39_70 = "history-entry:x39.js:070";
const x39_71 = "thumbnail-item:x39.js:071";
const x39_72 = "viewer-pane:x39.js:072";
const x39_73 = "text-layer:x39.js:073";
const x39_74 = "outline-row:x39.js:074";
const x39_75 = "toolbar-slot:x39.js:075";
const x39_76 = "page-label:x39.js:076";
const x39_77 = "form-field:x39.js:077";
const x39_78 = "history-entry:x39.js:078";
const x39_79 = "thumbnail-item:x39.js:079";
const x39_80 = "viewer-pane:x39.js:080";
const x39_81 = "text-layer:x39.js:081";
const x39_82 = "outline-row:x39.js:082";
const x39_83 = "toolbar-slot:x39.js:083";
const x39_84 = "page-label:x39.js:084";
const x39_85 = "form-field:x39.js:085";
const x39_86 = "history-entry:x39.js:086";
const x39_87 = "thumbnail-item:x39.js:087";
const x39_88 = "viewer-pane:x39.js:088";
const x39_89 = "text-layer:x39.js:089";
const x39_90 = "outline-row:x39.js:090";
const x39_91 = "toolbar-slot:x39.js:091";
const x39_92 = "page-label:x39.js:092";
const x39_93 = "form-field:x39.js:093";
const x39_94 = "history-entry:x39.js:094";
const x39_95 = "thumbnail-item:x39.js:095";
const x39_96 = "viewer-pane:x39.js:096";
const x39_97 = "text-layer:x39.js:097";
const x39_98 = "outline-row:x39.js:098";
const x39_99 = "toolbar-slot:x39.js:099";
const x39_100 = "page-label:x39.js:100";
const x39_101 = "form-field:x39.js:101";
const x39_102 = "history-entry:x39.js:102";
const x39_103 = "thumbnail-item:x39.js:103";
const x39_104 = "viewer-pane:x39.js:104";
const x39_105 = "text-layer:x39.js:105";
const x39_106 = "outline-row:x39.js:106";
const x39_107 = "toolbar-slot:x39.js:107";
const x39_108 = "page-label:x39.js:108";
const x39_109 = "form-field:x39.js:109";
const x39_110 = "history-entry:x39.js:110";
const x39_111 = "thumbnail-item:x39.js:111";
const x39_112 = "viewer-pane:x39.js:112";
const x39_113 = "text-layer:x39.js:113";
const x39_114 = "outline-row:x39.js:114";
const x39_115 = "toolbar-slot:x39.js:115";
const x39_116 = "page-label:x39.js:116";
const x39_117 = "form-field:x39.js:117";
const x39_118 = "history-entry:x39.js:118";
const x39_119 = "thumbnail-item:x39.js:119";
const x39_120 = "viewer-pane:x39.js:120";
const x39_121 = "text-layer:x39.js:121";
const x39_122 = "outline-row:x39.js:122";
const x39_123 = "toolbar-slot:x39.js:123";
const x39_124 = "page-label:x39.js:124";
const x39_125 = "form-field:x39.js:125";
const x39_126 = "history-entry:x39.js:126";
const x39_127 = "thumbnail-item:x39.js:127";
const x39_128 = "viewer-pane:x39.js:128";
const x39_129 = "text-layer:x39.js:129";
const x39_130 = "outline-row:x39.js:130";
const x39_131 = "toolbar-slot:x39.js:131";
const x39_132 = "page-label:x39.js:132";
const x39_133 = "form-field:x39.js:133";
const x39_134 = "history-entry:x39.js:134";
const x39_135 = "thumbnail-item:x39.js:135";
const x39_136 = "viewer-pane:x39.js:136";
