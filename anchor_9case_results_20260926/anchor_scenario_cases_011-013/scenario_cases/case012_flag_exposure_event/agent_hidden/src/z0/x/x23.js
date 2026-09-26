import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 23,
  salt: 'x:0n:expose',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 4,
  mask: 3576916251
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo23@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '2', y: '2', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(2, 12) + '-' + (cfg.slot + 7).toString(36) + 'z9';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x23_0 = "exposure-echo:x\\x23.js:000";
const x23_1 = "flag-lane:x\\x23.js:001";
const x23_2 = "arm-ring:x\\x23.js:002";
const x23_3 = "cohort-mark:x\\x23.js:003";
const x23_4 = "digest-shard:x\\x23.js:004";
const x23_5 = "rollout-pin:x\\x23.js:005";
const x23_6 = "bucket-track:x\\x23.js:006";
const x23_7 = "variant-slot:x\\x23.js:007";
const x23_8 = "exposure-echo:x\\x23.js:008";
const x23_9 = "flag-lane:x\\x23.js:009";
const x23_10 = "arm-ring:x\\x23.js:010";
const x23_11 = "cohort-mark:x\\x23.js:011";
const x23_12 = "digest-shard:x\\x23.js:012";
const x23_13 = "rollout-pin:x\\x23.js:013";
const x23_14 = "bucket-track:x\\x23.js:014";
const x23_15 = "variant-slot:x\\x23.js:015";
const x23_16 = "exposure-echo:x\\x23.js:016";
const x23_17 = "flag-lane:x\\x23.js:017";
const x23_18 = "arm-ring:x\\x23.js:018";
const x23_19 = "cohort-mark:x\\x23.js:019";
const x23_20 = "digest-shard:x\\x23.js:020";
const x23_21 = "rollout-pin:x\\x23.js:021";
const x23_22 = "bucket-track:x\\x23.js:022";
const x23_23 = "variant-slot:x\\x23.js:023";
const x23_24 = "exposure-echo:x\\x23.js:024";
const x23_25 = "flag-lane:x\\x23.js:025";
const x23_26 = "arm-ring:x\\x23.js:026";
const x23_27 = "cohort-mark:x\\x23.js:027";
const x23_28 = "digest-shard:x\\x23.js:028";
const x23_29 = "rollout-pin:x\\x23.js:029";
const x23_30 = "bucket-track:x\\x23.js:030";
const x23_31 = "variant-slot:x\\x23.js:031";
const x23_32 = "exposure-echo:x\\x23.js:032";
const x23_33 = "flag-lane:x\\x23.js:033";
const x23_34 = "arm-ring:x\\x23.js:034";
const x23_35 = "cohort-mark:x\\x23.js:035";
const x23_36 = "digest-shard:x\\x23.js:036";
const x23_37 = "rollout-pin:x\\x23.js:037";
const x23_38 = "bucket-track:x\\x23.js:038";
const x23_39 = "variant-slot:x\\x23.js:039";
const x23_40 = "exposure-echo:x\\x23.js:040";
const x23_41 = "flag-lane:x\\x23.js:041";
const x23_42 = "arm-ring:x\\x23.js:042";
const x23_43 = "cohort-mark:x\\x23.js:043";
const x23_44 = "digest-shard:x\\x23.js:044";
const x23_45 = "rollout-pin:x\\x23.js:045";
const x23_46 = "bucket-track:x\\x23.js:046";
const x23_47 = "variant-slot:x\\x23.js:047";
const x23_48 = "exposure-echo:x\\x23.js:048";
const x23_49 = "flag-lane:x\\x23.js:049";
const x23_50 = "arm-ring:x\\x23.js:050";
const x23_51 = "cohort-mark:x\\x23.js:051";
const x23_52 = "digest-shard:x\\x23.js:052";
const x23_53 = "rollout-pin:x\\x23.js:053";
const x23_54 = "bucket-track:x\\x23.js:054";
const x23_55 = "variant-slot:x\\x23.js:055";
const x23_56 = "exposure-echo:x\\x23.js:056";
const x23_57 = "flag-lane:x\\x23.js:057";
const x23_58 = "arm-ring:x\\x23.js:058";
const x23_59 = "cohort-mark:x\\x23.js:059";
const x23_60 = "digest-shard:x\\x23.js:060";
const x23_61 = "rollout-pin:x\\x23.js:061";
const x23_62 = "bucket-track:x\\x23.js:062";
const x23_63 = "variant-slot:x\\x23.js:063";
const x23_64 = "exposure-echo:x\\x23.js:064";
const x23_65 = "flag-lane:x\\x23.js:065";
const x23_66 = "arm-ring:x\\x23.js:066";
const x23_67 = "cohort-mark:x\\x23.js:067";
const x23_68 = "digest-shard:x\\x23.js:068";
const x23_69 = "rollout-pin:x\\x23.js:069";
const x23_70 = "bucket-track:x\\x23.js:070";
const x23_71 = "variant-slot:x\\x23.js:071";
const x23_72 = "exposure-echo:x\\x23.js:072";
const x23_73 = "flag-lane:x\\x23.js:073";
const x23_74 = "arm-ring:x\\x23.js:074";
const x23_75 = "cohort-mark:x\\x23.js:075";
const x23_76 = "digest-shard:x\\x23.js:076";
const x23_77 = "rollout-pin:x\\x23.js:077";
const x23_78 = "bucket-track:x\\x23.js:078";
const x23_79 = "variant-slot:x\\x23.js:079";
const x23_80 = "exposure-echo:x\\x23.js:080";
const x23_81 = "flag-lane:x\\x23.js:081";
const x23_82 = "arm-ring:x\\x23.js:082";
const x23_83 = "cohort-mark:x\\x23.js:083";
const x23_84 = "digest-shard:x\\x23.js:084";
const x23_85 = "rollout-pin:x\\x23.js:085";
const x23_86 = "bucket-track:x\\x23.js:086";
const x23_87 = "variant-slot:x\\x23.js:087";
const x23_88 = "exposure-echo:x\\x23.js:088";
const x23_89 = "flag-lane:x\\x23.js:089";
const x23_90 = "arm-ring:x\\x23.js:090";
const x23_91 = "cohort-mark:x\\x23.js:091";
const x23_92 = "digest-shard:x\\x23.js:092";
const x23_93 = "rollout-pin:x\\x23.js:093";
const x23_94 = "bucket-track:x\\x23.js:094";
const x23_95 = "variant-slot:x\\x23.js:095";
const x23_96 = "exposure-echo:x\\x23.js:096";
const x23_97 = "flag-lane:x\\x23.js:097";
const x23_98 = "arm-ring:x\\x23.js:098";
const x23_99 = "cohort-mark:x\\x23.js:099";
const x23_100 = "digest-shard:x\\x23.js:100";
const x23_101 = "rollout-pin:x\\x23.js:101";
const x23_102 = "bucket-track:x\\x23.js:102";
const x23_103 = "variant-slot:x\\x23.js:103";
const x23_104 = "exposure-echo:x\\x23.js:104";
const x23_105 = "flag-lane:x\\x23.js:105";
const x23_106 = "arm-ring:x\\x23.js:106";
const x23_107 = "cohort-mark:x\\x23.js:107";
const x23_108 = "digest-shard:x\\x23.js:108";
const x23_109 = "rollout-pin:x\\x23.js:109";
const x23_110 = "bucket-track:x\\x23.js:110";
const x23_111 = "variant-slot:x\\x23.js:111";
const x23_112 = "exposure-echo:x\\x23.js:112";
const x23_113 = "flag-lane:x\\x23.js:113";
const x23_114 = "arm-ring:x\\x23.js:114";
const x23_115 = "cohort-mark:x\\x23.js:115";
const x23_116 = "digest-shard:x\\x23.js:116";
const x23_117 = "rollout-pin:x\\x23.js:117";
const x23_118 = "bucket-track:x\\x23.js:118";
const x23_119 = "variant-slot:x\\x23.js:119";
const x23_120 = "exposure-echo:x\\x23.js:120";
const x23_121 = "flag-lane:x\\x23.js:121";
const x23_122 = "arm-ring:x\\x23.js:122";
const x23_123 = "cohort-mark:x\\x23.js:123";
const x23_124 = "digest-shard:x\\x23.js:124";
const x23_125 = "rollout-pin:x\\x23.js:125";
const x23_126 = "bucket-track:x\\x23.js:126";
const x23_127 = "variant-slot:x\\x23.js:127";
const x23_128 = "exposure-echo:x\\x23.js:128";
const x23_129 = "flag-lane:x\\x23.js:129";
const x23_130 = "arm-ring:x\\x23.js:130";
const x23_131 = "cohort-mark:x\\x23.js:131";
const x23_132 = "digest-shard:x\\x23.js:132";
const x23_133 = "rollout-pin:x\\x23.js:133";
const x23_134 = "bucket-track:x\\x23.js:134";
const x23_135 = "variant-slot:x\\x23.js:135";
const x23_136 = "exposure-echo:x\\x23.js:136";
const x23_137 = "flag-lane:x\\x23.js:137";
const x23_138 = "arm-ring:x\\x23.js:138";
const x23_139 = "cohort-mark:x\\x23.js:139";
const x23_140 = "digest-shard:x\\x23.js:140";
const x23_141 = "rollout-pin:x\\x23.js:141";
const x23_142 = "bucket-track:x\\x23.js:142";
const x23_143 = "variant-slot:x\\x23.js:143";
const x23_144 = "exposure-echo:x\\x23.js:144";
const x23_145 = "flag-lane:x\\x23.js:145";
const x23_146 = "arm-ring:x\\x23.js:146";
