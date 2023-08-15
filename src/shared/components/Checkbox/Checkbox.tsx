import type { Props } from './types';

const Checkbox = ({ isChecked, onChange, children }: Props) => {
  return (
    <label className="flex cursor-pointer items-center">
      <input
        className="flex h-6 w-6 shrink-0 cursor-pointer appearance-none justify-center self-start rounded-sm border-2 border-blue before:content-[''] checked:before:h-full checked:before:w-full before:checked:bg-blue"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="ml-2.5 w-full min-w-[180px] select-none text-black">{children}</span>
    </label>
  );
};

export { Checkbox };
