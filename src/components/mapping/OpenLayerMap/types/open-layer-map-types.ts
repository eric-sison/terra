import { MapOptions } from 'ol/Map';
import { ViewOptions } from 'ol/View';
import { ReactNode } from 'react';

export type OpenLayerMapProps = ViewOptions &
  Pick<MapOptions, 'keyboardEventTarget' | 'maxTilesLoading' | 'moveTolerance' | 'pixelRatio' | 'layers'> & {
    children?: ReactNode | ReactNode[];
    defaultInteractions?: boolean;
    defaultControls?: boolean;
  };
