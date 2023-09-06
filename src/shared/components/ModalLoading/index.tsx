'use client';

import { useEffect, useState } from 'react';

import { Modal } from '@/shared/components';

import { IMAGES } from './constants';
import type { Props } from './types';

function ModalLoading({
  title = 'Please wait...',
  description = 'Please wait a bit. We are preparing your donut',
}: Props) {
  const [image, setImage] = useState(IMAGES[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i > IMAGES.length - 2) {
        i = 0;
      } else {
        i = i + 1;
      }
      setImage(IMAGES[i]);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Modal>
      <div className="flex flex-col items-center">
        <h1 className="mb-6 text-center font-rammetto-one text-[2.25rem]/[104%] text-red max-sm:text-[2.25rem]">
          {title}
        </h1>
        <div className="mb-10 max-w-[8.75rem]">{image}</div>
        <div className="text-center">{description}</div>
      </div>
    </Modal>
  );
}

export default ModalLoading;
