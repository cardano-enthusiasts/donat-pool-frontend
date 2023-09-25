import cn from 'classnames';

import type { CommonProps } from './types';

function createButtonClassName({
  stretchy = false,
  size = 'md',
  backgroundColor = 'red',
  textColor = 'white',
  shadowColor = 'blue',
}: CommonProps) {
  return cn(
    `inline-block
    rounded-md
    font-bold
    text-center
    shadow
    transition-[transform,box-shadow]
    duration-500
    active:-translate-x-0.5
    active:translate-y-0.5
    active:shadow-pressed`,
    {
      'w-full': stretchy,

      'px-4 py-2.5 text-base/[1.3125rem]': size === 'md',
      'px-5 py-3 text-xl/[1.625rem]': size === 'lg',

      'bg-red': backgroundColor === 'red',
      'bg-blue': backgroundColor === 'blue',
      'bg-green': backgroundColor === 'green',

      'text-white': textColor === 'white',
      'text-black': textColor === 'black',

      'shadow-blue active:shadow-blue': shadowColor === 'blue',
      'shadow-green-dark active:shadow-green-dark': shadowColor === 'darkGreen',
    },
  );
}

export { createButtonClassName };
