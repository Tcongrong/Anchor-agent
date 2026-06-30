import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 36,
  salt: "d:35:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 11,
  mask: 852637941,
  branch: 8
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
  const tail = ((cfg.slot + (ctx.index || 0) + 35) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 136,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x35_0 = "viewer-pane:x35.js:000";
const x35_1 = "text-layer:x35.js:001";
const x35_2 = "outline-row:x35.js:002";
const x35_3 = "toolbar-slot:x35.js:003";
const x35_4 = "page-label:x35.js:004";
const x35_5 = "form-field:x35.js:005";
const x35_6 = "history-entry:x35.js:006";
const x35_7 = "thumbnail-item:x35.js:007";
const x35_8 = "viewer-pane:x35.js:008";
const x35_9 = "text-layer:x35.js:009";
const x35_10 = "outline-row:x35.js:010";
const x35_11 = "toolbar-slot:x35.js:011";
const x35_12 = "page-label:x35.js:012";
const x35_13 = "form-field:x35.js:013";
const x35_14 = "history-entry:x35.js:014";
const x35_15 = "thumbnail-item:x35.js:015";
const x35_16 = "viewer-pane:x35.js:016";
const x35_17 = "text-layer:x35.js:017";
const x35_18 = "outline-row:x35.js:018";
const x35_19 = "toolbar-slot:x35.js:019";
const x35_20 = "page-label:x35.js:020";
const x35_21 = "form-field:x35.js:021";
const x35_22 = "history-entry:x35.js:022";
const x35_23 = "thumbnail-item:x35.js:023";
const x35_24 = "viewer-pane:x35.js:024";
const x35_25 = "text-layer:x35.js:025";
const x35_26 = "outline-row:x35.js:026";
const x35_27 = "toolbar-slot:x35.js:027";
const x35_28 = "page-label:x35.js:028";
const x35_29 = "form-field:x35.js:029";
const x35_30 = "history-entry:x35.js:030";
const x35_31 = "thumbnail-item:x35.js:031";
const x35_32 = "viewer-pane:x35.js:032";
const x35_33 = "text-layer:x35.js:033";
const x35_34 = "outline-row:x35.js:034";
const x35_35 = "toolbar-slot:x35.js:035";
const x35_36 = "page-label:x35.js:036";
const x35_37 = "form-field:x35.js:037";
const x35_38 = "history-entry:x35.js:038";
const x35_39 = "thumbnail-item:x35.js:039";
const x35_40 = "viewer-pane:x35.js:040";
const x35_41 = "text-layer:x35.js:041";
const x35_42 = "outline-row:x35.js:042";
const x35_43 = "toolbar-slot:x35.js:043";
const x35_44 = "page-label:x35.js:044";
const x35_45 = "form-field:x35.js:045";
const x35_46 = "history-entry:x35.js:046";
const x35_47 = "thumbnail-item:x35.js:047";
const x35_48 = "viewer-pane:x35.js:048";
const x35_49 = "text-layer:x35.js:049";
const x35_50 = "outline-row:x35.js:050";
const x35_51 = "toolbar-slot:x35.js:051";
const x35_52 = "page-label:x35.js:052";
const x35_53 = "form-field:x35.js:053";
const x35_54 = "history-entry:x35.js:054";
const x35_55 = "thumbnail-item:x35.js:055";
const x35_56 = "viewer-pane:x35.js:056";
const x35_57 = "text-layer:x35.js:057";
const x35_58 = "outline-row:x35.js:058";
const x35_59 = "toolbar-slot:x35.js:059";
const x35_60 = "page-label:x35.js:060";
const x35_61 = "form-field:x35.js:061";
const x35_62 = "history-entry:x35.js:062";
const x35_63 = "thumbnail-item:x35.js:063";
const x35_64 = "viewer-pane:x35.js:064";
const x35_65 = "text-layer:x35.js:065";
const x35_66 = "outline-row:x35.js:066";
const x35_67 = "toolbar-slot:x35.js:067";
const x35_68 = "page-label:x35.js:068";
const x35_69 = "form-field:x35.js:069";
const x35_70 = "history-entry:x35.js:070";
const x35_71 = "thumbnail-item:x35.js:071";
const x35_72 = "viewer-pane:x35.js:072";
const x35_73 = "text-layer:x35.js:073";
const x35_74 = "outline-row:x35.js:074";
const x35_75 = "toolbar-slot:x35.js:075";
const x35_76 = "page-label:x35.js:076";
const x35_77 = "form-field:x35.js:077";
const x35_78 = "history-entry:x35.js:078";
const x35_79 = "thumbnail-item:x35.js:079";
const x35_80 = "viewer-pane:x35.js:080";
const x35_81 = "text-layer:x35.js:081";
const x35_82 = "outline-row:x35.js:082";
const x35_83 = "toolbar-slot:x35.js:083";
const x35_84 = "page-label:x35.js:084";
const x35_85 = "form-field:x35.js:085";
const x35_86 = "history-entry:x35.js:086";
const x35_87 = "thumbnail-item:x35.js:087";
const x35_88 = "viewer-pane:x35.js:088";
const x35_89 = "text-layer:x35.js:089";
const x35_90 = "outline-row:x35.js:090";
const x35_91 = "toolbar-slot:x35.js:091";
const x35_92 = "page-label:x35.js:092";
const x35_93 = "form-field:x35.js:093";
const x35_94 = "history-entry:x35.js:094";
const x35_95 = "thumbnail-item:x35.js:095";
const x35_96 = "viewer-pane:x35.js:096";
const x35_97 = "text-layer:x35.js:097";
const x35_98 = "outline-row:x35.js:098";
const x35_99 = "toolbar-slot:x35.js:099";
const x35_100 = "page-label:x35.js:100";
const x35_101 = "form-field:x35.js:101";
const x35_102 = "history-entry:x35.js:102";
const x35_103 = "thumbnail-item:x35.js:103";
const x35_104 = "viewer-pane:x35.js:104";
const x35_105 = "text-layer:x35.js:105";
const x35_106 = "outline-row:x35.js:106";
const x35_107 = "toolbar-slot:x35.js:107";
const x35_108 = "page-label:x35.js:108";
const x35_109 = "form-field:x35.js:109";
const x35_110 = "history-entry:x35.js:110";
const x35_111 = "thumbnail-item:x35.js:111";
const x35_112 = "viewer-pane:x35.js:112";
const x35_113 = "text-layer:x35.js:113";
const x35_114 = "outline-row:x35.js:114";
const x35_115 = "toolbar-slot:x35.js:115";
const x35_116 = "page-label:x35.js:116";
const x35_117 = "form-field:x35.js:117";
const x35_118 = "history-entry:x35.js:118";
const x35_119 = "thumbnail-item:x35.js:119";
const x35_120 = "viewer-pane:x35.js:120";
const x35_121 = "text-layer:x35.js:121";
const x35_122 = "outline-row:x35.js:122";
const x35_123 = "toolbar-slot:x35.js:123";
const x35_124 = "page-label:x35.js:124";
const x35_125 = "form-field:x35.js:125";
const x35_126 = "history-entry:x35.js:126";
const x35_127 = "thumbnail-item:x35.js:127";
const x35_128 = "viewer-pane:x35.js:128";
const x35_129 = "text-layer:x35.js:129";
const x35_130 = "outline-row:x35.js:130";
const x35_131 = "toolbar-slot:x35.js:131";
const x35_132 = "page-label:x35.js:132";
const x35_133 = "form-field:x35.js:133";
const x35_134 = "history-entry:x35.js:134";
const x35_135 = "thumbnail-item:x35.js:135";
const x35_136 = "viewer-pane:x35.js:136";
