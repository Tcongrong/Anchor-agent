import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 4,
  salt: 's:04:store',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2060',
  shift: 8,
  mask: 1401181274
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault4@rollout.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '4', y: '4', n: 1 },
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
const x04_0 = "arm-slot:x\\x04.js:000";
const x04_1 = "rollout-ledger:x\\x04.js:001";
const x04_2 = "cohort-ring:x\\x04.js:002";
const x04_3 = "exposure-log:x\\x04.js:003";
const x04_4 = "sticky-bit:x\\x04.js:004";
const x04_5 = "salt-shard:x\\x04.js:005";
const x04_6 = "bucket-cell:x\\x04.js:006";
const x04_7 = "variant-track:x\\x04.js:007";
const x04_8 = "arm-slot:x\\x04.js:008";
const x04_9 = "rollout-ledger:x\\x04.js:009";
const x04_10 = "cohort-ring:x\\x04.js:010";
const x04_11 = "exposure-log:x\\x04.js:011";
const x04_12 = "sticky-bit:x\\x04.js:012";
const x04_13 = "salt-shard:x\\x04.js:013";
const x04_14 = "bucket-cell:x\\x04.js:014";
const x04_15 = "variant-track:x\\x04.js:015";
const x04_16 = "arm-slot:x\\x04.js:016";
const x04_17 = "rollout-ledger:x\\x04.js:017";
const x04_18 = "cohort-ring:x\\x04.js:018";
const x04_19 = "exposure-log:x\\x04.js:019";
const x04_20 = "sticky-bit:x\\x04.js:020";
const x04_21 = "salt-shard:x\\x04.js:021";
const x04_22 = "bucket-cell:x\\x04.js:022";
const x04_23 = "variant-track:x\\x04.js:023";
const x04_24 = "arm-slot:x\\x04.js:024";
const x04_25 = "rollout-ledger:x\\x04.js:025";
const x04_26 = "cohort-ring:x\\x04.js:026";
const x04_27 = "exposure-log:x\\x04.js:027";
const x04_28 = "sticky-bit:x\\x04.js:028";
const x04_29 = "salt-shard:x\\x04.js:029";
const x04_30 = "bucket-cell:x\\x04.js:030";
const x04_31 = "variant-track:x\\x04.js:031";
const x04_32 = "arm-slot:x\\x04.js:032";
const x04_33 = "rollout-ledger:x\\x04.js:033";
const x04_34 = "cohort-ring:x\\x04.js:034";
const x04_35 = "exposure-log:x\\x04.js:035";
const x04_36 = "sticky-bit:x\\x04.js:036";
const x04_37 = "salt-shard:x\\x04.js:037";
const x04_38 = "bucket-cell:x\\x04.js:038";
const x04_39 = "variant-track:x\\x04.js:039";
const x04_40 = "arm-slot:x\\x04.js:040";
const x04_41 = "rollout-ledger:x\\x04.js:041";
const x04_42 = "cohort-ring:x\\x04.js:042";
const x04_43 = "exposure-log:x\\x04.js:043";
const x04_44 = "sticky-bit:x\\x04.js:044";
const x04_45 = "salt-shard:x\\x04.js:045";
const x04_46 = "bucket-cell:x\\x04.js:046";
const x04_47 = "variant-track:x\\x04.js:047";
const x04_48 = "arm-slot:x\\x04.js:048";
const x04_49 = "rollout-ledger:x\\x04.js:049";
const x04_50 = "cohort-ring:x\\x04.js:050";
const x04_51 = "exposure-log:x\\x04.js:051";
const x04_52 = "sticky-bit:x\\x04.js:052";
const x04_53 = "salt-shard:x\\x04.js:053";
const x04_54 = "bucket-cell:x\\x04.js:054";
const x04_55 = "variant-track:x\\x04.js:055";
const x04_56 = "arm-slot:x\\x04.js:056";
const x04_57 = "rollout-ledger:x\\x04.js:057";
const x04_58 = "cohort-ring:x\\x04.js:058";
const x04_59 = "exposure-log:x\\x04.js:059";
const x04_60 = "sticky-bit:x\\x04.js:060";
const x04_61 = "salt-shard:x\\x04.js:061";
const x04_62 = "bucket-cell:x\\x04.js:062";
const x04_63 = "variant-track:x\\x04.js:063";
const x04_64 = "arm-slot:x\\x04.js:064";
const x04_65 = "rollout-ledger:x\\x04.js:065";
const x04_66 = "cohort-ring:x\\x04.js:066";
const x04_67 = "exposure-log:x\\x04.js:067";
const x04_68 = "sticky-bit:x\\x04.js:068";
const x04_69 = "salt-shard:x\\x04.js:069";
const x04_70 = "bucket-cell:x\\x04.js:070";
const x04_71 = "variant-track:x\\x04.js:071";
const x04_72 = "arm-slot:x\\x04.js:072";
const x04_73 = "rollout-ledger:x\\x04.js:073";
const x04_74 = "cohort-ring:x\\x04.js:074";
const x04_75 = "exposure-log:x\\x04.js:075";
const x04_76 = "sticky-bit:x\\x04.js:076";
const x04_77 = "salt-shard:x\\x04.js:077";
const x04_78 = "bucket-cell:x\\x04.js:078";
const x04_79 = "variant-track:x\\x04.js:079";
const x04_80 = "arm-slot:x\\x04.js:080";
const x04_81 = "rollout-ledger:x\\x04.js:081";
const x04_82 = "cohort-ring:x\\x04.js:082";
const x04_83 = "exposure-log:x\\x04.js:083";
const x04_84 = "sticky-bit:x\\x04.js:084";
const x04_85 = "salt-shard:x\\x04.js:085";
const x04_86 = "bucket-cell:x\\x04.js:086";
const x04_87 = "variant-track:x\\x04.js:087";
const x04_88 = "arm-slot:x\\x04.js:088";
const x04_89 = "rollout-ledger:x\\x04.js:089";
const x04_90 = "cohort-ring:x\\x04.js:090";
const x04_91 = "exposure-log:x\\x04.js:091";
const x04_92 = "sticky-bit:x\\x04.js:092";
const x04_93 = "salt-shard:x\\x04.js:093";
const x04_94 = "bucket-cell:x\\x04.js:094";
const x04_95 = "variant-track:x\\x04.js:095";
const x04_96 = "arm-slot:x\\x04.js:096";
const x04_97 = "rollout-ledger:x\\x04.js:097";
const x04_98 = "cohort-ring:x\\x04.js:098";
const x04_99 = "exposure-log:x\\x04.js:099";
const x04_100 = "sticky-bit:x\\x04.js:100";
const x04_101 = "salt-shard:x\\x04.js:101";
const x04_102 = "bucket-cell:x\\x04.js:102";
const x04_103 = "variant-track:x\\x04.js:103";
const x04_104 = "arm-slot:x\\x04.js:104";
const x04_105 = "rollout-ledger:x\\x04.js:105";
const x04_106 = "cohort-ring:x\\x04.js:106";
const x04_107 = "exposure-log:x\\x04.js:107";
const x04_108 = "sticky-bit:x\\x04.js:108";
const x04_109 = "salt-shard:x\\x04.js:109";
const x04_110 = "bucket-cell:x\\x04.js:110";
const x04_111 = "variant-track:x\\x04.js:111";
const x04_112 = "arm-slot:x\\x04.js:112";
const x04_113 = "rollout-ledger:x\\x04.js:113";
const x04_114 = "cohort-ring:x\\x04.js:114";
const x04_115 = "exposure-log:x\\x04.js:115";
const x04_116 = "sticky-bit:x\\x04.js:116";
const x04_117 = "salt-shard:x\\x04.js:117";
const x04_118 = "bucket-cell:x\\x04.js:118";
const x04_119 = "variant-track:x\\x04.js:119";
const x04_120 = "arm-slot:x\\x04.js:120";
const x04_121 = "rollout-ledger:x\\x04.js:121";
const x04_122 = "cohort-ring:x\\x04.js:122";
const x04_123 = "exposure-log:x\\x04.js:123";
const x04_124 = "sticky-bit:x\\x04.js:124";
const x04_125 = "salt-shard:x\\x04.js:125";
const x04_126 = "bucket-cell:x\\x04.js:126";
const x04_127 = "variant-track:x\\x04.js:127";
const x04_128 = "arm-slot:x\\x04.js:128";
const x04_129 = "rollout-ledger:x\\x04.js:129";
const x04_130 = "cohort-ring:x\\x04.js:130";
const x04_131 = "exposure-log:x\\x04.js:131";
const x04_132 = "sticky-bit:x\\x04.js:132";
const x04_133 = "salt-shard:x\\x04.js:133";
const x04_134 = "bucket-cell:x\\x04.js:134";
const x04_135 = "variant-track:x\\x04.js:135";
const x04_136 = "arm-slot:x\\x04.js:136";
const x04_137 = "rollout-ledger:x\\x04.js:137";
const x04_138 = "cohort-ring:x\\x04.js:138";
const x04_139 = "exposure-log:x\\x04.js:139";
const x04_140 = "sticky-bit:x\\x04.js:140";
const x04_141 = "salt-shard:x\\x04.js:141";
const x04_142 = "bucket-cell:x\\x04.js:142";
const x04_143 = "variant-track:x\\x04.js:143";
const x04_144 = "arm-slot:x\\x04.js:144";
const x04_145 = "rollout-ledger:x\\x04.js:145";
const x04_146 = "cohort-ring:x\\x04.js:146";
