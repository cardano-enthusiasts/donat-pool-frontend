import cn from 'classnames';

import type { CommonProps } from './types';

function createWrapperClassName({ stretchy = false, platformTheme = 'red', animation = 'onPress' }: CommonProps) {
  return cn(
    `relative
    z-0
    inline-block
    ${stretchy ? 'w-full' : 'w-[18.125rem] max-w-full'}
    before:absolute
    before:-left-5.5
    before:top-6.5
    before:-z-[2]
    before:h-full
    before:w-6
    before:origin-bottom-left
    before:-skew-y-[45deg]
    before:rounded-tl-sm
    before:rounded-bl-lg
    after:absolute
    after:-z-[1]
    after:-left-6.5
    after:-bottom-5.5
    after:h-6
    after:w-full
    after:-skew-x-[45deg]
    after:origin-bottom-left
    after:rounded-br-sm
    after:rounded-bl-lg`,
    {
      'before:bg-red after:bg-red': platformTheme === 'red',
      'before:bg-green after:bg-green': platformTheme === 'green',

      'before:animate-[quaternaryButtonPressBefore_5s_infinite] after:animate-[quaternaryButtonPressAfter_5s_infinite]':
        animation === 'continuous',
      'before:transition-[width] before:duration-500 [&:has(>_*:active)]:before:w-3 after:transition-[height] after:duration-500 [&:has(>_*:active)]:after:h-3':
        animation === 'onPress',
    },
  );
}

function createButtonClassName({
  size = 'md',
  backgroundTheme = 'yellow',
  textTheme = 'red',
  textThemeOnHover,
  animation = 'onPress',
}: CommonProps) {
  return cn(
    `w-full
    inline-block
    rounded-md
    px-4
    font-rammetto-one
    text-[2rem]/[1.875rem]
    text-center
    capitalize`,
    {
      'pt-8.5 pb-[2.0625rem]': size === 'md',
      'pt-[3.0625rem] pb-12': size === 'lg',

      'bg-yellow': backgroundTheme === 'yellow',
      'bg-blue': backgroundTheme === 'blue',

      'text-red': textTheme === 'red',
      'text-green': textTheme === 'green',
      'hover:text-blue': textThemeOnHover === 'blue',
      'hover:text-yellow': textThemeOnHover === 'yellow',

      'animate-[quaternaryButtonPress_5s_infinite]': animation === 'continuous',
      'transition-transform duration-500 active:-translate-x-3 active:translate-y-3': animation === 'onPress',
    },
  );
}

export { createWrapperClassName, createButtonClassName };
