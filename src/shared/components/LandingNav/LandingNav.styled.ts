import styled from 'styled-components';

import { type CurrentLandingSection } from 'shared/types';

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
    height: ${({ isOpen }) => (isOpen ? '100vh' : '90px')};
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Inner = styled.div<{
  currentSection: CurrentLandingSection;
}>`
  display: ${({ currentSection }) =>
    currentSection === 'contact us' ? 'none' : 'flex'};
  flex-direction: column;
  gap: 24px;

  color: ${({ theme }) => theme.colors.white};
  max-width: 290px;
`;

const Link = styled.a<{
  isActive: boolean;
  currentSection: CurrentLandingSection;
}>`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif, sans-serif;
  font-size: ${({ isActive }) => (isActive ? '54px' : '15px')};
  line-height: 104%;
  color: ${({ theme, currentSection, isActive }) => {
    if (isActive) {
      switch (currentSection) {
        case 'home':
          return theme.colors.green;
        case 'how it works':
          return theme.colors.red;
        case 'why choose us':
          return theme.colors.yellow;
        case 'about us':
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

export { Wrapper, Icon, Inner, Link };
