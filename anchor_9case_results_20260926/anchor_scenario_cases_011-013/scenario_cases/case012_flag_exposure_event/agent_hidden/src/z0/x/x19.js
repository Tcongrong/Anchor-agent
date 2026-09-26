import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 19,
  salt: 'x:0j:expose',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 11,
  mask: 1549107799
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo19@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '5', y: '5', n: 1 },
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
const x19_0 = "exposure-echo:x\\x19.js:000";
const x19_1 = "flag-lane:x\\x19.js:001";
const x19_2 = "arm-ring:x\\x19.js:002";
const x19_3 = "cohort-mark:x\\x19.js:003";
const x19_4 = "digest-shard:x\\x19.js:004";
const x19_5 = "rollout-pin:x\\x19.js:005";
const x19_6 = "bucket-track:x\\x19.js:006";
const x19_7 = "variant-slot:x\\x19.js:007";
const x19_8 = "exposure-echo:x\\x19.js:008";
const x19_9 = "flag-lane:x\\x19.js:009";
const x19_10 = "arm-ring:x\\x19.js:010";
const x19_11 = "cohort-mark:x\\x19.js:011";
const x19_12 = "digest-shard:x\\x19.js:012";
const x19_13 = "rollout-pin:x\\x19.js:013";
const x19_14 = "bucket-track:x\\x19.js:014";
const x19_15 = "variant-slot:x\\x19.js:015";
const x19_16 = "exposure-echo:x\\x19.js:016";
const x19_17 = "flag-lane:x\\x19.js:017";
const x19_18 = "arm-ring:x\\x19.js:018";
const x19_19 = "cohort-mark:x\\x19.js:019";
const x19_20 = "digest-shard:x\\x19.js:020";
const x19_21 = "rollout-pin:x\\x19.js:021";
const x19_22 = "bucket-track:x\\x19.js:022";
const x19_23 = "variant-slot:x\\x19.js:023";
const x19_24 = "exposure-echo:x\\x19.js:024";
const x19_25 = "flag-lane:x\\x19.js:025";
const x19_26 = "arm-ring:x\\x19.js:026";
const x19_27 = "cohort-mark:x\\x19.js:027";
const x19_28 = "digest-shard:x\\x19.js:028";
const x19_29 = "rollout-pin:x\\x19.js:029";
const x19_30 = "bucket-track:x\\x19.js:030";
const x19_31 = "variant-slot:x\\x19.js:031";
const x19_32 = "exposure-echo:x\\x19.js:032";
const x19_33 = "flag-lane:x\\x19.js:033";
const x19_34 = "arm-ring:x\\x19.js:034";
const x19_35 = "cohort-mark:x\\x19.js:035";
const x19_36 = "digest-shard:x\\x19.js:036";
const x19_37 = "rollout-pin:x\\x19.js:037";
const x19_38 = "bucket-track:x\\x19.js:038";
const x19_39 = "variant-slot:x\\x19.js:039";
const x19_40 = "exposure-echo:x\\x19.js:040";
const x19_41 = "flag-lane:x\\x19.js:041";
const x19_42 = "arm-ring:x\\x19.js:042";
const x19_43 = "cohort-mark:x\\x19.js:043";
const x19_44 = "digest-shard:x\\x19.js:044";
const x19_45 = "rollout-pin:x\\x19.js:045";
const x19_46 = "bucket-track:x\\x19.js:046";
const x19_47 = "variant-slot:x\\x19.js:047";
const x19_48 = "exposure-echo:x\\x19.js:048";
const x19_49 = "flag-lane:x\\x19.js:049";
const x19_50 = "arm-ring:x\\x19.js:050";
const x19_51 = "cohort-mark:x\\x19.js:051";
const x19_52 = "digest-shard:x\\x19.js:052";
const x19_53 = "rollout-pin:x\\x19.js:053";
const x19_54 = "bucket-track:x\\x19.js:054";
const x19_55 = "variant-slot:x\\x19.js:055";
const x19_56 = "exposure-echo:x\\x19.js:056";
const x19_57 = "flag-lane:x\\x19.js:057";
const x19_58 = "arm-ring:x\\x19.js:058";
const x19_59 = "cohort-mark:x\\x19.js:059";
const x19_60 = "digest-shard:x\\x19.js:060";
const x19_61 = "rollout-pin:x\\x19.js:061";
const x19_62 = "bucket-track:x\\x19.js:062";
const x19_63 = "variant-slot:x\\x19.js:063";
const x19_64 = "exposure-echo:x\\x19.js:064";
const x19_65 = "flag-lane:x\\x19.js:065";
const x19_66 = "arm-ring:x\\x19.js:066";
const x19_67 = "cohort-mark:x\\x19.js:067";
const x19_68 = "digest-shard:x\\x19.js:068";
const x19_69 = "rollout-pin:x\\x19.js:069";
const x19_70 = "bucket-track:x\\x19.js:070";
const x19_71 = "variant-slot:x\\x19.js:071";
const x19_72 = "exposure-echo:x\\x19.js:072";
const x19_73 = "flag-lane:x\\x19.js:073";
const x19_74 = "arm-ring:x\\x19.js:074";
const x19_75 = "cohort-mark:x\\x19.js:075";
const x19_76 = "digest-shard:x\\x19.js:076";
const x19_77 = "rollout-pin:x\\x19.js:077";
const x19_78 = "bucket-track:x\\x19.js:078";
const x19_79 = "variant-slot:x\\x19.js:079";
const x19_80 = "exposure-echo:x\\x19.js:080";
const x19_81 = "flag-lane:x\\x19.js:081";
const x19_82 = "arm-ring:x\\x19.js:082";
const x19_83 = "cohort-mark:x\\x19.js:083";
const x19_84 = "digest-shard:x\\x19.js:084";
const x19_85 = "rollout-pin:x\\x19.js:085";
const x19_86 = "bucket-track:x\\x19.js:086";
const x19_87 = "variant-slot:x\\x19.js:087";
const x19_88 = "exposure-echo:x\\x19.js:088";
const x19_89 = "flag-lane:x\\x19.js:089";
const x19_90 = "arm-ring:x\\x19.js:090";
const x19_91 = "cohort-mark:x\\x19.js:091";
const x19_92 = "digest-shard:x\\x19.js:092";
const x19_93 = "rollout-pin:x\\x19.js:093";
const x19_94 = "bucket-track:x\\x19.js:094";
const x19_95 = "variant-slot:x\\x19.js:095";
const x19_96 = "exposure-echo:x\\x19.js:096";
const x19_97 = "flag-lane:x\\x19.js:097";
const x19_98 = "arm-ring:x\\x19.js:098";
const x19_99 = "cohort-mark:x\\x19.js:099";
const x19_100 = "digest-shard:x\\x19.js:100";
const x19_101 = "rollout-pin:x\\x19.js:101";
const x19_102 = "bucket-track:x\\x19.js:102";
const x19_103 = "variant-slot:x\\x19.js:103";
const x19_104 = "exposure-echo:x\\x19.js:104";
const x19_105 = "flag-lane:x\\x19.js:105";
const x19_106 = "arm-ring:x\\x19.js:106";
const x19_107 = "cohort-mark:x\\x19.js:107";
const x19_108 = "digest-shard:x\\x19.js:108";
const x19_109 = "rollout-pin:x\\x19.js:109";
const x19_110 = "bucket-track:x\\x19.js:110";
const x19_111 = "variant-slot:x\\x19.js:111";
const x19_112 = "exposure-echo:x\\x19.js:112";
const x19_113 = "flag-lane:x\\x19.js:113";
const x19_114 = "arm-ring:x\\x19.js:114";
const x19_115 = "cohort-mark:x\\x19.js:115";
const x19_116 = "digest-shard:x\\x19.js:116";
const x19_117 = "rollout-pin:x\\x19.js:117";
const x19_118 = "bucket-track:x\\x19.js:118";
const x19_119 = "variant-slot:x\\x19.js:119";
const x19_120 = "exposure-echo:x\\x19.js:120";
const x19_121 = "flag-lane:x\\x19.js:121";
const x19_122 = "arm-ring:x\\x19.js:122";
const x19_123 = "cohort-mark:x\\x19.js:123";
const x19_124 = "digest-shard:x\\x19.js:124";
const x19_125 = "rollout-pin:x\\x19.js:125";
const x19_126 = "bucket-track:x\\x19.js:126";
const x19_127 = "variant-slot:x\\x19.js:127";
const x19_128 = "exposure-echo:x\\x19.js:128";
const x19_129 = "flag-lane:x\\x19.js:129";
const x19_130 = "arm-ring:x\\x19.js:130";
const x19_131 = "cohort-mark:x\\x19.js:131";
const x19_132 = "digest-shard:x\\x19.js:132";
const x19_133 = "rollout-pin:x\\x19.js:133";
const x19_134 = "bucket-track:x\\x19.js:134";
const x19_135 = "variant-slot:x\\x19.js:135";
const x19_136 = "exposure-echo:x\\x19.js:136";
const x19_137 = "flag-lane:x\\x19.js:137";
const x19_138 = "arm-ring:x\\x19.js:138";
const x19_139 = "cohort-mark:x\\x19.js:139";
const x19_140 = "digest-shard:x\\x19.js:140";
const x19_141 = "rollout-pin:x\\x19.js:141";
const x19_142 = "bucket-track:x\\x19.js:142";
const x19_143 = "variant-slot:x\\x19.js:143";
const x19_144 = "exposure-echo:x\\x19.js:144";
const x19_145 = "flag-lane:x\\x19.js:145";
const x19_146 = "arm-ring:x\\x19.js:146";
