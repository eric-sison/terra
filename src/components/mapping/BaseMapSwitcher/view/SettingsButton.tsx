import { HTMLAttributes, forwardRef } from 'react';

export const SettingsButton = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ children, ...restProps }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        {...restProps}
        className="h-9 w-9 rounded-full bg-zinc-800/70 hover:bg-zinc-900/80 text-zinc-300 flex items-center justify-center transition-colors"
      >
        {children}
      </button>
    );
  }
);

SettingsButton.displayName = 'SettingsButton';
