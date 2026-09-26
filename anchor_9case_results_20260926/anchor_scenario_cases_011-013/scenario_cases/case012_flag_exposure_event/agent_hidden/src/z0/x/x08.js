import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 8,
  salt: 'x:08:expose',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2060',
  shift: 11,
  mask: 2415085500
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo8@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '1', y: '1', n: 1 },
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
const x08_0 = "exposure-echo:x\\x08.js:000";
const x08_1 = "flag-lane:x\\x08.js:001";
const x08_2 = "arm-ring:x\\x08.js:002";
const x08_3 = "cohort-mark:x\\x08.js:003";
const x08_4 = "digest-shard:x\\x08.js:004";
const x08_5 = "rollout-pin:x\\x08.js:005";
const x08_6 = "bucket-track:x\\x08.js:006";
const x08_7 = "variant-slot:x\\x08.js:007";
const x08_8 = "exposure-echo:x\\x08.js:008";
const x08_9 = "flag-lane:x\\x08.js:009";
const x08_10 = "arm-ring:x\\x08.js:010";
const x08_11 = "cohort-mark:x\\x08.js:011";
const x08_12 = "digest-shard:x\\x08.js:012";
const x08_13 = "rollout-pin:x\\x08.js:013";
const x08_14 = "bucket-track:x\\x08.js:014";
const x08_15 = "variant-slot:x\\x08.js:015";
const x08_16 = "exposure-echo:x\\x08.js:016";
const x08_17 = "flag-lane:x\\x08.js:017";
const x08_18 = "arm-ring:x\\x08.js:018";
const x08_19 = "cohort-mark:x\\x08.js:019";
const x08_20 = "digest-shard:x\\x08.js:020";
const x08_21 = "rollout-pin:x\\x08.js:021";
const x08_22 = "bucket-track:x\\x08.js:022";
const x08_23 = "variant-slot:x\\x08.js:023";
const x08_24 = "exposure-echo:x\\x08.js:024";
const x08_25 = "flag-lane:x\\x08.js:025";
const x08_26 = "arm-ring:x\\x08.js:026";
const x08_27 = "cohort-mark:x\\x08.js:027";
const x08_28 = "digest-shard:x\\x08.js:028";
const x08_29 = "rollout-pin:x\\x08.js:029";
const x08_30 = "bucket-track:x\\x08.js:030";
const x08_31 = "variant-slot:x\\x08.js:031";
const x08_32 = "exposure-echo:x\\x08.js:032";
const x08_33 = "flag-lane:x\\x08.js:033";
const x08_34 = "arm-ring:x\\x08.js:034";
const x08_35 = "cohort-mark:x\\x08.js:035";
const x08_36 = "digest-shard:x\\x08.js:036";
const x08_37 = "rollout-pin:x\\x08.js:037";
const x08_38 = "bucket-track:x\\x08.js:038";
const x08_39 = "variant-slot:x\\x08.js:039";
const x08_40 = "exposure-echo:x\\x08.js:040";
const x08_41 = "flag-lane:x\\x08.js:041";
const x08_42 = "arm-ring:x\\x08.js:042";
const x08_43 = "cohort-mark:x\\x08.js:043";
const x08_44 = "digest-shard:x\\x08.js:044";
const x08_45 = "rollout-pin:x\\x08.js:045";
const x08_46 = "bucket-track:x\\x08.js:046";
const x08_47 = "variant-slot:x\\x08.js:047";
const x08_48 = "exposure-echo:x\\x08.js:048";
const x08_49 = "flag-lane:x\\x08.js:049";
const x08_50 = "arm-ring:x\\x08.js:050";
const x08_51 = "cohort-mark:x\\x08.js:051";
const x08_52 = "digest-shard:x\\x08.js:052";
const x08_53 = "rollout-pin:x\\x08.js:053";
const x08_54 = "bucket-track:x\\x08.js:054";
const x08_55 = "variant-slot:x\\x08.js:055";
const x08_56 = "exposure-echo:x\\x08.js:056";
const x08_57 = "flag-lane:x\\x08.js:057";
const x08_58 = "arm-ring:x\\x08.js:058";
const x08_59 = "cohort-mark:x\\x08.js:059";
const x08_60 = "digest-shard:x\\x08.js:060";
const x08_61 = "rollout-pin:x\\x08.js:061";
const x08_62 = "bucket-track:x\\x08.js:062";
const x08_63 = "variant-slot:x\\x08.js:063";
const x08_64 = "exposure-echo:x\\x08.js:064";
const x08_65 = "flag-lane:x\\x08.js:065";
const x08_66 = "arm-ring:x\\x08.js:066";
const x08_67 = "cohort-mark:x\\x08.js:067";
const x08_68 = "digest-shard:x\\x08.js:068";
const x08_69 = "rollout-pin:x\\x08.js:069";
const x08_70 = "bucket-track:x\\x08.js:070";
const x08_71 = "variant-slot:x\\x08.js:071";
const x08_72 = "exposure-echo:x\\x08.js:072";
const x08_73 = "flag-lane:x\\x08.js:073";
const x08_74 = "arm-ring:x\\x08.js:074";
const x08_75 = "cohort-mark:x\\x08.js:075";
const x08_76 = "digest-shard:x\\x08.js:076";
const x08_77 = "rollout-pin:x\\x08.js:077";
const x08_78 = "bucket-track:x\\x08.js:078";
const x08_79 = "variant-slot:x\\x08.js:079";
const x08_80 = "exposure-echo:x\\x08.js:080";
const x08_81 = "flag-lane:x\\x08.js:081";
const x08_82 = "arm-ring:x\\x08.js:082";
const x08_83 = "cohort-mark:x\\x08.js:083";
const x08_84 = "digest-shard:x\\x08.js:084";
const x08_85 = "rollout-pin:x\\x08.js:085";
const x08_86 = "bucket-track:x\\x08.js:086";
const x08_87 = "variant-slot:x\\x08.js:087";
const x08_88 = "exposure-echo:x\\x08.js:088";
const x08_89 = "flag-lane:x\\x08.js:089";
const x08_90 = "arm-ring:x\\x08.js:090";
const x08_91 = "cohort-mark:x\\x08.js:091";
const x08_92 = "digest-shard:x\\x08.js:092";
const x08_93 = "rollout-pin:x\\x08.js:093";
const x08_94 = "bucket-track:x\\x08.js:094";
const x08_95 = "variant-slot:x\\x08.js:095";
const x08_96 = "exposure-echo:x\\x08.js:096";
const x08_97 = "flag-lane:x\\x08.js:097";
const x08_98 = "arm-ring:x\\x08.js:098";
const x08_99 = "cohort-mark:x\\x08.js:099";
const x08_100 = "digest-shard:x\\x08.js:100";
const x08_101 = "rollout-pin:x\\x08.js:101";
const x08_102 = "bucket-track:x\\x08.js:102";
const x08_103 = "variant-slot:x\\x08.js:103";
const x08_104 = "exposure-echo:x\\x08.js:104";
const x08_105 = "flag-lane:x\\x08.js:105";
const x08_106 = "arm-ring:x\\x08.js:106";
const x08_107 = "cohort-mark:x\\x08.js:107";
const x08_108 = "digest-shard:x\\x08.js:108";
const x08_109 = "rollout-pin:x\\x08.js:109";
const x08_110 = "bucket-track:x\\x08.js:110";
const x08_111 = "variant-slot:x\\x08.js:111";
const x08_112 = "exposure-echo:x\\x08.js:112";
const x08_113 = "flag-lane:x\\x08.js:113";
const x08_114 = "arm-ring:x\\x08.js:114";
const x08_115 = "cohort-mark:x\\x08.js:115";
const x08_116 = "digest-shard:x\\x08.js:116";
const x08_117 = "rollout-pin:x\\x08.js:117";
const x08_118 = "bucket-track:x\\x08.js:118";
const x08_119 = "variant-slot:x\\x08.js:119";
const x08_120 = "exposure-echo:x\\x08.js:120";
const x08_121 = "flag-lane:x\\x08.js:121";
const x08_122 = "arm-ring:x\\x08.js:122";
const x08_123 = "cohort-mark:x\\x08.js:123";
const x08_124 = "digest-shard:x\\x08.js:124";
const x08_125 = "rollout-pin:x\\x08.js:125";
const x08_126 = "bucket-track:x\\x08.js:126";
const x08_127 = "variant-slot:x\\x08.js:127";
const x08_128 = "exposure-echo:x\\x08.js:128";
const x08_129 = "flag-lane:x\\x08.js:129";
const x08_130 = "arm-ring:x\\x08.js:130";
const x08_131 = "cohort-mark:x\\x08.js:131";
const x08_132 = "digest-shard:x\\x08.js:132";
const x08_133 = "rollout-pin:x\\x08.js:133";
const x08_134 = "bucket-track:x\\x08.js:134";
const x08_135 = "variant-slot:x\\x08.js:135";
const x08_136 = "exposure-echo:x\\x08.js:136";
const x08_137 = "flag-lane:x\\x08.js:137";
const x08_138 = "arm-ring:x\\x08.js:138";
const x08_139 = "cohort-mark:x\\x08.js:139";
const x08_140 = "digest-shard:x\\x08.js:140";
const x08_141 = "rollout-pin:x\\x08.js:141";
const x08_142 = "bucket-track:x\\x08.js:142";
const x08_143 = "variant-slot:x\\x08.js:143";
const x08_144 = "exposure-echo:x\\x08.js:144";
const x08_145 = "flag-lane:x\\x08.js:145";
const x08_146 = "arm-ring:x\\x08.js:146";
