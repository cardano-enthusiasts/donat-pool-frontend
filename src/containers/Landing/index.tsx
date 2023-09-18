'use client';

import { useRef, useState } from 'react';

import { InitialLoading, LandingContent, LandingNav, Waves } from '@/shared/components';
import type { LandingSection } from '@/shared/types';

function Landing() {
  const navRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<LandingSection>('home');
  const [animationIsActive, setAnimationIsActive] = useState(true);

  function handleSectionClick(clickedSection: LandingSection) {
    setCurrentSection(clickedSection);
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-fhd flex-col">
      <div className="relative">
        <InitialLoading animationIsActive={animationIsActive} />
        <div className="absolute bottom-0 w-full">
          <Waves />
        </div>
      </div>
      <LandingContent
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setAnimationIsActive={setAnimationIsActive}
        ref={navRef}
      />
      <LandingNav
        currentSection={currentSection}
        ref={navRef}
        animationIsActive={animationIsActive}
        handleSectionClick={handleSectionClick}
      />
    </div>
  );
}

export default Landing;
