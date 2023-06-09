'use client';

import { FunctionComponent } from 'react';
import { SidebarItem } from '../../SidebarItem/view/SidebarItem';
import { BaseMapSwitcher } from '@terra/components/mapping/BaseMapSwitcher/view/BaseMapSwitcher';
import { defaultLayers } from '@terra/utils/layers/map-default-layers';
import { useBaseMapSwitcherStore } from '@terra/global/base-map-switcher-store';
import {
  OutlineMap,
  OutlineSquareThreeStack,
  OutlineSquarePencilSquare,
  OutlineMapPin,
  OutlineCogEightTooth,
} from '@terra/components/svgs/heroicons';
import { Overflow } from '@terra/components/svgs';
import { useDrawToolsStore } from '@terra/global/draw-tools-store';
import { DrawTools } from '@terra/components/mapping/DrawTools/view/DrawTools';

export const Sidebar: FunctionComponent = () => {
  const { mapSwitcherOpen, setMapSwitcherOpen, resetHoverIndex } = useBaseMapSwitcherStore();
  const { drawToolsOpen, setDrawToolsOpen } = useDrawToolsStore();

  return (
    <aside className="h-screen w-14 p-2 bg-zinc-800 shrink-0 outline-none pt-5">
      {/**
       *  logo container
       */}
      <div className="text-zinc-400 transition-colors mb-10 px-1">
        <Overflow />
      </div>

      <ul className="flex flex-col items-center justify-center gap-6">
        <SidebarItem icon={<OutlineSquareThreeStack />} tooltip="Layers">
          {}
        </SidebarItem>

        <SidebarItem
          selected={mapSwitcherOpen}
          icon={<OutlineMap />}
          tooltip="Base Maps"
          hideTooltip={mapSwitcherOpen}
          onClick={() => {
            resetHoverIndex();
            setMapSwitcherOpen(!mapSwitcherOpen);
          }}
        >
          <BaseMapSwitcher baseMaps={defaultLayers} />
        </SidebarItem>

        <SidebarItem
          selected={drawToolsOpen}
          icon={<OutlineSquarePencilSquare />}
          tooltip="Draw Tools"
          hideTooltip={drawToolsOpen}
          onClick={() => {
            setDrawToolsOpen(!drawToolsOpen);
          }}
        >
          <DrawTools />
        </SidebarItem>

        <SidebarItem icon={<OutlineMapPin />} tooltip="Annotations">
          {}
        </SidebarItem>

        <SidebarItem icon={<OutlineCogEightTooth />} tooltip="Settings">
          {}
        </SidebarItem>
      </ul>
    </aside>
  );
};
