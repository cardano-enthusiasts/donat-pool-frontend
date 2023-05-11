import { useEffect, useState } from 'react';

import { type CurrentLandingSection } from 'shared/types';

import {
  CatImage,
  InnerCircle,
  OuterCircle,
  Wrapper,
  NavWrapper,
} from './InitialLoading.styled';
import { ActionDonuts } from '../ActionDonuts/ActionDonuts';
import { LandingNav } from '../LandingNav/LandingNav';

const InitialLoading = () => {
  const [windowScroll, setWindowScroll] = useState(0);
  const [currentSection, setCurrentSection] =
    useState<CurrentLandingSection>('home');

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(Math.round(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <InnerCircle windowScroll={windowScroll / 10} />
      <OuterCircle windowScroll={windowScroll / 10} />
      <ActionDonuts />
      <CatImage />
      <NavWrapper windowScroll={windowScroll / 10}>
        <LandingNav currentSection={currentSection} />
      </NavWrapper>
    </Wrapper>
  );
};

export { InitialLoading };
