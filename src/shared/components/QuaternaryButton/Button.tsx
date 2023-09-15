import {
  createWrapperCommonClassName,
  createInnerWrapperCommonClassName,
  createButtonCommonClassName,
} from './helpers';
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
    <div className={createWrapperCommonClassName({ stretchy })}>
      <div className={createInnerWrapperCommonClassName({ platformTheme, animated })}>
        <button
          className={createButtonCommonClassName({ size, backgroundTheme, textTheme, animated })}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
}

export default Button;
