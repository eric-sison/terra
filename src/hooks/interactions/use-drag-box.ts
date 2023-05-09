import DragBox, { Options } from 'ol/interaction/DragBox';
import { useInteraction } from './use-interaction';

export const useDragBox = (options?: Options) => useInteraction(new DragBox(options));
