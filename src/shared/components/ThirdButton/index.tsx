import cn from 'classnames';

import DownIcon from '@public/icons/down.svg';

import type { Props } from './types';

function Button({
  children,
  stretchy = false,
  platformBorderTheme = 'blue',
  borderTheme = 'blue',
  backgroundTheme = 'black',
  textTheme = 'white',
  arrowTheme = 'red',
  arrowIsUp = false,
  onClick,
}: Props) {
  return (
    <div
      className={cn(
        'relative inline-block before:absolute before:h-full before:w-full before:rounded-md before:border-2 before:border-dashed',
        {
          'w-full': stretchy,

          'before:border-blue': platformBorderTheme === 'blue',
          'before:border-red': platformBorderTheme === 'red',
        },
      )}
    >
      <button
        className={cn(
          'inline-flex w-full translate-x-1 translate-y-[-0.25rem] items-center justify-center gap-x-1.5 rounded-md border-2 border-dashed pb-[0.4375rem] pl-3.5 pr-2 pt-1.5 text-base/[1.3125rem] font-bold',
          {
            'border-blue': borderTheme === 'blue',
            'border-red': borderTheme === 'red',

            'bg-black': backgroundTheme === 'black',
            'bg-green': backgroundTheme === 'green',
            'bg-yellow': backgroundTheme === 'yellow',

            'text-white': textTheme === 'white',
            'text-blue': textTheme === 'blue',
            'text-red': textTheme === 'red',
          },
        )}
        type="button"
        onClick={onClick}
      >
        {children}
        <DownIcon
          className={cn('w-6', {
            '[&>path]:stroke-red': arrowTheme === 'red',
            '[&>path]:stroke-blue': arrowTheme === 'blue',

            'rotate-180': arrowIsUp,
          })}
        />
      </button>
    </div>
  );
}

export default Button;
