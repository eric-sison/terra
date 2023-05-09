import ZoomSlider, { Options } from 'ol/control/ZoomSlider';
import { useControl } from './use-control';

export const useZoomSlider = (options?: Options) => useControl(new ZoomSlider(options));
