import cn from 'classnames';

import styles from './Input.module.css';
import type { Props } from './types';

function Input({
  value,
  onChange,
  dataAttr = '',
  type = 'text',
  children = null,
  multiline = false,
  isDisabled = false,
  hint = null,
  placeholder = '',
  maxLength = undefined,
  rows = undefined,
  error = null,
  fontColor = 'black',
  min = 0,
  step = 1,
}: Props) {
  const attributes = {
    value,
    onChange,
    placeholder,
    maxLength,
    error,
    disabled: isDisabled,
  };
  const isError = error || error === '';
  const inputClasses = cn(styles.input, 'border-2', {
    'border-error text-error': isError,
    'border-black text-green': !isError && fontColor === 'green',
    'border-black text-yellow': !isError && fontColor === 'yellow',
    'border-black text-black': !isError && fontColor === 'black',
  });

  return (
    <div className="w-full">
      <div className="mb-2">{children}</div>
      <div
        data-hint={hint}
        className={cn(
          'relative',
          {
            'after:absolute after:right-4 after:top-1/2 after:translate-y-[-50%] after:text-gray-secondary':
              Boolean(hint),
          },
          'after:content-[attr(data-hint)]',
        )}
      >
        {multiline ? (
          <textarea {...attributes} {...{ 'data-type': dataAttr }} rows={rows} className={inputClasses} />
        ) : (
          <input
            type={type}
            {...attributes}
            {...{ 'data-type': dataAttr }}
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            min={type === 'number' ? min : undefined}
            step={type === 'number' ? step : undefined}
            className={inputClasses}
          />
        )}
        {error !== '' && error !== null && <div className={`${styles.message} bg-error text-white`}>{error}</div>}
      </div>
    </div>
  );
}

export default Input;
