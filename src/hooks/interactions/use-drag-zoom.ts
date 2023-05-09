import DragZoom, { Options } from 'ol/interaction/DragZoom';
import { useInteraction } from './use-interaction';

export const useDragZoom = (options?: Options) => useInteraction(new DragZoom(options));
