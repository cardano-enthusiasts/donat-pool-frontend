import cn from 'classnames';
import { useId } from 'react';

import type { Props } from './types';

function Checkbox({ checked, textTheme = 'white', children, onChange }: Props) {
  const id = useId();

  return (
    <div className="grid grid-cols-[1.5rem_1fr] gap-x-2.5">
      <input
        className="h-6
          w-6
          appearance-none
          rounded-sm
          border-2
          border-blue
          checked:bg-blue"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label
        className={cn({
          'text-white': textTheme === 'white',
          'text-black': textTheme === 'black',
        })}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
