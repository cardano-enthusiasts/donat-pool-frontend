import { useEffect, useRef, useState } from 'react';

import {
  InitialLoading,
  LandingContent,
  LandingNav,
  Waves,
} from '@/shared/components';
import { useWindowSize, useWindowScroll } from '@/shared/helpers/hooks';
import { type LandingSection } from '@/shared/types';

import { DonutsWrapper, WavesWrapper, Wrapper } from './Landing.styled';

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
    <Wrapper>
      <DonutsWrapper>
        <InitialLoading
          windowScroll={windowScroll}
          isAnimationActive={isAnimationActive}
        />

        <WavesWrapper>
          <Waves />
        </WavesWrapper>
      </DonutsWrapper>

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
    </Wrapper>
  );
};

export default Landing;
