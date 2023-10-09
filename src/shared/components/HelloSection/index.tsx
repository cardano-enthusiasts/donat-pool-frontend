'use client';

import { ActionDonuts, Waves } from '@/shared/components';
import CatImage from '@public/images/cat.svg';

function HelloSection() {
  return (
    <div className="relative">
      <div className="relative flex h-[60.3125rem] items-start justify-center overflow-hidden bg-red max-xl:h-auto">
        <ActionDonuts />
        <CatImage
          className="bottom-0
            z-10
            mx-5
            mb-5
            mt-[9.375rem]
            flex
            max-w-[48.125rem]
            shrink-0
            max-xl:mt-[10vh]
            max-xl:h-[85vh]
            max-xl:max-w-[90vw]"
        />
      </div>
      <div className="absolute -bottom-px w-full">
        <Waves />
      </div>
    </div>
  );
}

export default HelloSection;
