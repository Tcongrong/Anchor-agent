import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 32,
  salt: "d:31:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 7,
  mask: 3119796785,
  branch: 12
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
  const tail = ((cfg.slot + (ctx.index || 0) + 31) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 132,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x31_0 = "viewer-pane:x31.js:000";
const x31_1 = "text-layer:x31.js:001";
const x31_2 = "outline-row:x31.js:002";
const x31_3 = "toolbar-slot:x31.js:003";
const x31_4 = "page-label:x31.js:004";
const x31_5 = "form-field:x31.js:005";
const x31_6 = "history-entry:x31.js:006";
const x31_7 = "thumbnail-item:x31.js:007";
const x31_8 = "viewer-pane:x31.js:008";
const x31_9 = "text-layer:x31.js:009";
const x31_10 = "outline-row:x31.js:010";
const x31_11 = "toolbar-slot:x31.js:011";
const x31_12 = "page-label:x31.js:012";
const x31_13 = "form-field:x31.js:013";
const x31_14 = "history-entry:x31.js:014";
const x31_15 = "thumbnail-item:x31.js:015";
const x31_16 = "viewer-pane:x31.js:016";
const x31_17 = "text-layer:x31.js:017";
const x31_18 = "outline-row:x31.js:018";
const x31_19 = "toolbar-slot:x31.js:019";
const x31_20 = "page-label:x31.js:020";
const x31_21 = "form-field:x31.js:021";
const x31_22 = "history-entry:x31.js:022";
const x31_23 = "thumbnail-item:x31.js:023";
const x31_24 = "viewer-pane:x31.js:024";
const x31_25 = "text-layer:x31.js:025";
const x31_26 = "outline-row:x31.js:026";
const x31_27 = "toolbar-slot:x31.js:027";
const x31_28 = "page-label:x31.js:028";
const x31_29 = "form-field:x31.js:029";
const x31_30 = "history-entry:x31.js:030";
const x31_31 = "thumbnail-item:x31.js:031";
const x31_32 = "viewer-pane:x31.js:032";
const x31_33 = "text-layer:x31.js:033";
const x31_34 = "outline-row:x31.js:034";
const x31_35 = "toolbar-slot:x31.js:035";
const x31_36 = "page-label:x31.js:036";
const x31_37 = "form-field:x31.js:037";
const x31_38 = "history-entry:x31.js:038";
const x31_39 = "thumbnail-item:x31.js:039";
const x31_40 = "viewer-pane:x31.js:040";
const x31_41 = "text-layer:x31.js:041";
const x31_42 = "outline-row:x31.js:042";
const x31_43 = "toolbar-slot:x31.js:043";
const x31_44 = "page-label:x31.js:044";
const x31_45 = "form-field:x31.js:045";
const x31_46 = "history-entry:x31.js:046";
const x31_47 = "thumbnail-item:x31.js:047";
const x31_48 = "viewer-pane:x31.js:048";
const x31_49 = "text-layer:x31.js:049";
const x31_50 = "outline-row:x31.js:050";
const x31_51 = "toolbar-slot:x31.js:051";
const x31_52 = "page-label:x31.js:052";
const x31_53 = "form-field:x31.js:053";
const x31_54 = "history-entry:x31.js:054";
const x31_55 = "thumbnail-item:x31.js:055";
const x31_56 = "viewer-pane:x31.js:056";
const x31_57 = "text-layer:x31.js:057";
const x31_58 = "outline-row:x31.js:058";
const x31_59 = "toolbar-slot:x31.js:059";
const x31_60 = "page-label:x31.js:060";
const x31_61 = "form-field:x31.js:061";
const x31_62 = "history-entry:x31.js:062";
const x31_63 = "thumbnail-item:x31.js:063";
const x31_64 = "viewer-pane:x31.js:064";
const x31_65 = "text-layer:x31.js:065";
const x31_66 = "outline-row:x31.js:066";
const x31_67 = "toolbar-slot:x31.js:067";
const x31_68 = "page-label:x31.js:068";
const x31_69 = "form-field:x31.js:069";
const x31_70 = "history-entry:x31.js:070";
const x31_71 = "thumbnail-item:x31.js:071";
const x31_72 = "viewer-pane:x31.js:072";
const x31_73 = "text-layer:x31.js:073";
const x31_74 = "outline-row:x31.js:074";
const x31_75 = "toolbar-slot:x31.js:075";
const x31_76 = "page-label:x31.js:076";
const x31_77 = "form-field:x31.js:077";
const x31_78 = "history-entry:x31.js:078";
const x31_79 = "thumbnail-item:x31.js:079";
const x31_80 = "viewer-pane:x31.js:080";
const x31_81 = "text-layer:x31.js:081";
const x31_82 = "outline-row:x31.js:082";
const x31_83 = "toolbar-slot:x31.js:083";
const x31_84 = "page-label:x31.js:084";
const x31_85 = "form-field:x31.js:085";
const x31_86 = "history-entry:x31.js:086";
const x31_87 = "thumbnail-item:x31.js:087";
const x31_88 = "viewer-pane:x31.js:088";
const x31_89 = "text-layer:x31.js:089";
const x31_90 = "outline-row:x31.js:090";
const x31_91 = "toolbar-slot:x31.js:091";
const x31_92 = "page-label:x31.js:092";
const x31_93 = "form-field:x31.js:093";
const x31_94 = "history-entry:x31.js:094";
const x31_95 = "thumbnail-item:x31.js:095";
const x31_96 = "viewer-pane:x31.js:096";
const x31_97 = "text-layer:x31.js:097";
const x31_98 = "outline-row:x31.js:098";
const x31_99 = "toolbar-slot:x31.js:099";
const x31_100 = "page-label:x31.js:100";
const x31_101 = "form-field:x31.js:101";
const x31_102 = "history-entry:x31.js:102";
const x31_103 = "thumbnail-item:x31.js:103";
const x31_104 = "viewer-pane:x31.js:104";
const x31_105 = "text-layer:x31.js:105";
const x31_106 = "outline-row:x31.js:106";
const x31_107 = "toolbar-slot:x31.js:107";
const x31_108 = "page-label:x31.js:108";
const x31_109 = "form-field:x31.js:109";
const x31_110 = "history-entry:x31.js:110";
const x31_111 = "thumbnail-item:x31.js:111";
const x31_112 = "viewer-pane:x31.js:112";
const x31_113 = "text-layer:x31.js:113";
const x31_114 = "outline-row:x31.js:114";
const x31_115 = "toolbar-slot:x31.js:115";
const x31_116 = "page-label:x31.js:116";
const x31_117 = "form-field:x31.js:117";
const x31_118 = "history-entry:x31.js:118";
const x31_119 = "thumbnail-item:x31.js:119";
const x31_120 = "viewer-pane:x31.js:120";
const x31_121 = "text-layer:x31.js:121";
const x31_122 = "outline-row:x31.js:122";
const x31_123 = "toolbar-slot:x31.js:123";
const x31_124 = "page-label:x31.js:124";
const x31_125 = "form-field:x31.js:125";
const x31_126 = "history-entry:x31.js:126";
const x31_127 = "thumbnail-item:x31.js:127";
const x31_128 = "viewer-pane:x31.js:128";
const x31_129 = "text-layer:x31.js:129";
const x31_130 = "outline-row:x31.js:130";
const x31_131 = "toolbar-slot:x31.js:131";
const x31_132 = "page-label:x31.js:132";
const x31_133 = "form-field:x31.js:133";
const x31_134 = "history-entry:x31.js:134";
const x31_135 = "thumbnail-item:x31.js:135";
const x31_136 = "viewer-pane:x31.js:136";
