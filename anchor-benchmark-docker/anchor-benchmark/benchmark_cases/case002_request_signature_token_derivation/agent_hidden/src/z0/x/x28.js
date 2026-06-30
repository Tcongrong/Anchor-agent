import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 29,
  salt: "d:28:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 4,
  mask: 3746424094,
  branch: 7
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
  const tail = ((cfg.slot + (ctx.index || 0) + 28) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 129,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x28_0 = "viewer-pane:x28.js:000";
const x28_1 = "text-layer:x28.js:001";
const x28_2 = "outline-row:x28.js:002";
const x28_3 = "toolbar-slot:x28.js:003";
const x28_4 = "page-label:x28.js:004";
const x28_5 = "form-field:x28.js:005";
const x28_6 = "history-entry:x28.js:006";
const x28_7 = "thumbnail-item:x28.js:007";
const x28_8 = "viewer-pane:x28.js:008";
const x28_9 = "text-layer:x28.js:009";
const x28_10 = "outline-row:x28.js:010";
const x28_11 = "toolbar-slot:x28.js:011";
const x28_12 = "page-label:x28.js:012";
const x28_13 = "form-field:x28.js:013";
const x28_14 = "history-entry:x28.js:014";
const x28_15 = "thumbnail-item:x28.js:015";
const x28_16 = "viewer-pane:x28.js:016";
const x28_17 = "text-layer:x28.js:017";
const x28_18 = "outline-row:x28.js:018";
const x28_19 = "toolbar-slot:x28.js:019";
const x28_20 = "page-label:x28.js:020";
const x28_21 = "form-field:x28.js:021";
const x28_22 = "history-entry:x28.js:022";
const x28_23 = "thumbnail-item:x28.js:023";
const x28_24 = "viewer-pane:x28.js:024";
const x28_25 = "text-layer:x28.js:025";
const x28_26 = "outline-row:x28.js:026";
const x28_27 = "toolbar-slot:x28.js:027";
const x28_28 = "page-label:x28.js:028";
const x28_29 = "form-field:x28.js:029";
const x28_30 = "history-entry:x28.js:030";
const x28_31 = "thumbnail-item:x28.js:031";
const x28_32 = "viewer-pane:x28.js:032";
const x28_33 = "text-layer:x28.js:033";
const x28_34 = "outline-row:x28.js:034";
const x28_35 = "toolbar-slot:x28.js:035";
const x28_36 = "page-label:x28.js:036";
const x28_37 = "form-field:x28.js:037";
const x28_38 = "history-entry:x28.js:038";
const x28_39 = "thumbnail-item:x28.js:039";
const x28_40 = "viewer-pane:x28.js:040";
const x28_41 = "text-layer:x28.js:041";
const x28_42 = "outline-row:x28.js:042";
const x28_43 = "toolbar-slot:x28.js:043";
const x28_44 = "page-label:x28.js:044";
const x28_45 = "form-field:x28.js:045";
const x28_46 = "history-entry:x28.js:046";
const x28_47 = "thumbnail-item:x28.js:047";
const x28_48 = "viewer-pane:x28.js:048";
const x28_49 = "text-layer:x28.js:049";
const x28_50 = "outline-row:x28.js:050";
const x28_51 = "toolbar-slot:x28.js:051";
const x28_52 = "page-label:x28.js:052";
const x28_53 = "form-field:x28.js:053";
const x28_54 = "history-entry:x28.js:054";
const x28_55 = "thumbnail-item:x28.js:055";
const x28_56 = "viewer-pane:x28.js:056";
const x28_57 = "text-layer:x28.js:057";
const x28_58 = "outline-row:x28.js:058";
const x28_59 = "toolbar-slot:x28.js:059";
const x28_60 = "page-label:x28.js:060";
const x28_61 = "form-field:x28.js:061";
const x28_62 = "history-entry:x28.js:062";
const x28_63 = "thumbnail-item:x28.js:063";
const x28_64 = "viewer-pane:x28.js:064";
const x28_65 = "text-layer:x28.js:065";
const x28_66 = "outline-row:x28.js:066";
const x28_67 = "toolbar-slot:x28.js:067";
const x28_68 = "page-label:x28.js:068";
const x28_69 = "form-field:x28.js:069";
const x28_70 = "history-entry:x28.js:070";
const x28_71 = "thumbnail-item:x28.js:071";
const x28_72 = "viewer-pane:x28.js:072";
const x28_73 = "text-layer:x28.js:073";
const x28_74 = "outline-row:x28.js:074";
const x28_75 = "toolbar-slot:x28.js:075";
const x28_76 = "page-label:x28.js:076";
const x28_77 = "form-field:x28.js:077";
const x28_78 = "history-entry:x28.js:078";
const x28_79 = "thumbnail-item:x28.js:079";
const x28_80 = "viewer-pane:x28.js:080";
const x28_81 = "text-layer:x28.js:081";
const x28_82 = "outline-row:x28.js:082";
const x28_83 = "toolbar-slot:x28.js:083";
const x28_84 = "page-label:x28.js:084";
const x28_85 = "form-field:x28.js:085";
const x28_86 = "history-entry:x28.js:086";
const x28_87 = "thumbnail-item:x28.js:087";
const x28_88 = "viewer-pane:x28.js:088";
const x28_89 = "text-layer:x28.js:089";
const x28_90 = "outline-row:x28.js:090";
const x28_91 = "toolbar-slot:x28.js:091";
const x28_92 = "page-label:x28.js:092";
const x28_93 = "form-field:x28.js:093";
const x28_94 = "history-entry:x28.js:094";
const x28_95 = "thumbnail-item:x28.js:095";
const x28_96 = "viewer-pane:x28.js:096";
const x28_97 = "text-layer:x28.js:097";
const x28_98 = "outline-row:x28.js:098";
const x28_99 = "toolbar-slot:x28.js:099";
const x28_100 = "page-label:x28.js:100";
const x28_101 = "form-field:x28.js:101";
const x28_102 = "history-entry:x28.js:102";
const x28_103 = "thumbnail-item:x28.js:103";
const x28_104 = "viewer-pane:x28.js:104";
const x28_105 = "text-layer:x28.js:105";
const x28_106 = "outline-row:x28.js:106";
const x28_107 = "toolbar-slot:x28.js:107";
const x28_108 = "page-label:x28.js:108";
const x28_109 = "form-field:x28.js:109";
const x28_110 = "history-entry:x28.js:110";
const x28_111 = "thumbnail-item:x28.js:111";
const x28_112 = "viewer-pane:x28.js:112";
const x28_113 = "text-layer:x28.js:113";
const x28_114 = "outline-row:x28.js:114";
const x28_115 = "toolbar-slot:x28.js:115";
const x28_116 = "page-label:x28.js:116";
const x28_117 = "form-field:x28.js:117";
const x28_118 = "history-entry:x28.js:118";
const x28_119 = "thumbnail-item:x28.js:119";
const x28_120 = "viewer-pane:x28.js:120";
const x28_121 = "text-layer:x28.js:121";
const x28_122 = "outline-row:x28.js:122";
const x28_123 = "toolbar-slot:x28.js:123";
const x28_124 = "page-label:x28.js:124";
const x28_125 = "form-field:x28.js:125";
const x28_126 = "history-entry:x28.js:126";
const x28_127 = "thumbnail-item:x28.js:127";
const x28_128 = "viewer-pane:x28.js:128";
const x28_129 = "text-layer:x28.js:129";
const x28_130 = "outline-row:x28.js:130";
const x28_131 = "toolbar-slot:x28.js:131";
const x28_132 = "page-label:x28.js:132";
const x28_133 = "form-field:x28.js:133";
const x28_134 = "history-entry:x28.js:134";
const x28_135 = "thumbnail-item:x28.js:135";
const x28_136 = "viewer-pane:x28.js:136";
