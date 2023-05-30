import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  top: 0;
  font-size: 56px;
  text-align: justify;
  overflow: hidden;

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
  -webkit-animation: scroll 150s linear -10s infinite;
  -moz-animation: scroll 150s linear -10s infinite;
  -ms-animation: scroll 150s linear -10s infinite;
  -o-animation: scroll 150s linear -10s infinite;
  animation: scroll 150s linear -10s infinite;

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

const Subtitle = styled.li`
  list-style: none;
  font-weight: bold;
`;

const Ul = styled.ul`
  padding-left: 50px;
`;

const Li = styled.li``;

const SubLi = styled.li``;

export { Wrapper, Inner, Title, Subtitle, Ul, Li, SubLi };
