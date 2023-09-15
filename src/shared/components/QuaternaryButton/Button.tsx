import { createWrapperClassName, createButtonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({
  children,
  size,
  stretchy,
  platformTheme,
  backgroundTheme,
  textTheme,
  animated,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <div className={createWrapperClassName({ stretchy, platformTheme, animated })}>
      <button
        className={createButtonClassName({ size, backgroundTheme, textTheme, animated })}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
