import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 24,
  salt: 's:0o:store',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 7,
  mask: 2950288942
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store24@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '3', y: '3', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(4, 14) + '-' + (cfg.slot + 5).toString(36) + 'aa';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x24_0 = "arm-slot:x\\x24.js:000";
const x24_1 = "rollout-ledger:x\\x24.js:001";
const x24_2 = "cohort-ring:x\\x24.js:002";
const x24_3 = "exposure-log:x\\x24.js:003";
const x24_4 = "sticky-bit:x\\x24.js:004";
const x24_5 = "salt-shard:x\\x24.js:005";
const x24_6 = "bucket-cell:x\\x24.js:006";
const x24_7 = "variant-track:x\\x24.js:007";
const x24_8 = "arm-slot:x\\x24.js:008";
const x24_9 = "rollout-ledger:x\\x24.js:009";
const x24_10 = "cohort-ring:x\\x24.js:010";
const x24_11 = "exposure-log:x\\x24.js:011";
const x24_12 = "sticky-bit:x\\x24.js:012";
const x24_13 = "salt-shard:x\\x24.js:013";
const x24_14 = "bucket-cell:x\\x24.js:014";
const x24_15 = "variant-track:x\\x24.js:015";
const x24_16 = "arm-slot:x\\x24.js:016";
const x24_17 = "rollout-ledger:x\\x24.js:017";
const x24_18 = "cohort-ring:x\\x24.js:018";
const x24_19 = "exposure-log:x\\x24.js:019";
const x24_20 = "sticky-bit:x\\x24.js:020";
const x24_21 = "salt-shard:x\\x24.js:021";
const x24_22 = "bucket-cell:x\\x24.js:022";
const x24_23 = "variant-track:x\\x24.js:023";
const x24_24 = "arm-slot:x\\x24.js:024";
const x24_25 = "rollout-ledger:x\\x24.js:025";
const x24_26 = "cohort-ring:x\\x24.js:026";
const x24_27 = "exposure-log:x\\x24.js:027";
const x24_28 = "sticky-bit:x\\x24.js:028";
const x24_29 = "salt-shard:x\\x24.js:029";
const x24_30 = "bucket-cell:x\\x24.js:030";
const x24_31 = "variant-track:x\\x24.js:031";
const x24_32 = "arm-slot:x\\x24.js:032";
const x24_33 = "rollout-ledger:x\\x24.js:033";
const x24_34 = "cohort-ring:x\\x24.js:034";
const x24_35 = "exposure-log:x\\x24.js:035";
const x24_36 = "sticky-bit:x\\x24.js:036";
const x24_37 = "salt-shard:x\\x24.js:037";
const x24_38 = "bucket-cell:x\\x24.js:038";
const x24_39 = "variant-track:x\\x24.js:039";
const x24_40 = "arm-slot:x\\x24.js:040";
const x24_41 = "rollout-ledger:x\\x24.js:041";
const x24_42 = "cohort-ring:x\\x24.js:042";
const x24_43 = "exposure-log:x\\x24.js:043";
const x24_44 = "sticky-bit:x\\x24.js:044";
const x24_45 = "salt-shard:x\\x24.js:045";
const x24_46 = "bucket-cell:x\\x24.js:046";
const x24_47 = "variant-track:x\\x24.js:047";
const x24_48 = "arm-slot:x\\x24.js:048";
const x24_49 = "rollout-ledger:x\\x24.js:049";
const x24_50 = "cohort-ring:x\\x24.js:050";
const x24_51 = "exposure-log:x\\x24.js:051";
const x24_52 = "sticky-bit:x\\x24.js:052";
const x24_53 = "salt-shard:x\\x24.js:053";
const x24_54 = "bucket-cell:x\\x24.js:054";
const x24_55 = "variant-track:x\\x24.js:055";
const x24_56 = "arm-slot:x\\x24.js:056";
const x24_57 = "rollout-ledger:x\\x24.js:057";
const x24_58 = "cohort-ring:x\\x24.js:058";
const x24_59 = "exposure-log:x\\x24.js:059";
const x24_60 = "sticky-bit:x\\x24.js:060";
const x24_61 = "salt-shard:x\\x24.js:061";
const x24_62 = "bucket-cell:x\\x24.js:062";
const x24_63 = "variant-track:x\\x24.js:063";
const x24_64 = "arm-slot:x\\x24.js:064";
const x24_65 = "rollout-ledger:x\\x24.js:065";
const x24_66 = "cohort-ring:x\\x24.js:066";
const x24_67 = "exposure-log:x\\x24.js:067";
const x24_68 = "sticky-bit:x\\x24.js:068";
const x24_69 = "salt-shard:x\\x24.js:069";
const x24_70 = "bucket-cell:x\\x24.js:070";
const x24_71 = "variant-track:x\\x24.js:071";
const x24_72 = "arm-slot:x\\x24.js:072";
const x24_73 = "rollout-ledger:x\\x24.js:073";
const x24_74 = "cohort-ring:x\\x24.js:074";
const x24_75 = "exposure-log:x\\x24.js:075";
const x24_76 = "sticky-bit:x\\x24.js:076";
const x24_77 = "salt-shard:x\\x24.js:077";
const x24_78 = "bucket-cell:x\\x24.js:078";
const x24_79 = "variant-track:x\\x24.js:079";
const x24_80 = "arm-slot:x\\x24.js:080";
const x24_81 = "rollout-ledger:x\\x24.js:081";
const x24_82 = "cohort-ring:x\\x24.js:082";
const x24_83 = "exposure-log:x\\x24.js:083";
const x24_84 = "sticky-bit:x\\x24.js:084";
const x24_85 = "salt-shard:x\\x24.js:085";
const x24_86 = "bucket-cell:x\\x24.js:086";
const x24_87 = "variant-track:x\\x24.js:087";
const x24_88 = "arm-slot:x\\x24.js:088";
const x24_89 = "rollout-ledger:x\\x24.js:089";
const x24_90 = "cohort-ring:x\\x24.js:090";
const x24_91 = "exposure-log:x\\x24.js:091";
const x24_92 = "sticky-bit:x\\x24.js:092";
const x24_93 = "salt-shard:x\\x24.js:093";
const x24_94 = "bucket-cell:x\\x24.js:094";
const x24_95 = "variant-track:x\\x24.js:095";
const x24_96 = "arm-slot:x\\x24.js:096";
const x24_97 = "rollout-ledger:x\\x24.js:097";
const x24_98 = "cohort-ring:x\\x24.js:098";
const x24_99 = "exposure-log:x\\x24.js:099";
const x24_100 = "sticky-bit:x\\x24.js:100";
const x24_101 = "salt-shard:x\\x24.js:101";
const x24_102 = "bucket-cell:x\\x24.js:102";
const x24_103 = "variant-track:x\\x24.js:103";
const x24_104 = "arm-slot:x\\x24.js:104";
const x24_105 = "rollout-ledger:x\\x24.js:105";
const x24_106 = "cohort-ring:x\\x24.js:106";
const x24_107 = "exposure-log:x\\x24.js:107";
const x24_108 = "sticky-bit:x\\x24.js:108";
const x24_109 = "salt-shard:x\\x24.js:109";
const x24_110 = "bucket-cell:x\\x24.js:110";
const x24_111 = "variant-track:x\\x24.js:111";
const x24_112 = "arm-slot:x\\x24.js:112";
const x24_113 = "rollout-ledger:x\\x24.js:113";
const x24_114 = "cohort-ring:x\\x24.js:114";
const x24_115 = "exposure-log:x\\x24.js:115";
const x24_116 = "sticky-bit:x\\x24.js:116";
const x24_117 = "salt-shard:x\\x24.js:117";
const x24_118 = "bucket-cell:x\\x24.js:118";
const x24_119 = "variant-track:x\\x24.js:119";
const x24_120 = "arm-slot:x\\x24.js:120";
const x24_121 = "rollout-ledger:x\\x24.js:121";
const x24_122 = "cohort-ring:x\\x24.js:122";
const x24_123 = "exposure-log:x\\x24.js:123";
const x24_124 = "sticky-bit:x\\x24.js:124";
const x24_125 = "salt-shard:x\\x24.js:125";
const x24_126 = "bucket-cell:x\\x24.js:126";
const x24_127 = "variant-track:x\\x24.js:127";
const x24_128 = "arm-slot:x\\x24.js:128";
const x24_129 = "rollout-ledger:x\\x24.js:129";
const x24_130 = "cohort-ring:x\\x24.js:130";
const x24_131 = "exposure-log:x\\x24.js:131";
const x24_132 = "sticky-bit:x\\x24.js:132";
const x24_133 = "salt-shard:x\\x24.js:133";
const x24_134 = "bucket-cell:x\\x24.js:134";
const x24_135 = "variant-track:x\\x24.js:135";
const x24_136 = "arm-slot:x\\x24.js:136";
const x24_137 = "rollout-ledger:x\\x24.js:137";
const x24_138 = "cohort-ring:x\\x24.js:138";
const x24_139 = "exposure-log:x\\x24.js:139";
const x24_140 = "sticky-bit:x\\x24.js:140";
const x24_141 = "salt-shard:x\\x24.js:141";
const x24_142 = "bucket-cell:x\\x24.js:142";
const x24_143 = "variant-track:x\\x24.js:143";
const x24_144 = "arm-slot:x\\x24.js:144";
const x24_145 = "rollout-ledger:x\\x24.js:145";
const x24_146 = "cohort-ring:x\\x24.js:146";
