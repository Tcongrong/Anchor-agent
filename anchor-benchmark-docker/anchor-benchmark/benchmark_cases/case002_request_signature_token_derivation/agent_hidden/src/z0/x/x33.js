import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 34,
  salt: "d:33:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 9,
  mask: 4133701011,
  branch: 10
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
  const tail = ((cfg.slot + (ctx.index || 0) + 33) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 134,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x33_0 = "viewer-pane:x33.js:000";
const x33_1 = "text-layer:x33.js:001";
const x33_2 = "outline-row:x33.js:002";
const x33_3 = "toolbar-slot:x33.js:003";
const x33_4 = "page-label:x33.js:004";
const x33_5 = "form-field:x33.js:005";
const x33_6 = "history-entry:x33.js:006";
const x33_7 = "thumbnail-item:x33.js:007";
const x33_8 = "viewer-pane:x33.js:008";
const x33_9 = "text-layer:x33.js:009";
const x33_10 = "outline-row:x33.js:010";
const x33_11 = "toolbar-slot:x33.js:011";
const x33_12 = "page-label:x33.js:012";
const x33_13 = "form-field:x33.js:013";
const x33_14 = "history-entry:x33.js:014";
const x33_15 = "thumbnail-item:x33.js:015";
const x33_16 = "viewer-pane:x33.js:016";
const x33_17 = "text-layer:x33.js:017";
const x33_18 = "outline-row:x33.js:018";
const x33_19 = "toolbar-slot:x33.js:019";
const x33_20 = "page-label:x33.js:020";
const x33_21 = "form-field:x33.js:021";
const x33_22 = "history-entry:x33.js:022";
const x33_23 = "thumbnail-item:x33.js:023";
const x33_24 = "viewer-pane:x33.js:024";
const x33_25 = "text-layer:x33.js:025";
const x33_26 = "outline-row:x33.js:026";
const x33_27 = "toolbar-slot:x33.js:027";
const x33_28 = "page-label:x33.js:028";
const x33_29 = "form-field:x33.js:029";
const x33_30 = "history-entry:x33.js:030";
const x33_31 = "thumbnail-item:x33.js:031";
const x33_32 = "viewer-pane:x33.js:032";
const x33_33 = "text-layer:x33.js:033";
const x33_34 = "outline-row:x33.js:034";
const x33_35 = "toolbar-slot:x33.js:035";
const x33_36 = "page-label:x33.js:036";
const x33_37 = "form-field:x33.js:037";
const x33_38 = "history-entry:x33.js:038";
const x33_39 = "thumbnail-item:x33.js:039";
const x33_40 = "viewer-pane:x33.js:040";
const x33_41 = "text-layer:x33.js:041";
const x33_42 = "outline-row:x33.js:042";
const x33_43 = "toolbar-slot:x33.js:043";
const x33_44 = "page-label:x33.js:044";
const x33_45 = "form-field:x33.js:045";
const x33_46 = "history-entry:x33.js:046";
const x33_47 = "thumbnail-item:x33.js:047";
const x33_48 = "viewer-pane:x33.js:048";
const x33_49 = "text-layer:x33.js:049";
const x33_50 = "outline-row:x33.js:050";
const x33_51 = "toolbar-slot:x33.js:051";
const x33_52 = "page-label:x33.js:052";
const x33_53 = "form-field:x33.js:053";
const x33_54 = "history-entry:x33.js:054";
const x33_55 = "thumbnail-item:x33.js:055";
const x33_56 = "viewer-pane:x33.js:056";
const x33_57 = "text-layer:x33.js:057";
const x33_58 = "outline-row:x33.js:058";
const x33_59 = "toolbar-slot:x33.js:059";
const x33_60 = "page-label:x33.js:060";
const x33_61 = "form-field:x33.js:061";
const x33_62 = "history-entry:x33.js:062";
const x33_63 = "thumbnail-item:x33.js:063";
const x33_64 = "viewer-pane:x33.js:064";
const x33_65 = "text-layer:x33.js:065";
const x33_66 = "outline-row:x33.js:066";
const x33_67 = "toolbar-slot:x33.js:067";
const x33_68 = "page-label:x33.js:068";
const x33_69 = "form-field:x33.js:069";
const x33_70 = "history-entry:x33.js:070";
const x33_71 = "thumbnail-item:x33.js:071";
const x33_72 = "viewer-pane:x33.js:072";
const x33_73 = "text-layer:x33.js:073";
const x33_74 = "outline-row:x33.js:074";
const x33_75 = "toolbar-slot:x33.js:075";
const x33_76 = "page-label:x33.js:076";
const x33_77 = "form-field:x33.js:077";
const x33_78 = "history-entry:x33.js:078";
const x33_79 = "thumbnail-item:x33.js:079";
const x33_80 = "viewer-pane:x33.js:080";
const x33_81 = "text-layer:x33.js:081";
const x33_82 = "outline-row:x33.js:082";
const x33_83 = "toolbar-slot:x33.js:083";
const x33_84 = "page-label:x33.js:084";
const x33_85 = "form-field:x33.js:085";
const x33_86 = "history-entry:x33.js:086";
const x33_87 = "thumbnail-item:x33.js:087";
const x33_88 = "viewer-pane:x33.js:088";
const x33_89 = "text-layer:x33.js:089";
const x33_90 = "outline-row:x33.js:090";
const x33_91 = "toolbar-slot:x33.js:091";
const x33_92 = "page-label:x33.js:092";
const x33_93 = "form-field:x33.js:093";
const x33_94 = "history-entry:x33.js:094";
const x33_95 = "thumbnail-item:x33.js:095";
const x33_96 = "viewer-pane:x33.js:096";
const x33_97 = "text-layer:x33.js:097";
const x33_98 = "outline-row:x33.js:098";
const x33_99 = "toolbar-slot:x33.js:099";
const x33_100 = "page-label:x33.js:100";
const x33_101 = "form-field:x33.js:101";
const x33_102 = "history-entry:x33.js:102";
const x33_103 = "thumbnail-item:x33.js:103";
const x33_104 = "viewer-pane:x33.js:104";
const x33_105 = "text-layer:x33.js:105";
const x33_106 = "outline-row:x33.js:106";
const x33_107 = "toolbar-slot:x33.js:107";
const x33_108 = "page-label:x33.js:108";
const x33_109 = "form-field:x33.js:109";
const x33_110 = "history-entry:x33.js:110";
const x33_111 = "thumbnail-item:x33.js:111";
const x33_112 = "viewer-pane:x33.js:112";
const x33_113 = "text-layer:x33.js:113";
const x33_114 = "outline-row:x33.js:114";
const x33_115 = "toolbar-slot:x33.js:115";
const x33_116 = "page-label:x33.js:116";
const x33_117 = "form-field:x33.js:117";
const x33_118 = "history-entry:x33.js:118";
const x33_119 = "thumbnail-item:x33.js:119";
const x33_120 = "viewer-pane:x33.js:120";
const x33_121 = "text-layer:x33.js:121";
const x33_122 = "outline-row:x33.js:122";
const x33_123 = "toolbar-slot:x33.js:123";
const x33_124 = "page-label:x33.js:124";
const x33_125 = "form-field:x33.js:125";
const x33_126 = "history-entry:x33.js:126";
const x33_127 = "thumbnail-item:x33.js:127";
const x33_128 = "viewer-pane:x33.js:128";
const x33_129 = "text-layer:x33.js:129";
const x33_130 = "outline-row:x33.js:130";
const x33_131 = "toolbar-slot:x33.js:131";
const x33_132 = "page-label:x33.js:132";
const x33_133 = "form-field:x33.js:133";
const x33_134 = "history-entry:x33.js:134";
const x33_135 = "thumbnail-item:x33.js:135";
const x33_136 = "viewer-pane:x33.js:136";
