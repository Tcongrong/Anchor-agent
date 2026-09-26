import { mountBatchLedger } from './w00.js';
import { mountPulseStream } from './w01.js';
import { mountQueueWindow } from './w02.js';
import { mountDrainRibbon } from './w03.js';
import { mountBeaconLedger } from './w04.js';
import { mountEntryShelf } from './w05.js';
import { mountSlotMatrix } from './w06.js';
import { mountWaveBench } from './w07.js';
import { mountFlushCatalog } from './w08.js';
import { mountContextStore } from './w09.js';
import { mountLabelBank } from './w10.js';
import { mountSeqCounter } from './w11.js';
import { mountBeatGrid } from './w12.js';
import { mountDepthGauge } from './w13.js';
import { mountAssetShelf } from './w14.js';
import { mountPropSheet } from './w15.js';
import { mountLabelCache } from './w16.js';
import { mountLayerRing } from './w17.js';
import { mountKeyBind } from './w18.js';
import { mountDrainReport } from './w19.js';

const mounts = [mountBatchLedger, mountPulseStream, mountQueueWindow, mountDrainRibbon, mountBeaconLedger, mountEntryShelf, mountSlotMatrix, mountWaveBench, mountFlushCatalog, mountContextStore, mountLabelBank, mountSeqCounter, mountBeatGrid, mountDepthGauge, mountAssetShelf, mountPropSheet, mountLabelCache, mountLayerRing, mountKeyBind, mountDrainReport];

export function mountPulseLikeVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
