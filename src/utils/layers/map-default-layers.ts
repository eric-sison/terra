import BaseLayer from 'ol/layer/Base';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';
import OSM from 'ol/source/OSM';

export type BaseMapLayer = {
  id: string;
  layer: BaseLayer;
  name: string;
  thumbnail: string;
  alt: string;
};

/**
 *  This will be fetched from the database
 */
export const defaultLayers: BaseMapLayer[] = [
  {
    id: 'osm-01',
    layer: new TileLayer({ source: new OSM({ crossOrigin: 'anonymous' }), visible: true }),
    thumbnail: '/map-thumbnails/openstreetmap.png',
    name: 'Open Street Map',
    alt: 'osm',
  },
  {
    id: 'bing-01',
    layer: new TileLayer({
      source: new BingMaps({ key: process.env.NEXT_PUBLIC_BING_KEY as string, imagerySet: 'Aerial' }),
      visible: false,
    }),
    thumbnail: '/map-thumbnails/bingmap.png',
    name: 'Bing Map',
    alt: 'bingmap',
  },
];
