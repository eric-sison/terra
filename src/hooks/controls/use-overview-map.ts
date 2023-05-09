import OverviewMap, { Options } from 'ol/control/OverviewMap';
import { useControl } from './use-control';

export const useOverviewMap = (options?: Options) => useControl(new OverviewMap(options));
