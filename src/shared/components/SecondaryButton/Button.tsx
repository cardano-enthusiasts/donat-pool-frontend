import cn from 'classnames';

import type { Props } from './types';

function Button({
  size = 'md',
  borderTheme = 'blue',
  shadowTheme = 'blackBlue',
  withIcon = false,
  type = 'button',
  children,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      className={cn(
        `rounded-md
        border-2
        font-bold
        text-white
        disabled:border-gray-secondary
        disabled:text-gray-secondary`,
        {
          'px-3.5 py-2': size === 'md',
          'flex items-center gap-x-2.5 text-xs': size === 'md' && withIcon,
          'text-base/[1.3125rem]': size === 'md' && !withIcon,

          'px-4.5 py-2.5 text-xl/[1.625rem]': size === 'lg',
          'border-blue': borderTheme === 'blue',
          'border-purple': borderTheme === 'purple',
          [`shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.black),-0.25rem_0.25rem_0_0_theme(colors.blue.DEFAULT)]
          disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.black),-0.25rem_0.25rem_0_0_theme(colors.gray.secondary)]`]:
            shadowTheme === 'blackBlue',
          [`shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.red),-0.25rem_0.25rem_0_0_theme(colors.purple)]
          disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.red),-0.25rem_0.25rem_0_0_theme(colors.gray.secondary)]`]:
            shadowTheme === 'redPurple',
        },
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
