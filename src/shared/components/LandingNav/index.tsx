'use client';

import cn from 'classnames';
import Image from 'next/image';
import { type ForwardedRef, forwardRef, useEffect, useRef } from 'react';

import { StandardButton, Waves } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

import { getSections, linkVariants, wrapperVariants } from './data';
import styles from './styles.module.css';
import { Props } from './types';

const LandingNav = forwardRef(function LandingNav(
  { currentSection, windowScroll, windowWidth, shown, animationIsActive, handleIconClick, handleSectionClick }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const mobileResolution = 1280;
  const contentShown = windowWidth > mobileResolution ? true : shown;
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
        'fixed top-[5.625rem] max-3xl:left-[5.625rem] max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:flex max-xl:w-[100vw] max-xl:items-center max-xl:justify-center',
        {
          'z-[-1] max-xl:z-[100]': currentSection === 'contact-us',
          'z-[3] max-xl:z-[100]': currentSection !== 'contact-us',
          hidden: windowScroll < 500 && animationIsActive,
          'max-xl:h-[100vh] max-xl:overflow-auto': shown,
        },
        wrapperVariants[currentSection],
      )}
    >
      <nav ref={ref}>
        {windowWidth < mobileResolution && (
          <>
            <Image
              className="absolute right-5 top-5 h-10 w-10"
              src={`/icons/${shown ? 'close' : 'menu'}.svg`}
              alt="icon"
              width="50"
              height="50"
              onClick={handleIconClick}
            />
            <div className="absolute left-0 right-0 top-0 z-[-1]">
              <Waves upsideDown color="red" moving={false} />
            </div>
          </>
        )}
        {contentShown && (
          <div className="flex max-w-[15.3125rem] flex-col gap-6 max-xl:max-w-[18.5rem] max-xl:items-center">
            {getSections(currentSection).map(({ title, active, id }) => (
              <a
                className={cn(
                  'cursor-pointer font-rammetto-one leading-[104%] max-xl:text-center',
                  {
                    'text-[3.375rem] max-sm:text-3xl': active,
                    'text-[0.9375rem] text-white max-sm:text-xs': !active,
                  },
                  active && linkVariants[currentSection],
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
                href={ROUTES.newDonatPool}
                animated
              >
                Create Donat.Pool
              </StandardButton>
            )}
          </div>
        )}
      </nav>
    </div>
  );
});

export default LandingNav;
