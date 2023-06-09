import { useEffect } from 'react';
import { useMap } from '../map/use-map';
import Control from 'ol/control/Control';

export const useControl = <T extends Control>(control: T) => {
  // get current map instance
  const { map } = useMap();

  useEffect(() => {
    // do nothing if current map instance is null
    if (map === null) return;

    // add the control into the map instance
    map.addControl(control);

    // setup a cleanup function to avoid unecessary re-render
    return () => {
      map.addControl(control);
    };

    // listen to changes in map and control values to trigger this side effect
  }, [map, control]);

  return control;
};
