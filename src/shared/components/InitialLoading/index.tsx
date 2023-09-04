'use client';

import cn from 'classnames';
import { useEffect, useRef } from 'react';

import { ActionDonuts, ScrollHelper } from '@/shared/components';
import { useWindowSize } from '@/shared/hooks';
import CatImg from '@public/img/cat.svg';

import { Props } from './types';

function InitialLoading({ windowScroll, animationIsActive }: Props) {
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (innerCircleRef?.current) {
      innerCircleRef.current.style.transform = `scale(${windowScroll / 10})`;
    }
  }, [windowScroll, innerCircleRef]);

  useEffect(() => {
    if (wrapperRef?.current && width > 1280) {
      if (animationIsActive) {
        wrapperRef.current.style.height = `${1500 - windowScroll}px`;
      } else {
        wrapperRef.current.style.height = '60.3125rem';
      }
    }
  }, [wrapperRef, windowScroll, animationIsActive, width]);

  return (
    <div
      className="relative flex h-[93.75rem] w-full items-start justify-center overflow-hidden bg-red max-xl:h-auto"
      ref={wrapperRef}
    >
      <div
        ref={innerCircleRef}
        className={cn(
          'absolute z-[4] mt-[45vh] h-[14.375rem] w-[14.375rem] scale-0 rounded-full border-[5.625rem] border-yellow max-xl:hidden',
          { hidden: !(windowScroll < 500 && animationIsActive) },
        )}
      />
      <div
        className={cn('absolute z-[3] h-full w-full bg-red max-xl:hidden', {
          hidden: !(windowScroll < 40 && animationIsActive),
        })}
      >
        <ScrollHelper />
      </div>
      <ActionDonuts animationIsActive={animationIsActive} />
      <CatImg
        className={cn(
          'bottom-0 z-[2] flex max-w-[770px] shrink-0 max-xl:static max-xl:mx-5 max-xl:mb-5 max-xl:mt-[9.375rem] max-xl:max-w-[90vw]',
          {
            'absolute max-w-[48.125rem]': animationIsActive,
            'mx-5 mb-5 mt-[9.375rem] max-w-[90vw]': !animationIsActive,
          },
        )}
      />
    </div>
  );
}

export default InitialLoading;
