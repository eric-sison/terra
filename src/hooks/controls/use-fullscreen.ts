import FullScreen, { Options } from 'ol/control/FullScreen';
import { useControl } from './use-control';

export const useFullscreen = (options?: Options) => useControl(new FullScreen(options));
