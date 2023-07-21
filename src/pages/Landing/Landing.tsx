import { useEffect, useRef, useState } from 'react';

import {
  AboutUs,
  Footer,
  HowItWorksItems,
  InitialLoading,
  LandingNav,
  Roadmap,
  TitleAndDescription,
  Tutorial,
  Waves,
  WhyChooseUs,
} from 'shared/components';
import { useWindowSize } from 'shared/helpers/hooks';
import { useWindowScroll } from 'shared/helpers/hooks/useWindowScroll';
import { type LandingSection } from 'shared/types';

import {
  TitleAndDescriptionWrapper,
  DonutsWrapper,
  WavesWrapper,
  Wrapper,
  MainWrapper,
  MainInner,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  Inner,
  InitialLoadingWrapper,
  HowItWorksWrapper,
  ContactUsWrapper,
} from './Landing.styled';

const Landing = () => {
  const [isActive, setIsActive] = useState(false);
  const windowScroll = useWindowScroll();
  const { width: windowWidth } = useWindowSize();
  const [currentSection, setCurrentSection] = useState<LandingSection>('home');
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Donat.Pool';
  }, []);

  useEffect(() => {
    if (
      homeRef.current &&
      windowScroll > homeRef.current.getBoundingClientRect().top
    ) {
      setIsAnimationActive(false);
    }
  }, [windowScroll, homeRef.current]);

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

  useEffect(() => {
    if (homeRef.current) {
      setIsActive(
        window.innerHeight - 400 > homeRef.current.getBoundingClientRect().top
      );
    }
  }, [windowScroll]);

  return (
    <Wrapper>
      <Inner>
        <DonutsWrapper>
          <InitialLoadingWrapper
            isAnimationActive={isAnimationActive}
            windowScroll={windowScroll}
          >
            <InitialLoading
              windowScroll={windowScroll}
              isAnimationActive={isAnimationActive}
            />
          </InitialLoadingWrapper>

          <WavesWrapper>
            <Waves />
          </WavesWrapper>
        </DonutsWrapper>

        <MainWrapper backgroundColor="blue">
          <MainInner>
            <TitleAndDescriptionWrapper id="home" ref={homeRef}>
              <TitleAndDescription isActive={isActive} />
            </TitleAndDescriptionWrapper>
          </MainInner>
        </MainWrapper>

        <Waves color="green" backgroundColor="blue" />

        <MainWrapper backgroundColor="green">
          <MainInner>
            <HowItWorksWrapper id="how-it-works" ref={howItWorksRef}>
              <HowItWorksItems />
              <Tutorial />
            </HowItWorksWrapper>
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

        <MainWrapper backgroundColor="black">
          <MainInner>
            <ContactUsWrapper id="contact-us" ref={contactUsRef}>
              <Footer backgroundColor="black" />
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
          isAnimationActive={isAnimationActive}
        />
      </Inner>
    </Wrapper>
  );
};

export default Landing;
