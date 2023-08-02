import styled from 'styled-components';

import { type Props } from './types';

const Wrapper = styled.div<{
  backgroundColor: NonNullable<Props['backgroundColor']>;
}>`
  position: relative;

  text-align: center;
  background-color: ${({ theme, backgroundColor }) => {
    if (backgroundColor === 'transparent') {
      return 'transparent';
    }
    if (theme.colors[backgroundColor]) {
      return theme.colors[backgroundColor];
    }
    return 'transparent';
  }};
  z-index: 1;
  height: 100px;
`;

const SVG = styled.svg<{ isUpsideDown: boolean }>`
  position: relative;
  max-width: 100%;
  height: 100px;
  margin-bottom: -7px;
  ${({ isUpsideDown }) => isUpsideDown && 'transform: rotate(180deg)'}
`;

const G = styled.g<{ isMoving: boolean }>`
  ${({ isMoving }) =>
    isMoving &&
    `use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    animation-delay: -2s;
    animation-duration: 7s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(105px, 0, 0);
    }
  }`}
`;

export { SVG, G, Wrapper };
