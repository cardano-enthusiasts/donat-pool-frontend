import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { useWindowSize } from '@/shared/hooks';

import type { Props } from './types';
import { ActionDonuts, ScrollHelper } from '../.';

const InitialLoading = ({ windowScroll, isAnimationActive }: Props) => {
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (innerCircleRef?.current) {
      innerCircleRef.current.style.transform = `scale(${windowScroll / 10})`;
    }
  }, [windowScroll, innerCircleRef]);

  useEffect(() => {
    if (wrapperRef?.current && width > 1024) {
      if (isAnimationActive) {
        wrapperRef.current.style.height = `${1500 - windowScroll}px`;
      } else {
        wrapperRef.current.style.height = '965px';
      }
    }
  }, [wrapperRef, windowScroll, isAnimationActive]);

  return (
    <div
      className={classNames(
        'relative flex h-[965px] w-full items-start justify-center overflow-hidden bg-red max-lg:h-auto',
      )}
      ref={wrapperRef}
    >
      <div
        ref={innerCircleRef}
        className={classNames(
          'absolute z-[4] mt-[45vh] h-[230px] w-[230px] rounded-full border-[90px] border-yellow max-lg:hidden',
          { hidden: !(windowScroll < 500 && isAnimationActive) },
        )}
      />
      <div
        className={classNames('absolute z-[3] h-full w-full bg-red max-lg:hidden', {
          hidden: !(windowScroll < 40 && isAnimationActive),
        })}
      >
        <ScrollHelper />
      </div>
      <ActionDonuts isAnimationActive={isAnimationActive} />
      <Image
        className={classNames(
          'bottom-0 z-[2] flex shrink-0 max-xl:static max-lg:max-w-[90vw] max-lg:px-5 max-lg:pb-5 max-lg:pt-[150px]',
          {
            'absolute max-w-[770px]': isAnimationActive,
            'max-w-[90vw] px-5 pb-5 pt-[150px]': !isAnimationActive,
          },
        )}
        src="/img/cat.svg"
        alt="cat"
        width={770}
        height={795}
        priority={true}
      />
    </div>
  );
};

export { InitialLoading };
