import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 36,
  salt: 's:10:store',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2060',
  shift: 5,
  mask: 443779706
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store36@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '1', y: '1', n: 1 },
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
const x36_0 = "arm-slot:x\\x36.js:000";
const x36_1 = "rollout-ledger:x\\x36.js:001";
const x36_2 = "cohort-ring:x\\x36.js:002";
const x36_3 = "exposure-log:x\\x36.js:003";
const x36_4 = "sticky-bit:x\\x36.js:004";
const x36_5 = "salt-shard:x\\x36.js:005";
const x36_6 = "bucket-cell:x\\x36.js:006";
const x36_7 = "variant-track:x\\x36.js:007";
const x36_8 = "arm-slot:x\\x36.js:008";
const x36_9 = "rollout-ledger:x\\x36.js:009";
const x36_10 = "cohort-ring:x\\x36.js:010";
const x36_11 = "exposure-log:x\\x36.js:011";
const x36_12 = "sticky-bit:x\\x36.js:012";
const x36_13 = "salt-shard:x\\x36.js:013";
const x36_14 = "bucket-cell:x\\x36.js:014";
const x36_15 = "variant-track:x\\x36.js:015";
const x36_16 = "arm-slot:x\\x36.js:016";
const x36_17 = "rollout-ledger:x\\x36.js:017";
const x36_18 = "cohort-ring:x\\x36.js:018";
const x36_19 = "exposure-log:x\\x36.js:019";
const x36_20 = "sticky-bit:x\\x36.js:020";
const x36_21 = "salt-shard:x\\x36.js:021";
const x36_22 = "bucket-cell:x\\x36.js:022";
const x36_23 = "variant-track:x\\x36.js:023";
const x36_24 = "arm-slot:x\\x36.js:024";
const x36_25 = "rollout-ledger:x\\x36.js:025";
const x36_26 = "cohort-ring:x\\x36.js:026";
const x36_27 = "exposure-log:x\\x36.js:027";
const x36_28 = "sticky-bit:x\\x36.js:028";
const x36_29 = "salt-shard:x\\x36.js:029";
const x36_30 = "bucket-cell:x\\x36.js:030";
const x36_31 = "variant-track:x\\x36.js:031";
const x36_32 = "arm-slot:x\\x36.js:032";
const x36_33 = "rollout-ledger:x\\x36.js:033";
const x36_34 = "cohort-ring:x\\x36.js:034";
const x36_35 = "exposure-log:x\\x36.js:035";
const x36_36 = "sticky-bit:x\\x36.js:036";
const x36_37 = "salt-shard:x\\x36.js:037";
const x36_38 = "bucket-cell:x\\x36.js:038";
const x36_39 = "variant-track:x\\x36.js:039";
const x36_40 = "arm-slot:x\\x36.js:040";
const x36_41 = "rollout-ledger:x\\x36.js:041";
const x36_42 = "cohort-ring:x\\x36.js:042";
const x36_43 = "exposure-log:x\\x36.js:043";
const x36_44 = "sticky-bit:x\\x36.js:044";
const x36_45 = "salt-shard:x\\x36.js:045";
const x36_46 = "bucket-cell:x\\x36.js:046";
const x36_47 = "variant-track:x\\x36.js:047";
const x36_48 = "arm-slot:x\\x36.js:048";
const x36_49 = "rollout-ledger:x\\x36.js:049";
const x36_50 = "cohort-ring:x\\x36.js:050";
const x36_51 = "exposure-log:x\\x36.js:051";
const x36_52 = "sticky-bit:x\\x36.js:052";
const x36_53 = "salt-shard:x\\x36.js:053";
const x36_54 = "bucket-cell:x\\x36.js:054";
const x36_55 = "variant-track:x\\x36.js:055";
const x36_56 = "arm-slot:x\\x36.js:056";
const x36_57 = "rollout-ledger:x\\x36.js:057";
const x36_58 = "cohort-ring:x\\x36.js:058";
const x36_59 = "exposure-log:x\\x36.js:059";
const x36_60 = "sticky-bit:x\\x36.js:060";
const x36_61 = "salt-shard:x\\x36.js:061";
const x36_62 = "bucket-cell:x\\x36.js:062";
const x36_63 = "variant-track:x\\x36.js:063";
const x36_64 = "arm-slot:x\\x36.js:064";
const x36_65 = "rollout-ledger:x\\x36.js:065";
const x36_66 = "cohort-ring:x\\x36.js:066";
const x36_67 = "exposure-log:x\\x36.js:067";
const x36_68 = "sticky-bit:x\\x36.js:068";
const x36_69 = "salt-shard:x\\x36.js:069";
const x36_70 = "bucket-cell:x\\x36.js:070";
const x36_71 = "variant-track:x\\x36.js:071";
const x36_72 = "arm-slot:x\\x36.js:072";
const x36_73 = "rollout-ledger:x\\x36.js:073";
const x36_74 = "cohort-ring:x\\x36.js:074";
const x36_75 = "exposure-log:x\\x36.js:075";
const x36_76 = "sticky-bit:x\\x36.js:076";
const x36_77 = "salt-shard:x\\x36.js:077";
const x36_78 = "bucket-cell:x\\x36.js:078";
const x36_79 = "variant-track:x\\x36.js:079";
const x36_80 = "arm-slot:x\\x36.js:080";
const x36_81 = "rollout-ledger:x\\x36.js:081";
const x36_82 = "cohort-ring:x\\x36.js:082";
const x36_83 = "exposure-log:x\\x36.js:083";
const x36_84 = "sticky-bit:x\\x36.js:084";
const x36_85 = "salt-shard:x\\x36.js:085";
const x36_86 = "bucket-cell:x\\x36.js:086";
const x36_87 = "variant-track:x\\x36.js:087";
const x36_88 = "arm-slot:x\\x36.js:088";
const x36_89 = "rollout-ledger:x\\x36.js:089";
const x36_90 = "cohort-ring:x\\x36.js:090";
const x36_91 = "exposure-log:x\\x36.js:091";
const x36_92 = "sticky-bit:x\\x36.js:092";
const x36_93 = "salt-shard:x\\x36.js:093";
const x36_94 = "bucket-cell:x\\x36.js:094";
const x36_95 = "variant-track:x\\x36.js:095";
const x36_96 = "arm-slot:x\\x36.js:096";
const x36_97 = "rollout-ledger:x\\x36.js:097";
const x36_98 = "cohort-ring:x\\x36.js:098";
const x36_99 = "exposure-log:x\\x36.js:099";
const x36_100 = "sticky-bit:x\\x36.js:100";
const x36_101 = "salt-shard:x\\x36.js:101";
const x36_102 = "bucket-cell:x\\x36.js:102";
const x36_103 = "variant-track:x\\x36.js:103";
const x36_104 = "arm-slot:x\\x36.js:104";
const x36_105 = "rollout-ledger:x\\x36.js:105";
const x36_106 = "cohort-ring:x\\x36.js:106";
const x36_107 = "exposure-log:x\\x36.js:107";
const x36_108 = "sticky-bit:x\\x36.js:108";
const x36_109 = "salt-shard:x\\x36.js:109";
const x36_110 = "bucket-cell:x\\x36.js:110";
const x36_111 = "variant-track:x\\x36.js:111";
const x36_112 = "arm-slot:x\\x36.js:112";
const x36_113 = "rollout-ledger:x\\x36.js:113";
const x36_114 = "cohort-ring:x\\x36.js:114";
const x36_115 = "exposure-log:x\\x36.js:115";
const x36_116 = "sticky-bit:x\\x36.js:116";
const x36_117 = "salt-shard:x\\x36.js:117";
const x36_118 = "bucket-cell:x\\x36.js:118";
const x36_119 = "variant-track:x\\x36.js:119";
const x36_120 = "arm-slot:x\\x36.js:120";
const x36_121 = "rollout-ledger:x\\x36.js:121";
const x36_122 = "cohort-ring:x\\x36.js:122";
const x36_123 = "exposure-log:x\\x36.js:123";
const x36_124 = "sticky-bit:x\\x36.js:124";
const x36_125 = "salt-shard:x\\x36.js:125";
const x36_126 = "bucket-cell:x\\x36.js:126";
const x36_127 = "variant-track:x\\x36.js:127";
const x36_128 = "arm-slot:x\\x36.js:128";
const x36_129 = "rollout-ledger:x\\x36.js:129";
const x36_130 = "cohort-ring:x\\x36.js:130";
const x36_131 = "exposure-log:x\\x36.js:131";
const x36_132 = "sticky-bit:x\\x36.js:132";
const x36_133 = "salt-shard:x\\x36.js:133";
const x36_134 = "bucket-cell:x\\x36.js:134";
const x36_135 = "variant-track:x\\x36.js:135";
const x36_136 = "arm-slot:x\\x36.js:136";
const x36_137 = "rollout-ledger:x\\x36.js:137";
const x36_138 = "cohort-ring:x\\x36.js:138";
const x36_139 = "exposure-log:x\\x36.js:139";
const x36_140 = "sticky-bit:x\\x36.js:140";
const x36_141 = "salt-shard:x\\x36.js:141";
const x36_142 = "bucket-cell:x\\x36.js:142";
const x36_143 = "variant-track:x\\x36.js:143";
const x36_144 = "arm-slot:x\\x36.js:144";
const x36_145 = "rollout-ledger:x\\x36.js:145";
const x36_146 = "cohort-ring:x\\x36.js:146";
