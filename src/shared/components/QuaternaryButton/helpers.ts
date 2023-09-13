import cn from 'classnames';

import type { CommonProps } from './types';

function createCommonWrapperClassName({ stretchy = false }: CommonProps) {
  return cn('pr-5.5 pt-5.5', {
    'w-[19.5rem] max-w-full': !stretchy,
  });
}

function createCommonInnerWrapperClassName({ platformTheme = 'red', animated = false }: CommonProps) {
  return cn(
    `relative
    z-0
    before:absolute
    before:left-0
    before:-bottom-1
    before:h-full
    before:w-6
    before:-skew-y-[45deg]
    before:origin-bottom-left
    before:rounded-tl-sm
    before:rounded-bl-lg
    after:absolute
    after:-z-[1]
    after:-left-1
    after:bottom-0
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
        animated,
    },
  );
}

function createCommonButtonClassName({
  size = 'md',
  backgroundTheme = 'yellow',
  textTheme = 'red',
  animated = false,
}: CommonProps) {
  return cn(
    `inline-block
    w-full
    rounded-md
    px-4
    font-rammetto-one
    translate-x-5.5
    -translate-y-5.5
    text-[2rem]/[1.875rem]
    text-center`,
    {
      'pt-8.5 pb-[2.0625rem]': size === 'md',
      'pt-[3.0625rem] pb-12': size === 'lg',

      'bg-yellow': backgroundTheme === 'yellow',
      'bg-blue': backgroundTheme === 'blue',

      'text-red': textTheme === 'red',
      'text-green': textTheme === 'green',

      'animate-[quaternaryButtonPress_5s_infinite]': animated,
    },
  );
}

export { createCommonWrapperClassName, createCommonInnerWrapperClassName, createCommonButtonClassName };
