import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Props } from './types';
import { Modal } from '../.';

function ModalLoading({
  open,
  title = 'Please wait...',
  description = 'Please wait a bit. We are preparing your donut',
}: Props) {
  const [index, setIndex] = useState(0);
  const maxDonutIndex = 4;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i > maxDonutIndex - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
      setIndex(i);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Modal open={open}>
      <div className="flex flex-col items-center">
        <h1 className="mb-6 text-center font-rammetto-one text-[2.25rem] leading-[104%] text-red max-sm:text-[2.25rem]">
          {title}
        </h1>
        <Image src={`/img/donut-${index}.svg`} alt="donut" width={115} height={115} className="mb-10 max-w-[8.75rem]" />
        <div className="text-center">{description}</div>
      </div>
    </Modal>
  );
}

export default ModalLoading;
