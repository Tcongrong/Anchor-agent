import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 8,
  salt: 's:08:store',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2060',
  shift: 5,
  mask: 3428989726
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'slot8@rollout.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '1', y: '1', n: 1 },
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
const x08_0 = "arm-slot:x\\x08.js:000";
const x08_1 = "rollout-ledger:x\\x08.js:001";
const x08_2 = "cohort-ring:x\\x08.js:002";
const x08_3 = "exposure-log:x\\x08.js:003";
const x08_4 = "sticky-bit:x\\x08.js:004";
const x08_5 = "salt-shard:x\\x08.js:005";
const x08_6 = "bucket-cell:x\\x08.js:006";
const x08_7 = "variant-track:x\\x08.js:007";
const x08_8 = "arm-slot:x\\x08.js:008";
const x08_9 = "rollout-ledger:x\\x08.js:009";
const x08_10 = "cohort-ring:x\\x08.js:010";
const x08_11 = "exposure-log:x\\x08.js:011";
const x08_12 = "sticky-bit:x\\x08.js:012";
const x08_13 = "salt-shard:x\\x08.js:013";
const x08_14 = "bucket-cell:x\\x08.js:014";
const x08_15 = "variant-track:x\\x08.js:015";
const x08_16 = "arm-slot:x\\x08.js:016";
const x08_17 = "rollout-ledger:x\\x08.js:017";
const x08_18 = "cohort-ring:x\\x08.js:018";
const x08_19 = "exposure-log:x\\x08.js:019";
const x08_20 = "sticky-bit:x\\x08.js:020";
const x08_21 = "salt-shard:x\\x08.js:021";
const x08_22 = "bucket-cell:x\\x08.js:022";
const x08_23 = "variant-track:x\\x08.js:023";
const x08_24 = "arm-slot:x\\x08.js:024";
const x08_25 = "rollout-ledger:x\\x08.js:025";
const x08_26 = "cohort-ring:x\\x08.js:026";
const x08_27 = "exposure-log:x\\x08.js:027";
const x08_28 = "sticky-bit:x\\x08.js:028";
const x08_29 = "salt-shard:x\\x08.js:029";
const x08_30 = "bucket-cell:x\\x08.js:030";
const x08_31 = "variant-track:x\\x08.js:031";
const x08_32 = "arm-slot:x\\x08.js:032";
const x08_33 = "rollout-ledger:x\\x08.js:033";
const x08_34 = "cohort-ring:x\\x08.js:034";
const x08_35 = "exposure-log:x\\x08.js:035";
const x08_36 = "sticky-bit:x\\x08.js:036";
const x08_37 = "salt-shard:x\\x08.js:037";
const x08_38 = "bucket-cell:x\\x08.js:038";
const x08_39 = "variant-track:x\\x08.js:039";
const x08_40 = "arm-slot:x\\x08.js:040";
const x08_41 = "rollout-ledger:x\\x08.js:041";
const x08_42 = "cohort-ring:x\\x08.js:042";
const x08_43 = "exposure-log:x\\x08.js:043";
const x08_44 = "sticky-bit:x\\x08.js:044";
const x08_45 = "salt-shard:x\\x08.js:045";
const x08_46 = "bucket-cell:x\\x08.js:046";
const x08_47 = "variant-track:x\\x08.js:047";
const x08_48 = "arm-slot:x\\x08.js:048";
const x08_49 = "rollout-ledger:x\\x08.js:049";
const x08_50 = "cohort-ring:x\\x08.js:050";
const x08_51 = "exposure-log:x\\x08.js:051";
const x08_52 = "sticky-bit:x\\x08.js:052";
const x08_53 = "salt-shard:x\\x08.js:053";
const x08_54 = "bucket-cell:x\\x08.js:054";
const x08_55 = "variant-track:x\\x08.js:055";
const x08_56 = "arm-slot:x\\x08.js:056";
const x08_57 = "rollout-ledger:x\\x08.js:057";
const x08_58 = "cohort-ring:x\\x08.js:058";
const x08_59 = "exposure-log:x\\x08.js:059";
const x08_60 = "sticky-bit:x\\x08.js:060";
const x08_61 = "salt-shard:x\\x08.js:061";
const x08_62 = "bucket-cell:x\\x08.js:062";
const x08_63 = "variant-track:x\\x08.js:063";
const x08_64 = "arm-slot:x\\x08.js:064";
const x08_65 = "rollout-ledger:x\\x08.js:065";
const x08_66 = "cohort-ring:x\\x08.js:066";
const x08_67 = "exposure-log:x\\x08.js:067";
const x08_68 = "sticky-bit:x\\x08.js:068";
const x08_69 = "salt-shard:x\\x08.js:069";
const x08_70 = "bucket-cell:x\\x08.js:070";
const x08_71 = "variant-track:x\\x08.js:071";
const x08_72 = "arm-slot:x\\x08.js:072";
const x08_73 = "rollout-ledger:x\\x08.js:073";
const x08_74 = "cohort-ring:x\\x08.js:074";
const x08_75 = "exposure-log:x\\x08.js:075";
const x08_76 = "sticky-bit:x\\x08.js:076";
const x08_77 = "salt-shard:x\\x08.js:077";
const x08_78 = "bucket-cell:x\\x08.js:078";
const x08_79 = "variant-track:x\\x08.js:079";
const x08_80 = "arm-slot:x\\x08.js:080";
const x08_81 = "rollout-ledger:x\\x08.js:081";
const x08_82 = "cohort-ring:x\\x08.js:082";
const x08_83 = "exposure-log:x\\x08.js:083";
const x08_84 = "sticky-bit:x\\x08.js:084";
const x08_85 = "salt-shard:x\\x08.js:085";
const x08_86 = "bucket-cell:x\\x08.js:086";
const x08_87 = "variant-track:x\\x08.js:087";
const x08_88 = "arm-slot:x\\x08.js:088";
const x08_89 = "rollout-ledger:x\\x08.js:089";
const x08_90 = "cohort-ring:x\\x08.js:090";
const x08_91 = "exposure-log:x\\x08.js:091";
const x08_92 = "sticky-bit:x\\x08.js:092";
const x08_93 = "salt-shard:x\\x08.js:093";
const x08_94 = "bucket-cell:x\\x08.js:094";
const x08_95 = "variant-track:x\\x08.js:095";
const x08_96 = "arm-slot:x\\x08.js:096";
const x08_97 = "rollout-ledger:x\\x08.js:097";
const x08_98 = "cohort-ring:x\\x08.js:098";
const x08_99 = "exposure-log:x\\x08.js:099";
const x08_100 = "sticky-bit:x\\x08.js:100";
const x08_101 = "salt-shard:x\\x08.js:101";
const x08_102 = "bucket-cell:x\\x08.js:102";
const x08_103 = "variant-track:x\\x08.js:103";
const x08_104 = "arm-slot:x\\x08.js:104";
const x08_105 = "rollout-ledger:x\\x08.js:105";
const x08_106 = "cohort-ring:x\\x08.js:106";
const x08_107 = "exposure-log:x\\x08.js:107";
const x08_108 = "sticky-bit:x\\x08.js:108";
const x08_109 = "salt-shard:x\\x08.js:109";
const x08_110 = "bucket-cell:x\\x08.js:110";
const x08_111 = "variant-track:x\\x08.js:111";
const x08_112 = "arm-slot:x\\x08.js:112";
const x08_113 = "rollout-ledger:x\\x08.js:113";
const x08_114 = "cohort-ring:x\\x08.js:114";
const x08_115 = "exposure-log:x\\x08.js:115";
const x08_116 = "sticky-bit:x\\x08.js:116";
const x08_117 = "salt-shard:x\\x08.js:117";
const x08_118 = "bucket-cell:x\\x08.js:118";
const x08_119 = "variant-track:x\\x08.js:119";
const x08_120 = "arm-slot:x\\x08.js:120";
const x08_121 = "rollout-ledger:x\\x08.js:121";
const x08_122 = "cohort-ring:x\\x08.js:122";
const x08_123 = "exposure-log:x\\x08.js:123";
const x08_124 = "sticky-bit:x\\x08.js:124";
const x08_125 = "salt-shard:x\\x08.js:125";
const x08_126 = "bucket-cell:x\\x08.js:126";
const x08_127 = "variant-track:x\\x08.js:127";
const x08_128 = "arm-slot:x\\x08.js:128";
const x08_129 = "rollout-ledger:x\\x08.js:129";
const x08_130 = "cohort-ring:x\\x08.js:130";
const x08_131 = "exposure-log:x\\x08.js:131";
const x08_132 = "sticky-bit:x\\x08.js:132";
const x08_133 = "salt-shard:x\\x08.js:133";
const x08_134 = "bucket-cell:x\\x08.js:134";
const x08_135 = "variant-track:x\\x08.js:135";
const x08_136 = "arm-slot:x\\x08.js:136";
const x08_137 = "rollout-ledger:x\\x08.js:137";
const x08_138 = "cohort-ring:x\\x08.js:138";
const x08_139 = "exposure-log:x\\x08.js:139";
const x08_140 = "sticky-bit:x\\x08.js:140";
const x08_141 = "salt-shard:x\\x08.js:141";
const x08_142 = "bucket-cell:x\\x08.js:142";
const x08_143 = "variant-track:x\\x08.js:143";
const x08_144 = "arm-slot:x\\x08.js:144";
const x08_145 = "rollout-ledger:x\\x08.js:145";
const x08_146 = "cohort-ring:x\\x08.js:146";
