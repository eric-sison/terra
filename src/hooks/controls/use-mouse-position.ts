import MousePosition, { Options } from 'ol/control/MousePosition';
import { useControl } from './use-control';

export const useMousePosition = (options?: Options) => useControl(new MousePosition(options));
