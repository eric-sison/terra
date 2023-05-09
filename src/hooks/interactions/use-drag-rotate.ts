import DragRotate, { Options } from 'ol/interaction/DragRotate';
import { useInteraction } from './use-interaction';

export const useDragRotate = (options?: Options) => useInteraction(new DragRotate(options));
