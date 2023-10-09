'use client';

import { useRef, useState } from 'react';

import { HelloSection, LandingContent, LandingNav } from '@/shared/components';
import type { LandingSection } from '@/shared/types';

function Landing() {
  const navRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<LandingSection>('home');

  function handleSectionClick(clickedSection: LandingSection) {
    setCurrentSection(clickedSection);
  }

  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <div className="relative">
        <div className="relative z-0">
          <HelloSection />
        </div>

        <LandingContent currentSection={currentSection} setCurrentSection={setCurrentSection} ref={navRef} />
        <div className="relative z-10">
          <LandingNav currentSection={currentSection} ref={navRef} handleSectionClick={handleSectionClick} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
