import Extent, { Options } from 'ol/interaction/Extent';
import { useInteraction } from './use-interaction';

export const useExtent = (options?: Options) => useInteraction(new Extent(options));
