import cn from 'classnames';

import { createWrapperCommonClassName, createButtonCommonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  stretchy,
  size,
  withIcon,
  platformBorderTheme,
  borderTheme,
  backgroundTheme,
  textTheme,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <div
      className={cn(createWrapperCommonClassName({ stretchy, platformBorderTheme }), {
        'before:border-gray-secondary': disabled,
      })}
    >
      <button
        className={`${createButtonCommonClassName({
          size,
          withIcon,
          borderTheme,
          backgroundTheme,
          textTheme,
        })} disabled:border-gray-secondary disabled:text-gray-secondary`}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
