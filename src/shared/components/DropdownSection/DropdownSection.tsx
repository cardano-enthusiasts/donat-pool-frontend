import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import type { Props } from './types';

const DropdownSection = ({ title = '', children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-md p-6 shadow-xl">
      <div
        className="flex cursor-pointer select-none justify-between gap-8"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h2 className="text-2xl font-bold max-sm:text-xl">{title}</h2>
        <Image className={cn({ 'rotate-180': isOpen })} src="/icons/red-arrow.svg" alt="arrow" width={32} height={32} />
      </div>
      {isOpen && <div className="mt-6">{children}</div>}
    </div>
  );
};

export { DropdownSection };
