import Translate, { Options } from 'ol/interaction/Translate';
import { useInteraction } from './use-interaction';

export const useTranslate = (options?: Options) => useInteraction(new Translate(options));
