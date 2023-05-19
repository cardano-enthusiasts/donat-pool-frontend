import styled from 'styled-components';

import { type CurrentLandingSection } from 'shared/types';

const Wrapper = styled.div<{
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

export { Wrapper, Link };
