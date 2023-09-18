import cn from 'classnames';

import { createWrapperClassName, createButtonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  stretchy,
  size,
  platformBackgroundTheme,
  backgroundTheme,
  textTheme,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <div
      className={cn(createWrapperClassName({ stretchy, platformBackgroundTheme }), {
        'before:bg-[#000]': disabled,
      })}
    >
      <button
        className={`${createButtonClassName({
          size,
          backgroundTheme,
          textTheme,
        })} disabled:bg-purple`}
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
