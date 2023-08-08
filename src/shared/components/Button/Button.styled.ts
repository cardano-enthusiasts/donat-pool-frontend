import styled, { css } from 'styled-components';

import {
  type Standard,
  type Props,
  type Accent,
  type Dashed,
  type DoubleBordered,
  type Bordered,
  type StyledButtonTheme,
} from './types';

const getAnimation = (name) => {
  return css`
    animation-name: ${name};
    animation-duration: 3s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  `;
};

const getStandardStyles = ({
  primaryColor,
  secondaryColor,
  size,
  fontColor,
  isAnimation,
}) => css`
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px' : '12px'} 16px;
  font-weight: bold;
  line-height: 133%;

  color: ${({ theme }) => theme.colors[fontColor]};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors[primaryColor]};
  box-shadow: -4px 4px 0px ${({ theme }) => theme.colors[secondaryColor]};
  ${isAnimation && getAnimation('standard')}
  
  @keyframes standard {
    90% {
      transform: none;
      box-shadow: -4px 4px 0px ${({ theme }) => theme.colors[secondaryColor]};
    }

    100% {
      transform: translate(-4px, 4px);
      box-shadow: none;
    }
  }
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

const getAccentStyles = ({
  primaryColor,
  secondaryColor,
  size,
  fontColor,
  isAnimation,
}) => css`
  position: absolute;
  font-size: 32px;
  width: 290px;
  height: ${size === 's' ? '97px' : '127px'};
  font-family: 'Rammetto One', Arial, sans-serif;
  color: ${({ theme }) => theme.colors[fontColor]};
  background-color: ${({ theme }) => theme.colors[primaryColor]};

  ${isAnimation && getAnimation('push')}

  &::before {
    position: absolute;
    content: '';
    transition: all 0.5s;
    bottom: -21.8px;
    height: 22px;
    width: 100%;
    left: -11.3px;
    transform: skewX(-45deg);
    background-color: ${({ theme }) => theme.colors[secondaryColor]};

    ${isAnimation && getAnimation('push-before')}
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
    background-color: ${({ theme }) => theme.colors[secondaryColor]};

    ${isAnimation && getAnimation('push-after')}
  }

  @keyframes push {
    90% {
      margin-left: 0;
      margin-top: 0;
    }

    100% {
      margin-left: -15px;
      margin-top: 15px;
    }
  }

  @keyframes push-before {
    90% {
      bottom: -21.8px;
      height: 22px;
      left: -11.3px;
    }

    100% {
      bottom: -7px;
      height: 7px;
      left: -4px;
    }
  }

  @keyframes push-after {
    90% {
      left: -22px;
      width: 22px;
      bottom: -11.3px;
    }

    100% {
      left: -7px;
      width: 7px;
      bottom: -4px;
    }
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

  @media (max-width: 1100px) {
    padding: 20px 50px;
    font-size: 22px;
    max-width: 200px;
    height: ${size === 's' ? '70px' : '86px'};
  }
`;

const getDoubleBorderedStyles = ({
  primaryColor,
  backgroundColor,
  size,
}) => css`
  position: relative;
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px 16px' : '10px 20px'};
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) => theme.colors[backgroundColor]};
  color: ${({ theme }) => theme.colors[primaryColor]};
  border: 2px solid ${({ theme }) => theme.colors[primaryColor]};
  border-radius: 6px;
  transform-style: preserve-3d;

  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -6px;
    bottom: -6px;
    border: 2px solid ${({ theme }) => theme.colors[primaryColor]};
    border-radius: 6px;
    transform: translateZ(-1px);
    user-select: none;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.secondaryGray};
    border: 2px solid ${({ theme }) => theme.colors.secondaryGray};
    pointer-events: none;
    &:before {
      border: 2px solid ${({ theme }) => theme.colors.secondaryGray};
    }
  }
`;

const getBorderedStyles = ({
  primaryColor,
  isClickedTheme,
  size,
}) => css`
  font-size: ${size === 's' ? '14px' : '16px'};
  padding: ${size === 's' ? '8px' : '10px'} 16px;
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) =>
    isClickedTheme ? theme.colors[primaryColor] : theme.colors.white};
  color: ${({ theme }) =>
    isClickedTheme ? theme.colors.white : theme.colors[primaryColor]};
  border: 2px solid ${({ theme }) => theme.colors[primaryColor]};
  border-radius: 6px;
`;

const getDashedStyles = ({
  primaryColor,
  secondaryColor,
  backgroundColor,
  size,
}) => css`
  position: relative;
  display: flex;
  gap: 6px;
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px 40px 10px 16px' : '10px 40px 10px 20px'};
  font-weight: bold;
  line-height: 133%;

  background-color: ${({ theme }) => theme.colors[backgroundColor]};
  color: ${({ theme }) => theme.colors[primaryColor]};
  border: 2px dashed ${({ theme }) => theme.colors[primaryColor]};
  border-radius: 6px;
  transform-style: preserve-3d;

  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -6px;
    bottom: -6px;
    border: 2px dashed ${({ theme }) => theme.colors[secondaryColor]};
    border-radius: 6px;
    transform: translateZ(-1px);
    transition: all 0.5s;
    user-select: none;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.secondaryGray};
    border: 2px solid ${({ theme }) => theme.colors.secondaryGray};
    pointer-events: none;
    &:before {
      border: 2px solid ${({ theme }) => theme.colors.secondaryGray};
    }
  }
`;

const getStyles = ({
  primaryColor,
  secondaryColor,
  backgroundColor,
  fontColor,
  width,
  themeType,
  isClickedTheme,
  size,
  isAnimation,
}: StyledButtonTheme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width};
  line-height: 94%;
  cursor: pointer;
  border: none;
  transition: all 0.5s;
  text-decoration: none;
  ${themeType === 'standard'
    ? getStandardStyles({
        primaryColor,
        secondaryColor,
        size,
        fontColor,
        isAnimation,
      })
    : themeType === 'accent'
    ? getAccentStyles({
        primaryColor,
        secondaryColor,
        size,
        fontColor,
        isAnimation,
      })
    : themeType === 'double-bordered'
    ? getDoubleBorderedStyles({ primaryColor, backgroundColor, size })
    : themeType === 'dashed'
    ? getDashedStyles({ primaryColor, secondaryColor, backgroundColor, size })
    : getBorderedStyles({ primaryColor, isClickedTheme, size })}
`;

const StyledButton = styled.button<{
  primaryColor: Props['primaryColor'];
  secondaryColor?:
    | Standard['secondaryColor']
    | Accent['secondaryColor']
    | Dashed['secondaryColor'];
  backgroundColor?:
    | DoubleBordered['backgroundColor']
    | Dashed['backgroundColor'];
  fontColor?: Standard['fontColor'] | Accent['fontColor'];
  themeType: Props['themeType'];
  width: Props['width'];
  isClickedTheme?: Bordered['isClickedTheme'] | Dashed['isClickedTheme'];
  size: NonNullable<Props['size']>;
  isAnimation?: Standard['isAnimation'] | Accent['isAnimation'];
}>`
  ${({
    primaryColor,
    secondaryColor,
    backgroundColor,
    fontColor,
    themeType,
    width,
    isClickedTheme,
    size,
    isAnimation,
  }) =>
    getStyles({
      primaryColor,
      secondaryColor,
      backgroundColor,
      fontColor,
      themeType,
      width,
      isClickedTheme,
      size,
      isAnimation,
    })};
`;

const LinkWrapper = styled.div<{
  primaryColor: Props['primaryColor'];
  secondaryColor?:
    | Standard['secondaryColor']
    | Accent['secondaryColor']
    | Dashed['secondaryColor'];
  backgroundColor?:
    | DoubleBordered['backgroundColor']
    | Dashed['backgroundColor'];
  fontColor?: Standard['fontColor'] | Accent['fontColor'];
  themeType: Props['themeType'];
  width: Props['width'];
  isClickedTheme?: Bordered['isClickedTheme'] | Dashed['isClickedTheme'];
  size: NonNullable<Props['size']>;
  isAnimation?: Standard['isAnimation'] | Accent['isAnimation'];
  isDisabled: Props['isDisabled'];
}>`
  a {
    ${({
      primaryColor,
      secondaryColor,
      backgroundColor,
      fontColor,
      width,
      themeType,
      isClickedTheme,
      size,
      isAnimation,
    }) =>
      getStyles({
        primaryColor,
        secondaryColor,
        backgroundColor,
        fontColor,
        width,
        themeType,
        isClickedTheme,
        size,
        isAnimation,
      })};
  }
`;

const getSecondaryWrapperStyles = (size) => css`
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
    themeType === 'accent' ? '290px' : width};

  transition: all 0.5s;
  ${({ themeType }) =>
    themeType === 'double-bordered' &&
    '&:active {transform: translate(-4px, 4px);}'};
  ${({ themeType, size }) =>
    themeType === 'accent' && getSecondaryWrapperStyles(size)};

  @media (max-width: 1100px) {
    width: ${({ themeType }) => themeType === 'accent' && '200px'};
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  right: 10px;
`;

export { StyledButton, LinkWrapper, Wrapper, ArrowWrapper };
