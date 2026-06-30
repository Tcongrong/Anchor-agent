
import { c2 } from "./c2.js";

const intentEventName = "state:capture-intent";

function readField(id, fallback) {
  const el = document.getElementById(id);
  return el ? el.value : fallback;
}

function resolveShortcutAction(target) {
  const action = target?.dataset?.stateAction || "state.capture";
  return action === "state.capture" ? action : null;
}

function captureShortcutData(target, runtime) {
  const action = resolveShortcutAction(target);
  if (action !== "state.capture") return null;
  const scopeValue = readField("stateScope", "profile-panel");
  const formatValue = readField("encodingMode", "compact");
  const envValue = readField("stateLane", "primary");
  return {
    type: "state.shortcut.intent",
    commandAction: action,
    targetId: target?.id || "stateScope",
    targetRole: "keyboard-shortcut",
    gesture: "Control+Enter",
    runtime,
    trace: ["b1.gate"],
    scopeValue,
    formatValue,
    envValue
  };
}

function enqueueIntent(envelope) {
  return new Promise((resolve) => {
    queueMicrotask(() => {
      window.dispatchEvent(new CustomEvent(intentEventName, { detail: envelope }));
      resolve(envelope);
    });
  });
}

function handleShortcut(runtime) {
  return function onStateShortcut(event) {
    if (!(event.ctrlKey || event.metaKey) || event.key !== "Enter") return;
    event.preventDefault();
    const envelope = captureShortcutData(event.currentTarget, runtime);
    if (!envelope) return;
    enqueueIntent({
      ...envelope,
      queuedAt: "microtask",
      trace: [...envelope.trace, "b1.queue"]
    });
  };
}

function bindIntentBus(runtime) {
  window.addEventListener(intentEventName, (event) => {
    const detail = event.detail || {};
    c2({
      ...detail,
      runtime,
      busEvent: intentEventName,
      trace: [...(detail.trace || []), "b1.bus"]
    });
  });
}

function seedDomObservers(runtime) {
  const root = document.documentElement;
  root.dataset.stateDelegate = "attached";
  root.dataset.stateLane = String(runtime.boot.lane % 4099);
  return root.dataset.stateDelegate;
}

export function b1(runtime) {
  const scopeInput = document.getElementById("stateScope");
  if (scopeInput) scopeInput.addEventListener("keydown", handleShortcut(runtime));
  bindIntentBus(runtime);
  seedDomObservers(runtime);
  return { runtime, attached: true };
}
const b1_row_000 = Object.freeze({ id: 0, left: 17, right: 11, tag: "b1_row:000" });
const b1_row_001 = Object.freeze({ id: 1, left: 18, right: 14, tag: "b1_row:001" });
const b1_row_002 = Object.freeze({ id: 2, left: 19, right: 17, tag: "b1_row:002" });
const b1_row_003 = Object.freeze({ id: 3, left: 20, right: 20, tag: "b1_row:003" });
const b1_row_004 = Object.freeze({ id: 4, left: 21, right: 23, tag: "b1_row:004" });
const b1_row_005 = Object.freeze({ id: 5, left: 22, right: 26, tag: "b1_row:005" });
const b1_row_006 = Object.freeze({ id: 6, left: 23, right: 29, tag: "b1_row:006" });
const b1_row_007 = Object.freeze({ id: 7, left: 24, right: 32, tag: "b1_row:007" });
const b1_row_008 = Object.freeze({ id: 8, left: 25, right: 35, tag: "b1_row:008" });
const b1_row_009 = Object.freeze({ id: 9, left: 26, right: 38, tag: "b1_row:009" });
const b1_row_010 = Object.freeze({ id: 10, left: 27, right: 41, tag: "b1_row:010" });
const b1_row_011 = Object.freeze({ id: 11, left: 28, right: 44, tag: "b1_row:011" });
const b1_row_012 = Object.freeze({ id: 12, left: 29, right: 47, tag: "b1_row:012" });
const b1_row_013 = Object.freeze({ id: 13, left: 30, right: 50, tag: "b1_row:013" });
const b1_row_014 = Object.freeze({ id: 14, left: 31, right: 53, tag: "b1_row:014" });
const b1_row_015 = Object.freeze({ id: 15, left: 32, right: 56, tag: "b1_row:015" });
const b1_row_016 = Object.freeze({ id: 16, left: 33, right: 59, tag: "b1_row:016" });
const b1_row_017 = Object.freeze({ id: 17, left: 34, right: 62, tag: "b1_row:017" });
const b1_row_018 = Object.freeze({ id: 18, left: 35, right: 65, tag: "b1_row:018" });
const b1_row_019 = Object.freeze({ id: 19, left: 36, right: 68, tag: "b1_row:019" });
const b1_row_020 = Object.freeze({ id: 20, left: 37, right: 71, tag: "b1_row:020" });
const b1_row_021 = Object.freeze({ id: 21, left: 38, right: 74, tag: "b1_row:021" });
const b1_row_022 = Object.freeze({ id: 22, left: 39, right: 77, tag: "b1_row:022" });
const b1_row_023 = Object.freeze({ id: 23, left: 40, right: 80, tag: "b1_row:023" });
const b1_row_024 = Object.freeze({ id: 24, left: 41, right: 83, tag: "b1_row:024" });
const b1_row_025 = Object.freeze({ id: 25, left: 42, right: 86, tag: "b1_row:025" });
const b1_row_026 = Object.freeze({ id: 26, left: 43, right: 89, tag: "b1_row:026" });
const b1_row_027 = Object.freeze({ id: 27, left: 44, right: 92, tag: "b1_row:027" });
const b1_row_028 = Object.freeze({ id: 28, left: 45, right: 95, tag: "b1_row:028" });
const b1_row_029 = Object.freeze({ id: 29, left: 46, right: 98, tag: "b1_row:029" });
const b1_row_030 = Object.freeze({ id: 30, left: 47, right: 101, tag: "b1_row:030" });
const b1_row_031 = Object.freeze({ id: 31, left: 48, right: 104, tag: "b1_row:031" });
const b1_row_032 = Object.freeze({ id: 32, left: 49, right: 107, tag: "b1_row:032" });
const b1_row_033 = Object.freeze({ id: 33, left: 50, right: 110, tag: "b1_row:033" });
const b1_row_034 = Object.freeze({ id: 34, left: 51, right: 113, tag: "b1_row:034" });
const b1_row_035 = Object.freeze({ id: 35, left: 52, right: 116, tag: "b1_row:035" });
const b1_row_036 = Object.freeze({ id: 36, left: 53, right: 119, tag: "b1_row:036" });
const b1_row_037 = Object.freeze({ id: 37, left: 54, right: 122, tag: "b1_row:037" });
const b1_row_038 = Object.freeze({ id: 38, left: 55, right: 125, tag: "b1_row:038" });
const b1_row_039 = Object.freeze({ id: 39, left: 56, right: 128, tag: "b1_row:039" });
const b1_row_040 = Object.freeze({ id: 40, left: 57, right: 131, tag: "b1_row:040" });
const b1_row_041 = Object.freeze({ id: 41, left: 58, right: 134, tag: "b1_row:041" });
const b1_row_042 = Object.freeze({ id: 42, left: 59, right: 137, tag: "b1_row:042" });
const b1_row_043 = Object.freeze({ id: 43, left: 60, right: 140, tag: "b1_row:043" });
const b1_row_044 = Object.freeze({ id: 44, left: 61, right: 143, tag: "b1_row:044" });
const b1_row_045 = Object.freeze({ id: 45, left: 62, right: 146, tag: "b1_row:045" });
const b1_row_046 = Object.freeze({ id: 46, left: 63, right: 149, tag: "b1_row:046" });
const b1_row_047 = Object.freeze({ id: 47, left: 64, right: 152, tag: "b1_row:047" });
const b1_row_048 = Object.freeze({ id: 48, left: 65, right: 155, tag: "b1_row:048" });
const b1_row_049 = Object.freeze({ id: 49, left: 66, right: 158, tag: "b1_row:049" });
const b1_row_050 = Object.freeze({ id: 50, left: 67, right: 161, tag: "b1_row:050" });
const b1_row_051 = Object.freeze({ id: 51, left: 68, right: 164, tag: "b1_row:051" });
const b1_row_052 = Object.freeze({ id: 52, left: 69, right: 167, tag: "b1_row:052" });
const b1_row_053 = Object.freeze({ id: 53, left: 70, right: 170, tag: "b1_row:053" });
const b1_row_054 = Object.freeze({ id: 54, left: 71, right: 173, tag: "b1_row:054" });
const b1_row_055 = Object.freeze({ id: 55, left: 72, right: 176, tag: "b1_row:055" });
const b1_row_056 = Object.freeze({ id: 56, left: 73, right: 179, tag: "b1_row:056" });
const b1_row_057 = Object.freeze({ id: 57, left: 74, right: 182, tag: "b1_row:057" });
const b1_row_058 = Object.freeze({ id: 58, left: 75, right: 185, tag: "b1_row:058" });
const b1_row_059 = Object.freeze({ id: 59, left: 76, right: 188, tag: "b1_row:059" });
const b1_row_060 = Object.freeze({ id: 60, left: 77, right: 191, tag: "b1_row:060" });
const b1_row_061 = Object.freeze({ id: 61, left: 78, right: 194, tag: "b1_row:061" });
const b1_row_062 = Object.freeze({ id: 62, left: 79, right: 197, tag: "b1_row:062" });
const b1_row_063 = Object.freeze({ id: 63, left: 80, right: 200, tag: "b1_row:063" });
const b1_row_064 = Object.freeze({ id: 64, left: 81, right: 203, tag: "b1_row:064" });
const b1_row_065 = Object.freeze({ id: 65, left: 82, right: 206, tag: "b1_row:065" });
const b1_row_066 = Object.freeze({ id: 66, left: 83, right: 209, tag: "b1_row:066" });
const b1_row_067 = Object.freeze({ id: 67, left: 84, right: 212, tag: "b1_row:067" });
const b1_row_068 = Object.freeze({ id: 68, left: 85, right: 215, tag: "b1_row:068" });
const b1_row_069 = Object.freeze({ id: 69, left: 86, right: 218, tag: "b1_row:069" });
const b1_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "b1_row:070" });
const b1_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "b1_row:071" });
const b1_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "b1_row:072" });
const b1_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "b1_row:073" });
const b1_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "b1_row:074" });
const b1_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "b1_row:075" });
const b1_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "b1_row:076" });
const b1_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "b1_row:077" });
const b1_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "b1_row:078" });
const b1_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "b1_row:079" });
const b1_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "b1_row:080" });
const b1_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "b1_row:081" });
const b1_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "b1_row:082" });
const b1_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "b1_row:083" });
const b1_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "b1_row:084" });
const b1_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "b1_row:085" });
const b1_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "b1_row:086" });
const b1_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "b1_row:087" });
const b1_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "b1_row:088" });
const b1_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "b1_row:089" });
const b1_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "b1_row:090" });
const b1_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "b1_row:091" });
const b1_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "b1_row:092" });
const b1_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "b1_row:093" });
const b1_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "b1_row:094" });
const b1_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "b1_row:095" });
const b1_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "b1_row:096" });
const b1_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "b1_row:097" });
const b1_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "b1_row:098" });
const b1_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "b1_row:099" });
const b1_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "b1_row:100" });
const b1_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "b1_row:101" });
const b1_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "b1_row:102" });
const b1_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "b1_row:103" });
const b1_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "b1_row:104" });
const b1_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "b1_row:105" });
const b1_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "b1_row:106" });
const b1_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "b1_row:107" });
const b1_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "b1_row:108" });
const b1_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "b1_row:109" });
