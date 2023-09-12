import cn from 'classnames';

import type { CommonProps } from './types';

function createCommonClassName({
  size = 'md',
  withIcon = false,
  stretchy = false,
  borderTheme = 'blue',
  textTheme = 'white',
  shadowTheme = 'blackBlue',
}: CommonProps) {
  return cn('rounded-md border-2 text-center font-bold', {
    'px-3.5 py-2': size === 'md',
    'flex items-center gap-x-2.5 text-xs': size === 'md' && withIcon,
    'text-base/[1.3125rem]': size === 'md' && !withIcon,

    'px-4.5 py-2.5 text-xl/[1.625rem]': size === 'lg',

    'w-full': stretchy,

    'border-blue': borderTheme === 'blue',
    'border-purple': borderTheme === 'purple',

    'text-white': textTheme === 'white',
    'text-blue': textTheme === 'blue',

    'shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.black),-0.25rem_0.25rem_0_0_theme(colors.blue.DEFAULT)]':
      shadowTheme === 'blackBlue',
    'shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.red),-0.25rem_0.25rem_0_0_theme(colors.purple)]':
      shadowTheme === 'redPurple',
    'shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.white),-0.25rem_0.25rem_0_0_theme(colors.blue.DEFAULT)]':
      shadowTheme === 'whiteBlue',
  });
}

export { createCommonClassName };
