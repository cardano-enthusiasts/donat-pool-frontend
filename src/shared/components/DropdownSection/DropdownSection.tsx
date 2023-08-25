import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import type { Props } from './types';

function DropdownSection({ title = '', children }: React.PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  function handleWrapperClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="rounded-md p-6 shadow-xl">
      <div className="flex cursor-pointer select-none justify-between gap-8" onClick={handleWrapperClick}>
        <h2 className="text-2xl font-bold max-sm:text-xl">{title}</h2>
        <Image className={cn({ 'rotate-180': isOpen })} src="/icons/red-arrow.svg" alt="arrow" width={32} height={32} />
      </div>
      {isOpen && <div className="mt-6 flex flex-col gap-6">{children}</div>}
    </div>
  );
}

export default DropdownSection;
