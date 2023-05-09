import Rotate, { Options } from 'ol/control/Rotate';
import { useControl } from './use-control';

export const useRotate = (options?: Options) => useControl(new Rotate(options));
