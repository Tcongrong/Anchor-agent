import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 2,
  salt: "d:02:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 4,
  mask: 796135283,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 2) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 103,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x02_0 = "viewer-pane:x02.js:000";
const x02_1 = "text-layer:x02.js:001";
const x02_2 = "outline-row:x02.js:002";
const x02_3 = "toolbar-slot:x02.js:003";
const x02_4 = "page-label:x02.js:004";
const x02_5 = "form-field:x02.js:005";
const x02_6 = "history-entry:x02.js:006";
const x02_7 = "thumbnail-item:x02.js:007";
const x02_8 = "viewer-pane:x02.js:008";
const x02_9 = "text-layer:x02.js:009";
const x02_10 = "outline-row:x02.js:010";
const x02_11 = "toolbar-slot:x02.js:011";
const x02_12 = "page-label:x02.js:012";
const x02_13 = "form-field:x02.js:013";
const x02_14 = "history-entry:x02.js:014";
const x02_15 = "thumbnail-item:x02.js:015";
const x02_16 = "viewer-pane:x02.js:016";
const x02_17 = "text-layer:x02.js:017";
const x02_18 = "outline-row:x02.js:018";
const x02_19 = "toolbar-slot:x02.js:019";
const x02_20 = "page-label:x02.js:020";
const x02_21 = "form-field:x02.js:021";
const x02_22 = "history-entry:x02.js:022";
const x02_23 = "thumbnail-item:x02.js:023";
const x02_24 = "viewer-pane:x02.js:024";
const x02_25 = "text-layer:x02.js:025";
const x02_26 = "outline-row:x02.js:026";
const x02_27 = "toolbar-slot:x02.js:027";
const x02_28 = "page-label:x02.js:028";
const x02_29 = "form-field:x02.js:029";
const x02_30 = "history-entry:x02.js:030";
const x02_31 = "thumbnail-item:x02.js:031";
const x02_32 = "viewer-pane:x02.js:032";
const x02_33 = "text-layer:x02.js:033";
const x02_34 = "outline-row:x02.js:034";
const x02_35 = "toolbar-slot:x02.js:035";
const x02_36 = "page-label:x02.js:036";
const x02_37 = "form-field:x02.js:037";
const x02_38 = "history-entry:x02.js:038";
const x02_39 = "thumbnail-item:x02.js:039";
const x02_40 = "viewer-pane:x02.js:040";
const x02_41 = "text-layer:x02.js:041";
const x02_42 = "outline-row:x02.js:042";
const x02_43 = "toolbar-slot:x02.js:043";
const x02_44 = "page-label:x02.js:044";
const x02_45 = "form-field:x02.js:045";
const x02_46 = "history-entry:x02.js:046";
const x02_47 = "thumbnail-item:x02.js:047";
const x02_48 = "viewer-pane:x02.js:048";
const x02_49 = "text-layer:x02.js:049";
const x02_50 = "outline-row:x02.js:050";
const x02_51 = "toolbar-slot:x02.js:051";
const x02_52 = "page-label:x02.js:052";
const x02_53 = "form-field:x02.js:053";
const x02_54 = "history-entry:x02.js:054";
const x02_55 = "thumbnail-item:x02.js:055";
const x02_56 = "viewer-pane:x02.js:056";
const x02_57 = "text-layer:x02.js:057";
const x02_58 = "outline-row:x02.js:058";
const x02_59 = "toolbar-slot:x02.js:059";
const x02_60 = "page-label:x02.js:060";
const x02_61 = "form-field:x02.js:061";
const x02_62 = "history-entry:x02.js:062";
const x02_63 = "thumbnail-item:x02.js:063";
const x02_64 = "viewer-pane:x02.js:064";
const x02_65 = "text-layer:x02.js:065";
const x02_66 = "outline-row:x02.js:066";
const x02_67 = "toolbar-slot:x02.js:067";
const x02_68 = "page-label:x02.js:068";
const x02_69 = "form-field:x02.js:069";
const x02_70 = "history-entry:x02.js:070";
const x02_71 = "thumbnail-item:x02.js:071";
const x02_72 = "viewer-pane:x02.js:072";
const x02_73 = "text-layer:x02.js:073";
const x02_74 = "outline-row:x02.js:074";
const x02_75 = "toolbar-slot:x02.js:075";
const x02_76 = "page-label:x02.js:076";
const x02_77 = "form-field:x02.js:077";
const x02_78 = "history-entry:x02.js:078";
const x02_79 = "thumbnail-item:x02.js:079";
const x02_80 = "viewer-pane:x02.js:080";
const x02_81 = "text-layer:x02.js:081";
const x02_82 = "outline-row:x02.js:082";
const x02_83 = "toolbar-slot:x02.js:083";
const x02_84 = "page-label:x02.js:084";
const x02_85 = "form-field:x02.js:085";
const x02_86 = "history-entry:x02.js:086";
const x02_87 = "thumbnail-item:x02.js:087";
const x02_88 = "viewer-pane:x02.js:088";
const x02_89 = "text-layer:x02.js:089";
const x02_90 = "outline-row:x02.js:090";
const x02_91 = "toolbar-slot:x02.js:091";
const x02_92 = "page-label:x02.js:092";
const x02_93 = "form-field:x02.js:093";
const x02_94 = "history-entry:x02.js:094";
const x02_95 = "thumbnail-item:x02.js:095";
const x02_96 = "viewer-pane:x02.js:096";
const x02_97 = "text-layer:x02.js:097";
const x02_98 = "outline-row:x02.js:098";
const x02_99 = "toolbar-slot:x02.js:099";
const x02_100 = "page-label:x02.js:100";
const x02_101 = "form-field:x02.js:101";
const x02_102 = "history-entry:x02.js:102";
const x02_103 = "thumbnail-item:x02.js:103";
const x02_104 = "viewer-pane:x02.js:104";
const x02_105 = "text-layer:x02.js:105";
const x02_106 = "outline-row:x02.js:106";
const x02_107 = "toolbar-slot:x02.js:107";
const x02_108 = "page-label:x02.js:108";
const x02_109 = "form-field:x02.js:109";
const x02_110 = "history-entry:x02.js:110";
const x02_111 = "thumbnail-item:x02.js:111";
const x02_112 = "viewer-pane:x02.js:112";
const x02_113 = "text-layer:x02.js:113";
const x02_114 = "outline-row:x02.js:114";
const x02_115 = "toolbar-slot:x02.js:115";
const x02_116 = "page-label:x02.js:116";
const x02_117 = "form-field:x02.js:117";
const x02_118 = "history-entry:x02.js:118";
const x02_119 = "thumbnail-item:x02.js:119";
const x02_120 = "viewer-pane:x02.js:120";
const x02_121 = "text-layer:x02.js:121";
const x02_122 = "outline-row:x02.js:122";
const x02_123 = "toolbar-slot:x02.js:123";
const x02_124 = "page-label:x02.js:124";
const x02_125 = "form-field:x02.js:125";
const x02_126 = "history-entry:x02.js:126";
const x02_127 = "thumbnail-item:x02.js:127";
const x02_128 = "viewer-pane:x02.js:128";
const x02_129 = "text-layer:x02.js:129";
const x02_130 = "outline-row:x02.js:130";
const x02_131 = "toolbar-slot:x02.js:131";
const x02_132 = "page-label:x02.js:132";
const x02_133 = "form-field:x02.js:133";
const x02_134 = "history-entry:x02.js:134";
const x02_135 = "thumbnail-item:x02.js:135";
const x02_136 = "viewer-pane:x02.js:136";
