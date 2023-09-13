import cn from 'classnames';

import type { CommonProps } from './types';

function createCommonClassName({
  stretchy = false,
  size = 'md',
  withIcon = false,
  borderTheme = 'blue',
  textTheme = 'white',
  shadowTheme = 'blackBlue',
}: CommonProps) {
  return cn(`rounded-md border-2 font-bold ${withIcon ? 'inline-flex items-center gap-x-2.5' : 'inline-block'}`, {
    'w-full': stretchy,
    'justify-center': stretchy && withIcon,
    'text-center': stretchy && !withIcon,

    'px-3.5 py-2': size === 'md',
    'text-xs': size === 'md' && withIcon,
    'text-base/[1.3125rem]': size === 'md' && !withIcon,
    'px-4.5 py-2.5 text-xl/[1.625rem]': size === 'lg',

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
