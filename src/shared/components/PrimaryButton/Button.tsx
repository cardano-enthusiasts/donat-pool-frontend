import { createButtonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  stretchy,
  size,
  backgroundColor,
  textColor,
  shadowColor,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${createButtonClassName({
        stretchy,
        size,
        backgroundColor,
        textColor,
        shadowColor,
      })} disabled:bg-purple disabled:shadow-[#000]`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
