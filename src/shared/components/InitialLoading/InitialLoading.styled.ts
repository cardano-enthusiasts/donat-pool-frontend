import styled, { css } from 'styled-components';

const InnerCircle = styled.div.attrs((props) => ({
  style: {
    transform: `scale(${props['data-window-scroll']})`,
  },
}))`
  position: absolute;
  width: 230px;
  height: 230px;
  border: 90px solid ${({ theme }) => theme.colors.yellow};
  margin-top: 45vh;
  z-index: 4;
  border-radius: 100%;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const OuterCircle = styled.div<{ windowScroll }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  z-index: 3;
  ${({ windowScroll }) =>
    windowScroll < 4 ? 'display: block' : 'display: none'};
  @media (max-width: 1100px) {
    display: none;
  }
`;

const scrollHelper = css`
  position: absolute;
  top: 90vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 100%;
`;

const ScrollHelper1 = styled.div`
  ${scrollHelper};
`;
const ScrollHelper2 = styled.div`
  ${scrollHelper};
  animation: circle2 1.5s forwards linear infinite;
  @keyframes circle2 {
    0% {
      top: 90vh;
    }
    50% {
      top: 92vh;
    }
    100% {
      top: 92vh;
    }
  }
`;
const ScrollHelper3 = styled.div`
  ${scrollHelper};
  animation: circle3 1.5s forwards linear infinite;
  @keyframes circle3 {
    0% {
      top: 90vh;
    }
    100% {
      top: 94vh;
    }
  }
`;

const CatImage = styled.img`
  position: absolute;
  top: 660px;
  z-index: 2;
  max-width: 770px;
  @media (max-width: 1100px) {
    position: static;
    padding: 150px 20px 20px;
    max-width: 90vw;
  }
`;

export {
  InnerCircle,
  OuterCircle,
  CatImage,
  ScrollHelper1,
  ScrollHelper2,
  ScrollHelper3,
};
