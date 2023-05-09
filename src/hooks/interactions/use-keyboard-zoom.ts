import KeyboardZoom, { Options } from 'ol/interaction/KeyboardZoom';
import { useInteraction } from './use-interaction';

export const useKeyboardZoom = (options?: Options) => useInteraction(new KeyboardZoom(options));
