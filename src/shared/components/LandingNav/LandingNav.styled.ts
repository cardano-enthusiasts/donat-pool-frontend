import styled from 'styled-components';

import { type CurrentLandingSection } from 'shared/types';

const Wrapper = styled.div<{
  currentSection: CurrentLandingSection;
}>`
  display: flex;
  flex-direction: column;
  gap: 24px;

  position: fixed;
  left: 90px;
  top: 90px;

  color: ${({ theme }) => theme.colors.white};
`;

const Link = styled.a<{
  isActive: boolean;
  currentSection: CurrentLandingSection;
}>`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif, sans-serif;
  font-size: ${({ isActive }) => (isActive ? '54px' : '15px')};
  color: ${({ theme, currentSection, isActive }) => {
    if (isActive) {
      switch (currentSection) {
        case 'home':
          return theme.colors.green;
        case 'how it works':
          return theme.colors.red;
        case 'why choose us':
          return theme.colors.yellow;
        case 'roadmap':
          return theme.colors.blue;
        default:
          return theme.colors.white;
      }
    }
    return theme.colors.white;
  }};
`;

export { Wrapper, Link };
