import Modify, { Options } from 'ol/interaction/Modify';
import { useInteraction } from './use-interaction';

export const useModify = (options: Options) => useInteraction(new Modify(options));
