import {
  Fragment,
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ForwardedRef,
  type MutableRefObject,
} from 'react';

import { type LandingSection } from '@/shared/types';

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
      wavesClassName: 'bg-blue',
      wavesUseClassName: 'fill-green',
    },

    {
      element: (
        <HowItWorksWrapper id="how-it-works" ref={howItWorksRef}>
          <HowItWorks />
        </HowItWorksWrapper>
      ),
      id: 'how-it-works',
      wavesClassName: 'bg-green',
      wavesUseClassName: 'fill-red',
    },

    {
      element: (
        <WhyChooseUsWrapper id="why-choose-us" ref={whyChooseUsRef}>
          <WhyChooseUs />
        </WhyChooseUsWrapper>
      ),
      id: 'why-choose-us',
      wavesClassName: 'bg-red',
    },
    {
      element: (
        <AboutUsWrapper id="about-us" ref={aboutUsRef}>
          <AboutUs />
        </AboutUsWrapper>
      ),
      id: 'about-us',
      wavesClassName: 'bg-yellow',
      wavesUseClassName: 'fill-black',
    },

    {
      element: (
        <RoadmapWrapper id="roadmap">
          <Roadmap isActive={isRoadmapAnimationActive} />
        </RoadmapWrapper>
      ),
      id: 'roadmap',
      wavesClassName: 'bg-black',
    },

    {
      element: (
        <div id="contact-us" ref={contactUsRef}>
          <Footer backgroundColor="black" />
        </div>
      ),
      id: 'contact-us',
      wavesClassName: 'black',
    },
  ];
  return (
    <>
      {content.map(({ element, id, wavesClassName, wavesUseClassName }) => {
        return (
          <Fragment key={id}>
            <div className={`w-full ${wavesClassName}`}>
              <MainInner>{element}</MainInner>
            </div>
            {wavesUseClassName && (
              <Waves
                className={wavesClassName}
                useClassName={wavesUseClassName}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
});

export { LandingContent };
