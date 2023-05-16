import { useEffect, useState } from 'react';

import { Button, InitialLoading, LandingNav, Waves } from 'shared/components';
import { HowItWorksItems } from 'shared/components/HowItWorksItems/HowItWorksItems';
import { type CurrentLandingSection } from 'shared/types';

import {
  TitleAndDescription,
  DonutsWrapper,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
  WavesWrapper,
  HowItWorks,
  Wrapper,
  MainWrapper,
  NavWrapper,
} from './Home.styled';

const Home = () => {
  const [windowScroll, setWindowScroll] = useState(0);
  const [currentSection, setCurrentSection] =
    useState<CurrentLandingSection>('home');
  useEffect(() => {
    document.title = 'Home';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(Math.round(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (windowScroll < 2233) {
      setCurrentSection('home');
    } else if (windowScroll > 2233) {
      setCurrentSection('how it works');
    }
  }, [windowScroll]);

  return (
    <>
      <Wrapper>
        <DonutsWrapper>
          <InitialLoading windowScroll={windowScroll} />
          <WavesWrapper>
            <Waves />
          </WavesWrapper>
        </DonutsWrapper>

        <TitleAndDescription>
          <Title>
            Donat.
            <br />
            Pool —
          </Title>
          <Description>
            <DescriptionPart1>Give a little,</DescriptionPart1>
            <DescriptionPart2>help a lot</DescriptionPart2>
          </Description>
          <ButtonWrapper>
            <Button>Start using</Button>
          </ButtonWrapper>
        </TitleAndDescription>
        <Waves color="green" backgroundColor="blue" />
        <HowItWorks>
          <MainWrapper>
            <HowItWorksItems />
          </MainWrapper>
        </HowItWorks>
        <Waves color="red" backgroundColor="green" />
      </Wrapper>
      <NavWrapper windowScroll={windowScroll / 10}>
        <LandingNav currentSection={currentSection} />
      </NavWrapper>
    </>
  );
};

export default Home;
