import * as Tooltip from '@radix-ui/react-tooltip';
import React, { HTMLAttributes, forwardRef } from 'react';

type SidebarItemProps = HTMLAttributes<HTMLLIElement> & {
  selected?: boolean;
  icon: JSX.Element;
  tooltip: string;
  hideTooltip?: boolean;
};

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>(
  (
    { selected = false, icon, className = '', tooltip, hideTooltip, children, ...restProps },
    forwardedRef
  ) => {
    return (
      <div className="relative">
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger asChild>
              <li
                {...restProps}
                ref={forwardedRef}
                role="button"
                className={`${
                  selected && 'bg-zinc-700/70'
                } rounded text-zinc-400 transition-colors hover:bg-zinc-700/70 h-10 w-10 flex items-center justify-center ${className}`}
              >
                {icon}
              </li>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="right"
                sideOffset={15}
                hidden={hideTooltip}
                className="bg-zinc-800 text-zinc-200 p-2 text-sm rounded-lg border-transparent z-[500]"
              >
                {tooltip}
                <Tooltip.Arrow className="fill-zinc-800" width={12} height={7} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        {children}
      </div>
    );
  }
);

SidebarItem.displayName = 'SidebarItem';
