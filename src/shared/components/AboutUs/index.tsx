'use client';

import Image from 'next/image';

import { PHOTOS } from './constants';
import { Stack } from '../.';

const AboutUs = () => {
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
          className="relative
          mb-[8.75rem]
          mt-15
          flex
          h-[37.5rem]
          w-full
          max-w-[68.125rem]
          max-1.5xl:h-[75rem]
          max-1.5xl:max-w-[50.75rem]
          max-xl:mb-12
          max-xl:mt-8
          max-xl:h-[62.5rem]
          max-xl:max-w-[39rem]
          max-md:h-[43.75rem]
          max-md:max-w-[25.1875rem]"
        >
          {getPhotos(true)}
          <div
            className="max-1.5xl:relative
              max-1.5xl:mx-auto
              max-1.5xl:my-0
              max-1.5xl:h-[75rem]
              max-1.5xl:w-full
              max-1.5xl:max-w-[39.375rem]
              max-xl:h-[62.5rem]
              max-xl:max-w-[29.375rem]
              max-md:h-[43.75rem]
              max-md:max-w-[19.6875rem]"
          >
            {getPhotos(false)}
          </div>
        </div>
        <div
          className="absolute
            bottom-[-25%]
            right-[-3.125rem]
            h-[31.25rem]
            w-[83.125rem]
            bg-[url('/img/white-dots.svg')]
            bg-no-repeat
            max-1.5xl:hidden"
        />
      </div>
      <div className="mb-10">
        <Stack />
      </div>
    </div>
  );
};

export default AboutUs;
