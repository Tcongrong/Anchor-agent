import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 32,
  salt: 'x:0w:expose',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2060',
  shift: 13,
  mask: 1697034324
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo32@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '4', y: '4', n: 1 },
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
const x32_0 = "exposure-echo:x\\x32.js:000";
const x32_1 = "flag-lane:x\\x32.js:001";
const x32_2 = "arm-ring:x\\x32.js:002";
const x32_3 = "cohort-mark:x\\x32.js:003";
const x32_4 = "digest-shard:x\\x32.js:004";
const x32_5 = "rollout-pin:x\\x32.js:005";
const x32_6 = "bucket-track:x\\x32.js:006";
const x32_7 = "variant-slot:x\\x32.js:007";
const x32_8 = "exposure-echo:x\\x32.js:008";
const x32_9 = "flag-lane:x\\x32.js:009";
const x32_10 = "arm-ring:x\\x32.js:010";
const x32_11 = "cohort-mark:x\\x32.js:011";
const x32_12 = "digest-shard:x\\x32.js:012";
const x32_13 = "rollout-pin:x\\x32.js:013";
const x32_14 = "bucket-track:x\\x32.js:014";
const x32_15 = "variant-slot:x\\x32.js:015";
const x32_16 = "exposure-echo:x\\x32.js:016";
const x32_17 = "flag-lane:x\\x32.js:017";
const x32_18 = "arm-ring:x\\x32.js:018";
const x32_19 = "cohort-mark:x\\x32.js:019";
const x32_20 = "digest-shard:x\\x32.js:020";
const x32_21 = "rollout-pin:x\\x32.js:021";
const x32_22 = "bucket-track:x\\x32.js:022";
const x32_23 = "variant-slot:x\\x32.js:023";
const x32_24 = "exposure-echo:x\\x32.js:024";
const x32_25 = "flag-lane:x\\x32.js:025";
const x32_26 = "arm-ring:x\\x32.js:026";
const x32_27 = "cohort-mark:x\\x32.js:027";
const x32_28 = "digest-shard:x\\x32.js:028";
const x32_29 = "rollout-pin:x\\x32.js:029";
const x32_30 = "bucket-track:x\\x32.js:030";
const x32_31 = "variant-slot:x\\x32.js:031";
const x32_32 = "exposure-echo:x\\x32.js:032";
const x32_33 = "flag-lane:x\\x32.js:033";
const x32_34 = "arm-ring:x\\x32.js:034";
const x32_35 = "cohort-mark:x\\x32.js:035";
const x32_36 = "digest-shard:x\\x32.js:036";
const x32_37 = "rollout-pin:x\\x32.js:037";
const x32_38 = "bucket-track:x\\x32.js:038";
const x32_39 = "variant-slot:x\\x32.js:039";
const x32_40 = "exposure-echo:x\\x32.js:040";
const x32_41 = "flag-lane:x\\x32.js:041";
const x32_42 = "arm-ring:x\\x32.js:042";
const x32_43 = "cohort-mark:x\\x32.js:043";
const x32_44 = "digest-shard:x\\x32.js:044";
const x32_45 = "rollout-pin:x\\x32.js:045";
const x32_46 = "bucket-track:x\\x32.js:046";
const x32_47 = "variant-slot:x\\x32.js:047";
const x32_48 = "exposure-echo:x\\x32.js:048";
const x32_49 = "flag-lane:x\\x32.js:049";
const x32_50 = "arm-ring:x\\x32.js:050";
const x32_51 = "cohort-mark:x\\x32.js:051";
const x32_52 = "digest-shard:x\\x32.js:052";
const x32_53 = "rollout-pin:x\\x32.js:053";
const x32_54 = "bucket-track:x\\x32.js:054";
const x32_55 = "variant-slot:x\\x32.js:055";
const x32_56 = "exposure-echo:x\\x32.js:056";
const x32_57 = "flag-lane:x\\x32.js:057";
const x32_58 = "arm-ring:x\\x32.js:058";
const x32_59 = "cohort-mark:x\\x32.js:059";
const x32_60 = "digest-shard:x\\x32.js:060";
const x32_61 = "rollout-pin:x\\x32.js:061";
const x32_62 = "bucket-track:x\\x32.js:062";
const x32_63 = "variant-slot:x\\x32.js:063";
const x32_64 = "exposure-echo:x\\x32.js:064";
const x32_65 = "flag-lane:x\\x32.js:065";
const x32_66 = "arm-ring:x\\x32.js:066";
const x32_67 = "cohort-mark:x\\x32.js:067";
const x32_68 = "digest-shard:x\\x32.js:068";
const x32_69 = "rollout-pin:x\\x32.js:069";
const x32_70 = "bucket-track:x\\x32.js:070";
const x32_71 = "variant-slot:x\\x32.js:071";
const x32_72 = "exposure-echo:x\\x32.js:072";
const x32_73 = "flag-lane:x\\x32.js:073";
const x32_74 = "arm-ring:x\\x32.js:074";
const x32_75 = "cohort-mark:x\\x32.js:075";
const x32_76 = "digest-shard:x\\x32.js:076";
const x32_77 = "rollout-pin:x\\x32.js:077";
const x32_78 = "bucket-track:x\\x32.js:078";
const x32_79 = "variant-slot:x\\x32.js:079";
const x32_80 = "exposure-echo:x\\x32.js:080";
const x32_81 = "flag-lane:x\\x32.js:081";
const x32_82 = "arm-ring:x\\x32.js:082";
const x32_83 = "cohort-mark:x\\x32.js:083";
const x32_84 = "digest-shard:x\\x32.js:084";
const x32_85 = "rollout-pin:x\\x32.js:085";
const x32_86 = "bucket-track:x\\x32.js:086";
const x32_87 = "variant-slot:x\\x32.js:087";
const x32_88 = "exposure-echo:x\\x32.js:088";
const x32_89 = "flag-lane:x\\x32.js:089";
const x32_90 = "arm-ring:x\\x32.js:090";
const x32_91 = "cohort-mark:x\\x32.js:091";
const x32_92 = "digest-shard:x\\x32.js:092";
const x32_93 = "rollout-pin:x\\x32.js:093";
const x32_94 = "bucket-track:x\\x32.js:094";
const x32_95 = "variant-slot:x\\x32.js:095";
const x32_96 = "exposure-echo:x\\x32.js:096";
const x32_97 = "flag-lane:x\\x32.js:097";
const x32_98 = "arm-ring:x\\x32.js:098";
const x32_99 = "cohort-mark:x\\x32.js:099";
const x32_100 = "digest-shard:x\\x32.js:100";
const x32_101 = "rollout-pin:x\\x32.js:101";
const x32_102 = "bucket-track:x\\x32.js:102";
const x32_103 = "variant-slot:x\\x32.js:103";
const x32_104 = "exposure-echo:x\\x32.js:104";
const x32_105 = "flag-lane:x\\x32.js:105";
const x32_106 = "arm-ring:x\\x32.js:106";
const x32_107 = "cohort-mark:x\\x32.js:107";
const x32_108 = "digest-shard:x\\x32.js:108";
const x32_109 = "rollout-pin:x\\x32.js:109";
const x32_110 = "bucket-track:x\\x32.js:110";
const x32_111 = "variant-slot:x\\x32.js:111";
const x32_112 = "exposure-echo:x\\x32.js:112";
const x32_113 = "flag-lane:x\\x32.js:113";
const x32_114 = "arm-ring:x\\x32.js:114";
const x32_115 = "cohort-mark:x\\x32.js:115";
const x32_116 = "digest-shard:x\\x32.js:116";
const x32_117 = "rollout-pin:x\\x32.js:117";
const x32_118 = "bucket-track:x\\x32.js:118";
const x32_119 = "variant-slot:x\\x32.js:119";
const x32_120 = "exposure-echo:x\\x32.js:120";
const x32_121 = "flag-lane:x\\x32.js:121";
const x32_122 = "arm-ring:x\\x32.js:122";
const x32_123 = "cohort-mark:x\\x32.js:123";
const x32_124 = "digest-shard:x\\x32.js:124";
const x32_125 = "rollout-pin:x\\x32.js:125";
const x32_126 = "bucket-track:x\\x32.js:126";
const x32_127 = "variant-slot:x\\x32.js:127";
const x32_128 = "exposure-echo:x\\x32.js:128";
const x32_129 = "flag-lane:x\\x32.js:129";
const x32_130 = "arm-ring:x\\x32.js:130";
const x32_131 = "cohort-mark:x\\x32.js:131";
const x32_132 = "digest-shard:x\\x32.js:132";
const x32_133 = "rollout-pin:x\\x32.js:133";
const x32_134 = "bucket-track:x\\x32.js:134";
const x32_135 = "variant-slot:x\\x32.js:135";
const x32_136 = "exposure-echo:x\\x32.js:136";
const x32_137 = "flag-lane:x\\x32.js:137";
const x32_138 = "arm-ring:x\\x32.js:138";
const x32_139 = "cohort-mark:x\\x32.js:139";
const x32_140 = "digest-shard:x\\x32.js:140";
const x32_141 = "rollout-pin:x\\x32.js:141";
const x32_142 = "bucket-track:x\\x32.js:142";
const x32_143 = "variant-slot:x\\x32.js:143";
const x32_144 = "exposure-echo:x\\x32.js:144";
const x32_145 = "flag-lane:x\\x32.js:145";
const x32_146 = "arm-ring:x\\x32.js:146";
