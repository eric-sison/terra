import BaseLayer from 'ol/layer/Base';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';
import OSM from 'ol/source/OSM';

export type MapLayer = {
  layer: BaseLayer;
  name: string;
  thumbnail: string;
  alt: string;
};

export const defaultLayers: MapLayer[] = [
  {
    layer: new TileLayer({ source: new OSM(), visible: true }),
    thumbnail: '/map-thumbnails/openstreetmap.png',
    name: 'Open Street Map',
    alt: 'osm',
  },
  {
    layer: new TileLayer({
      source: new BingMaps({ key: process.env.NEXT_PUBLIC_BING_KEY as string, imagerySet: 'Aerial' }),
      visible: false,
    }),
    thumbnail: '/map-thumbnails/bingmap.png',
    name: 'Bing Map',
    alt: 'bingmap',
  },
];
