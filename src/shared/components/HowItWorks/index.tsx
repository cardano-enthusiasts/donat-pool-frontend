import { Tutorial } from '@/shared/components';

import { ANIMATION_CLASSES } from './constants';
import { ITEMS } from './data';

function HowItWorks() {
  return (
    <>
      <div className="mb-15 flex flex-col gap-15 max-xl:mb-[1.875rem] max-xl:gap-[1.875rem]">
        {ITEMS.map(({ title, description, id }) => (
          <div
            className="h-[4.125rem]
              cursor-default
              max-md:h-auto
              [&:hover>div:first-child]:[transform:rotateX(90deg)_translateZ(2.0625rem)]
              max-md:[&:hover>div:first-child]:transform-none
              [&:hover>div:last-child]:[transform:rotateX(0)_translateZ(0.625rem)_translateY(-4.125rem)]
              max-md:[&:hover>div:last-child]:transform-none"
            key={id}
          >
            <div
              className={`${ANIMATION_CLASSES}
                h-full
                text-5xl/snug
                font-bold
                text-black
                max-xl:text-4xl
                max-md:h-auto
                max-md:transform-none
                max-md:text-3xl
                max-md:transition-none
                max-sm:text-2xl`}
            >
              {title}
            </div>
            <div
              className={`${ANIMATION_CLASSES}
                flex
                h-full
                flex-col
                justify-center
                bg-red
                px-10
                text-xl
                font-bold
                text-white
                [transform:rotateX(-90deg)_translateZ(-2.5rem)]
                max-xl:py-5
                max-md:h-auto
                max-md:transform-none
                max-md:bg-transparent
                max-md:p-0
                max-md:text-black`}
            >
              {description}
            </div>
          </div>
        ))}
      </div>
      <Tutorial />
    </>
  );
}

export default HowItWorks;
