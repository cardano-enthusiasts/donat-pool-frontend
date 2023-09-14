import cn from 'classnames';

import type { CommonProps } from './types';

function createCommonClassName({
  stretchy = false,
  size = 'md',
  backgroundTheme = 'red',
  textTheme = 'white',
  shadowTheme = 'blue',
}: CommonProps) {
  return cn('rounded-md inline-block font-bold text-center', {
    'w-full': stretchy,

    'px-4 py-2.5 text-base/[1.3125rem]': size === 'md',
    'px-5 py-3 text-xl/[1.625rem]': size === 'lg',

    'bg-red': backgroundTheme === 'red',
    'bg-blue': backgroundTheme === 'blue',
    'bg-green': backgroundTheme === 'green',

    'text-white': textTheme === 'white',
    'text-black': textTheme === 'black',

    'shadow-[-0.25rem_0.25rem_0_0_theme(colors.blue.DEFAULT)]': shadowTheme === 'blue',
    'shadow-[-0.25rem_0.25rem_0_0_theme(colors.green.dark)]': shadowTheme === 'darkGreen',
  });
}

export { createCommonClassName };
