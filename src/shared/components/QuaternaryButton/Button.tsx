import { createWrapperClassName, createButtonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  size,
  stretchy,
  platformTheme,
  backgroundTheme,
  textTheme,
  textThemeOnHover,
  animation,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <div className={createWrapperClassName({ stretchy, platformTheme, animation })}>
      <button
        className={createButtonClassName({ size, backgroundTheme, textTheme, textThemeOnHover, animation })}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
