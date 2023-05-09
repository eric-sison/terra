import DragPan, { Options } from 'ol/interaction/DragPan';
import { useInteraction } from './use-interaction';

export const useDragPan = (options?: Options) => useInteraction(new DragPan(options));
