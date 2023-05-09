import Snap, { Options } from 'ol/interaction/Snap';
import { useInteraction } from './use-interaction';

export const useSnap = (options?: Options) => useInteraction(new Snap(options));
