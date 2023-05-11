import styled, { css } from 'styled-components';

import { type Props } from './types';

const getHoverAndDisabled = (primaryColor, secondaryColor) => {
  return css``;
};

const getButtonStyles = (
  primaryColor,
  secondaryColor,
  fontColor,
  size,
  width
) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    min-width: 100px;
    max-width: 320px;
    font-family: 'Rammetto One', Arial, sans-serif;
    font-size: ${size === 'm' ? '32px' : '16px'};
    line-height: 94%;
    cursor: pointer;
    color: ${({ theme }) =>
      theme.colors[fontColor] ? theme.colors[fontColor] : theme.colors.red};
    background-color: ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[primaryColor]
        : theme.colors.yellow};
    padding: ${size === 's' ? '10px 16px' : '34px 90px'};
    border: none;
    position: absolute;
    transition: all 0.5s;

    &::before {
      position: absolute;
      content: '';
      transition: all 0.5s;
      bottom: -21.8px;
      height: 22px;
      width: 100%;
      left: -11.3px;
      transform: skewX(-45deg);
      background-color: ${({ theme }) =>
        theme.colors[primaryColor]
          ? theme.colors[secondaryColor]
          : theme.colors.red};
    }

    &::after {
      position: absolute;
      content: '';
      transition: all 0.5s;
      left: -22px;
      height: 100%;
      width: 22px;
      bottom: -11.3px;
      transform: skewY(-45deg);
      background-color: ${({ theme }) =>
        theme.colors[primaryColor]
          ? theme.colors[secondaryColor]
          : theme.colors.red};
    }

    &:active {
      margin-left: -15px;
      margin-top: 15px;
      &::before {
        bottom: -7px;
        height: 7px;
        left: -4px;
      }

      &::after {
        left: -7px;
        width: 7px;
        bottom: -4px;
      }
    }

    &:hover {
      ${getHoverAndDisabled(primaryColor, secondaryColor)};
    }
  `;
};
const StyledButton = styled.button<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  size: Props['size'];
  width: Props['width'];
}>`
  ${({ primaryColor, secondaryColor, fontColor, size, width }) =>
    getButtonStyles(primaryColor, secondaryColor, fontColor, size, width)};
  &:disabled {
    ${({ primaryColor, secondaryColor }) =>
      getHoverAndDisabled(primaryColor, secondaryColor)};
    cursor: auto;
  }
`;

const LinkWrapper = styled.div<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  size: Props['size'];
  isDisabled: boolean;
  width: Props['width'];
}>`
  a {
    ${({ primaryColor, secondaryColor, fontColor, size, width }) =>
      getButtonStyles(primaryColor, secondaryColor, fontColor, size, width)};
    text-decoration: none;
    ${({ isDisabled, primaryColor, secondaryColor }) =>
      isDisabled && getHoverAndDisabled(primaryColor, secondaryColor)}
    ${({ isDisabled }) => isDisabled && `pointer-events: none;`};
  }
`;

const Wrapper = styled.div<{
  size: NonNullable<Props['size']>;
}>`
  padding-left: 22px;
  padding-bottom: 22px;
  width: ${({ size }) => (size === 'm' ? '345px' : '')};
  height: ${({ size }) => (size === 'm' ? '150px' : '')};
`;

export { StyledButton, LinkWrapper, Wrapper };
