import styled from 'styled-components';

import { type LandingSection } from 'shared/types';

const Wrapper = styled.nav<{
  windowScroll;
  windowWidth;
  isOpen;
  mobileResolution;
}>`
  position: fixed;
  left: ${({ windowWidth }) => (windowWidth - 1920) / 2 + 90}px;
  top: 90px;
  z-index: 2;
  overflow-wrap: break-word;

  ${({ windowScroll }) =>
    windowScroll > 10 ? 'display: block' : 'display: none'};

  @media (max-width: 1920px) {
    left: 90px;
  }
  @media (max-width: ${({ mobileResolution }) => mobileResolution}px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    ${({ isOpen }) => isOpen && 'height: 100vh'};
    background-color: ${({ theme }) => theme.colors.blue};
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
  currentSection: LandingSection;
}>`
  display: flex;
  opacity: ${({ currentSection }) =>
    currentSection === 'contact-us' ? '0' : '1'};
  flex-direction: column;
  gap: 24px;

  color: ${({ theme }) => theme.colors.white};
  max-width: 245px;
`;

const Link = styled.a<{
  isActive: boolean;
  currentSection: LandingSection;
}>`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif, sans-serif;
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
`;

const WavesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export { Wrapper, Icon, Inner, Link, WavesWrapper };
