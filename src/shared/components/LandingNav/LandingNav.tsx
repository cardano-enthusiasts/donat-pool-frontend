import { type ForwardedRef, forwardRef } from 'react';

import { getSections } from './data';
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
    isAnimationActive,
  }: Props,
  ref: ForwardedRef<HTMLElement>,
) {
  const mobileResolution = 1100;
  const isContentShown = windowWidth > mobileResolution ? true : isOpen;
  const section =
    windowWidth > mobileResolution || currentSection !== 'contact-us'
      ? currentSection
      : 'roadmap';

  return (
    <Wrapper
      windowScroll={windowScroll / 10}
      windowWidth={windowWidth}
      isOpen={isOpen}
      mobileResolution={mobileResolution}
      ref={ref}
      currentSection={section}
      isAnimationActive={isAnimationActive}
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
        <Inner mobileResolution={mobileResolution}>
          {getSections(currentSection).map(({ title, isActive, id }) => (
            <Link
              key={title}
              isActive={isActive}
              currentSection={section}
              href={`#${id}`}
              onClick={() => {
                handleSectionClick(id);
              }}
              mobileResolution={mobileResolution}
            >
              {title}
            </Link>
          ))}
          {section !== 'home' && (
            <Button
              themeType="standard"
              primaryColor="red"
              secondaryColor="blue"
              fontColor="white"
              href="/new-project"
              isAnimation={true}
            >
              Start a fundraiser
            </Button>
          )}
        </Inner>
      )}
    </Wrapper>
  );
});

export { LandingNav };
