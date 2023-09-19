import cn from 'classnames';

import { createButtonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  stretchy,
  size,
  withIcon,
  borderColor,
  backgroundColor,
  textColor,
  shadowColor = 'blackBlue',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        `${createButtonClassName({
          stretchy,
          size,
          withIcon,
          borderColor,
          backgroundColor,
          textColor,
          shadowColor,
        })} disabled:border-gray-secondary disabled:text-gray-secondary`,
        {
          [`disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.black),-0.25rem_0.25rem_theme(colors.gray.secondary)]
          disabled:active:shadow-[-0.125rem_0.125rem_0_-0.125rem_theme(colors.black),-0.125rem_0.125rem_theme(colors.gray.secondary)]`]:
            shadowColor === 'blackBlue',
          [`disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.red),-0.25rem_0.25rem_theme(colors.gray.secondary)]
          disabled:active:shadow-[-0.125rem_0.125rem_0_-0.125rem_theme(colors.red),-0.125rem_0.125rem_theme(colors.gray.secondary)]`]:
            shadowColor === 'redPurple',
          [`disabled:shadow-[-0.25rem_0.25rem_0_-0.125rem_theme(colors.white),-0.25rem_0.25rem_theme(colors.gray.secondary)]
          disabled:active:shadow-[-0.125rem_0.125rem_0_-0.125rem_theme(colors.white),-0.125rem_0.125rem_theme(colors.gray.secondary)]`]:
            shadowColor === 'whiteBlue',
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
