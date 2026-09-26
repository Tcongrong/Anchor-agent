import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 17,
  salt: 's:0h:store',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2061',
  shift: 7,
  mask: 1549107799
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'slot17@rollout.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '333333', y: '333333', n: 6 },
    { k: 'c', i: 2, v: '3', y: '3', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(5, 13) + '.' + (cfg.slot * 3 + 2).toString(36) + 'x';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x17_0 = "arm-slot:x\\x17.js:000";
const x17_1 = "rollout-ledger:x\\x17.js:001";
const x17_2 = "cohort-ring:x\\x17.js:002";
const x17_3 = "exposure-log:x\\x17.js:003";
const x17_4 = "sticky-bit:x\\x17.js:004";
const x17_5 = "salt-shard:x\\x17.js:005";
const x17_6 = "bucket-cell:x\\x17.js:006";
const x17_7 = "variant-track:x\\x17.js:007";
const x17_8 = "arm-slot:x\\x17.js:008";
const x17_9 = "rollout-ledger:x\\x17.js:009";
const x17_10 = "cohort-ring:x\\x17.js:010";
const x17_11 = "exposure-log:x\\x17.js:011";
const x17_12 = "sticky-bit:x\\x17.js:012";
const x17_13 = "salt-shard:x\\x17.js:013";
const x17_14 = "bucket-cell:x\\x17.js:014";
const x17_15 = "variant-track:x\\x17.js:015";
const x17_16 = "arm-slot:x\\x17.js:016";
const x17_17 = "rollout-ledger:x\\x17.js:017";
const x17_18 = "cohort-ring:x\\x17.js:018";
const x17_19 = "exposure-log:x\\x17.js:019";
const x17_20 = "sticky-bit:x\\x17.js:020";
const x17_21 = "salt-shard:x\\x17.js:021";
const x17_22 = "bucket-cell:x\\x17.js:022";
const x17_23 = "variant-track:x\\x17.js:023";
const x17_24 = "arm-slot:x\\x17.js:024";
const x17_25 = "rollout-ledger:x\\x17.js:025";
const x17_26 = "cohort-ring:x\\x17.js:026";
const x17_27 = "exposure-log:x\\x17.js:027";
const x17_28 = "sticky-bit:x\\x17.js:028";
const x17_29 = "salt-shard:x\\x17.js:029";
const x17_30 = "bucket-cell:x\\x17.js:030";
const x17_31 = "variant-track:x\\x17.js:031";
const x17_32 = "arm-slot:x\\x17.js:032";
const x17_33 = "rollout-ledger:x\\x17.js:033";
const x17_34 = "cohort-ring:x\\x17.js:034";
const x17_35 = "exposure-log:x\\x17.js:035";
const x17_36 = "sticky-bit:x\\x17.js:036";
const x17_37 = "salt-shard:x\\x17.js:037";
const x17_38 = "bucket-cell:x\\x17.js:038";
const x17_39 = "variant-track:x\\x17.js:039";
const x17_40 = "arm-slot:x\\x17.js:040";
const x17_41 = "rollout-ledger:x\\x17.js:041";
const x17_42 = "cohort-ring:x\\x17.js:042";
const x17_43 = "exposure-log:x\\x17.js:043";
const x17_44 = "sticky-bit:x\\x17.js:044";
const x17_45 = "salt-shard:x\\x17.js:045";
const x17_46 = "bucket-cell:x\\x17.js:046";
const x17_47 = "variant-track:x\\x17.js:047";
const x17_48 = "arm-slot:x\\x17.js:048";
const x17_49 = "rollout-ledger:x\\x17.js:049";
const x17_50 = "cohort-ring:x\\x17.js:050";
const x17_51 = "exposure-log:x\\x17.js:051";
const x17_52 = "sticky-bit:x\\x17.js:052";
const x17_53 = "salt-shard:x\\x17.js:053";
const x17_54 = "bucket-cell:x\\x17.js:054";
const x17_55 = "variant-track:x\\x17.js:055";
const x17_56 = "arm-slot:x\\x17.js:056";
const x17_57 = "rollout-ledger:x\\x17.js:057";
const x17_58 = "cohort-ring:x\\x17.js:058";
const x17_59 = "exposure-log:x\\x17.js:059";
const x17_60 = "sticky-bit:x\\x17.js:060";
const x17_61 = "salt-shard:x\\x17.js:061";
const x17_62 = "bucket-cell:x\\x17.js:062";
const x17_63 = "variant-track:x\\x17.js:063";
const x17_64 = "arm-slot:x\\x17.js:064";
const x17_65 = "rollout-ledger:x\\x17.js:065";
const x17_66 = "cohort-ring:x\\x17.js:066";
const x17_67 = "exposure-log:x\\x17.js:067";
const x17_68 = "sticky-bit:x\\x17.js:068";
const x17_69 = "salt-shard:x\\x17.js:069";
const x17_70 = "bucket-cell:x\\x17.js:070";
const x17_71 = "variant-track:x\\x17.js:071";
const x17_72 = "arm-slot:x\\x17.js:072";
const x17_73 = "rollout-ledger:x\\x17.js:073";
const x17_74 = "cohort-ring:x\\x17.js:074";
const x17_75 = "exposure-log:x\\x17.js:075";
const x17_76 = "sticky-bit:x\\x17.js:076";
const x17_77 = "salt-shard:x\\x17.js:077";
const x17_78 = "bucket-cell:x\\x17.js:078";
const x17_79 = "variant-track:x\\x17.js:079";
const x17_80 = "arm-slot:x\\x17.js:080";
const x17_81 = "rollout-ledger:x\\x17.js:081";
const x17_82 = "cohort-ring:x\\x17.js:082";
const x17_83 = "exposure-log:x\\x17.js:083";
const x17_84 = "sticky-bit:x\\x17.js:084";
const x17_85 = "salt-shard:x\\x17.js:085";
const x17_86 = "bucket-cell:x\\x17.js:086";
const x17_87 = "variant-track:x\\x17.js:087";
const x17_88 = "arm-slot:x\\x17.js:088";
const x17_89 = "rollout-ledger:x\\x17.js:089";
const x17_90 = "cohort-ring:x\\x17.js:090";
const x17_91 = "exposure-log:x\\x17.js:091";
const x17_92 = "sticky-bit:x\\x17.js:092";
const x17_93 = "salt-shard:x\\x17.js:093";
const x17_94 = "bucket-cell:x\\x17.js:094";
const x17_95 = "variant-track:x\\x17.js:095";
const x17_96 = "arm-slot:x\\x17.js:096";
const x17_97 = "rollout-ledger:x\\x17.js:097";
const x17_98 = "cohort-ring:x\\x17.js:098";
const x17_99 = "exposure-log:x\\x17.js:099";
const x17_100 = "sticky-bit:x\\x17.js:100";
const x17_101 = "salt-shard:x\\x17.js:101";
const x17_102 = "bucket-cell:x\\x17.js:102";
const x17_103 = "variant-track:x\\x17.js:103";
const x17_104 = "arm-slot:x\\x17.js:104";
const x17_105 = "rollout-ledger:x\\x17.js:105";
const x17_106 = "cohort-ring:x\\x17.js:106";
const x17_107 = "exposure-log:x\\x17.js:107";
const x17_108 = "sticky-bit:x\\x17.js:108";
const x17_109 = "salt-shard:x\\x17.js:109";
const x17_110 = "bucket-cell:x\\x17.js:110";
const x17_111 = "variant-track:x\\x17.js:111";
const x17_112 = "arm-slot:x\\x17.js:112";
const x17_113 = "rollout-ledger:x\\x17.js:113";
const x17_114 = "cohort-ring:x\\x17.js:114";
const x17_115 = "exposure-log:x\\x17.js:115";
const x17_116 = "sticky-bit:x\\x17.js:116";
const x17_117 = "salt-shard:x\\x17.js:117";
const x17_118 = "bucket-cell:x\\x17.js:118";
const x17_119 = "variant-track:x\\x17.js:119";
const x17_120 = "arm-slot:x\\x17.js:120";
const x17_121 = "rollout-ledger:x\\x17.js:121";
const x17_122 = "cohort-ring:x\\x17.js:122";
const x17_123 = "exposure-log:x\\x17.js:123";
const x17_124 = "sticky-bit:x\\x17.js:124";
const x17_125 = "salt-shard:x\\x17.js:125";
const x17_126 = "bucket-cell:x\\x17.js:126";
const x17_127 = "variant-track:x\\x17.js:127";
const x17_128 = "arm-slot:x\\x17.js:128";
const x17_129 = "rollout-ledger:x\\x17.js:129";
const x17_130 = "cohort-ring:x\\x17.js:130";
const x17_131 = "exposure-log:x\\x17.js:131";
const x17_132 = "sticky-bit:x\\x17.js:132";
const x17_133 = "salt-shard:x\\x17.js:133";
const x17_134 = "bucket-cell:x\\x17.js:134";
const x17_135 = "variant-track:x\\x17.js:135";
const x17_136 = "arm-slot:x\\x17.js:136";
const x17_137 = "rollout-ledger:x\\x17.js:137";
const x17_138 = "cohort-ring:x\\x17.js:138";
const x17_139 = "exposure-log:x\\x17.js:139";
const x17_140 = "sticky-bit:x\\x17.js:140";
const x17_141 = "salt-shard:x\\x17.js:141";
const x17_142 = "bucket-cell:x\\x17.js:142";
const x17_143 = "variant-track:x\\x17.js:143";
const x17_144 = "arm-slot:x\\x17.js:144";
const x17_145 = "rollout-ledger:x\\x17.js:145";
const x17_146 = "cohort-ring:x\\x17.js:146";
