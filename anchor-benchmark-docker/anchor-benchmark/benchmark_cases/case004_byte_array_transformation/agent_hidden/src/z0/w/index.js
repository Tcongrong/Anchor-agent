import { runViewerEventBus } from './w00.js';
import { runPreferenceStore } from './w01.js';
import { runViewportModel } from './w02.js';
import { runTextLayerRegistry } from './w03.js';
import { runAnnotationCatalog } from './w04.js';
import { runFindStateController } from './w05.js';
import { runHistoryQueue } from './w06.js';
import { runToolbarModel } from './w07.js';
import { runThumbnailQueue } from './w08.js';
import { runOverlayManager } from './w09.js';
import { runLocalizationBundle } from './w10.js';
import { runFormFieldSet } from './w11.js';
import { runOutlineTree } from './w12.js';
import { runScrollState } from './w13.js';
import { runAttachmentCatalog } from './w14.js';
import { runDocumentPropertiesPane } from './w15.js';
import { runPageLabelCache } from './w16.js';
import { runLayerVisibilityMap } from './w17.js';
import { runKeyboardCommandMap } from './w18.js';
import { runProgressReporter } from './w19.js';

const runners = [
  runViewerEventBus,
  runPreferenceStore,
  runViewportModel,
  runTextLayerRegistry,
  runAnnotationCatalog,
  runFindStateController,
  runHistoryQueue,
  runToolbarModel,
  runThumbnailQueue,
  runOverlayManager,
  runLocalizationBundle,
  runFormFieldSet,
  runOutlineTree,
  runScrollState,
  runAttachmentCatalog,
  runDocumentPropertiesPane,
  runPageLabelCache,
  runLayerVisibilityMap,
  runKeyboardCommandMap,
  runProgressReporter,
];

export function mountPdfLikeVendor(documentRef, state = {}) {
  const target = documentRef && documentRef.documentElement ? documentRef.documentElement : null;
  const rows = [{ label: 'Packet builder', value: 'byte array route', role: 'status' }];
  const summaries = runners.map((runner, index) => runner(target, { seed: `viewer-${index}`, rows }));
  if (state && state.events) state.events.push(`pdf-like-vendor:${summaries.length}`);
  return summaries;
}
