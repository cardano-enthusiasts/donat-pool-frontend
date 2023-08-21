import cn from 'classnames';
import Image from 'next/image';
import { type ForwardedRef, forwardRef, useEffect, useRef } from 'react';

import { ROUTES } from '@/shared/constants';

import { getSections, linkVariants, wrapperVariants } from './data';
import styles from './LandingNav.module.css';
import type { Props } from './types';
import { StandardButton, Waves } from '../.';

const LandingNav = forwardRef(
  (
    {
      currentSection,
      windowScroll,
      windowWidth,
      handleIconClick,
      handleSectionClick,
      isOpen,
      isAnimationActive,
    }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const mobileResolution = 1100;
    const isContentShown = windowWidth > mobileResolution ? true : isOpen;
    const section = windowWidth > mobileResolution || currentSection !== 'contact-us' ? currentSection : 'roadmap';
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (wrapperRef?.current && windowWidth > 1920) {
        wrapperRef.current.style.left = `${(windowWidth - 1920) / 2 + 90}px`;
      }
    }, [windowWidth, wrapperRef]);

    return (
      <div
        ref={wrapperRef}
        className={cn(
          styles.wrapper,
          'fixed top-[90px] max-[1920px]:left-[90px] max-mobile:fixed max-mobile:left-0 max-mobile:top-0 max-mobile:flex max-mobile:w-[100vw] max-mobile:items-center max-mobile:justify-center',
          {
            'z-[-1] max-mobile:z-[100]': currentSection === 'contact-us',
            'z-[3] max-mobile:z-[100]': currentSection !== 'contact-us',
            hidden: windowScroll < 500 && isAnimationActive,
            'max-mobile:h-[100vh] max-mobile:overflow-auto': isOpen,
          },
          wrapperVariants[currentSection],
        )}
      >
        <nav ref={ref}>
          {windowWidth < mobileResolution && (
            <>
              <Image
                src={`/icons/${isOpen ? 'close' : 'menu'}.svg`}
                alt="icon"
                onClick={handleIconClick}
                className="absolute right-5 top-5 h-10 w-10"
                width="50"
                height="50"
              />
              <div className="absolute left-0 right-0 top-0 z-[-1]">
                <Waves isUpsideDown={true} color="red" isMoving={false} />
              </div>
            </>
          )}
          {isContentShown && (
            <div className="flex max-w-[245px] flex-col gap-6 max-mobile:max-w-[296px] max-mobile:items-center">
              {getSections(currentSection).map(({ title, isActive, id }) => (
                <a
                  className={cn(
                    'cursor-pointer font-rammetto-one leading-[104%] max-mobile:text-center',
                    { 'text-[54px] max-sm:text-3xl': isActive, 'text-[15px] text-white max-sm:text-xs': !isActive },
                    isActive && linkVariants[currentSection],
                  )}
                  key={title}
                  href={`#${id}`}
                  onClick={() => {
                    handleSectionClick(id);
                  }}
                >
                  {title}
                </a>
              ))}
              {section !== 'home' && (
                <StandardButton
                  primaryColor="red"
                  secondaryColor="blue"
                  fontColor="white"
                  href={ROUTES.newFundraising}
                  isAnimation={true}
                >
                  Start a fundraiser
                </StandardButton>
              )}
            </div>
          )}
        </nav>
      </div>
    );
  },
);

export { LandingNav };
