import { useEffect, useRef, useState } from 'react';

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
import { useWindowSize } from 'shared/helpers/hooks';
import { useWindowScroll } from 'shared/helpers/hooks/useWindowScroll';
import { type LandingSection } from 'shared/types';

import {
  TitleAndDescription,
  DonutsWrapper,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
  WavesWrapper,
  Wrapper,
  MainWrapper,
  MainInner,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  Inner,
  InitialLoadingWrapper,
  HowItWorksItemsWrapper,
  MainLogo,
  ContactUsWrapper,
} from './Landing.styled';

const Landing = () => {
  const windowScroll = useWindowScroll();
  const { width: windowWidth } = useWindowSize();
  const [currentSection, setCurrentSection] = useState<LandingSection>('home');
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const getRefSection = (): LandingSection => {
    const areRefsDefined =
      navRef.current &&
      homeRef.current &&
      howItWorksRef.current &&
      whyChooseUsRef.current &&
      aboutUsRef.current &&
      contactUsRef.current;

    if (areRefsDefined) {
      const navTop = Math.round(navRef.current.getBoundingClientRect().top);
      const navBottom = Math.round(
        navRef.current.getBoundingClientRect().bottom
      );
      const navMiddle = (navBottom - navTop) / 2 + navTop;

      const refsWithoutContactUs = {
        home: homeRef,
        'how-it-works': howItWorksRef,
        'why-choose-us': whyChooseUsRef,
        'about-us': aboutUsRef,
      };

      let prop: LandingSection;
      for (prop in refsWithoutContactUs) {
        if (
          refsWithoutContactUs[prop].current.getBoundingClientRect().bottom >
          navMiddle
        ) {
          return prop;
        }
      }

      const contactUsTop = Math.round(
        contactUsRef.current.getBoundingClientRect().top
      );
      if (contactUsTop - 100 > navBottom) {
        return 'roadmap';
      }
      return 'contact-us';
    }
    return 'home';
  };

  useEffect(() => {
    setCurrentSection(getRefSection());
  }, [windowScroll]);

  const handleMobileHeaderClick = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
  };

  const handleSectionClick = (clickedSection: LandingSection) => {
    setCurrentSection(clickedSection);
  };

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

        <MainWrapper backgroundColor="blue">
          <MainInner>
            <TitleAndDescription id="home" ref={homeRef}>
              <MainLogo src="/img/big-logo.svg" alt="Donat pool logo" />
              <Description>
                <DescriptionPart1>Give a little,</DescriptionPart1>
                <DescriptionPart2>help a lot</DescriptionPart2>
              </Description>
              <ButtonWrapper>
                <Button themeType="secondary" href="/my-projects">
                  Start
                  <br />
                  using
                </Button>
              </ButtonWrapper>
            </TitleAndDescription>
          </MainInner>
        </MainWrapper>

        <Waves color="green" backgroundColor="blue" />

        <MainWrapper backgroundColor="green">
          <MainInner>
            <HowItWorksItemsWrapper id="how-it-works" ref={howItWorksRef}>
              <HowItWorksItems />
            </HowItWorksItemsWrapper>
          </MainInner>
        </MainWrapper>

        <Waves color="red" backgroundColor="green" />

        <MainWrapper backgroundColor="red">
          <MainInner>
            <WhyChooseUsWrapper id="why-choose-us" ref={whyChooseUsRef}>
              <WhyChooseUs />
            </WhyChooseUsWrapper>
          </MainInner>
        </MainWrapper>

        <MainWrapper backgroundColor="yellow">
          <MainInner>
            <AboutUsWrapper id="about-us" ref={aboutUsRef}>
              <AboutUs />
            </AboutUsWrapper>
          </MainInner>
        </MainWrapper>

        <Waves color="black" backgroundColor="yellow" />

        <MainWrapper backgroundColor="black">
          <MainInner>
            <RoadmapWrapper id="roadmap">
              <Roadmap />
            </RoadmapWrapper>
          </MainInner>
        </MainWrapper>

        <MainWrapper backgroundColor="blue">
          <MainInner>
            <ContactUsWrapper id="contact-us" ref={contactUsRef}>
              <ContactUsSection />
            </ContactUsWrapper>
          </MainInner>
        </MainWrapper>
        <LandingNav
          currentSection={currentSection}
          windowScroll={windowScroll}
          windowWidth={windowWidth}
          handleIconClick={handleMobileHeaderClick}
          handleSectionClick={handleSectionClick}
          isOpen={isMobileHeaderOpen}
          ref={navRef}
        />
      </Inner>
    </Wrapper>
  );
};

export default Landing;