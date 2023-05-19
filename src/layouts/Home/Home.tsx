import { useEffect, useState } from 'react';

import {
  AboutUs,
  Button,
  ContactUsSection,
  HowItWorksItems,
  InitialLoading,
  LandingNav,
  Roadmap,
  Waves,
  WhyChooseUs,
} from 'shared/components';
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
  MainInner,
  NavWrapper,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  Inner,
  InitialLoadingWrapper,
  HowItWorksItemsWrapper,
} from './Home.styled';

const Home = () => {
  const [windowScroll, setWindowScroll] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    const handleScroll = () => {
      setWindowWidth(Math.round(window.innerWidth));
    };

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
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
    } else if (windowScroll > 3420 && windowScroll < 5650) {
      setCurrentSection('about us');
    } else if (windowScroll > 5650 && windowScroll < 6420) {
      setCurrentSection('roadmap');
    } else if (windowScroll > 6420) {
      setCurrentSection('contact us');
    }
    console.log('current section', currentSection);
  }, [windowScroll]);

  return (
    <Wrapper>
      <Inner>
        <DonutsWrapper>
          <InitialLoadingWrapper>
            <InitialLoading windowScroll={windowScroll} />
          </InitialLoadingWrapper>

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
          <MainInner>
            <HowItWorksItemsWrapper>
              <HowItWorksItems />
            </HowItWorksItemsWrapper>
          </MainInner>
        </MainWrapper>

        <Waves color="red" backgroundColor="green" />

        <MainWrapper backgroundColor="red">
          <MainInner>
            <WhyChooseUsWrapper>
              <WhyChooseUs />
            </WhyChooseUsWrapper>
          </MainInner>
        </MainWrapper>

        <MainWrapper backgroundColor="yellow">
          <MainInner>
            <AboutUsWrapper>
              <AboutUs />
            </AboutUsWrapper>
          </MainInner>
        </MainWrapper>

        <Waves color="black" backgroundColor="yellow" />

        <MainWrapper backgroundColor="black">
          <MainInner>
            <RoadmapWrapper>
              <Roadmap />
            </RoadmapWrapper>
          </MainInner>
        </MainWrapper>

        <MainWrapper backgroundColor="blue">
          <MainInner>
            <ContactUsSection />
          </MainInner>
        </MainWrapper>

        <NavWrapper windowScroll={windowScroll / 10} windowWidth={windowWidth}>
          <LandingNav currentSection={currentSection} />
        </NavWrapper>
      </Inner>
    </Wrapper>
  );
};

export default Home;
