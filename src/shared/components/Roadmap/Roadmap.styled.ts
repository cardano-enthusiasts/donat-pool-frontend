import styled from 'styled-components';

const WrapperAndButton = styled.div`
  position: relative;
  height: 700px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 700px;
  top: 0;
  font-size: 56px;
  font-weight: bold;
  text-align: justify;
  /* z-index: 1; */

  -webkit-transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -o-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transform: perspective(500px) rotateX(30deg);
  -moz-transform: perspective(500px) rotateX(30deg);
  -ms-transform: perspective(500px) rotateX(30deg);
  -o-transform: perspective(500px) rotateX(30deg);
  transform: perspective(500px) rotateX(30deg);

  @media (max-width: 1100px) {
    left: 0;
    margin-left: 0;
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 100%;
  -webkit-animation: scroll 60s linear infinite;
  -moz-animation: scroll 60s linear infinite;
  -ms-animation: scroll 60s linear infinite;
  -o-animation: scroll 60s linear infinite;
  animation: scroll 60s linear infinite;

  color: ${({ theme }) => theme.colors.yellow};

  @-webkit-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -630%;
    }
  }

  @-moz-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -630%;
    }
  }

  @-ms-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -630%;
    }
  }

  @-o-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -630%;
    }
  }

  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -630%;
    }
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
`;

const Ul = styled.ul`
  padding-left: 50px;
`;

const Li = styled.li``;

const SubLi = styled.li`
  margin-left: 100px;
  list-style: none;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  z-index: 9999;
`;

export {
  WrapperAndButton,
  Wrapper,
  Inner,
  Title,
  Ul,
  Li,
  SubLi,
  ButtonWrapper,
};
