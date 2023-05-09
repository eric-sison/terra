import MouseWheelZoom, { Options } from 'ol/interaction/MouseWheelZoom';
import { useInteraction } from './use-interaction';

export const useMouseWheelZoom = (options?: Options) => useInteraction(new MouseWheelZoom(options));
