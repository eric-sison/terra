import Pointer, { Options } from 'ol/interaction/Pointer';
import { useInteraction } from './use-interaction';

export const usePointer = (options?: Options) => useInteraction(new Pointer(options));
