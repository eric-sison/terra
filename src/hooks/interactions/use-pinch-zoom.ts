import PinchZoom, { Options } from 'ol/interaction/PinchZoom';
import { useInteraction } from './use-interaction';

export const usePinchZoom = (options?: Options) => useInteraction(new PinchZoom(options));
