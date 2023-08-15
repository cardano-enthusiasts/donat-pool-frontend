import classNames from 'classnames';

import { Props } from './types';

const BorderedButton = ({ onClick, children, color, isClickedTheme }: Props) => {
  return (
    <div className="transition-all duration-500">
      <button
        className={classNames(
          { 'border-red bg-white text-red': color === 'red' && !isClickedTheme },
          { 'border-green bg-white text-green': color === 'green' && !isClickedTheme },
          { 'border-red bg-red text-white': color === 'red' && isClickedTheme },
          { 'border-green bg-green text-white': color === 'green' && isClickedTheme },
          'rounded-md border-2 px-4 py-2 text-[14px] font-bold transition-all duration-500',
        )}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </div>
  );
};

export { BorderedButton };
