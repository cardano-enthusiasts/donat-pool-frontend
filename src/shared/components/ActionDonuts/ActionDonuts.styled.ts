import styled, { css } from 'styled-components';

const getDonuts = () => css`
  display: flex;
  flex-shrink: 0;
  background-image: url('/img/mini-donut.svg');
  background-repeat: repeat-y;
  background-position: 20px 20px;
  width: 150px;
  height: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  background-repeat: repeat;
  background-size: 115px;
  z-index: 1;

  /* position: absolute; */
  display: flex;
`;

const Column1 = styled.div`
  ${getDonuts()}
  animation: marquee1 50s infinite linear;

  @keyframes marquee1 {
    0% {
      background-position: 50% 0%;
    }
    100% {
      background-position: 50% -100%;
    }
  }
`;

const Column2 = styled.div`
  ${getDonuts()}
  animation: marquee2 50s infinite linear;

  @keyframes marquee2 {
    0% {
      background-position: 50% -100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
`;

export { Wrapper, Column1, Column2 };
