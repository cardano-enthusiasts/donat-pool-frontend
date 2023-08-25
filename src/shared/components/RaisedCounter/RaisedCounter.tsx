import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useWindowSize } from '@/shared/hooks';

import type { Props } from './types';

function RaisedCounter({ raised, goal }: Props) {
  const { width } = useWindowSize();
  const [imgTitle, setImgTitle] = useState('donut-0');
  function getImgIndex(part: number) {
    if (part < 0.2) {
      return 0;
    }
    if (part >= 0.2 && part < 0.4) {
      return 1;
    }
    if (part >= 0.4 && part < 0.6) {
      return 2;
    }
    if (part >= 0.6 && part < 1) {
      return 3;
    }
    return 4;
  }

  useEffect(() => {
    const raisedPart = raised / goal;
    setImgTitle(`donut-${getImgIndex(raisedPart)}`);
  }, [raised, goal]);

  return (
    <div className="flex items-center justify-center gap-4 font-rammetto-one text-[3.375rem] font-normal leading-[104%] max-sm:text-4xl">
      <Image
        src={`/img/${imgTitle}.svg`}
        alt="progress bar"
        width={width > 800 ? 115 : 60}
        height={width > 800 ? 115 : 60}
        className="max-sm:hidden"
      />
      <div className="text-red">{raised}</div>
      <div className="h-12 w-[0.3125rem] rounded-[0.3125rem] bg-red" />
      <div className="text-yellow">{goal}</div>
    </div>
  );
}

export { RaisedCounter };
