import styled from 'styled-components';

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

export { SVG, G };
