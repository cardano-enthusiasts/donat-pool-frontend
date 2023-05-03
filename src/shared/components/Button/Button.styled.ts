import styled, { css } from 'styled-components';

import { type Props } from './types';

const getHoverAndDisabled = (themeType) => {
  return css`
    background-image: ${({ theme }) =>
      themeType === 'bordered' &&
      `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0)), ${theme.colors.primaryGradient50}`};
    opacity: ${themeType === 'filled' && 0.5};
  `;
};
const getButtonStyles = (themeType, size, width) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    min-width: 100px;
    max-width: 320px;
    font-family: 'Microsoft YaHei', Arial, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    border-radius: 22px;
    color: ${({ theme }) =>
      themeType === 'filled' ? theme.colors.white : theme.colors.primary};
    border: ${themeType === 'filled' ? 0 : 'solid 2px transparent'};
    background-image: ${({ theme }) =>
      themeType === 'filled'
        ? theme.colors.primaryGradient
        : `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0)), ${theme.colors.primaryGradient}`};
    background-origin: ${themeType === 'bordered' && 'border-box'};
    background-clip: ${themeType === 'bordered' && 'content-box, border-box'};
    box-shadow: ${themeType === 'bordered' && '2px 1000px 1px #fff inset'};
    padding: ${size === 's'
      ? '9px 20px'
      : themeType === 'filled'
      ? '14px 20px 15px'
      : '12px 18px 13px'};

    &:hover {
      ${getHoverAndDisabled(themeType)};
    }
  `;
};
const StyledButton = styled.button<{
  themeType: Props['theme'];
  size: Props['size'];
  width: Props['width'];
}>`
  ${({ themeType, size, width }) => getButtonStyles(themeType, size, width)};
  &:disabled {
    ${({ themeType }) => getHoverAndDisabled(themeType)};
    cursor: auto;
  }
`;

const LinkWrapper = styled.div<{
  themeType: Props['theme'];
  size: Props['size'];
  isDisabled: boolean;
  width: Props['width'];
}>`
  a {
    ${({ themeType, size, width }) => getButtonStyles(themeType, size, width)};
    text-decoration: none;
    ${({ isDisabled, themeType }) =>
      isDisabled && getHoverAndDisabled(themeType)}
    ${({ isDisabled }) => isDisabled && `pointer-events: none;`};
  }
`;

export { StyledButton, LinkWrapper };
