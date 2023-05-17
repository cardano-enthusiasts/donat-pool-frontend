import { useEffect, useState } from 'react';

import {
  AboutUs,
  Button,
  InitialLoading,
  LandingNav,
  Waves,
  WhyChooseUs,
} from 'shared/components';
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
  Wrapper,
  MainWrapper,
  NavWrapper,
  WhyChooseUsWrapper,
  AboutUsWrapper,
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
    console.log('windowScroll', windowScroll);

    if (windowScroll < 2233) {
      setCurrentSection('home');
    } else if (windowScroll > 2233 && windowScroll < 2880) {
      setCurrentSection('how it works');
    } else if (windowScroll > 2880 && windowScroll < 3420) {
      setCurrentSection('why choose us');
    } else if (windowScroll > 3420) {
      setCurrentSection('about us');
    }
    console.log('current section', currentSection);
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
            <Button themeType="secondary">Start using</Button>
          </ButtonWrapper>
        </TitleAndDescription>
        <Waves color="green" backgroundColor="blue" />

        <MainWrapper backgroundColor="green">
          <HowItWorksItems />
        </MainWrapper>

        <Waves color="red" backgroundColor="green" />

        <WhyChooseUsWrapper>
          <WhyChooseUs />
        </WhyChooseUsWrapper>

        <AboutUsWrapper>
          <AboutUs />
        </AboutUsWrapper>
      </Wrapper>
      <NavWrapper windowScroll={windowScroll / 10}>
        <LandingNav currentSection={currentSection} />
      </NavWrapper>
    </>
  );
};

export default Home;
