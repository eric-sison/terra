'use client';

import { FunctionComponent, useMemo } from 'react';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Group from 'ol/layer/Group';
import BingMaps from 'ol/source/BingMaps';
import { OpenLayerMap } from '../../OpenLayerMap';
import { useMap } from '@terra/hooks';

export const TerraMap: FunctionComponent = () => {
  const { map } = useMap();
  const vectorDrawSrc = useMemo(() => new VectorSource({ wrapX: false }), []);
  const layerTileSrc = useMemo(() => new OSM(), []);
  const layer = useMemo(() => new TileLayer({ source: layerTileSrc }), [layerTileSrc]);
  const raster = useMemo(
    () =>
      new VectorLayer({
        source: vectorDrawSrc,
        style: {
          'fill-color': 'rgba(255, 255, 255, 0.2)',
          'stroke-color': '#ffcc33',
          'stroke-width': 2,
          'circle-radius': 7,
          'circle-fill-color': '#ffcc33',
        },
      }),
    [vectorDrawSrc]
  );

  const newLayers = [
    new Group({
      layers: [
        new TileLayer({ source: new OSM(), visible: true }),
        new TileLayer({
          source: new BingMaps({ key: process.env.NEXT_PUBLIC_BING_KEY as string, imagerySet: 'Aerial' }),
          visible: false,
        }),
      ],
    }),
  ];

  return (
    <OpenLayerMap
      center={[125.1726, 6.1135]}
      zoom={16}
      maxZoom={19}
      minZoom={4}
      projection={'EPSG:4326'}
      layers={newLayers}
    ></OpenLayerMap>
  );
};
