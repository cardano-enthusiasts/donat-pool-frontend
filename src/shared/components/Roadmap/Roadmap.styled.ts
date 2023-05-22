import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  bottom: 0;
  font-size: 350%;
  text-align: justify;
  overflow: hidden;

  -webkit-transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -o-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transform: perspective(300px) rotateX(25deg);
  -moz-transform: perspective(300px) rotateX(25deg);
  -ms-transform: perspective(300px) rotateX(25deg);
  -o-transform: perspective(300px) rotateX(25deg);
  transform: perspective(300px) rotateX(25deg);

  @media (max-width: 1100px) {
    left: 0;
    margin-left: 0;
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 100%;
  -webkit-animation: scroll 50s linear -10s infinite;
  -moz-animation: scroll 50s linear -10s infinite;
  -ms-animation: scroll 50s linear -10s infinite;
  -o-animation: scroll 50s linear -10s infinite;
  animation: scroll 50s linear -10s infinite;

  color: ${({ theme }) => theme.colors.yellow};

  @-webkit-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
  }

  @-moz-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
  }

  @-ms-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
  }

  @-o-keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
  }

  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
`;

const Subtitle = styled.li``;

const Ul = styled.ul`
  padding-left: 50px;
`;

const Li = styled.li``;

const SubLi = styled.li``;

export { Wrapper, Inner, Title, Subtitle, Ul, Li, SubLi };
