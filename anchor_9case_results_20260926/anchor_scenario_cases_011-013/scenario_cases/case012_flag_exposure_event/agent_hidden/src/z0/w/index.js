import { mountExposureBus } from './w00.js';
import { mountFlagRegistry } from './w01.js';
import { mountSignalLedger } from './w02.js';
import { mountArmCatalog } from './w03.js';
import { mountRolloutSheet } from './w04.js';
import { mountCohortFilter } from './w05.js';
import { mountPingQueue } from './w06.js';
import { mountDeskbarModel } from './w07.js';
import { mountBadgeQueue } from './w08.js';
import { mountVeilManager } from './w09.js';
import { mountLocaleKit } from './w10.js';
import { mountBindingSet } from './w11.js';
import { mountGroupTree } from './w12.js';
import { mountPaneState } from './w13.js';
import { mountAssetVault } from './w14.js';
import { mountPropSheet } from './w15.js';
import { mountTitleCache } from './w16.js';
import { mountFilmMap } from './w17.js';
import { mountHotkeyMap } from './w18.js';
import { mountTallyReporter } from './w19.js';

const mounts = [mountExposureBus, mountFlagRegistry, mountSignalLedger, mountArmCatalog, mountRolloutSheet, mountCohortFilter, mountPingQueue, mountDeskbarModel, mountBadgeQueue, mountVeilManager, mountLocaleKit, mountBindingSet, mountGroupTree, mountPaneState, mountAssetVault, mountPropSheet, mountTitleCache, mountFilmMap, mountHotkeyMap, mountTallyReporter];

export function mountFlagLikeVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
