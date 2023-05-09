import KeyboardPan, { Options } from 'ol/interaction/KeyboardPan';
import { useInteraction } from './use-interaction';

export const useKeyboardPan = (options?: Options) => useInteraction(new KeyboardPan(options));
