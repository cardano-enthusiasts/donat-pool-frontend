import cn from 'classnames';

import { Props } from './types';

function Checkbox({ checked, textTheme = 'white', children, onChange }: React.PropsWithChildren<Props>) {
  return (
    <label className="flex cursor-pointer items-center">
      <input
        className="flex
          h-6
          w-6
          shrink-0
          cursor-pointer
          appearance-none
          justify-center
          self-start
          rounded-sm
          border-2
          border-blue
          before:content-['']
          checked:before:h-full
          checked:before:w-full
          before:checked:bg-blue"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={cn('ml-2.5 w-full min-w-[11.25rem] select-none', {
          'text-white': textTheme === 'white',
          'text-black': textTheme === 'black',
        })}
      >
        {children}
      </span>
    </label>
  );
}

export default Checkbox;
