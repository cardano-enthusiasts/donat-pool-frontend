import cn from 'classnames';

import { createCommonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  stretchy,
  size,
  withIcon,
  borderTheme,
  textTheme,
  shadowTheme,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        createCommonClassName({ stretchy, size, withIcon, borderTheme, textTheme, shadowTheme }),
        'disabled:border-gray-secondary disabled:text-gray-secondary',
        {
          'disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.black),-0.25rem_0.25rem_0_0_theme(colors.gray.secondary)]':
            shadowTheme === 'blackBlue',
          'disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.red),-0.25rem_0.25rem_0_0_theme(colors.gray.secondary)]':
            shadowTheme === 'redPurple',
          'disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.white),-0.25rem_0.25rem_0_0_theme(colors.gray.secondary)]':
            shadowTheme === 'whiteBlue',
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
