import cn from 'classnames';

import type { CommonProps } from './types';

function createButtonClassName({
  stretchy = false,
  size = 'md',
  withIcon = false,
  borderColor = 'blue',
  textColor = 'white',
  shadowColor = 'blackBlue',
}: CommonProps) {
  return cn(
    `${withIcon ? 'inline-flex justify-center items-center gap-x-2.5' : 'inline-block text-center'}
    rounded-md
    border-2
    font-bold
    transition-[transform,box-shadow]
    duration-500
    active:-translate-x-0.5
    active:translate-y-0.5`,
    {
      'w-full': stretchy,

      'px-3.5 py-2': size === 'md',
      'text-xs': size === 'md' && withIcon,
      'text-base/[1.3125rem]': size === 'md' && !withIcon,
      'px-4.5 py-2.5 text-xl/[1.625rem]': size === 'lg',

      'border-blue': borderColor === 'blue',
      'border-purple': borderColor === 'purple',

      'text-white': textColor === 'white',
      'text-blue': textColor === 'blue',

      [`shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.black),-0.25rem_0.25rem_theme(colors.blue.DEFAULT)]
      active:shadow-[-0.125rem_0.125rem_0_-0.125rem_theme(colors.black),-0.125rem_0.125rem_theme(colors.blue.DEFAULT)]`]:
        shadowColor === 'blackBlue',
      [`shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.red),-0.25rem_0.25rem_theme(colors.purple)]
      active:shadow-[-0.125rem_0.125rem_0_-0.125rem_theme(colors.red),-0.125rem_0.125rem_theme(colors.purple)]`]:
        shadowColor === 'redPurple',
      [`shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.white),-0.25rem_0.25rem_theme(colors.blue.DEFAULT)]
      active:shadow-[-0.125rem_0.125rem_0_-0.125rem_theme(colors.white),-0.125rem_0.125rem_theme(colors.blue.DEFAULT)]`]:
        shadowColor === 'whiteBlue',
    },
  );
}

export { createButtonClassName };
