'use client';

import Image from 'next/image';

import { Stack } from '@/shared/components';

import { COMMON_ROW_CLASSES, PHOTOS } from './constants';

function AboutUs() {
  function getPhotos(isFirstRow: boolean) {
    const filteredPhotos = isFirstRow
      ? PHOTOS.filter(({ isFirstRow }) => isFirstRow)
      : PHOTOS.filter(({ isFirstRow }) => !isFirstRow);

    return filteredPhotos.map(({ src, className, alt }) => (
      <Image className={className} src={src} alt={alt} key={alt} />
    ));
  }

  return (
    <div className="mb-36 max-xl:mb-10 max-md:mb-0">
      <div className="relative flex flex-col items-center">
        <div
          className={`${COMMON_ROW_CLASSES}
            relative
            mb-[8.75rem]
            mt-15
            flex
            h-[37.5rem]
            w-full
            max-w-[68.125rem]
            max-1.5xl:max-w-[50.75rem]
            max-xl:mb-12
            max-xl:mt-8
            max-xl:max-w-[39rem]
            max-md:max-w-[25rem]
          `}
        >
          {getPhotos(true)}
          <div
            className={`${COMMON_ROW_CLASSES}
              max-1.5xl:relative
              max-1.5xl:mx-auto
              max-1.5xl:my-0
              max-1.5xl:w-full
              max-1.5xl:max-w-[39.375rem]
              max-xl:max-w-[29.375rem]
              max-md:max-w-[19.6875rem]
            `}
          >
            {getPhotos(false)}
          </div>
        </div>
        <div
          className="absolute
            bottom-[-25%]
            right-[-3.125rem]
            z-0
            h-[31.25rem]
            w-[83.125rem]
            bg-[url('/images/white-dots.svg')]
            bg-no-repeat
            max-1.5xl:hidden"
        />
      </div>
      <div className="mb-10">
        <Stack />
      </div>
    </div>
  );
}

export default AboutUs;
