import cn from 'classnames';

import type { CommonProps } from './types';

function createWrapperClassName({ stretchy = false, platformBackgroundTheme = 'blue' }: CommonProps) {
  return cn(
    `relative
    z-0
    inline-block
    before:absolute
    before:-bottom-1
    before:-left-1
    before:-z-[1]
    before:h-full
    before:w-full
    before:rounded-md`,
    {
      'w-full': stretchy,

      'before:bg-blue': platformBackgroundTheme === 'blue',
      'before:bg-green-dark': platformBackgroundTheme === 'darkGreen',
    },
  );
}

function createButtonClassName({
  size = 'md',
  backgroundTheme = 'red',
  textTheme = 'white',
  animated = false,
}: CommonProps) {
  return cn('w-full inline-block rounded-md font-bold text-center', {
    'px-4 py-2.5 text-base/[1.3125rem]': size === 'md',
    'px-5 py-3 text-xl/[1.625rem]': size === 'lg',

    'bg-red': backgroundTheme === 'red',
    'bg-blue': backgroundTheme === 'blue',
    'bg-green': backgroundTheme === 'green',

    'text-white': textTheme === 'white',
    'text-black': textTheme === 'black',

    'animate-[primaryButtonPress_5s_infinite]': animated,
  });
}

export { createWrapperClassName, createButtonClassName };
