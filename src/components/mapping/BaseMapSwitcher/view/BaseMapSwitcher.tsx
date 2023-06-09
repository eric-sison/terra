'use client';

import { FunctionComponent, useEffect } from 'react';
import { BaseMapSwitcherProps } from '../types/base-map-switcher-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useBaseMapSwitcherStore } from '@terra/global/base-map-switcher-store';
import { SettingsButton } from './SettingsButton';
import { OutlineCogEightTooth } from '@terra/components/svgs/heroicons';
import { useMap } from '@terra/hooks';
import Image from 'next/image';

export const BaseMapSwitcher: FunctionComponent<BaseMapSwitcherProps> = ({ baseMaps }) => {
  // get the current instance of map object
  const { map, mapRef } = useMap();

  // access base map switcher's global store
  const { hoverIndex, mapSwitcherOpen, setMapSwitcherOpen, setHoverIndex, resetHoverIndex } =
    useBaseMapSwitcherStore();

  /**
   *  This function is responsible for switching the base map layer
   *  that will be rendered inside the map container.
   */
  const swicthLayer = (myIndex: number) => {
    // do nothing if map is null
    if (!map) return;

    // loop through all map layers and set the visibility of layer if current index is equal to selected base map index
    map.getAllLayers().forEach((layer, currIndex) => layer.setVisible(myIndex === currIndex));

    // close the map switcher
    setMapSwitcherOpen(false);

    // return focus on the map so it remains interactible
    mapRef?.current.focus();
  };

  /**
   *  This function will open settings for the clicked base map layer
   */
  const openSettings = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    /**
     *  TODO: Open the settings modal here
     */
    console.log('open base map settings modal');

    // prevent the parent button to fire its onClick event
    event.stopPropagation();
  };

  useEffect(() => {
    // do nothing if current map instance is undefined
    if (!map) return;

    // otherwise, listen to map's click event
    map.on('click', () => {
      // close base map switcher
      setMapSwitcherOpen(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return (
    <AnimatePresence>
      {mapSwitcherOpen ? (
        <div className="absolute top-0 left-16 z-50">
          <ul className="flex items-center gap-3">
            {baseMaps
              ? baseMaps.map((baseMap, currIndex) => (
                  <motion.li
                    key={currIndex}
                    role="button"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.25, delay: currIndex * 0.1 } }}
                    exit={{ opacity: 0, x: -10, transition: { duration: 0.25, delay: currIndex * 0.1 } }}
                    onHoverStart={() => setHoverIndex(currIndex)}
                    onHoverEnd={resetHoverIndex}
                    onClick={() => swicthLayer(currIndex)}
                    className="relative select-none w-40 h-40 rounded-xl shadow-2xl shadow-black/40 overflow-clip hover:ring-offset-1 hover:ring-4 hover:ring-zinc-700/20"
                  >
                    <Image
                      src={baseMap.thumbnail}
                      alt={baseMap.alt}
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />

                    <AnimatePresence>
                      {hoverIndex === currIndex ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, transition: { duration: 0.25 } }}
                          exit={{ opacity: 0, transition: { duration: 0.25 } }}
                          className="absolute bottom-0 h-full w-full bg-gradient-to-b from-zinc-100/5 to-zinc-950/90 flex justify-center"
                        >
                          <div className="grid grid-rows-6 w-full">
                            <section className="row-span-4 flex justify-end p-2 w-full">
                              <SettingsButton onClick={(e) => openSettings(e)}>
                                <OutlineCogEightTooth />
                              </SettingsButton>
                            </section>
                            <section className="row-span-2 pt-4 flex justify-center">
                              <h3 className="font-bold text-zinc-100">{baseMap.name}</h3>
                            </section>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </AnimatePresence>
  );
};
