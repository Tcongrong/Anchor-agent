import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 35,
  salt: "d:34:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 10,
  mask: 2493169476,
  branch: 1
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
  const tail = ((cfg.slot + (ctx.index || 0) + 34) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 135,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x34_0 = "viewer-pane:x34.js:000";
const x34_1 = "text-layer:x34.js:001";
const x34_2 = "outline-row:x34.js:002";
const x34_3 = "toolbar-slot:x34.js:003";
const x34_4 = "page-label:x34.js:004";
const x34_5 = "form-field:x34.js:005";
const x34_6 = "history-entry:x34.js:006";
const x34_7 = "thumbnail-item:x34.js:007";
const x34_8 = "viewer-pane:x34.js:008";
const x34_9 = "text-layer:x34.js:009";
const x34_10 = "outline-row:x34.js:010";
const x34_11 = "toolbar-slot:x34.js:011";
const x34_12 = "page-label:x34.js:012";
const x34_13 = "form-field:x34.js:013";
const x34_14 = "history-entry:x34.js:014";
const x34_15 = "thumbnail-item:x34.js:015";
const x34_16 = "viewer-pane:x34.js:016";
const x34_17 = "text-layer:x34.js:017";
const x34_18 = "outline-row:x34.js:018";
const x34_19 = "toolbar-slot:x34.js:019";
const x34_20 = "page-label:x34.js:020";
const x34_21 = "form-field:x34.js:021";
const x34_22 = "history-entry:x34.js:022";
const x34_23 = "thumbnail-item:x34.js:023";
const x34_24 = "viewer-pane:x34.js:024";
const x34_25 = "text-layer:x34.js:025";
const x34_26 = "outline-row:x34.js:026";
const x34_27 = "toolbar-slot:x34.js:027";
const x34_28 = "page-label:x34.js:028";
const x34_29 = "form-field:x34.js:029";
const x34_30 = "history-entry:x34.js:030";
const x34_31 = "thumbnail-item:x34.js:031";
const x34_32 = "viewer-pane:x34.js:032";
const x34_33 = "text-layer:x34.js:033";
const x34_34 = "outline-row:x34.js:034";
const x34_35 = "toolbar-slot:x34.js:035";
const x34_36 = "page-label:x34.js:036";
const x34_37 = "form-field:x34.js:037";
const x34_38 = "history-entry:x34.js:038";
const x34_39 = "thumbnail-item:x34.js:039";
const x34_40 = "viewer-pane:x34.js:040";
const x34_41 = "text-layer:x34.js:041";
const x34_42 = "outline-row:x34.js:042";
const x34_43 = "toolbar-slot:x34.js:043";
const x34_44 = "page-label:x34.js:044";
const x34_45 = "form-field:x34.js:045";
const x34_46 = "history-entry:x34.js:046";
const x34_47 = "thumbnail-item:x34.js:047";
const x34_48 = "viewer-pane:x34.js:048";
const x34_49 = "text-layer:x34.js:049";
const x34_50 = "outline-row:x34.js:050";
const x34_51 = "toolbar-slot:x34.js:051";
const x34_52 = "page-label:x34.js:052";
const x34_53 = "form-field:x34.js:053";
const x34_54 = "history-entry:x34.js:054";
const x34_55 = "thumbnail-item:x34.js:055";
const x34_56 = "viewer-pane:x34.js:056";
const x34_57 = "text-layer:x34.js:057";
const x34_58 = "outline-row:x34.js:058";
const x34_59 = "toolbar-slot:x34.js:059";
const x34_60 = "page-label:x34.js:060";
const x34_61 = "form-field:x34.js:061";
const x34_62 = "history-entry:x34.js:062";
const x34_63 = "thumbnail-item:x34.js:063";
const x34_64 = "viewer-pane:x34.js:064";
const x34_65 = "text-layer:x34.js:065";
const x34_66 = "outline-row:x34.js:066";
const x34_67 = "toolbar-slot:x34.js:067";
const x34_68 = "page-label:x34.js:068";
const x34_69 = "form-field:x34.js:069";
const x34_70 = "history-entry:x34.js:070";
const x34_71 = "thumbnail-item:x34.js:071";
const x34_72 = "viewer-pane:x34.js:072";
const x34_73 = "text-layer:x34.js:073";
const x34_74 = "outline-row:x34.js:074";
const x34_75 = "toolbar-slot:x34.js:075";
const x34_76 = "page-label:x34.js:076";
const x34_77 = "form-field:x34.js:077";
const x34_78 = "history-entry:x34.js:078";
const x34_79 = "thumbnail-item:x34.js:079";
const x34_80 = "viewer-pane:x34.js:080";
const x34_81 = "text-layer:x34.js:081";
const x34_82 = "outline-row:x34.js:082";
const x34_83 = "toolbar-slot:x34.js:083";
const x34_84 = "page-label:x34.js:084";
const x34_85 = "form-field:x34.js:085";
const x34_86 = "history-entry:x34.js:086";
const x34_87 = "thumbnail-item:x34.js:087";
const x34_88 = "viewer-pane:x34.js:088";
const x34_89 = "text-layer:x34.js:089";
const x34_90 = "outline-row:x34.js:090";
const x34_91 = "toolbar-slot:x34.js:091";
const x34_92 = "page-label:x34.js:092";
const x34_93 = "form-field:x34.js:093";
const x34_94 = "history-entry:x34.js:094";
const x34_95 = "thumbnail-item:x34.js:095";
const x34_96 = "viewer-pane:x34.js:096";
const x34_97 = "text-layer:x34.js:097";
const x34_98 = "outline-row:x34.js:098";
const x34_99 = "toolbar-slot:x34.js:099";
const x34_100 = "page-label:x34.js:100";
const x34_101 = "form-field:x34.js:101";
const x34_102 = "history-entry:x34.js:102";
const x34_103 = "thumbnail-item:x34.js:103";
const x34_104 = "viewer-pane:x34.js:104";
const x34_105 = "text-layer:x34.js:105";
const x34_106 = "outline-row:x34.js:106";
const x34_107 = "toolbar-slot:x34.js:107";
const x34_108 = "page-label:x34.js:108";
const x34_109 = "form-field:x34.js:109";
const x34_110 = "history-entry:x34.js:110";
const x34_111 = "thumbnail-item:x34.js:111";
const x34_112 = "viewer-pane:x34.js:112";
const x34_113 = "text-layer:x34.js:113";
const x34_114 = "outline-row:x34.js:114";
const x34_115 = "toolbar-slot:x34.js:115";
const x34_116 = "page-label:x34.js:116";
const x34_117 = "form-field:x34.js:117";
const x34_118 = "history-entry:x34.js:118";
const x34_119 = "thumbnail-item:x34.js:119";
const x34_120 = "viewer-pane:x34.js:120";
const x34_121 = "text-layer:x34.js:121";
const x34_122 = "outline-row:x34.js:122";
const x34_123 = "toolbar-slot:x34.js:123";
const x34_124 = "page-label:x34.js:124";
const x34_125 = "form-field:x34.js:125";
const x34_126 = "history-entry:x34.js:126";
const x34_127 = "thumbnail-item:x34.js:127";
const x34_128 = "viewer-pane:x34.js:128";
const x34_129 = "text-layer:x34.js:129";
const x34_130 = "outline-row:x34.js:130";
const x34_131 = "toolbar-slot:x34.js:131";
const x34_132 = "page-label:x34.js:132";
const x34_133 = "form-field:x34.js:133";
const x34_134 = "history-entry:x34.js:134";
const x34_135 = "thumbnail-item:x34.js:135";
const x34_136 = "viewer-pane:x34.js:136";
