import { createCommonButtonClassName } from './helpers';
import type { ButtonProps } from './types';

function Button({ children, stretchy, backgroundTheme, animated, type = 'button', disabled, onClick }: ButtonProps) {
  return (
    <div className="">
      <button
        className={createCommonButtonClassName({ stretchy, backgroundTheme, animated })}
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
