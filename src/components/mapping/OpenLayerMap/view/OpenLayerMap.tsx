'use client';

import { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';
import { useMapStore } from '@terra/global/map-store';
import { Map } from 'ol';
import View from 'ol/View';
import { OpenLayerMapProps } from '../types/open-layer-map-types';

export const OpenLayerMap: FunctionComponent<OpenLayerMapProps> = ({
  children,
  keyboardEventTarget,
  maxTilesLoading,
  moveTolerance,
  pixelRatio,
  layers = [],
  defaultControls = false,
  defaultInteractions = true,
  ...viewOptions
}) => {
  // access setMap and removeMap from global store
  const { map, setMap, setMapRef, removeMap } = useMapStore((state) => state);

  // initial mapRef that will hold the current map instance
  const mapRef = useRef() as unknown as MutableRefObject<HTMLDivElement>;

  /**
   *  Initialize map instance on first load
   */
  useEffect(() => {
    // intialize map instance
    const map = new Map({
      view: new View(viewOptions),
      target: mapRef.current,
      controls: !defaultControls ? [] : undefined,
      interactions: !defaultInteractions ? [] : undefined,
      layers,
      keyboardEventTarget,
      maxTilesLoading,
      moveTolerance,
      pixelRatio,
    });

    // set current map instance in the global store
    setMap(map);

    // set map ref in the global store
    setMapRef(mapRef);

    // as soon as this component is loaded, set the focus to the current map
    mapRef.current.focus();

    // setup cleanup function to avoid unecessary rendering of this component
    return () => {
      // do nothing if map value is null
      if (map === null) return;

      // set map instance target to undefined
      map.setTarget(undefined);

      // set global store value for map to null
      removeMap();
    };

    // load this only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   *  Make sure that everytime a user hovers over the map,
   *  this component will regain focus - so that the map remains interactible.
   *
   *  This is usefull when a user interacts with UI elements outside the map container
   *  that takes focus out of the map.
   */
  useEffect(() => {
    // if current map instance is null
    if (!map) return;

    // listen on pointer move event to set focus on the map
    map.on('pointermove', () => mapRef.current.focus());

    return () => {
      // set map target to undefined
      map.setTarget(undefined);

      // invoke removeMap function from the store
      removeMap();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return (
    <div ref={mapRef} tabIndex={0} id="map" className="relative h-full w-full outline-none">
      {children}
    </div>
  );
};
