import TileLayer from 'ol/layer/Tile';
import TileSource from 'ol/source/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { useMap } from './use-map';
import { useEffect } from 'react';

export const useAddLayers = (layer: Array<TileLayer<TileSource> | VectorLayer<VectorSource>>) => {
  // get the current map instance
  const { map } = useMap();

  useEffect(() => {
    // do nothing if map instance is null
    if (map === null) return;

    // otherwise, add the layer into the map instance
    if (layer) layer.forEach((currentLayer) => map.addLayer(currentLayer));

    // setup a cleanup function to avoid unecessary re-render
    return () => {
      layer.forEach((currentLayer) => map.removeLayer(currentLayer));
    };

    // listen to map and layer values to trigger this side effect
  }, [map, layer]);
};
