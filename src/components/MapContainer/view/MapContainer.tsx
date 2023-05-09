/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';
import { useMapStore } from '@terra/global/map-store';
import { Map } from 'ol';
import { MapContainerProps } from '../types/map-container-types';
import View from 'ol/View';

export const MapContainer: FunctionComponent<MapContainerProps> = ({
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
  const { setMap, setMapRef, removeMap } = useMapStore((state) => state);

  // initial mapRef that will hold the current map instance
  const mapRef = useRef() as unknown as MutableRefObject<HTMLDivElement>;

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
  }, []);

  /**
   *  - Set mapRef to be equal to this parent div's ref to target the map's container.
   *  - Make sure that map's height and width takes its parent's full height and width to be able to render tha map.
   *  - Make sure to specify map container's tabIndex to make sure it's focusable.
   *  - This is important to some map interactions that require map focus, such as KeyboardPan, KeyboardZoom, etc.
   */
  return (
    <div ref={mapRef} tabIndex={0} id="map" className="relative h-full w-full">
      {children}
    </div>
  );
};
