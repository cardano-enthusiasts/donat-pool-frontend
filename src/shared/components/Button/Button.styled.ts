/* eslint-disable max-params */
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

const getAnimation = (
  name: 'push' | 'push-before' | 'push-after' | 'standard' | 'standard-pseudo',
) => {
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
}: any) => css`
  position: relative;
  font-size: ${size === 's' ? '16px' : '20px'};
  padding: ${size === 's' ? '10px' : '12px'} 16px;
  font-weight: bold;
  line-height: 133%;

  color: ${({ theme }) => theme.colors[fontColor]};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors[primaryColor]};

  transition: all 0.5s;
  transform-style: preserve-3d;

  ${isAnimation && getAnimation('standard')}
  @keyframes standard {
    90% {
      left: 0;
      top: 0;
    }

    100% {
      left: -4px;
      top: 4px;
    }
  }

  &::before {
    position: absolute;
    content: '';
    bottom: -4px;
    height: 100%;
    width: 100%;
    left: -4px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors[secondaryColor]};
    transform: translateZ(-1px);
    transition: all 0.5s;

    ${isAnimation && getAnimation('standard-pseudo')}
    @keyframes standard-pseudo {
      90% {
        bottom: -4px;
        left: -4px;
      }

      100% {
        bottom: 0;
        left: 0;
      }
    }
  }

  &:disabled {
    cursor: default;
    background-color: #ffc5cf;
    &:before {
      background-color: #141414;
    }
  }
`;

const getAccentStyles = ({
  primaryColor,
  secondaryColor,
  size,
  fontColor,
  isAnimation,
}: any) => css`
  position: absolute;
  font-size: 32px;
  width: 290px;
  height: ${size === 's' ? '97px' : '127px'};
  font-family: var(--rammetto-one-font);
  color: ${({ theme }) => theme.colors[fontColor]};
  background-color: ${({ theme }) => theme.colors[primaryColor]};

  ${isAnimation && getAnimation('push')}
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
}: any) => css`
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
    color: #828587;
    border: 2px solid #828587;
    pointer-events: none;
    &:before {
      border: 2px solid #828587;
    }
  }
`;

const getBorderedStyles = ({ primaryColor, isClickedTheme, size }: any) => css`
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
}: any) => css`
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
    color: #828587;
    border: 2px solid #828587;
    pointer-events: none;
    &:before {
      border: 2px solid #828587;
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

const getAccentWrapperStyles = (size: any) => css`
  width: 290px;
  padding-left: 22px;
  padding-bottom: 22px;
  height: ${size === 's' ? '97px' : '150px'};
  @media (max-width: 1100px) {
    height: 120px;
    width: 200px;
  }
`;

const Wrapper = styled.div<{
  themeType: NonNullable<Props['themeType']>;
  width: Props['width'];
  size: Props['size'];
}>`
  ${({ themeType, width, size }) =>
    themeType === 'accent' ? getAccentWrapperStyles(size) : `width: ${width}`};
  transition: all 0.5s;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  right: 10px;
`;

export { StyledButton, LinkWrapper, Wrapper, ArrowWrapper };
