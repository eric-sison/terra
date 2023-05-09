import Draw, { Options } from 'ol/interaction/Draw';
import { useInteraction } from './use-interaction';

export const useDraw = (options: Options) => useInteraction(new Draw(options));
