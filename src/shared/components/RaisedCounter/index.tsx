'use client';

import { useEffect, useState } from 'react';

import { firstImage, getImage } from './helpers';
import type { Props } from './types';

function RaisedCounter({ raised, goal }: Props) {
  const [image, setImage] = useState(firstImage);

  useEffect(() => {
    const raisedPart = raised / goal;
    setImage(getImage(raisedPart));
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
      <div className="max-sm:hidden">{image}</div>
      <div className="text-red">{raised}</div>
      <div className="h-12 w-[0.3125rem] rounded-[0.3125rem] bg-red" />
      <div className="text-yellow">{goal}</div>
    </div>
  );
}

export default RaisedCounter;
