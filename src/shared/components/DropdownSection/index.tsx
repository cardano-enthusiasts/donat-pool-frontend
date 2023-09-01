'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { type Props } from './types';

function DropdownSection({ title = '', children }: React.PropsWithChildren<Props>) {
  const [shown, setShown] = useState(false);

  function handleWrapperClick() {
    setShown(!shown);
  }

  return (
    <div className="rounded-md p-6 shadow-xl">
      <div className="flex cursor-pointer select-none justify-between gap-8" onClick={handleWrapperClick}>
        <h2 className="text-2xl font-bold max-sm:text-xl">{title}</h2>
        <Image className={cn({ 'rotate-180': shown })} src="/icons/red-arrow.svg" alt="arrow" width={32} height={32} />
      </div>
      {shown && <div className="mt-6 flex flex-col gap-6">{children}</div>}
    </div>
  );
}

export default DropdownSection;
