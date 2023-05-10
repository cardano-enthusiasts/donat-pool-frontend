import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  text-align: center;
  background: transparent;
  margin-top: -100px;
`;

const SVG = styled.svg`
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: -7px;
`;

const G = styled.g`
  use {
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
  }
`;

export { SVG, G, Wrapper };
