'use client';

import { useCurrentImage } from '@/shared/hooks';
import CatImage0 from '@public/img/loading-cat-0.svg';
import CatImage1 from '@public/img/loading-cat-1.svg';
import CatImage2 from '@public/img/loading-cat-2.svg';
import CatImage3 from '@public/img/loading-cat-3.svg';
import CatImage4 from '@public/img/loading-cat-4.svg';

function Loading() {
  const images = [
    <CatImage0 key="0" />,
    <CatImage1 key="1" />,
    <CatImage2 key="2" />,
    <CatImage3 key="3" />,
    <CatImage4 key="4" />,
  ];
  const image = useCurrentImage(images);

  return <div className="flex w-full justify-center">{image}</div>;
}

export default Loading;
