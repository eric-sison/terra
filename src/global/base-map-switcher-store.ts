import { create } from 'zustand';

type BaseMapSwitcherStore = {
  mapSwitcherOpen: boolean;
  setMapSwitcherOpen: (state: boolean) => void;
};

type CurrentlyHoveredBaseMapStore = {
  hoverIndex: number;
  setHoverIndex: (index: number) => void;
  resetHoverIndex: () => void;
};

export const useBaseMapSwitcherStore = create<CurrentlyHoveredBaseMapStore & BaseMapSwitcherStore>((set) => ({
  mapSwitcherOpen: false,
  setMapSwitcherOpen: (mapSwitcherOpen) => set({ mapSwitcherOpen }),
  hoverIndex: -1,
  setHoverIndex: (hoverIndex) => set({ hoverIndex }),
  resetHoverIndex: () => set({ hoverIndex: -1 }),
}));
