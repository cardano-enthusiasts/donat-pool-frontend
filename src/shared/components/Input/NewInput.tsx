import cn from 'classnames';
import { forwardRef, useId } from 'react';

import type { NewInputProps } from './types';

const NewInput = forwardRef<HTMLInputElement, NewInputProps>(function NewInput(
  { label, name, type = 'text', placeholder, placeholderTheme = 'green', disabled, error, onChange, onBlur },
  ref,
) {
  const id = useId();

  return (
    <div>
      {label && (
        <label className="mb-2 inline-block" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={cn(
          `w-full
          rounded-md
          border-2
          px-4
          py-[0.8125rem]
          text-xl/[1.875rem]
          disabled:border-gray-secondary
          disabled:bg-[#f3f3f3]
          disabled:text-gray-secondary`,
          error ? 'border-error text-error' : 'border-black',
          {
            'placeholder:text-green': placeholderTheme === 'green',
            'placeholder:text-yellow': placeholderTheme === 'yellow',
          },
        )}
        id={id}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        // "React Hook Form" provides this handler
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={onChange}
        // "React Hook Form" provides this handler
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onBlur={onBlur}
      />
      {error && <div className="mt-2 text-error">{error}</div>}
    </div>
  );
});

export default NewInput;
