import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 43,
  salt: 'f:17:lane',
  mask: 1844960855
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'ghost43@flags.dev',
    flag: 'flag_43',
    sticky: '0'
  };
}

function remix3(value, index) {
  return value.slice(0, 8) + '/' + spread(cfg.mask, cfg.slot).toString(36).slice(0, 4);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x43_0 = "arm-slot:x\\x43.js:000";
const x43_1 = "rollout-ledger:x\\x43.js:001";
const x43_2 = "cohort-ring:x\\x43.js:002";
const x43_3 = "exposure-log:x\\x43.js:003";
const x43_4 = "sticky-bit:x\\x43.js:004";
const x43_5 = "salt-shard:x\\x43.js:005";
const x43_6 = "bucket-cell:x\\x43.js:006";
const x43_7 = "variant-track:x\\x43.js:007";
const x43_8 = "arm-slot:x\\x43.js:008";
const x43_9 = "rollout-ledger:x\\x43.js:009";
const x43_10 = "cohort-ring:x\\x43.js:010";
const x43_11 = "exposure-log:x\\x43.js:011";
const x43_12 = "sticky-bit:x\\x43.js:012";
const x43_13 = "salt-shard:x\\x43.js:013";
const x43_14 = "bucket-cell:x\\x43.js:014";
const x43_15 = "variant-track:x\\x43.js:015";
const x43_16 = "arm-slot:x\\x43.js:016";
const x43_17 = "rollout-ledger:x\\x43.js:017";
const x43_18 = "cohort-ring:x\\x43.js:018";
const x43_19 = "exposure-log:x\\x43.js:019";
const x43_20 = "sticky-bit:x\\x43.js:020";
const x43_21 = "salt-shard:x\\x43.js:021";
const x43_22 = "bucket-cell:x\\x43.js:022";
const x43_23 = "variant-track:x\\x43.js:023";
const x43_24 = "arm-slot:x\\x43.js:024";
const x43_25 = "rollout-ledger:x\\x43.js:025";
const x43_26 = "cohort-ring:x\\x43.js:026";
const x43_27 = "exposure-log:x\\x43.js:027";
const x43_28 = "sticky-bit:x\\x43.js:028";
const x43_29 = "salt-shard:x\\x43.js:029";
const x43_30 = "bucket-cell:x\\x43.js:030";
const x43_31 = "variant-track:x\\x43.js:031";
const x43_32 = "arm-slot:x\\x43.js:032";
const x43_33 = "rollout-ledger:x\\x43.js:033";
const x43_34 = "cohort-ring:x\\x43.js:034";
const x43_35 = "exposure-log:x\\x43.js:035";
const x43_36 = "sticky-bit:x\\x43.js:036";
const x43_37 = "salt-shard:x\\x43.js:037";
const x43_38 = "bucket-cell:x\\x43.js:038";
const x43_39 = "variant-track:x\\x43.js:039";
const x43_40 = "arm-slot:x\\x43.js:040";
const x43_41 = "rollout-ledger:x\\x43.js:041";
const x43_42 = "cohort-ring:x\\x43.js:042";
const x43_43 = "exposure-log:x\\x43.js:043";
const x43_44 = "sticky-bit:x\\x43.js:044";
const x43_45 = "salt-shard:x\\x43.js:045";
const x43_46 = "bucket-cell:x\\x43.js:046";
const x43_47 = "variant-track:x\\x43.js:047";
const x43_48 = "arm-slot:x\\x43.js:048";
const x43_49 = "rollout-ledger:x\\x43.js:049";
const x43_50 = "cohort-ring:x\\x43.js:050";
const x43_51 = "exposure-log:x\\x43.js:051";
const x43_52 = "sticky-bit:x\\x43.js:052";
const x43_53 = "salt-shard:x\\x43.js:053";
const x43_54 = "bucket-cell:x\\x43.js:054";
const x43_55 = "variant-track:x\\x43.js:055";
const x43_56 = "arm-slot:x\\x43.js:056";
const x43_57 = "rollout-ledger:x\\x43.js:057";
const x43_58 = "cohort-ring:x\\x43.js:058";
const x43_59 = "exposure-log:x\\x43.js:059";
const x43_60 = "sticky-bit:x\\x43.js:060";
const x43_61 = "salt-shard:x\\x43.js:061";
const x43_62 = "bucket-cell:x\\x43.js:062";
const x43_63 = "variant-track:x\\x43.js:063";
const x43_64 = "arm-slot:x\\x43.js:064";
const x43_65 = "rollout-ledger:x\\x43.js:065";
const x43_66 = "cohort-ring:x\\x43.js:066";
const x43_67 = "exposure-log:x\\x43.js:067";
const x43_68 = "sticky-bit:x\\x43.js:068";
const x43_69 = "salt-shard:x\\x43.js:069";
const x43_70 = "bucket-cell:x\\x43.js:070";
const x43_71 = "variant-track:x\\x43.js:071";
const x43_72 = "arm-slot:x\\x43.js:072";
const x43_73 = "rollout-ledger:x\\x43.js:073";
const x43_74 = "cohort-ring:x\\x43.js:074";
const x43_75 = "exposure-log:x\\x43.js:075";
const x43_76 = "sticky-bit:x\\x43.js:076";
const x43_77 = "salt-shard:x\\x43.js:077";
const x43_78 = "bucket-cell:x\\x43.js:078";
const x43_79 = "variant-track:x\\x43.js:079";
const x43_80 = "arm-slot:x\\x43.js:080";
const x43_81 = "rollout-ledger:x\\x43.js:081";
const x43_82 = "cohort-ring:x\\x43.js:082";
const x43_83 = "exposure-log:x\\x43.js:083";
const x43_84 = "sticky-bit:x\\x43.js:084";
const x43_85 = "salt-shard:x\\x43.js:085";
const x43_86 = "bucket-cell:x\\x43.js:086";
const x43_87 = "variant-track:x\\x43.js:087";
const x43_88 = "arm-slot:x\\x43.js:088";
const x43_89 = "rollout-ledger:x\\x43.js:089";
const x43_90 = "cohort-ring:x\\x43.js:090";
const x43_91 = "exposure-log:x\\x43.js:091";
const x43_92 = "sticky-bit:x\\x43.js:092";
const x43_93 = "salt-shard:x\\x43.js:093";
const x43_94 = "bucket-cell:x\\x43.js:094";
const x43_95 = "variant-track:x\\x43.js:095";
const x43_96 = "arm-slot:x\\x43.js:096";
const x43_97 = "rollout-ledger:x\\x43.js:097";
const x43_98 = "cohort-ring:x\\x43.js:098";
const x43_99 = "exposure-log:x\\x43.js:099";
const x43_100 = "sticky-bit:x\\x43.js:100";
const x43_101 = "salt-shard:x\\x43.js:101";
const x43_102 = "bucket-cell:x\\x43.js:102";
const x43_103 = "variant-track:x\\x43.js:103";
const x43_104 = "arm-slot:x\\x43.js:104";
const x43_105 = "rollout-ledger:x\\x43.js:105";
const x43_106 = "cohort-ring:x\\x43.js:106";
const x43_107 = "exposure-log:x\\x43.js:107";
const x43_108 = "sticky-bit:x\\x43.js:108";
const x43_109 = "salt-shard:x\\x43.js:109";
const x43_110 = "bucket-cell:x\\x43.js:110";
const x43_111 = "variant-track:x\\x43.js:111";
const x43_112 = "arm-slot:x\\x43.js:112";
const x43_113 = "rollout-ledger:x\\x43.js:113";
const x43_114 = "cohort-ring:x\\x43.js:114";
const x43_115 = "exposure-log:x\\x43.js:115";
const x43_116 = "sticky-bit:x\\x43.js:116";
const x43_117 = "salt-shard:x\\x43.js:117";
const x43_118 = "bucket-cell:x\\x43.js:118";
const x43_119 = "variant-track:x\\x43.js:119";
const x43_120 = "arm-slot:x\\x43.js:120";
const x43_121 = "rollout-ledger:x\\x43.js:121";
const x43_122 = "cohort-ring:x\\x43.js:122";
const x43_123 = "exposure-log:x\\x43.js:123";
const x43_124 = "sticky-bit:x\\x43.js:124";
const x43_125 = "salt-shard:x\\x43.js:125";
const x43_126 = "bucket-cell:x\\x43.js:126";
const x43_127 = "variant-track:x\\x43.js:127";
const x43_128 = "arm-slot:x\\x43.js:128";
const x43_129 = "rollout-ledger:x\\x43.js:129";
const x43_130 = "cohort-ring:x\\x43.js:130";
const x43_131 = "exposure-log:x\\x43.js:131";
const x43_132 = "sticky-bit:x\\x43.js:132";
const x43_133 = "salt-shard:x\\x43.js:133";
const x43_134 = "bucket-cell:x\\x43.js:134";
const x43_135 = "variant-track:x\\x43.js:135";
const x43_136 = "arm-slot:x\\x43.js:136";
const x43_137 = "rollout-ledger:x\\x43.js:137";
const x43_138 = "cohort-ring:x\\x43.js:138";
const x43_139 = "exposure-log:x\\x43.js:139";
const x43_140 = "sticky-bit:x\\x43.js:140";
const x43_141 = "salt-shard:x\\x43.js:141";
const x43_142 = "bucket-cell:x\\x43.js:142";
const x43_143 = "variant-track:x\\x43.js:143";
const x43_144 = "arm-slot:x\\x43.js:144";
const x43_145 = "rollout-ledger:x\\x43.js:145";
const x43_146 = "cohort-ring:x\\x43.js:146";
const x43_147 = "exposure-log:x\\x43.js:147";
const x43_148 = "sticky-bit:x\\x43.js:148";
const x43_149 = "salt-shard:x\\x43.js:149";
const x43_150 = "bucket-cell:x\\x43.js:150";
const x43_151 = "variant-track:x\\x43.js:151";
const x43_152 = "arm-slot:x\\x43.js:152";
const x43_153 = "rollout-ledger:x\\x43.js:153";
