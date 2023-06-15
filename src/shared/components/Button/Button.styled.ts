import styled, { css } from 'styled-components';

import { type Props } from './types';

const getHoverAndDisabled = (primaryColor, secondaryColor) => {
  return css`
    :disabled {
      pointer-events: none;
    }
  `;
};

const getPrimaryStyles = (primaryColor, secondaryColor, size) => css`
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px' : '12px'} 16px;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  font-weight: bold;
  line-height: 133%;

  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  background: ${({ theme }) =>
    theme.colors[primaryColor] ? theme.colors[primaryColor] : theme.colors.red};
  box-shadow: -4px 4px 0px
    ${({ theme }) =>
      theme.colors[secondaryColor]
        ? theme.colors[secondaryColor]
        : theme.colors.red};

  &:active {
    transform: translate(-4px, 4px);
    box-shadow: none;
  }
  &:disabled {
    &:active {
      transform: none;
    }
    cursor: default;
    background-color: ${({ theme }) => theme.colors.purple};
    box-shadow: -4px 4px 0px ${({ theme }) => theme.colors.black};
  }
`;

const getSecondaryStyles = (primaryColor, secondaryColor, size) => css`
  position: absolute;
  font-size: 32px;
  width: 290px;
  height: ${size === 's' ? '97px' : '127px'};
  font-family: 'Rammetto One', Arial, sans-serif;

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

  @media (max-width: 1100px) {
    padding: 24px 56px;
    font-size: 24px;
    max-width: 250px;
  }
`;

const getTertiaryStyles = (primaryColor, secondaryColor, size) => css`
  position: relative;
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px 16px' : '10px 20px'};
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) =>
    theme.colors[primaryColor]
      ? theme.colors[primaryColor]
      : theme.colors.blue};
  border: 2px solid
    ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[primaryColor]
        : theme.colors.blue};
  border-radius: 6px;

  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -6px;
    bottom: -6px;
    border: 2px solid
      ${({ theme }) =>
        theme.colors[primaryColor]
          ? theme.colors[primaryColor]
          : theme.colors.blue};
    border-radius: 6px;
    z-index: -1;
    transition: all 0.5s;
    user-select: none;
  }
  &:active {
    &:before {
      left: 0;
      bottom: 0;
      opacity: 0;
    }
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    border: 2px solid ${({ theme }) => theme.colors.gray};
    pointer-events: none;
    &:before {
      border: 2px solid ${({ theme }) => theme.colors.gray};
    }
  }
`;

const getQuaternaryStyles = (primaryColor, isClickedTheme, size) => css`
  font-size: ${size === 's' ? '14px' : '16px'};
  padding: ${size === 's' ? '8px' : '10px'} 16px;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) =>
    isClickedTheme ? theme.colors[primaryColor] : theme.colors.white};
  color: ${({ theme }) =>
    isClickedTheme ? theme.colors.white : theme.colors[primaryColor]};
  border: 2px solid
    ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[primaryColor]
        : theme.colors.blue};
  border-radius: 6px;
`;

const getStyles = ({
  primaryColor,
  secondaryColor,
  fontColor,
  width,
  themeType,
  isClickedTheme,
  size,
}) =>
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    line-height: 94%;
    cursor: pointer;
    color: ${({ theme }) =>
      theme.colors[fontColor] ? theme.colors[fontColor] : theme.colors.red};
    background-color: ${({ theme }) =>
      theme.colors[primaryColor]
        ? theme.colors[primaryColor]
        : theme.colors.yellow};
    border: none;
    transition: all 0.5s;
    text-decoration: none;
    ${themeType === 'primary'
      ? getPrimaryStyles(primaryColor, secondaryColor, size)
      : themeType === 'secondary'
      ? getSecondaryStyles(primaryColor, secondaryColor, size)
      : themeType === 'tertiary'
      ? getTertiaryStyles(primaryColor, secondaryColor, size)
      : getQuaternaryStyles(primaryColor, isClickedTheme, size)}
  `;

const StyledButton = styled.button<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  themeType: Props['themeType'];
  width: Props['width'];
  isClickedTheme: boolean;
  size: NonNullable<Props['size']>;
}>`
  ${({
    primaryColor,
    secondaryColor,
    fontColor,
    width,
    themeType,
    isClickedTheme,
    size,
  }) =>
    getStyles({
      primaryColor,
      secondaryColor,
      fontColor,
      width,
      themeType,
      isClickedTheme,
      size,
    })};
`;

const LinkWrapper = styled.div<{
  primaryColor: NonNullable<Props['primaryColor']>;
  secondaryColor: NonNullable<Props['secondaryColor']>;
  fontColor: NonNullable<Props['fontColor']>;
  themeType: Props['themeType'];
  isDisabled: boolean;
  width: Props['width'];
  isClickedTheme: boolean;
  size: NonNullable<Props['size']>;
}>`
  a {
    ${({
      primaryColor,
      secondaryColor,
      fontColor,
      width,
      themeType,
      isClickedTheme,
      size,
    }) =>
      getStyles({
        primaryColor,
        secondaryColor,
        fontColor,
        width,
        themeType,
        isClickedTheme,
        size,
      })};
  }
`;

const getSecondaryWrapperStyles = (size) =>
  css`
    padding-left: 22px;
    padding-bottom: 22px;
    height: ${size === 's' ? '97px' : '150px'};
    @media (max-width: 1100px) {
      height: 120px;
    }
  `;

const Wrapper = styled.div<{
  themeType: NonNullable<Props['themeType']>;
  width: Props['width'];
  size: Props['size'];
}>`
  width: ${({ themeType, width }) =>
    themeType === 'secondary' ? '290px' : width};

  transition: all 0.5s;
  ${({ themeType }) =>
    themeType === 'tertiary' && '&:active {transform: translate(-4px, 4px);}'};
  ${({ themeType, size }) =>
    themeType === 'secondary' && getSecondaryWrapperStyles(size)};

  @media (max-width: 1100px) {
    width: ${({ themeType }) => themeType === 'secondary' && '245px'};
  }
`;

export { StyledButton, LinkWrapper, Wrapper };
