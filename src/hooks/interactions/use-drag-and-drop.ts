import DragAndDrop, { Options } from 'ol/interaction/DragAndDrop';
import { useInteraction } from './use-interaction';

export const useDragAndDrop = (options?: Options) => useInteraction(new DragAndDrop(options));
