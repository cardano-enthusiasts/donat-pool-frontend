import cn from 'classnames';
import { useId } from 'react';

import { NewInputProps } from './types';

function NewInput({
  label,
  type = 'text',
  name,
  placeholder,
  placeholderTheme = 'green',
  register,
  registerOptions,
  error,
}: NewInputProps) {
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
          'w-full rounded-md border-2 px-4 py-[0.8125rem] text-xl/[1.875rem] outline-none',
          error ? 'border-error text-error' : 'border-black',
          {
            'placeholder:text-green': placeholderTheme === 'green',
            'placeholder:text-yellow': placeholderTheme === 'yellow',
          },
        )}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, registerOptions)}
      />
      {error && <div className="mt-2 text-error">{error}</div>}
    </div>
  );
}

export default NewInput;
