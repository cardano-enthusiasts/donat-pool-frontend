'use client';

import { Modal } from '@/shared/components';
import { useCurrentImage } from '@/shared/hooks';
import Donut0Image from '@public/img/donut-0.svg';
import Donut1Image from '@public/img/donut-1.svg';
import Donut2Image from '@public/img/donut-2.svg';
import Donut3Image from '@public/img/donut-3.svg';
import Donut4Image from '@public/img/donut-4.svg';

import { Props } from './types';

function ModalLoading({
  shown,
  title = 'Please wait...',
  description = 'Please wait a bit. We are preparing your donut',
}: Props) {
  const images = [
    <Donut0Image key="0" />,
    <Donut1Image key="1" />,
    <Donut2Image key="2" />,
    <Donut3Image key="3" />,
    <Donut4Image key="4" />,
  ];
  const image = useCurrentImage(images);

  return (
    <Modal shown={shown}>
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
