'use client';

import { FunctionComponent, useEffect, useMemo } from 'react';
import { MapContainer } from '@terra/components/MapContainer/view/MapContainer';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { useMap } from '@terra/hooks';
import Group from 'ol/layer/Group';
import BingMaps from 'ol/source/BingMaps';
import { MapSwitcher } from '@terra/components/MapSwitcher/view/MapSwitcher';

export const TerraMap: FunctionComponent = () => {
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
    <MapContainer
      center={[125.1726, 6.1135]}
      zoom={16}
      maxZoom={19}
      minZoom={4}
      projection={'EPSG:4326'}
      layers={newLayers}
    >
      <MapSwitcher />
    </MapContainer>
  );
};
