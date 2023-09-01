'use client';

import cn from 'classnames';
import { Fragment, forwardRef, useEffect, useRef, useState, ForwardedRef, MutableRefObject } from 'react';

import { AboutUs, Footer, HowItWorks, Roadmap, TitleAndDescription, Waves, WhyChooseUs } from '@/shared/components';
import { LandingSection } from '@/shared/types';

import CLASSES from './constants';
import { Props, Content, Section, Refs } from './types';

const LandingContent = forwardRef(function LandingContent(
  { windowScroll, setAnimationIsActive, currentSection, setCurrentSection }: Props,
  navRef: ForwardedRef<HTMLElement> | null,
) {
  const homeRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const [isHomeAnimationActive, setIsHomeAnimationActive] = useState(false);
  const [isRoadmapAnimationActive, setIsRoadmapAnimationActive] = useState(false);

  useEffect(() => {
    if (homeRef.current && windowScroll > homeRef.current.getBoundingClientRect().top) {
      setAnimationIsActive(false);
    }
  }, [windowScroll, homeRef.current]);

  useEffect(() => {
    if (currentSection === 'roadmap') {
      setIsRoadmapAnimationActive(true);
    }
  }, [currentSection]);

  useEffect(() => {
    if (homeRef.current) {
      setIsHomeAnimationActive(window.innerHeight - 400 > homeRef.current.getBoundingClientRect().top);
    }
  }, [windowScroll]);

  function getRefSection(): LandingSection {
    const refsAreDefined =
      (navRef as MutableRefObject<HTMLElement>)?.current &&
      homeRef.current &&
      howItWorksRef.current &&
      whyChooseUsRef.current &&
      aboutUsRef.current &&
      contactUsRef.current;

    if (refsAreDefined) {
      const navTop = Math.round((navRef as MutableRefObject<HTMLElement>)?.current.getBoundingClientRect().top);
      const navBottom = Math.round((navRef as MutableRefObject<HTMLElement>)?.current.getBoundingClientRect().bottom);
      const navMiddle = (navBottom - navTop) / 2 + navTop;

      const refsWithoutContactUs: Refs = {
        home: homeRef,
        'how-it-works': howItWorksRef,
        'why-choose-us': whyChooseUsRef,
        'about-us': aboutUsRef,
      };

      let prop: Section;
      for (prop in refsWithoutContactUs) {
        // "current" exists in refsWithoutContactUs[prop], because it is ref
        if (refsWithoutContactUs[prop].current!.getBoundingClientRect().bottom > navMiddle) {
          return prop;
        }
      }

      const contactUsTop = Math.round(contactUsRef.current.getBoundingClientRect().top);
      if (contactUsTop - 100 > navBottom) {
        return 'roadmap';
      }
      return 'contact-us';
    }
    return 'home';
  }

  useEffect(() => {
    setCurrentSection(getRefSection());
  }, [windowScroll]);

  const content: Content = [
    {
      element: (
        <div className={CLASSES} id="home" ref={homeRef}>
          <TitleAndDescription active={isHomeAnimationActive} />
        </div>
      ),
      id: 'home',
      backgroundColor: 'blue',
      waves: {
        color: 'green',
      },
    },

    {
      element: (
        <div className={`${CLASSES} pb-20 max-lg:pb-15`} id="how-it-works" ref={howItWorksRef}>
          <HowItWorks />
        </div>
      ),
      id: 'how-it-works',
      backgroundColor: 'green',
      waves: {
        color: 'red',
      },
    },

    {
      element: (
        <div
          className={`${CLASSES} bg-[url("/img/section-cat.svg")] bg-[length:100%] bg-[0_100%] bg-no-repeat pb-40 pt-0`}
          id="why-choose-us"
          ref={whyChooseUsRef}
        >
          <WhyChooseUs />
        </div>
      ),
      id: 'why-choose-us',
      backgroundColor: 'red',
      waves: null,
    },
    {
      element: (
        <div className={cn(CLASSES, 'pt-0 max-sm:pt-12')} id="about-us" ref={aboutUsRef}>
          <AboutUs />
        </div>
      ),
      id: 'about-us',
      backgroundColor: 'yellow',
      waves: {
        color: 'black',
      },
    },

    {
      element: (
        <div className={`${CLASSES} select-none overflow-hidden bg-black pt-0`} id="roadmap">
          <Roadmap active={isRoadmapAnimationActive} />
        </div>
      ),
      id: 'roadmap',
      backgroundColor: 'black',
      waves: null,
    },

    {
      element: (
        <div id="contact-us" ref={contactUsRef}>
          <Footer theme="black" />
        </div>
      ),
      id: 'contact-us',
      backgroundColor: 'black',
      waves: null,
    },
  ];

  return (
    <>
      {content.map(({ element, id, backgroundColor, waves }) => (
        <Fragment key={id}>
          <div
            className={cn('w-full', {
              'bg-green': backgroundColor === 'green',
              'bg-red': backgroundColor === 'red',
              'bg-black': backgroundColor === 'black',
              'bg-yellow': backgroundColor === 'yellow',
              'bg-blue': backgroundColor === 'blue',
            })}
          >
            <div className="mx-auto my-0 w-full max-w-[120rem]">{element}</div>
          </div>
          {waves && <Waves color={waves.color} backgroundColor={backgroundColor} />}
        </Fragment>
      ))}
    </>
  );
});

export default LandingContent;
