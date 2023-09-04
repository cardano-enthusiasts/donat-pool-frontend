'use client';

import type { Metadata } from 'next';
import { useRef, useState } from 'react';

import { InitialLoading, LandingContent, LandingNav, Waves } from '@/shared/components';
import { useWindowSize, useWindowScroll } from '@/shared/hooks';
import { LandingSection } from '@/shared/types';

const metadata: Metadata = {
  title: 'Donat.Pool: Crowdfunding on Cardano blockchain',
  description:
    'Bring your projects to life with community support and help others. Lowest fees and highest reliability.',
};

function Page() {
  const windowScroll = useWindowScroll();
  const { width: windowWidth } = useWindowSize();
  const [currentSection, setCurrentSection] = useState<LandingSection>('home');
  const [mobileHeaderIsShown, setMobileHeaderIsShown] = useState(false);
  const [animationIsActive, setAnimationIsActive] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);

  function handleMobileHeaderClick() {
    setMobileHeaderIsShown((m) => !m);
  }

  function handleSectionClick(clickedSection: LandingSection) {
    setCurrentSection(clickedSection);
  }

  return (
    <div className="flex flex-col">
      <div className="relative">
        <InitialLoading windowScroll={windowScroll} animationIsActive={animationIsActive} />
        <div className="absolute bottom-0 w-full">
          <Waves />
        </div>
      </div>
      <LandingContent
        windowScroll={windowScroll}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setAnimationIsActive={setAnimationIsActive}
        ref={navRef}
      />
      <LandingNav
        currentSection={currentSection}
        windowScroll={windowScroll}
        windowWidth={windowWidth}
        shown={mobileHeaderIsShown}
        ref={navRef}
        animationIsActive={animationIsActive}
        handleIconClick={handleMobileHeaderClick}
        handleSectionClick={handleSectionClick}
      />
    </div>
  );
}

export { Page as default, metadata };
