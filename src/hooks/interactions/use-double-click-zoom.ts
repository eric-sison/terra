import DoubleClickZoom, { Options } from 'ol/interaction/DoubleClickZoom';
import { useInteraction } from './use-interaction';

export const useDoubleCLickZoom = (options?: Options) => useInteraction(new DoubleClickZoom(options));
