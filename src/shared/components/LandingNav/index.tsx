'use client';

import cn from 'classnames';
import type { ForwardedRef } from 'react';
import { forwardRef, useState } from 'react';

import { PrimaryLink, Waves } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useWindowSize } from '@/shared/hooks';
import CloseIcon from '@public/icons/close.svg';
import MenuIcon from '@public/icons/menu.svg';

import { getSections, LINK_CLASSES, WRAPPER_CLASSES } from './data';
import type { Props } from './types';

const LandingNav = forwardRef(function LandingNav(
  { currentSection, handleSectionClick }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { width: windowWidth } = useWindowSize();
  const [mobileHeaderIsShown, setMobileHeaderIsShown] = useState(false);
  const mobileResolution = 1280;
  const contentShown = windowWidth > mobileResolution ? true : mobileHeaderIsShown;
  const section = windowWidth > mobileResolution || currentSection !== 'contact-us' ? currentSection : 'roadmap';

  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Icon = mobileHeaderIsShown ? CloseIcon : MenuIcon;

  function handleIconClick() {
    setMobileHeaderIsShown(!mobileHeaderIsShown);
  }

  return (
    <div
      className={cn(
        `fixed
        left-20
        top-20
        [overflow-wrap:break-word]
        max-xl:fixed
        max-xl:left-0
        max-xl:top-0
        max-xl:flex
        max-xl:w-[100vw]
        max-xl:items-center
        max-xl:justify-center`,
        {
          'max-xl:h-[100vh] max-xl:overflow-auto': mobileHeaderIsShown,
        },
        WRAPPER_CLASSES[currentSection],
      )}
      style={windowWidth > 1920 ? { left: `${(windowWidth - 1920) / 2 + 80}px` } : undefined}
    >
      <nav ref={ref}>
        <div className="hidden max-[1280px]:block">
          <Icon className="absolute right-5 top-5 h-10 w-10 [&>path]:fill-green" onClick={handleIconClick} />
          <div className="absolute left-0 right-0 top-0 z-[-1]">
            <Waves upsideDown color="red" moving={false} />
          </div>
        </div>

        {contentShown && (
          <div className="flex max-w-[15.3125rem] flex-col gap-6 max-xl:max-w-[18.5rem] max-xl:items-center">
            {getSections(currentSection).map(({ title, active, id }) => (
              <a
                className={cn(
                  'font-rammetto-one leading-[104%] max-xl:text-center',
                  {
                    'text-[3.375rem] max-sm:text-3xl': active,
                    'text-[0.9375rem] text-white max-sm:text-xs': !active,
                  },
                  active && LINK_CLASSES[currentSection],
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
              <div>
                <PrimaryLink href={ROUTES.newDonatPool}>Create Donat.Pool</PrimaryLink>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
});

export default LandingNav;
