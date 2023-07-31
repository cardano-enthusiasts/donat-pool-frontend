import {
  Fragment,
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ForwardedRef,
  type MutableRefObject,
} from 'react';

import { type LandingSection } from 'shared/types';

import {
  AboutUsWrapper,
  HowItWorksWrapper,
  MainInner,
  MainWrapper,
  RoadmapWrapper,
  TitleAndDescriptionWrapper,
  WhyChooseUsWrapper,
} from './LandingContent.styled';
import { type Props, type Content } from './types';
import {
  AboutUs,
  Footer,
  HowItWorks,
  Roadmap,
  TitleAndDescription,
  Waves,
  WhyChooseUs,
} from '..';

const LandingContent = forwardRef(function LandingContent(
  {
    windowScroll,
    setIsAnimationActive,
    currentSection,
    setCurrentSection,
  }: Props,
  navRef: ForwardedRef<HTMLElement> | null,
) {
  const homeRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const [isHomeAnimationActive, setIsHomeAnimationActive] = useState(false);
  const [isRoadmapAnimationActive, setIsRoadmapAnimationActive] =
    useState(false);

  useEffect(() => {
    if (
      homeRef.current &&
      windowScroll > homeRef.current.getBoundingClientRect().top
    ) {
      setIsAnimationActive(false);
    }
  }, [windowScroll, homeRef.current]);

  useEffect(() => {
    if (currentSection === 'roadmap') {
      setIsRoadmapAnimationActive(true);
    }
  }, [currentSection]);

  useEffect(() => {
    if (homeRef.current) {
      setIsHomeAnimationActive(
        window.innerHeight - 400 > homeRef.current.getBoundingClientRect().top,
      );
    }
  }, [windowScroll]);

  const getRefSection = (): LandingSection => {
    const areRefsDefined =
      (navRef as MutableRefObject<HTMLElement>)?.current &&
      homeRef.current &&
      howItWorksRef.current &&
      whyChooseUsRef.current &&
      aboutUsRef.current &&
      contactUsRef.current;

    if (areRefsDefined) {
      const navTop = Math.round(
        (
          navRef as MutableRefObject<HTMLElement>
        )?.current.getBoundingClientRect().top,
      );
      const navBottom = Math.round(
        (
          navRef as MutableRefObject<HTMLElement>
        )?.current.getBoundingClientRect().bottom,
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
        contactUsRef.current.getBoundingClientRect().top,
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

  const content: Content = [
    {
      element: (
        <TitleAndDescriptionWrapper id="home" ref={homeRef}>
          <TitleAndDescription isActive={isHomeAnimationActive} />
        </TitleAndDescriptionWrapper>
      ),
      id: 'home',
      backgroundColor: 'blue',
      waves: {
        color: 'green',
      },
    },

    {
      element: (
        <HowItWorksWrapper id="how-it-works" ref={howItWorksRef}>
          <HowItWorks />
        </HowItWorksWrapper>
      ),
      id: 'how-it-works',
      backgroundColor: 'green',
      waves: {
        color: 'red',
      },
    },

    {
      element: (
        <WhyChooseUsWrapper id="why-choose-us" ref={whyChooseUsRef}>
          <WhyChooseUs />
        </WhyChooseUsWrapper>
      ),
      id: 'why-choose-us',
      backgroundColor: 'red',
      waves: null,
    },
    {
      element: (
        <AboutUsWrapper id="about-us" ref={aboutUsRef}>
          <AboutUs />
        </AboutUsWrapper>
      ),
      id: 'about-us',
      backgroundColor: 'yellow',
      waves: {
        color: 'black',
      },
    },

    {
      element: (
        <RoadmapWrapper id="roadmap">
          <Roadmap isActive={isRoadmapAnimationActive} />
        </RoadmapWrapper>
      ),
      id: 'roadmap',
      backgroundColor: 'black',
      waves: null,
    },

    {
      element: (
        <div id="contact-us" ref={contactUsRef}>
          <Footer backgroundColor="black" />
        </div>
      ),
      id: 'contact-us',
      backgroundColor: 'black',
      waves: null,
    },
  ];
  return (
    <>
      {content.map(({ element, id, backgroundColor, waves }) => {
        return (
          <Fragment key={id}>
            <MainWrapper backgroundColor={backgroundColor}>
              <MainInner>{element}</MainInner>
            </MainWrapper>
            {waves && (
              <Waves color={waves.color} backgroundColor={backgroundColor} />
            )}
          </Fragment>
        );
      })}
    </>
  );
});

export { LandingContent };
