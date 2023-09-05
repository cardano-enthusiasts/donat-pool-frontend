'use client';

import { useEffect, useState } from 'react';

import Donut0Image from '@public/img/donut-0.svg';
import Donut1Image from '@public/img/donut-1.svg';
import Donut2Image from '@public/img/donut-2.svg';
import Donut3Image from '@public/img/donut-3.svg';
import Donut4Image from '@public/img/donut-4.svg';

import type { Props } from './types';

function RaisedCounter({ raised, goal }: Props) {
  const [img, setImg] = useState(<Donut0Image />);
  function getSrc(part: number) {
    if (part < 0.2) {
      return <Donut0Image />;
    }
    if (part >= 0.2 && part < 0.4) {
      return <Donut1Image />;
    }
    if (part >= 0.4 && part < 0.6) {
      return <Donut2Image />;
    }
    if (part >= 0.6 && part < 1) {
      return <Donut3Image />;
    }
    return <Donut4Image />;
  }

  useEffect(() => {
    const raisedPart = raised / goal;
    setImg(getSrc(raisedPart));
  }, [raised, goal]);

  return (
    <div
      className="flex
    items-center
    justify-center
    gap-4
    font-rammetto-one
    text-[3.375rem]/[104%]
    font-normal
    max-sm:text-4xl"
    >
      <div className="max-sm:hidden">{img}</div>
      <div className="text-red">{raised}</div>
      <div className="h-12 w-[0.3125rem] rounded-[0.3125rem] bg-red" />
      <div className="text-yellow">{goal}</div>
    </div>
  );
}

export default RaisedCounter;
