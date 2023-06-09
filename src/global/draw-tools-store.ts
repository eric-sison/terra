import { create } from 'zustand';

type DrawToolsStore = {
  drawToolsOpen: boolean;
  setDrawToolsOpen: (state: boolean) => void;
};

export const useDrawToolsStore = create<DrawToolsStore>((set) => ({
  drawToolsOpen: false,
  setDrawToolsOpen: (drawToolsOpen) => set({ drawToolsOpen }),
}));
