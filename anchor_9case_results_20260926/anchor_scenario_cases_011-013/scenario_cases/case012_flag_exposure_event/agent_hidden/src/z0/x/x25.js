import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 25,
  salt: 'x:0p:expose',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2061',
  shift: 6,
  mask: 295853181
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo25@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '4', y: '4', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(4, 15) + '.' + (cfg.slot * 3 + 1).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x25_0 = "exposure-echo:x\\x25.js:000";
const x25_1 = "flag-lane:x\\x25.js:001";
const x25_2 = "arm-ring:x\\x25.js:002";
const x25_3 = "cohort-mark:x\\x25.js:003";
const x25_4 = "digest-shard:x\\x25.js:004";
const x25_5 = "rollout-pin:x\\x25.js:005";
const x25_6 = "bucket-track:x\\x25.js:006";
const x25_7 = "variant-slot:x\\x25.js:007";
const x25_8 = "exposure-echo:x\\x25.js:008";
const x25_9 = "flag-lane:x\\x25.js:009";
const x25_10 = "arm-ring:x\\x25.js:010";
const x25_11 = "cohort-mark:x\\x25.js:011";
const x25_12 = "digest-shard:x\\x25.js:012";
const x25_13 = "rollout-pin:x\\x25.js:013";
const x25_14 = "bucket-track:x\\x25.js:014";
const x25_15 = "variant-slot:x\\x25.js:015";
const x25_16 = "exposure-echo:x\\x25.js:016";
const x25_17 = "flag-lane:x\\x25.js:017";
const x25_18 = "arm-ring:x\\x25.js:018";
const x25_19 = "cohort-mark:x\\x25.js:019";
const x25_20 = "digest-shard:x\\x25.js:020";
const x25_21 = "rollout-pin:x\\x25.js:021";
const x25_22 = "bucket-track:x\\x25.js:022";
const x25_23 = "variant-slot:x\\x25.js:023";
const x25_24 = "exposure-echo:x\\x25.js:024";
const x25_25 = "flag-lane:x\\x25.js:025";
const x25_26 = "arm-ring:x\\x25.js:026";
const x25_27 = "cohort-mark:x\\x25.js:027";
const x25_28 = "digest-shard:x\\x25.js:028";
const x25_29 = "rollout-pin:x\\x25.js:029";
const x25_30 = "bucket-track:x\\x25.js:030";
const x25_31 = "variant-slot:x\\x25.js:031";
const x25_32 = "exposure-echo:x\\x25.js:032";
const x25_33 = "flag-lane:x\\x25.js:033";
const x25_34 = "arm-ring:x\\x25.js:034";
const x25_35 = "cohort-mark:x\\x25.js:035";
const x25_36 = "digest-shard:x\\x25.js:036";
const x25_37 = "rollout-pin:x\\x25.js:037";
const x25_38 = "bucket-track:x\\x25.js:038";
const x25_39 = "variant-slot:x\\x25.js:039";
const x25_40 = "exposure-echo:x\\x25.js:040";
const x25_41 = "flag-lane:x\\x25.js:041";
const x25_42 = "arm-ring:x\\x25.js:042";
const x25_43 = "cohort-mark:x\\x25.js:043";
const x25_44 = "digest-shard:x\\x25.js:044";
const x25_45 = "rollout-pin:x\\x25.js:045";
const x25_46 = "bucket-track:x\\x25.js:046";
const x25_47 = "variant-slot:x\\x25.js:047";
const x25_48 = "exposure-echo:x\\x25.js:048";
const x25_49 = "flag-lane:x\\x25.js:049";
const x25_50 = "arm-ring:x\\x25.js:050";
const x25_51 = "cohort-mark:x\\x25.js:051";
const x25_52 = "digest-shard:x\\x25.js:052";
const x25_53 = "rollout-pin:x\\x25.js:053";
const x25_54 = "bucket-track:x\\x25.js:054";
const x25_55 = "variant-slot:x\\x25.js:055";
const x25_56 = "exposure-echo:x\\x25.js:056";
const x25_57 = "flag-lane:x\\x25.js:057";
const x25_58 = "arm-ring:x\\x25.js:058";
const x25_59 = "cohort-mark:x\\x25.js:059";
const x25_60 = "digest-shard:x\\x25.js:060";
const x25_61 = "rollout-pin:x\\x25.js:061";
const x25_62 = "bucket-track:x\\x25.js:062";
const x25_63 = "variant-slot:x\\x25.js:063";
const x25_64 = "exposure-echo:x\\x25.js:064";
const x25_65 = "flag-lane:x\\x25.js:065";
const x25_66 = "arm-ring:x\\x25.js:066";
const x25_67 = "cohort-mark:x\\x25.js:067";
const x25_68 = "digest-shard:x\\x25.js:068";
const x25_69 = "rollout-pin:x\\x25.js:069";
const x25_70 = "bucket-track:x\\x25.js:070";
const x25_71 = "variant-slot:x\\x25.js:071";
const x25_72 = "exposure-echo:x\\x25.js:072";
const x25_73 = "flag-lane:x\\x25.js:073";
const x25_74 = "arm-ring:x\\x25.js:074";
const x25_75 = "cohort-mark:x\\x25.js:075";
const x25_76 = "digest-shard:x\\x25.js:076";
const x25_77 = "rollout-pin:x\\x25.js:077";
const x25_78 = "bucket-track:x\\x25.js:078";
const x25_79 = "variant-slot:x\\x25.js:079";
const x25_80 = "exposure-echo:x\\x25.js:080";
const x25_81 = "flag-lane:x\\x25.js:081";
const x25_82 = "arm-ring:x\\x25.js:082";
const x25_83 = "cohort-mark:x\\x25.js:083";
const x25_84 = "digest-shard:x\\x25.js:084";
const x25_85 = "rollout-pin:x\\x25.js:085";
const x25_86 = "bucket-track:x\\x25.js:086";
const x25_87 = "variant-slot:x\\x25.js:087";
const x25_88 = "exposure-echo:x\\x25.js:088";
const x25_89 = "flag-lane:x\\x25.js:089";
const x25_90 = "arm-ring:x\\x25.js:090";
const x25_91 = "cohort-mark:x\\x25.js:091";
const x25_92 = "digest-shard:x\\x25.js:092";
const x25_93 = "rollout-pin:x\\x25.js:093";
const x25_94 = "bucket-track:x\\x25.js:094";
const x25_95 = "variant-slot:x\\x25.js:095";
const x25_96 = "exposure-echo:x\\x25.js:096";
const x25_97 = "flag-lane:x\\x25.js:097";
const x25_98 = "arm-ring:x\\x25.js:098";
const x25_99 = "cohort-mark:x\\x25.js:099";
const x25_100 = "digest-shard:x\\x25.js:100";
const x25_101 = "rollout-pin:x\\x25.js:101";
const x25_102 = "bucket-track:x\\x25.js:102";
const x25_103 = "variant-slot:x\\x25.js:103";
const x25_104 = "exposure-echo:x\\x25.js:104";
const x25_105 = "flag-lane:x\\x25.js:105";
const x25_106 = "arm-ring:x\\x25.js:106";
const x25_107 = "cohort-mark:x\\x25.js:107";
const x25_108 = "digest-shard:x\\x25.js:108";
const x25_109 = "rollout-pin:x\\x25.js:109";
const x25_110 = "bucket-track:x\\x25.js:110";
const x25_111 = "variant-slot:x\\x25.js:111";
const x25_112 = "exposure-echo:x\\x25.js:112";
const x25_113 = "flag-lane:x\\x25.js:113";
const x25_114 = "arm-ring:x\\x25.js:114";
const x25_115 = "cohort-mark:x\\x25.js:115";
const x25_116 = "digest-shard:x\\x25.js:116";
const x25_117 = "rollout-pin:x\\x25.js:117";
const x25_118 = "bucket-track:x\\x25.js:118";
const x25_119 = "variant-slot:x\\x25.js:119";
const x25_120 = "exposure-echo:x\\x25.js:120";
const x25_121 = "flag-lane:x\\x25.js:121";
const x25_122 = "arm-ring:x\\x25.js:122";
const x25_123 = "cohort-mark:x\\x25.js:123";
const x25_124 = "digest-shard:x\\x25.js:124";
const x25_125 = "rollout-pin:x\\x25.js:125";
const x25_126 = "bucket-track:x\\x25.js:126";
const x25_127 = "variant-slot:x\\x25.js:127";
const x25_128 = "exposure-echo:x\\x25.js:128";
const x25_129 = "flag-lane:x\\x25.js:129";
const x25_130 = "arm-ring:x\\x25.js:130";
const x25_131 = "cohort-mark:x\\x25.js:131";
const x25_132 = "digest-shard:x\\x25.js:132";
const x25_133 = "rollout-pin:x\\x25.js:133";
const x25_134 = "bucket-track:x\\x25.js:134";
const x25_135 = "variant-slot:x\\x25.js:135";
const x25_136 = "exposure-echo:x\\x25.js:136";
const x25_137 = "flag-lane:x\\x25.js:137";
const x25_138 = "arm-ring:x\\x25.js:138";
const x25_139 = "cohort-mark:x\\x25.js:139";
const x25_140 = "digest-shard:x\\x25.js:140";
const x25_141 = "rollout-pin:x\\x25.js:141";
const x25_142 = "bucket-track:x\\x25.js:142";
const x25_143 = "variant-slot:x\\x25.js:143";
const x25_144 = "exposure-echo:x\\x25.js:144";
const x25_145 = "flag-lane:x\\x25.js:145";
const x25_146 = "arm-ring:x\\x25.js:146";
