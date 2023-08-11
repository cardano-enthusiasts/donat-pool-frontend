'use client';
import { useEffect, useRef, useState } from 'react';

import { InitialLoading, LandingContent, LandingNav, Waves } from '@/shared/components';
import { useWindowSize, useWindowScroll } from '@/shared/hooks';
import type { LandingSection } from '@/shared/types/common';

const Landing = () => {
  const windowScroll = useWindowScroll();
  const { width: windowWidth } = useWindowSize();
  const [currentSection, setCurrentSection] = useState<LandingSection>('home');
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Donat.Pool';
  }, []);

  const handleMobileHeaderClick = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
  };

  const handleSectionClick = (clickedSection: LandingSection) => {
    setCurrentSection(clickedSection);
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <InitialLoading windowScroll={windowScroll} isAnimationActive={isAnimationActive} />
        <div className='absolute bottom-0 w-full'>
          <Waves />
        </div>
      </div>
      <LandingContent
        windowScroll={windowScroll}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setIsAnimationActive={setIsAnimationActive}
        ref={navRef}
      />
      <LandingNav
        currentSection={currentSection}
        windowScroll={windowScroll}
        windowWidth={windowWidth}
        handleIconClick={handleMobileHeaderClick}
        handleSectionClick={handleSectionClick}
        isOpen={isMobileHeaderOpen}
        ref={navRef}
        isAnimationActive={isAnimationActive}
      />
    </div>
  );
};

export default Landing;
