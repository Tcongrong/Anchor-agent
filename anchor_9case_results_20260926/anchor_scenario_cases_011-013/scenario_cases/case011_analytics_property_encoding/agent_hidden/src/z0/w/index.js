import { mountPropRegistry } from './w00.js';
import { mountScopeLedger } from './w01.js';
import { mountValueBoard } from './w02.js';
import { mountStripGate } from './w03.js';
import { mountBucketGrid } from './w04.js';
import { mountCodePane } from './w05.js';
import { mountEntryCell } from './w06.js';
import { mountFrameDot } from './w07.js';
import { mountChannelMap } from './w08.js';
import { mountMixDesk } from './w09.js';
import { mountTagQueue } from './w10.js';
import { mountOverlayGrid } from './w11.js';
import { mountLocalePack } from './w12.js';
import { mountFieldBinder } from './w13.js';
import { mountOutlineList } from './w14.js';
import { mountScrollMark } from './w15.js';
import { mountAssetVault } from './w16.js';
import { mountPaneRender } from './w17.js';
import { mountLabelStore } from './w18.js';
import { mountLayerIndex } from './w19.js';

const mounts = [mountPropRegistry, mountScopeLedger, mountValueBoard, mountStripGate, mountBucketGrid, mountCodePane, mountEntryCell, mountFrameDot, mountChannelMap, mountMixDesk, mountTagQueue, mountOverlayGrid, mountLocalePack, mountFieldBinder, mountOutlineList, mountScrollMark, mountAssetVault, mountPaneRender, mountLabelStore, mountLayerIndex];

export function mountDeskLikeVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
