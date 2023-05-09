import ZoomToExtent, { Options } from 'ol/control/ZoomToExtent';
import { useControl } from './use-control';

export const useZoomToExtent = (options?: Options) => useControl(new ZoomToExtent(options));
