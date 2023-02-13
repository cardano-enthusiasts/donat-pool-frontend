import styled from 'styled-components';

import { type Props } from './types';

const StyledButton = styled.button<{
  themeType: Props['theme'];
  size: Props['size'];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  max-width: 320px;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  border-radius: 22px;
  color: ${({ theme, themeType }) =>
    themeType === 'filled' ? theme.colors.white : theme.colors.primary};
  border: ${({ themeType }) =>
    themeType === 'filled' ? 0 : 'solid 2px transparent'};
  background-image: ${({ themeType, theme }) =>
    themeType === 'filled'
      ? theme.colors.primaryGradient
      : `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0)), ${theme.colors.primaryGradient}`};
  background-origin: ${({ themeType }) =>
    themeType === 'bordered' && 'border-box'};
  background-clip: ${({ themeType }) =>
    themeType === 'bordered' && 'content-box, border-box'};
  box-shadow: ${({ themeType }) =>
    themeType === 'bordered' && '2px 1000px 1px #fff inset'};
  padding: ${({ themeType, size }) =>
    size === 's'
      ? '9px 20px'
      : themeType === 'filled'
      ? '14px 20px 15px'
      : '12px 18px 13px'};

  &:hover {
    background-image: ${({ themeType, theme }) =>
      themeType === 'bordered' &&
      `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0)), ${theme.colors.primaryGradient50}`};
    opacity: ${({ themeType }) => themeType === 'filled' && 0.5};
  }
`;

export { StyledButton };
