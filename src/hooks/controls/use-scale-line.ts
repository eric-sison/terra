import ScaleLine, { Options } from 'ol/control/ScaleLine';
import { useControl } from './use-control';

export const useScaleLine = (options?: Options) => useControl(new ScaleLine(options));
