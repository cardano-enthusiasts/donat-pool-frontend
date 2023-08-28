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
  disabled = false,
  hint = null,
  placeholder = '',
  maxLength = undefined,
  rows = undefined,
  error = null,
  fontColor = 'black',
  min = 0,
  step = 1,
}: React.PropsWithChildren<Props>) {
  const attributes = {
    value,
    onChange,
    placeholder,
    maxLength,
    error,
    disabled,
  };
  const isError = error !== null;
  const inputClasses = cn(styles.input, 'border-2', {
    'border-error text-error': isError,
    'border-black text-green': !isError && fontColor === 'green',
    'border-black text-yellow': !isError && fontColor === 'yellow',
    'border-black text-black': !isError && fontColor === 'black',
  });

  function handleWheel(e: React.WheelEvent<HTMLInputElement>) {
    e.currentTarget.blur();
  }

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
            className={inputClasses}
            type={type}
            {...attributes}
            {...{ 'data-type': dataAttr }}
            min={type === 'number' ? min : undefined}
            step={type === 'number' ? step : undefined}
            onWheel={handleWheel}
          />
        )}
        {error !== '' && error !== null && <div className={`${styles.message} bg-error text-white`}>{error}</div>}
      </div>
    </div>
  );
}

export default Input;
