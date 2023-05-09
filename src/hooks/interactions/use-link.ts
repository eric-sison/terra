import Link, { Options } from 'ol/interaction/Link';
import { useInteraction } from './use-interaction';

export const useLink = (options?: Options) => useInteraction(new Link(options));
