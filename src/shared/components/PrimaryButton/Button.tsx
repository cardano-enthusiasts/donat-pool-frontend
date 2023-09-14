import { createCommonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  stretchy,
  size,
  backgroundTheme,
  textTheme,
  shadowTheme,
  animated,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${createCommonClassName({
        stretchy,
        size,
        backgroundTheme,
        textTheme,
        shadowTheme,
        animated,
      })} disabled:bg-purple disabled:shadow-[-0.25rem_0.25rem_0_0_#000]`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
