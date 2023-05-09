import Select, { Options } from 'ol/interaction/Select';
import { useInteraction } from './use-interaction';

export const useSelect = (options?: Options) => useInteraction(new Select(options));
