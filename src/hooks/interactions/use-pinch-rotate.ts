import PinchRotate, { Options } from 'ol/interaction/PinchRotate';
import { useInteraction } from './use-interaction';

export const usePinchRotate = (options?: Options) => useInteraction(new PinchRotate(options));
