import classNames from 'classnames';

import styles from './Input.module.css';
import type { Props } from './types';

const Input = ({
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
}: Props) => {
  const attributes = {
    value,
    onChange,
    placeholder,
    maxLength,
    error,
    fontColor,
    disabled: isDisabled,
  };

  const inputClasses = classNames(styles.input, 'border-2', {
    'border-error text-error': error || error === '',
    'border-black text-green': !(error || error === '') && fontColor === 'green',
    'border-black text-yellow': !(error || error === '') && fontColor === 'yellow',
    'border-black text-black': !(error || error === '') && fontColor === 'black',
  });
  return (
    <div className="w-full">
      <div className="mb-2">{children}</div>
      <div
        data-hint={hint}
        className={classNames(
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
        {error !== '' && error !== null && (
          <div className={classNames(styles.message, 'bg-error text-white')}>{error}</div>
        )}
      </div>
    </div>
  );
};
export { Input };
