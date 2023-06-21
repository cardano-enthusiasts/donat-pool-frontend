import { type ForwardedRef, forwardRef } from 'react';

import { type LandingSection } from 'shared/types';

import { Icon, Inner, Link, WavesWrapper, Wrapper } from './LandingNav.styled';
import { type Props } from './types';
import { Button, Waves } from '../.';

const LandingNav = forwardRef(function LandingNav(
  {
    currentSection,
    windowScroll,
    windowWidth,
    handleIconClick,
    handleSectionClick,
    isOpen,
  }: Props,
  ref: ForwardedRef<HTMLElement>
) {
  const sections: Array<{
    title: string;
    isActive: boolean;
    id: LandingSection;
  }> = [
    { title: 'Home', isActive: currentSection === 'home', id: 'home' },
    {
      title: 'How it works',
      isActive: currentSection === 'how-it-works',
      id: 'how-it-works',
    },
    {
      title: 'Why choose us',
      isActive: currentSection === 'why-choose-us',
      id: 'why-choose-us',
    },
    {
      title: 'About us',
      isActive: currentSection === 'about-us',
      id: 'about-us',
    },
    {
      title: 'Roadmap',
      isActive: currentSection === 'roadmap',
      id: 'roadmap',
    },
  ];
  const mobileResolution = 1100;
  const isContentShown = windowWidth > mobileResolution ? true : isOpen;

  return (
    <Wrapper
      windowScroll={windowScroll / 10}
      windowWidth={windowWidth}
      isOpen={isOpen}
      mobileResolution={mobileResolution}
      ref={ref}
    >
      {windowWidth < mobileResolution && (
        <>
          <Icon
            src={`/icons/${isOpen ? 'close' : 'menu'}.svg`}
            alt="icon"
            onClick={handleIconClick}
          />
          <WavesWrapper>
            <Waves isUpsideDown={true} color="red" isMoving={false} />
          </WavesWrapper>
        </>
      )}
      {isContentShown && (
        <Inner currentSection={currentSection}>
          {sections.map(({ title, isActive, id }) => (
            <Link
              key={title}
              isActive={isActive}
              currentSection={currentSection}
              href={`#${id}`}
              onClick={() => {
                handleSectionClick(id);
              }}
            >
              {title}
            </Link>
          ))}
          {currentSection !== 'home' && (
            <Button
              themeType="primary"
              primaryColor="red"
              secondaryColor="blue"
            >
              Create an account
            </Button>
          )}
        </Inner>
      )}
    </Wrapper>
  );
});

export { LandingNav };
