import styled from 'styled-components';

const Wrapper = styled.div<{
  isAnimationActive: boolean;
  windowScroll: number;
}>`
  position: relative;
  width: 100%;
  height: ${({ windowScroll, isAnimationActive }) =>
    windowScroll < 535 && isAnimationActive ? 1500 - windowScroll : 965}px;
  background: #ff6b95;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  @media (max-width: 1100px) {
    height: auto;
  }
`;

const InnerCircle = styled.div.attrs((props) => ({
  style: {
    transform: `scale(${props['data-window-scroll']})`,
  },
}))<{ windowScroll; isAnimationActive }>`
  position: absolute;
  width: 230px;
  height: 230px;
  border: 90px solid #fed900;
  margin-top: 45vh;
  z-index: 4;
  border-radius: 100%;
  ${({ windowScroll, isAnimationActive }) =>
    windowScroll < 50 && isAnimationActive
      ? 'display: block'
      : 'display: none'};
  @media (max-width: 1100px) {
    display: none;
  }
`;

const OuterCircle = styled.div<{ windowScroll; isAnimationActive }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ff6b95;
  z-index: 3;
  ${({ windowScroll, isAnimationActive }) =>
    windowScroll < 4 && isAnimationActive ? 'display: block' : 'display: none'};
  @media (max-width: 1100px) {
    display: none;
  }
`;

const CatImage = styled.img<{ isAnimationActive }>`
  position: ${({ isAnimationActive }) =>
    isAnimationActive ? 'absolute' : 'static'};
  bottom: 0;
  z-index: 2;
  max-width: ${({ isAnimationActive }) =>
    isAnimationActive ? '770px' : '90vw'};

  ${({ isAnimationActive }) =>
    !isAnimationActive && 'padding: 150px 20px 20px;'};

  @media (max-width: 1100px) {
    position: static;
    padding: 150px 20px 20px;
    max-width: 90vw;
  }
`;

export { Wrapper, InnerCircle, OuterCircle, CatImage };
