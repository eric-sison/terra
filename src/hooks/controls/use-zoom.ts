import Zoom, { Options } from 'ol/control/Zoom';
import { useControl } from './use-control';

export const useZoom = (options?: Options) => useControl(new Zoom(options));
