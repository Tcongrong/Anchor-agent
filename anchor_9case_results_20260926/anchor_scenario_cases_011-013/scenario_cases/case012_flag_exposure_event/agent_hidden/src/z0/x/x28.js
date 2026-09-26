import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 28,
  salt: 'x:0s:expose',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 9,
  mask: 3964193168
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo28@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '0', y: '0', n: 1 },
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
const x28_0 = "exposure-echo:x\\x28.js:000";
const x28_1 = "flag-lane:x\\x28.js:001";
const x28_2 = "arm-ring:x\\x28.js:002";
const x28_3 = "cohort-mark:x\\x28.js:003";
const x28_4 = "digest-shard:x\\x28.js:004";
const x28_5 = "rollout-pin:x\\x28.js:005";
const x28_6 = "bucket-track:x\\x28.js:006";
const x28_7 = "variant-slot:x\\x28.js:007";
const x28_8 = "exposure-echo:x\\x28.js:008";
const x28_9 = "flag-lane:x\\x28.js:009";
const x28_10 = "arm-ring:x\\x28.js:010";
const x28_11 = "cohort-mark:x\\x28.js:011";
const x28_12 = "digest-shard:x\\x28.js:012";
const x28_13 = "rollout-pin:x\\x28.js:013";
const x28_14 = "bucket-track:x\\x28.js:014";
const x28_15 = "variant-slot:x\\x28.js:015";
const x28_16 = "exposure-echo:x\\x28.js:016";
const x28_17 = "flag-lane:x\\x28.js:017";
const x28_18 = "arm-ring:x\\x28.js:018";
const x28_19 = "cohort-mark:x\\x28.js:019";
const x28_20 = "digest-shard:x\\x28.js:020";
const x28_21 = "rollout-pin:x\\x28.js:021";
const x28_22 = "bucket-track:x\\x28.js:022";
const x28_23 = "variant-slot:x\\x28.js:023";
const x28_24 = "exposure-echo:x\\x28.js:024";
const x28_25 = "flag-lane:x\\x28.js:025";
const x28_26 = "arm-ring:x\\x28.js:026";
const x28_27 = "cohort-mark:x\\x28.js:027";
const x28_28 = "digest-shard:x\\x28.js:028";
const x28_29 = "rollout-pin:x\\x28.js:029";
const x28_30 = "bucket-track:x\\x28.js:030";
const x28_31 = "variant-slot:x\\x28.js:031";
const x28_32 = "exposure-echo:x\\x28.js:032";
const x28_33 = "flag-lane:x\\x28.js:033";
const x28_34 = "arm-ring:x\\x28.js:034";
const x28_35 = "cohort-mark:x\\x28.js:035";
const x28_36 = "digest-shard:x\\x28.js:036";
const x28_37 = "rollout-pin:x\\x28.js:037";
const x28_38 = "bucket-track:x\\x28.js:038";
const x28_39 = "variant-slot:x\\x28.js:039";
const x28_40 = "exposure-echo:x\\x28.js:040";
const x28_41 = "flag-lane:x\\x28.js:041";
const x28_42 = "arm-ring:x\\x28.js:042";
const x28_43 = "cohort-mark:x\\x28.js:043";
const x28_44 = "digest-shard:x\\x28.js:044";
const x28_45 = "rollout-pin:x\\x28.js:045";
const x28_46 = "bucket-track:x\\x28.js:046";
const x28_47 = "variant-slot:x\\x28.js:047";
const x28_48 = "exposure-echo:x\\x28.js:048";
const x28_49 = "flag-lane:x\\x28.js:049";
const x28_50 = "arm-ring:x\\x28.js:050";
const x28_51 = "cohort-mark:x\\x28.js:051";
const x28_52 = "digest-shard:x\\x28.js:052";
const x28_53 = "rollout-pin:x\\x28.js:053";
const x28_54 = "bucket-track:x\\x28.js:054";
const x28_55 = "variant-slot:x\\x28.js:055";
const x28_56 = "exposure-echo:x\\x28.js:056";
const x28_57 = "flag-lane:x\\x28.js:057";
const x28_58 = "arm-ring:x\\x28.js:058";
const x28_59 = "cohort-mark:x\\x28.js:059";
const x28_60 = "digest-shard:x\\x28.js:060";
const x28_61 = "rollout-pin:x\\x28.js:061";
const x28_62 = "bucket-track:x\\x28.js:062";
const x28_63 = "variant-slot:x\\x28.js:063";
const x28_64 = "exposure-echo:x\\x28.js:064";
const x28_65 = "flag-lane:x\\x28.js:065";
const x28_66 = "arm-ring:x\\x28.js:066";
const x28_67 = "cohort-mark:x\\x28.js:067";
const x28_68 = "digest-shard:x\\x28.js:068";
const x28_69 = "rollout-pin:x\\x28.js:069";
const x28_70 = "bucket-track:x\\x28.js:070";
const x28_71 = "variant-slot:x\\x28.js:071";
const x28_72 = "exposure-echo:x\\x28.js:072";
const x28_73 = "flag-lane:x\\x28.js:073";
const x28_74 = "arm-ring:x\\x28.js:074";
const x28_75 = "cohort-mark:x\\x28.js:075";
const x28_76 = "digest-shard:x\\x28.js:076";
const x28_77 = "rollout-pin:x\\x28.js:077";
const x28_78 = "bucket-track:x\\x28.js:078";
const x28_79 = "variant-slot:x\\x28.js:079";
const x28_80 = "exposure-echo:x\\x28.js:080";
const x28_81 = "flag-lane:x\\x28.js:081";
const x28_82 = "arm-ring:x\\x28.js:082";
const x28_83 = "cohort-mark:x\\x28.js:083";
const x28_84 = "digest-shard:x\\x28.js:084";
const x28_85 = "rollout-pin:x\\x28.js:085";
const x28_86 = "bucket-track:x\\x28.js:086";
const x28_87 = "variant-slot:x\\x28.js:087";
const x28_88 = "exposure-echo:x\\x28.js:088";
const x28_89 = "flag-lane:x\\x28.js:089";
const x28_90 = "arm-ring:x\\x28.js:090";
const x28_91 = "cohort-mark:x\\x28.js:091";
const x28_92 = "digest-shard:x\\x28.js:092";
const x28_93 = "rollout-pin:x\\x28.js:093";
const x28_94 = "bucket-track:x\\x28.js:094";
const x28_95 = "variant-slot:x\\x28.js:095";
const x28_96 = "exposure-echo:x\\x28.js:096";
const x28_97 = "flag-lane:x\\x28.js:097";
const x28_98 = "arm-ring:x\\x28.js:098";
const x28_99 = "cohort-mark:x\\x28.js:099";
const x28_100 = "digest-shard:x\\x28.js:100";
const x28_101 = "rollout-pin:x\\x28.js:101";
const x28_102 = "bucket-track:x\\x28.js:102";
const x28_103 = "variant-slot:x\\x28.js:103";
const x28_104 = "exposure-echo:x\\x28.js:104";
const x28_105 = "flag-lane:x\\x28.js:105";
const x28_106 = "arm-ring:x\\x28.js:106";
const x28_107 = "cohort-mark:x\\x28.js:107";
const x28_108 = "digest-shard:x\\x28.js:108";
const x28_109 = "rollout-pin:x\\x28.js:109";
const x28_110 = "bucket-track:x\\x28.js:110";
const x28_111 = "variant-slot:x\\x28.js:111";
const x28_112 = "exposure-echo:x\\x28.js:112";
const x28_113 = "flag-lane:x\\x28.js:113";
const x28_114 = "arm-ring:x\\x28.js:114";
const x28_115 = "cohort-mark:x\\x28.js:115";
const x28_116 = "digest-shard:x\\x28.js:116";
const x28_117 = "rollout-pin:x\\x28.js:117";
const x28_118 = "bucket-track:x\\x28.js:118";
const x28_119 = "variant-slot:x\\x28.js:119";
const x28_120 = "exposure-echo:x\\x28.js:120";
const x28_121 = "flag-lane:x\\x28.js:121";
const x28_122 = "arm-ring:x\\x28.js:122";
const x28_123 = "cohort-mark:x\\x28.js:123";
const x28_124 = "digest-shard:x\\x28.js:124";
const x28_125 = "rollout-pin:x\\x28.js:125";
const x28_126 = "bucket-track:x\\x28.js:126";
const x28_127 = "variant-slot:x\\x28.js:127";
const x28_128 = "exposure-echo:x\\x28.js:128";
const x28_129 = "flag-lane:x\\x28.js:129";
const x28_130 = "arm-ring:x\\x28.js:130";
const x28_131 = "cohort-mark:x\\x28.js:131";
const x28_132 = "digest-shard:x\\x28.js:132";
const x28_133 = "rollout-pin:x\\x28.js:133";
const x28_134 = "bucket-track:x\\x28.js:134";
const x28_135 = "variant-slot:x\\x28.js:135";
const x28_136 = "exposure-echo:x\\x28.js:136";
const x28_137 = "flag-lane:x\\x28.js:137";
const x28_138 = "arm-ring:x\\x28.js:138";
const x28_139 = "cohort-mark:x\\x28.js:139";
const x28_140 = "digest-shard:x\\x28.js:140";
const x28_141 = "rollout-pin:x\\x28.js:141";
const x28_142 = "bucket-track:x\\x28.js:142";
const x28_143 = "variant-slot:x\\x28.js:143";
const x28_144 = "exposure-echo:x\\x28.js:144";
const x28_145 = "flag-lane:x\\x28.js:145";
const x28_146 = "arm-ring:x\\x28.js:146";
