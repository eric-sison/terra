import DragRotateAndZoom, { Options } from 'ol/interaction/DragRotateAndZoom';
import { useInteraction } from './use-interaction';

export const useDragRotateAndZoom = (options?: Options) => useInteraction(new DragRotateAndZoom(options));
