import cn from 'classnames';

import type { CommonProps } from './types';

function createWrapperClassName({ stretchy = false, platformBorderTheme = 'blue' }: CommonProps) {
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
    before:rounded-md
    before:border-2`,
    {
      'w-full': stretchy,

      'before:border-blue': platformBorderTheme === 'blue',
      'before:border-purple': platformBorderTheme === 'purple',
    },
  );
}

function createButtonClassName({
  size = 'md',
  withIcon = false,
  borderTheme = 'blue',
  backgroundTheme = 'black',
  textTheme = 'white',
}: CommonProps) {
  return cn(
    `${withIcon ? 'inline-flex justify-center items-center gap-x-2.5' : 'inline-block text-center'}
    w-full
    rounded-md
    border-2
    font-bold
    transition-transform
    duration-500
    active:-translate-x-0.5
    active:translate-y-0.5`,
    {
      'px-3.5 py-2': size === 'md',
      'text-xs': size === 'md' && withIcon,
      'text-base/[1.3125rem]': size === 'md' && !withIcon,
      'px-4.5 py-2.5 text-xl/[1.625rem]': size === 'lg',

      'border-blue': borderTheme === 'blue',
      'border-purple': borderTheme === 'purple',

      'bg-black': backgroundTheme === 'black',
      'bg-red': backgroundTheme === 'red',
      'bg-white': backgroundTheme === 'white',

      'text-white': textTheme === 'white',
      'text-blue': textTheme === 'blue',
    },
  );
}

export { createWrapperClassName, createButtonClassName };
