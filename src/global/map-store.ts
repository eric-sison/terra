import { Map } from 'ol';
import { MutableRefObject } from 'react';
import { create } from 'zustand';

type MapStore = {
  map: Map | null;
  mapRef: MutableRefObject<HTMLDivElement> | null;
  setMap: (map: Map | null) => void;
  setMapRef: (mapRef: MutableRefObject<HTMLDivElement>) => void;
  removeMap: () => void;
};

export const useMapStore = create<MapStore>((set) => ({
  map: null,
  mapRef: null,
  setMap: (map) => set({ map }),
  setMapRef: (mapRef) => set({ mapRef }),
  removeMap: () => set({ map: null }),
}));
