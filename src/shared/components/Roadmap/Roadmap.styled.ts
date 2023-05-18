import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 700px;
  bottom: 0;
  left: 50%;
  margin-left: -9em;
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
`;

const Inner = styled.div`
  position: absolute;
  top: 100%;
  -webkit-animation: scroll 100s linear 1s infinite;
  -moz-animation: scroll 100s linear 1s infinite;
  -ms-animation: scroll 100s linear 1s infinite;
  -o-animation: scroll 100s linear 1s infinite;
  animation: scroll 100s linear 1s infinite;

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

export { Wrapper, Inner };
