import cn from 'classnames';

import type { CommonProps } from './types';

function createCommonWrapperClassName(stretchy = false) {
  return `inline-block pr-5 pt-5 ${stretchy ? 'w-full' : 'w-[19.375rem] max-w-full'}`;
}

function createCommonInnerWrapperClassName(animated = false) {
  return cn(
    `relative
  z-0
  before:absolute
  before:left-0
  before:-bottom-1
  before:h-full
  before:w-5.5
  before:-skew-y-[45deg]
  before:origin-bottom-left
  before:bg-red
  before:rounded-tl-sm
  before:rounded-bl-lg
  after:absolute
  after:-z-[1]
  after:-left-1
  after:bottom-0
  after:h-5.5
  after:w-full
  after:-skew-x-[45deg]
  after:origin-bottom-left
  after:bg-red
  after:rounded-br-sm
  after:rounded-bl-lg`,
    {
      'before:animate-[quaternaryButtonPressBefore_5s_infinite] after:animate-[quaternaryButtonPressAfter_5s_infinite]':
        animated,
    },
  );
}

function createCommonButtonClassName({ backgroundTheme = 'yellow', textTheme = 'red', animated = false }: CommonProps) {
  return cn(
    `pt-8.5
    w-full
    inline-block
    rounded-md
    px-2
    pb-[2.0625rem]
    font-rammetto-one
    translate-x-5
    -translate-y-5
    text-[2rem]/[1.875rem]
    text-center`,
    {
      'bg-yellow': backgroundTheme === 'yellow',
      'bg-blue': backgroundTheme === 'blue',

      'text-red': textTheme === 'red',
      'text-green': textTheme === 'green',

      'animate-[quaternaryButtonPress_5s_infinite]': animated,
    },
  );
}

export { createCommonWrapperClassName, createCommonInnerWrapperClassName, createCommonButtonClassName };
