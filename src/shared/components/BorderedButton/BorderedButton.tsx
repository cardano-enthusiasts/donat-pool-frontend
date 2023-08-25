import cn from 'classnames';

import { Props } from './types';

function BorderedButton({ onClick, children, color, isClickedTheme }: Props) {
  return (
    <div className="transition-all duration-500">
      <button
        className={cn(
          { 'border-red bg-white text-red': color === 'red' && !isClickedTheme },
          { 'border-green bg-white text-green': color === 'green' && !isClickedTheme },
          { 'border-red bg-red text-white': color === 'red' && isClickedTheme },
          { 'border-green bg-green text-white': color === 'green' && isClickedTheme },
          'rounded-md border-2 px-4 py-2 text-[0.875rem] font-bold leading-[1.1875rem] transition-all duration-500',
        )}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export { BorderedButton };
