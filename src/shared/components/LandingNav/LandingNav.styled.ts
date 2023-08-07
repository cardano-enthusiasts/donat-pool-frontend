import styled from 'styled-components';

import { type LandingSection } from '@/shared/types/common';

const Wrapper = styled.nav<{
  windowScroll: any;
  windowWidth: any;
  isOpen: any;
  mobileResolution: any;
  currentSection: any;
  isAnimationActive: any;
}>`
  position: fixed;
  left: ${({ windowWidth }) => (windowWidth - 1920) / 2 + 90}px;
  top: 90px;
  overflow-wrap: break-word;

  z-index: ${({ currentSection }) =>
    currentSection === 'contact-us' ? '-1' : '3'};

  display: ${({ windowScroll, isAnimationActive }) =>
    windowScroll > 50 || !isAnimationActive ? 'block' : 'none'};

  @media (max-width: 1920px) {
    left: 90px;
  }
  @media (max-width: ${({ mobileResolution }) => mobileResolution}px) {
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    ${({ isOpen }) => isOpen && 'height: 100vh'};
    ${({ isOpen }) => isOpen && 'overflow: none'};
    background-color: ${({ theme, currentSection }) => {
      switch (currentSection) {
        case 'home':
          return theme.colors.blue;
        case 'how-it-works':
          return theme.colors.green;
        case 'why-choose-us':
          return theme.colors.red;
        case 'about-us':
          return theme.colors.yellow;
        case 'roadmap':
          return theme.colors.black;
        default:
          return theme.colors.white;
      }
    }};
  }
`;

const Icon = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 20px;
`;

const Inner = styled.div<{
  mobileResolution: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #fff;
  max-width: 245px;

  @media (max-width: ${({ mobileResolution }) => mobileResolution}px) {
    align-items: center;
    max-width: 296px;
  }
`;

const Link = styled.a<{
  isActive: boolean;
  currentSection: LandingSection;
  mobileResolution: number;
}>`
  font-family: var(--rammetto-one-font);
  font-size: ${({ isActive }) => (isActive ? '54px' : '15px')};
  line-height: 104%;
  cursor: pointer;
  color: ${({ theme, currentSection, isActive }) => {
    if (isActive) {
      switch (currentSection) {
        case 'home':
          return theme.colors.green;
        case 'how-it-works':
          return theme.colors.red;
        case 'why-choose-us':
          return theme.colors.yellow;
        case 'about-us':
          return theme.colors.green;
        case 'roadmap':
          return theme.colors.blue;
        default:
          return theme.colors.white;
      }
    }
    return theme.colors.white;
  }};

  @media (max-width: ${({ mobileResolution }) => mobileResolution}px) {
    font-size: ${({ isActive }) => (isActive ? '54px' : '20px')};
    text-align: center;
    color: ${({ theme, currentSection, isActive }) => {
      if (isActive) {
        switch (currentSection) {
          case 'home':
            return theme.colors.white;
          case 'how-it-works':
            return theme.colors.yellow;
          case 'why-choose-us':
            return theme.colors.blue;
          case 'about-us':
            return theme.colors.red;
          case 'roadmap':
            return theme.colors.green;
          default:
            return theme.colors.white;
        }
      }
      return theme.colors.white;
    }};
  }
  @media (max-width: 400px) {
    font-size: ${({ isActive }) => (isActive ? '36px' : '15px')};
  }
`;

const WavesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export { Wrapper, Icon, Inner, Link, WavesWrapper };
