import cn from 'classnames';
import { useId } from 'react';

import { type Props } from './types';

function Textarea({ label, name, placeholder, placeholderTheme = 'green', register, registerOptions, error }: Props) {
  const id = useId();

  return (
    <div>
      {label && (
        <label className="mb-2 inline-block" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={cn(
          `w-full
          resize-none
          overscroll-y-none
          rounded-md
          border-2
          px-4
          py-[0.8125rem]
          text-xl/[1.875rem]
          outline-none
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
        placeholder={placeholder}
        rows={4}
        {...register(name, registerOptions)}
      />
      {error && <div className="mt-2 text-error">{error}</div>}
    </div>
  );
}

export default Textarea;
