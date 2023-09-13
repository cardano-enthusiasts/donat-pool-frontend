import {
  createCommonWrapperClassName,
  createCommonInnerWrapperClassName,
  createCommonButtonClassName,
} from './helpers';
import type { ButtonProps } from './types';

function Button({ children, stretchy, backgroundTheme, textTheme, animated, type = 'button', onClick }: ButtonProps) {
  return (
    <div className={createCommonWrapperClassName(stretchy)}>
      <div className={createCommonInnerWrapperClassName(animated)}>
        <button
          className={createCommonButtonClassName({ backgroundTheme, textTheme, animated })}
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
