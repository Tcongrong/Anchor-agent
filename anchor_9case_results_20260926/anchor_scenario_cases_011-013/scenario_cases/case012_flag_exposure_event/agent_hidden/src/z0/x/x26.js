import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 26,
  salt: 'x:0q:expose',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 7,
  mask: 2950288942
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo26@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '5', y: '5', n: 1 },
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
const x26_0 = "exposure-echo:x\\x26.js:000";
const x26_1 = "flag-lane:x\\x26.js:001";
const x26_2 = "arm-ring:x\\x26.js:002";
const x26_3 = "cohort-mark:x\\x26.js:003";
const x26_4 = "digest-shard:x\\x26.js:004";
const x26_5 = "rollout-pin:x\\x26.js:005";
const x26_6 = "bucket-track:x\\x26.js:006";
const x26_7 = "variant-slot:x\\x26.js:007";
const x26_8 = "exposure-echo:x\\x26.js:008";
const x26_9 = "flag-lane:x\\x26.js:009";
const x26_10 = "arm-ring:x\\x26.js:010";
const x26_11 = "cohort-mark:x\\x26.js:011";
const x26_12 = "digest-shard:x\\x26.js:012";
const x26_13 = "rollout-pin:x\\x26.js:013";
const x26_14 = "bucket-track:x\\x26.js:014";
const x26_15 = "variant-slot:x\\x26.js:015";
const x26_16 = "exposure-echo:x\\x26.js:016";
const x26_17 = "flag-lane:x\\x26.js:017";
const x26_18 = "arm-ring:x\\x26.js:018";
const x26_19 = "cohort-mark:x\\x26.js:019";
const x26_20 = "digest-shard:x\\x26.js:020";
const x26_21 = "rollout-pin:x\\x26.js:021";
const x26_22 = "bucket-track:x\\x26.js:022";
const x26_23 = "variant-slot:x\\x26.js:023";
const x26_24 = "exposure-echo:x\\x26.js:024";
const x26_25 = "flag-lane:x\\x26.js:025";
const x26_26 = "arm-ring:x\\x26.js:026";
const x26_27 = "cohort-mark:x\\x26.js:027";
const x26_28 = "digest-shard:x\\x26.js:028";
const x26_29 = "rollout-pin:x\\x26.js:029";
const x26_30 = "bucket-track:x\\x26.js:030";
const x26_31 = "variant-slot:x\\x26.js:031";
const x26_32 = "exposure-echo:x\\x26.js:032";
const x26_33 = "flag-lane:x\\x26.js:033";
const x26_34 = "arm-ring:x\\x26.js:034";
const x26_35 = "cohort-mark:x\\x26.js:035";
const x26_36 = "digest-shard:x\\x26.js:036";
const x26_37 = "rollout-pin:x\\x26.js:037";
const x26_38 = "bucket-track:x\\x26.js:038";
const x26_39 = "variant-slot:x\\x26.js:039";
const x26_40 = "exposure-echo:x\\x26.js:040";
const x26_41 = "flag-lane:x\\x26.js:041";
const x26_42 = "arm-ring:x\\x26.js:042";
const x26_43 = "cohort-mark:x\\x26.js:043";
const x26_44 = "digest-shard:x\\x26.js:044";
const x26_45 = "rollout-pin:x\\x26.js:045";
const x26_46 = "bucket-track:x\\x26.js:046";
const x26_47 = "variant-slot:x\\x26.js:047";
const x26_48 = "exposure-echo:x\\x26.js:048";
const x26_49 = "flag-lane:x\\x26.js:049";
const x26_50 = "arm-ring:x\\x26.js:050";
const x26_51 = "cohort-mark:x\\x26.js:051";
const x26_52 = "digest-shard:x\\x26.js:052";
const x26_53 = "rollout-pin:x\\x26.js:053";
const x26_54 = "bucket-track:x\\x26.js:054";
const x26_55 = "variant-slot:x\\x26.js:055";
const x26_56 = "exposure-echo:x\\x26.js:056";
const x26_57 = "flag-lane:x\\x26.js:057";
const x26_58 = "arm-ring:x\\x26.js:058";
const x26_59 = "cohort-mark:x\\x26.js:059";
const x26_60 = "digest-shard:x\\x26.js:060";
const x26_61 = "rollout-pin:x\\x26.js:061";
const x26_62 = "bucket-track:x\\x26.js:062";
const x26_63 = "variant-slot:x\\x26.js:063";
const x26_64 = "exposure-echo:x\\x26.js:064";
const x26_65 = "flag-lane:x\\x26.js:065";
const x26_66 = "arm-ring:x\\x26.js:066";
const x26_67 = "cohort-mark:x\\x26.js:067";
const x26_68 = "digest-shard:x\\x26.js:068";
const x26_69 = "rollout-pin:x\\x26.js:069";
const x26_70 = "bucket-track:x\\x26.js:070";
const x26_71 = "variant-slot:x\\x26.js:071";
const x26_72 = "exposure-echo:x\\x26.js:072";
const x26_73 = "flag-lane:x\\x26.js:073";
const x26_74 = "arm-ring:x\\x26.js:074";
const x26_75 = "cohort-mark:x\\x26.js:075";
const x26_76 = "digest-shard:x\\x26.js:076";
const x26_77 = "rollout-pin:x\\x26.js:077";
const x26_78 = "bucket-track:x\\x26.js:078";
const x26_79 = "variant-slot:x\\x26.js:079";
const x26_80 = "exposure-echo:x\\x26.js:080";
const x26_81 = "flag-lane:x\\x26.js:081";
const x26_82 = "arm-ring:x\\x26.js:082";
const x26_83 = "cohort-mark:x\\x26.js:083";
const x26_84 = "digest-shard:x\\x26.js:084";
const x26_85 = "rollout-pin:x\\x26.js:085";
const x26_86 = "bucket-track:x\\x26.js:086";
const x26_87 = "variant-slot:x\\x26.js:087";
const x26_88 = "exposure-echo:x\\x26.js:088";
const x26_89 = "flag-lane:x\\x26.js:089";
const x26_90 = "arm-ring:x\\x26.js:090";
const x26_91 = "cohort-mark:x\\x26.js:091";
const x26_92 = "digest-shard:x\\x26.js:092";
const x26_93 = "rollout-pin:x\\x26.js:093";
const x26_94 = "bucket-track:x\\x26.js:094";
const x26_95 = "variant-slot:x\\x26.js:095";
const x26_96 = "exposure-echo:x\\x26.js:096";
const x26_97 = "flag-lane:x\\x26.js:097";
const x26_98 = "arm-ring:x\\x26.js:098";
const x26_99 = "cohort-mark:x\\x26.js:099";
const x26_100 = "digest-shard:x\\x26.js:100";
const x26_101 = "rollout-pin:x\\x26.js:101";
const x26_102 = "bucket-track:x\\x26.js:102";
const x26_103 = "variant-slot:x\\x26.js:103";
const x26_104 = "exposure-echo:x\\x26.js:104";
const x26_105 = "flag-lane:x\\x26.js:105";
const x26_106 = "arm-ring:x\\x26.js:106";
const x26_107 = "cohort-mark:x\\x26.js:107";
const x26_108 = "digest-shard:x\\x26.js:108";
const x26_109 = "rollout-pin:x\\x26.js:109";
const x26_110 = "bucket-track:x\\x26.js:110";
const x26_111 = "variant-slot:x\\x26.js:111";
const x26_112 = "exposure-echo:x\\x26.js:112";
const x26_113 = "flag-lane:x\\x26.js:113";
const x26_114 = "arm-ring:x\\x26.js:114";
const x26_115 = "cohort-mark:x\\x26.js:115";
const x26_116 = "digest-shard:x\\x26.js:116";
const x26_117 = "rollout-pin:x\\x26.js:117";
const x26_118 = "bucket-track:x\\x26.js:118";
const x26_119 = "variant-slot:x\\x26.js:119";
const x26_120 = "exposure-echo:x\\x26.js:120";
const x26_121 = "flag-lane:x\\x26.js:121";
const x26_122 = "arm-ring:x\\x26.js:122";
const x26_123 = "cohort-mark:x\\x26.js:123";
const x26_124 = "digest-shard:x\\x26.js:124";
const x26_125 = "rollout-pin:x\\x26.js:125";
const x26_126 = "bucket-track:x\\x26.js:126";
const x26_127 = "variant-slot:x\\x26.js:127";
const x26_128 = "exposure-echo:x\\x26.js:128";
const x26_129 = "flag-lane:x\\x26.js:129";
const x26_130 = "arm-ring:x\\x26.js:130";
const x26_131 = "cohort-mark:x\\x26.js:131";
const x26_132 = "digest-shard:x\\x26.js:132";
const x26_133 = "rollout-pin:x\\x26.js:133";
const x26_134 = "bucket-track:x\\x26.js:134";
const x26_135 = "variant-slot:x\\x26.js:135";
const x26_136 = "exposure-echo:x\\x26.js:136";
const x26_137 = "flag-lane:x\\x26.js:137";
const x26_138 = "arm-ring:x\\x26.js:138";
const x26_139 = "cohort-mark:x\\x26.js:139";
const x26_140 = "digest-shard:x\\x26.js:140";
const x26_141 = "rollout-pin:x\\x26.js:141";
const x26_142 = "bucket-track:x\\x26.js:142";
const x26_143 = "variant-slot:x\\x26.js:143";
const x26_144 = "exposure-echo:x\\x26.js:144";
const x26_145 = "flag-lane:x\\x26.js:145";
const x26_146 = "arm-ring:x\\x26.js:146";
