import Interaction from 'ol/interaction/Interaction';
import { useMap } from '../map/use-map';
import { useEffect } from 'react';

export const useInteraction = <T extends Interaction>(interaction: T) => {
  // get current map instance
  const map = useMap();

  useEffect(() => {
    // do nothing if current map instance is null
    if (map === null) return;

    // add the interaction into the map instance
    map.addInteraction(interaction);

    // setup a cleanup function to avoid unecessary re-render
    return () => {
      map.removeInteraction(interaction);
    };

    // listen to changes in map and options values to trigger this side effect
  }, [map, interaction]);

  return interaction;
};
