import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 31,
  salt: 's:0v:store',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2063',
  shift: 7,
  mask: 56502789
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault31@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '333333', y: '333333', n: 6 },
    { k: 'c', i: 2, v: '3', y: '3', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(2, 10) + '~' + (cfg.slot + 2).toString(36) + (0).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x31_0 = "arm-slot:x\\x31.js:000";
const x31_1 = "rollout-ledger:x\\x31.js:001";
const x31_2 = "cohort-ring:x\\x31.js:002";
const x31_3 = "exposure-log:x\\x31.js:003";
const x31_4 = "sticky-bit:x\\x31.js:004";
const x31_5 = "salt-shard:x\\x31.js:005";
const x31_6 = "bucket-cell:x\\x31.js:006";
const x31_7 = "variant-track:x\\x31.js:007";
const x31_8 = "arm-slot:x\\x31.js:008";
const x31_9 = "rollout-ledger:x\\x31.js:009";
const x31_10 = "cohort-ring:x\\x31.js:010";
const x31_11 = "exposure-log:x\\x31.js:011";
const x31_12 = "sticky-bit:x\\x31.js:012";
const x31_13 = "salt-shard:x\\x31.js:013";
const x31_14 = "bucket-cell:x\\x31.js:014";
const x31_15 = "variant-track:x\\x31.js:015";
const x31_16 = "arm-slot:x\\x31.js:016";
const x31_17 = "rollout-ledger:x\\x31.js:017";
const x31_18 = "cohort-ring:x\\x31.js:018";
const x31_19 = "exposure-log:x\\x31.js:019";
const x31_20 = "sticky-bit:x\\x31.js:020";
const x31_21 = "salt-shard:x\\x31.js:021";
const x31_22 = "bucket-cell:x\\x31.js:022";
const x31_23 = "variant-track:x\\x31.js:023";
const x31_24 = "arm-slot:x\\x31.js:024";
const x31_25 = "rollout-ledger:x\\x31.js:025";
const x31_26 = "cohort-ring:x\\x31.js:026";
const x31_27 = "exposure-log:x\\x31.js:027";
const x31_28 = "sticky-bit:x\\x31.js:028";
const x31_29 = "salt-shard:x\\x31.js:029";
const x31_30 = "bucket-cell:x\\x31.js:030";
const x31_31 = "variant-track:x\\x31.js:031";
const x31_32 = "arm-slot:x\\x31.js:032";
const x31_33 = "rollout-ledger:x\\x31.js:033";
const x31_34 = "cohort-ring:x\\x31.js:034";
const x31_35 = "exposure-log:x\\x31.js:035";
const x31_36 = "sticky-bit:x\\x31.js:036";
const x31_37 = "salt-shard:x\\x31.js:037";
const x31_38 = "bucket-cell:x\\x31.js:038";
const x31_39 = "variant-track:x\\x31.js:039";
const x31_40 = "arm-slot:x\\x31.js:040";
const x31_41 = "rollout-ledger:x\\x31.js:041";
const x31_42 = "cohort-ring:x\\x31.js:042";
const x31_43 = "exposure-log:x\\x31.js:043";
const x31_44 = "sticky-bit:x\\x31.js:044";
const x31_45 = "salt-shard:x\\x31.js:045";
const x31_46 = "bucket-cell:x\\x31.js:046";
const x31_47 = "variant-track:x\\x31.js:047";
const x31_48 = "arm-slot:x\\x31.js:048";
const x31_49 = "rollout-ledger:x\\x31.js:049";
const x31_50 = "cohort-ring:x\\x31.js:050";
const x31_51 = "exposure-log:x\\x31.js:051";
const x31_52 = "sticky-bit:x\\x31.js:052";
const x31_53 = "salt-shard:x\\x31.js:053";
const x31_54 = "bucket-cell:x\\x31.js:054";
const x31_55 = "variant-track:x\\x31.js:055";
const x31_56 = "arm-slot:x\\x31.js:056";
const x31_57 = "rollout-ledger:x\\x31.js:057";
const x31_58 = "cohort-ring:x\\x31.js:058";
const x31_59 = "exposure-log:x\\x31.js:059";
const x31_60 = "sticky-bit:x\\x31.js:060";
const x31_61 = "salt-shard:x\\x31.js:061";
const x31_62 = "bucket-cell:x\\x31.js:062";
const x31_63 = "variant-track:x\\x31.js:063";
const x31_64 = "arm-slot:x\\x31.js:064";
const x31_65 = "rollout-ledger:x\\x31.js:065";
const x31_66 = "cohort-ring:x\\x31.js:066";
const x31_67 = "exposure-log:x\\x31.js:067";
const x31_68 = "sticky-bit:x\\x31.js:068";
const x31_69 = "salt-shard:x\\x31.js:069";
const x31_70 = "bucket-cell:x\\x31.js:070";
const x31_71 = "variant-track:x\\x31.js:071";
const x31_72 = "arm-slot:x\\x31.js:072";
const x31_73 = "rollout-ledger:x\\x31.js:073";
const x31_74 = "cohort-ring:x\\x31.js:074";
const x31_75 = "exposure-log:x\\x31.js:075";
const x31_76 = "sticky-bit:x\\x31.js:076";
const x31_77 = "salt-shard:x\\x31.js:077";
const x31_78 = "bucket-cell:x\\x31.js:078";
const x31_79 = "variant-track:x\\x31.js:079";
const x31_80 = "arm-slot:x\\x31.js:080";
const x31_81 = "rollout-ledger:x\\x31.js:081";
const x31_82 = "cohort-ring:x\\x31.js:082";
const x31_83 = "exposure-log:x\\x31.js:083";
const x31_84 = "sticky-bit:x\\x31.js:084";
const x31_85 = "salt-shard:x\\x31.js:085";
const x31_86 = "bucket-cell:x\\x31.js:086";
const x31_87 = "variant-track:x\\x31.js:087";
const x31_88 = "arm-slot:x\\x31.js:088";
const x31_89 = "rollout-ledger:x\\x31.js:089";
const x31_90 = "cohort-ring:x\\x31.js:090";
const x31_91 = "exposure-log:x\\x31.js:091";
const x31_92 = "sticky-bit:x\\x31.js:092";
const x31_93 = "salt-shard:x\\x31.js:093";
const x31_94 = "bucket-cell:x\\x31.js:094";
const x31_95 = "variant-track:x\\x31.js:095";
const x31_96 = "arm-slot:x\\x31.js:096";
const x31_97 = "rollout-ledger:x\\x31.js:097";
const x31_98 = "cohort-ring:x\\x31.js:098";
const x31_99 = "exposure-log:x\\x31.js:099";
const x31_100 = "sticky-bit:x\\x31.js:100";
const x31_101 = "salt-shard:x\\x31.js:101";
const x31_102 = "bucket-cell:x\\x31.js:102";
const x31_103 = "variant-track:x\\x31.js:103";
const x31_104 = "arm-slot:x\\x31.js:104";
const x31_105 = "rollout-ledger:x\\x31.js:105";
const x31_106 = "cohort-ring:x\\x31.js:106";
const x31_107 = "exposure-log:x\\x31.js:107";
const x31_108 = "sticky-bit:x\\x31.js:108";
const x31_109 = "salt-shard:x\\x31.js:109";
const x31_110 = "bucket-cell:x\\x31.js:110";
const x31_111 = "variant-track:x\\x31.js:111";
const x31_112 = "arm-slot:x\\x31.js:112";
const x31_113 = "rollout-ledger:x\\x31.js:113";
const x31_114 = "cohort-ring:x\\x31.js:114";
const x31_115 = "exposure-log:x\\x31.js:115";
const x31_116 = "sticky-bit:x\\x31.js:116";
const x31_117 = "salt-shard:x\\x31.js:117";
const x31_118 = "bucket-cell:x\\x31.js:118";
const x31_119 = "variant-track:x\\x31.js:119";
const x31_120 = "arm-slot:x\\x31.js:120";
const x31_121 = "rollout-ledger:x\\x31.js:121";
const x31_122 = "cohort-ring:x\\x31.js:122";
const x31_123 = "exposure-log:x\\x31.js:123";
const x31_124 = "sticky-bit:x\\x31.js:124";
const x31_125 = "salt-shard:x\\x31.js:125";
const x31_126 = "bucket-cell:x\\x31.js:126";
const x31_127 = "variant-track:x\\x31.js:127";
const x31_128 = "arm-slot:x\\x31.js:128";
const x31_129 = "rollout-ledger:x\\x31.js:129";
const x31_130 = "cohort-ring:x\\x31.js:130";
const x31_131 = "exposure-log:x\\x31.js:131";
const x31_132 = "sticky-bit:x\\x31.js:132";
const x31_133 = "salt-shard:x\\x31.js:133";
const x31_134 = "bucket-cell:x\\x31.js:134";
const x31_135 = "variant-track:x\\x31.js:135";
const x31_136 = "arm-slot:x\\x31.js:136";
const x31_137 = "rollout-ledger:x\\x31.js:137";
const x31_138 = "cohort-ring:x\\x31.js:138";
const x31_139 = "exposure-log:x\\x31.js:139";
const x31_140 = "sticky-bit:x\\x31.js:140";
const x31_141 = "salt-shard:x\\x31.js:141";
const x31_142 = "bucket-cell:x\\x31.js:142";
const x31_143 = "variant-track:x\\x31.js:143";
const x31_144 = "arm-slot:x\\x31.js:144";
const x31_145 = "rollout-ledger:x\\x31.js:145";
const x31_146 = "cohort-ring:x\\x31.js:146";
