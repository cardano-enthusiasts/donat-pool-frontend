import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 86vh;
  width: 42px;
  height: 64px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;
const circle = css`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 100%;
`;

const Circle1 = styled.div`
  ${circle};
`;
const Circle2 = styled.div`
  ${circle};
  animation: circle2 3s forwards linear infinite;

  @keyframes circle2 {
    0% {
      top: 0;
    }
    25% {
      top: 18px;
    }
    100% {
      top: 18px;
    }
  }
`;
const Circle3 = styled.div`
  ${circle};
  animation: circle3 3s forwards linear infinite;
  @keyframes circle3 {
    0% {
      top: 0;
    }
    50% {
      top: 36px;
    }
    100% {
      top: 36px;
    }
  }
`;

const Circle4 = styled.div`
  ${circle};
  animation: circle4 3s forwards linear infinite;
  top: 54px;
  opacity: 0;
  @keyframes circle4 {
    50% {
      opacity: 0;
    }
    55% {
      opacity: 1;
    }
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  top: 36px;
  opacity: 0;

  animation: line 3s forwards linear infinite;
  @keyframes line {
    49% {
      opacity: 0;
    }
    50% {
      height: 10px;
      opacity: 1;
    }
    75% {
      height: 28px;
      opacity: 1;
    }
    100% {
      height: 28px;
      opacity: 1;
    }
  }
`;

const arrow = css`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.yellow};
  bottom: -3px;
  border-radius: 10px;
  width: 10px;
  height: 10px;
  opacity: 0;
`;

const ArrowLeft = styled.div`
  ${arrow}
  right: 16px;
  transform: rotate(-45deg);
  animation: arrow-left 3s forwards linear infinite;

  @keyframes arrow-left {
    74% {
      opacity: 0;
    }
    75% {
      height: 10px;
      opacity: 1;
      right: 16px;
    }
    100% {
      height: 30px;
      opacity: 1;
      right: 23.5px;
    }
  }
`;
const ArrowRight = styled.div`
  ${arrow}
  left: 16px;
  transform: rotate(45deg);
  animation: arrow-right 3s forwards linear infinite;
  @keyframes arrow-right {
    74% {
      opacity: 0;
    }
    75% {
      height: 10px;
      opacity: 1;
      left: 16px;
    }
    100% {
      height: 30px;
      opacity: 1;
      left: 23.5px;
    }
  }
`;

export {
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Wrapper,
  VerticalLine,
  ArrowLeft,
  ArrowRight,
};
