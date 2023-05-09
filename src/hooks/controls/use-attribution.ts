import Attribution, { Options } from 'ol/control/Attribution';
import { useControl } from './use-control';

export const useAttribution = (options?: Options) => useControl(new Attribution(options));
