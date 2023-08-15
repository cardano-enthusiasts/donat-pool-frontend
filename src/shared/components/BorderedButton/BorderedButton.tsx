import classNames from 'classnames';

import { Props } from './types';

const BorderedButton = ({ onClick, children, color, isClickedTheme }: Props) => {
  return (
    <div className="transition-all duration-500">
      <button
        className={classNames(
          { 'border-red bg-red': color === 'red' && !isClickedTheme },
          { 'border-green bg-green': color === 'green' && !isClickedTheme },
          { 'bg-red text-white': color === 'red' && isClickedTheme },
          { 'bg-green text-white': color === 'green' && isClickedTheme },
          'rounded-md border-2 px-4 py-2 text-[14px] font-bold',
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
