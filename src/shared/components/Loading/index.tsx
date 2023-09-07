'use client';

import { useCurrentImage } from '@/shared/hooks';

import { images } from './constants';

function Loading() {
  const image = useCurrentImage(images);

  return <div className="flex w-full justify-center">{image}</div>;
}

export default Loading;
