import { useMapStore } from '@terra/global/map-store';

export const useMap = () => useMapStore((state) => ({ map: state.map, mapRef: state.mapRef }));
