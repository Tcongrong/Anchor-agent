import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 7,
  salt: 's:07:store',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 4,
  mask: 774553965
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault7@rollout.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '333333', y: '333333', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
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
const x07_0 = "arm-slot:x\\x07.js:000";
const x07_1 = "rollout-ledger:x\\x07.js:001";
const x07_2 = "cohort-ring:x\\x07.js:002";
const x07_3 = "exposure-log:x\\x07.js:003";
const x07_4 = "sticky-bit:x\\x07.js:004";
const x07_5 = "salt-shard:x\\x07.js:005";
const x07_6 = "bucket-cell:x\\x07.js:006";
const x07_7 = "variant-track:x\\x07.js:007";
const x07_8 = "arm-slot:x\\x07.js:008";
const x07_9 = "rollout-ledger:x\\x07.js:009";
const x07_10 = "cohort-ring:x\\x07.js:010";
const x07_11 = "exposure-log:x\\x07.js:011";
const x07_12 = "sticky-bit:x\\x07.js:012";
const x07_13 = "salt-shard:x\\x07.js:013";
const x07_14 = "bucket-cell:x\\x07.js:014";
const x07_15 = "variant-track:x\\x07.js:015";
const x07_16 = "arm-slot:x\\x07.js:016";
const x07_17 = "rollout-ledger:x\\x07.js:017";
const x07_18 = "cohort-ring:x\\x07.js:018";
const x07_19 = "exposure-log:x\\x07.js:019";
const x07_20 = "sticky-bit:x\\x07.js:020";
const x07_21 = "salt-shard:x\\x07.js:021";
const x07_22 = "bucket-cell:x\\x07.js:022";
const x07_23 = "variant-track:x\\x07.js:023";
const x07_24 = "arm-slot:x\\x07.js:024";
const x07_25 = "rollout-ledger:x\\x07.js:025";
const x07_26 = "cohort-ring:x\\x07.js:026";
const x07_27 = "exposure-log:x\\x07.js:027";
const x07_28 = "sticky-bit:x\\x07.js:028";
const x07_29 = "salt-shard:x\\x07.js:029";
const x07_30 = "bucket-cell:x\\x07.js:030";
const x07_31 = "variant-track:x\\x07.js:031";
const x07_32 = "arm-slot:x\\x07.js:032";
const x07_33 = "rollout-ledger:x\\x07.js:033";
const x07_34 = "cohort-ring:x\\x07.js:034";
const x07_35 = "exposure-log:x\\x07.js:035";
const x07_36 = "sticky-bit:x\\x07.js:036";
const x07_37 = "salt-shard:x\\x07.js:037";
const x07_38 = "bucket-cell:x\\x07.js:038";
const x07_39 = "variant-track:x\\x07.js:039";
const x07_40 = "arm-slot:x\\x07.js:040";
const x07_41 = "rollout-ledger:x\\x07.js:041";
const x07_42 = "cohort-ring:x\\x07.js:042";
const x07_43 = "exposure-log:x\\x07.js:043";
const x07_44 = "sticky-bit:x\\x07.js:044";
const x07_45 = "salt-shard:x\\x07.js:045";
const x07_46 = "bucket-cell:x\\x07.js:046";
const x07_47 = "variant-track:x\\x07.js:047";
const x07_48 = "arm-slot:x\\x07.js:048";
const x07_49 = "rollout-ledger:x\\x07.js:049";
const x07_50 = "cohort-ring:x\\x07.js:050";
const x07_51 = "exposure-log:x\\x07.js:051";
const x07_52 = "sticky-bit:x\\x07.js:052";
const x07_53 = "salt-shard:x\\x07.js:053";
const x07_54 = "bucket-cell:x\\x07.js:054";
const x07_55 = "variant-track:x\\x07.js:055";
const x07_56 = "arm-slot:x\\x07.js:056";
const x07_57 = "rollout-ledger:x\\x07.js:057";
const x07_58 = "cohort-ring:x\\x07.js:058";
const x07_59 = "exposure-log:x\\x07.js:059";
const x07_60 = "sticky-bit:x\\x07.js:060";
const x07_61 = "salt-shard:x\\x07.js:061";
const x07_62 = "bucket-cell:x\\x07.js:062";
const x07_63 = "variant-track:x\\x07.js:063";
const x07_64 = "arm-slot:x\\x07.js:064";
const x07_65 = "rollout-ledger:x\\x07.js:065";
const x07_66 = "cohort-ring:x\\x07.js:066";
const x07_67 = "exposure-log:x\\x07.js:067";
const x07_68 = "sticky-bit:x\\x07.js:068";
const x07_69 = "salt-shard:x\\x07.js:069";
const x07_70 = "bucket-cell:x\\x07.js:070";
const x07_71 = "variant-track:x\\x07.js:071";
const x07_72 = "arm-slot:x\\x07.js:072";
const x07_73 = "rollout-ledger:x\\x07.js:073";
const x07_74 = "cohort-ring:x\\x07.js:074";
const x07_75 = "exposure-log:x\\x07.js:075";
const x07_76 = "sticky-bit:x\\x07.js:076";
const x07_77 = "salt-shard:x\\x07.js:077";
const x07_78 = "bucket-cell:x\\x07.js:078";
const x07_79 = "variant-track:x\\x07.js:079";
const x07_80 = "arm-slot:x\\x07.js:080";
const x07_81 = "rollout-ledger:x\\x07.js:081";
const x07_82 = "cohort-ring:x\\x07.js:082";
const x07_83 = "exposure-log:x\\x07.js:083";
const x07_84 = "sticky-bit:x\\x07.js:084";
const x07_85 = "salt-shard:x\\x07.js:085";
const x07_86 = "bucket-cell:x\\x07.js:086";
const x07_87 = "variant-track:x\\x07.js:087";
const x07_88 = "arm-slot:x\\x07.js:088";
const x07_89 = "rollout-ledger:x\\x07.js:089";
const x07_90 = "cohort-ring:x\\x07.js:090";
const x07_91 = "exposure-log:x\\x07.js:091";
const x07_92 = "sticky-bit:x\\x07.js:092";
const x07_93 = "salt-shard:x\\x07.js:093";
const x07_94 = "bucket-cell:x\\x07.js:094";
const x07_95 = "variant-track:x\\x07.js:095";
const x07_96 = "arm-slot:x\\x07.js:096";
const x07_97 = "rollout-ledger:x\\x07.js:097";
const x07_98 = "cohort-ring:x\\x07.js:098";
const x07_99 = "exposure-log:x\\x07.js:099";
const x07_100 = "sticky-bit:x\\x07.js:100";
const x07_101 = "salt-shard:x\\x07.js:101";
const x07_102 = "bucket-cell:x\\x07.js:102";
const x07_103 = "variant-track:x\\x07.js:103";
const x07_104 = "arm-slot:x\\x07.js:104";
const x07_105 = "rollout-ledger:x\\x07.js:105";
const x07_106 = "cohort-ring:x\\x07.js:106";
const x07_107 = "exposure-log:x\\x07.js:107";
const x07_108 = "sticky-bit:x\\x07.js:108";
const x07_109 = "salt-shard:x\\x07.js:109";
const x07_110 = "bucket-cell:x\\x07.js:110";
const x07_111 = "variant-track:x\\x07.js:111";
const x07_112 = "arm-slot:x\\x07.js:112";
const x07_113 = "rollout-ledger:x\\x07.js:113";
const x07_114 = "cohort-ring:x\\x07.js:114";
const x07_115 = "exposure-log:x\\x07.js:115";
const x07_116 = "sticky-bit:x\\x07.js:116";
const x07_117 = "salt-shard:x\\x07.js:117";
const x07_118 = "bucket-cell:x\\x07.js:118";
const x07_119 = "variant-track:x\\x07.js:119";
const x07_120 = "arm-slot:x\\x07.js:120";
const x07_121 = "rollout-ledger:x\\x07.js:121";
const x07_122 = "cohort-ring:x\\x07.js:122";
const x07_123 = "exposure-log:x\\x07.js:123";
const x07_124 = "sticky-bit:x\\x07.js:124";
const x07_125 = "salt-shard:x\\x07.js:125";
const x07_126 = "bucket-cell:x\\x07.js:126";
const x07_127 = "variant-track:x\\x07.js:127";
const x07_128 = "arm-slot:x\\x07.js:128";
const x07_129 = "rollout-ledger:x\\x07.js:129";
const x07_130 = "cohort-ring:x\\x07.js:130";
const x07_131 = "exposure-log:x\\x07.js:131";
const x07_132 = "sticky-bit:x\\x07.js:132";
const x07_133 = "salt-shard:x\\x07.js:133";
const x07_134 = "bucket-cell:x\\x07.js:134";
const x07_135 = "variant-track:x\\x07.js:135";
const x07_136 = "arm-slot:x\\x07.js:136";
const x07_137 = "rollout-ledger:x\\x07.js:137";
const x07_138 = "cohort-ring:x\\x07.js:138";
const x07_139 = "exposure-log:x\\x07.js:139";
const x07_140 = "sticky-bit:x\\x07.js:140";
const x07_141 = "salt-shard:x\\x07.js:141";
const x07_142 = "bucket-cell:x\\x07.js:142";
const x07_143 = "variant-track:x\\x07.js:143";
const x07_144 = "arm-slot:x\\x07.js:144";
const x07_145 = "rollout-ledger:x\\x07.js:145";
const x07_146 = "cohort-ring:x\\x07.js:146";
