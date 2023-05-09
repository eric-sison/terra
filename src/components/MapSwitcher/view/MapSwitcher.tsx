import { useMap } from '@terra/hooks';
import { MapLayer, defaultLayers } from '@terra/utils/layers/map-default-layers';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';

export const MapSwitcher: FunctionComponent = () => {
  const { map, mapRef } = useMap();
  const [toggle, setToggle] = useState(false);
  const [mapLayer, setMapLayer] = useState(defaultLayers[0]);

  const switchLayer = (index: number, layer: MapLayer) => {
    map?.getAllLayers().forEach((layer, currIndex) => layer.setVisible(index === currIndex));
    mapRef?.current.focus();
    setMapLayer(layer);
    setToggle(false);
  };

  useEffect(() => {
    if (!map) return;
    map?.on('singleclick', () => setToggle(false));
  }, [map]);

  return (
    <div className="absolute z-50 bottom-0 m-5 flex gap-3 items-center">
      <div className="h-24 w-12 rounded overflow-clip p-1 flex items-center justify-center">
        <button
          onClick={() => setToggle(!toggle)}
          className="h-12 w-12 text-white flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {toggle
          ? defaultLayers.map((layer, index) => (
              <Fragment key={index}>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.25, delay: index * 0.1 } }}
                  exit={{ opacity: 0, x: -10, transition: { duration: 0.25, delay: index * 0.1 } }}
                  className="h-20 w-20 bg-white shrink-0 overflow-clip hover:ring-4 hover:ring-zinc-800/50"
                  onClick={() => switchLayer(index, layer)}
                >
                  <Image
                    src={layer.thumbnail}
                    alt={layer.alt}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              </Fragment>
            ))
          : null}
      </AnimatePresence>
    </div>
  );
};
