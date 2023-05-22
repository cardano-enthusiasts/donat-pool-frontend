import styled from 'styled-components';

const InnerCircle = styled.div<{ windowScroll }>`
  position: absolute;
  width: 230px;
  height: 230px;
  border: 90px solid ${({ theme }) => theme.colors.yellow};
  margin-top: 45vh;
  z-index: 3;
  transform: scale(${({ windowScroll }) => windowScroll});
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
  z-index: 2;
  ${({ windowScroll }) =>
    windowScroll < 4 ? 'display: block' : 'display: none'};
  @media (max-width: 1100px) {
    display: none;
  }
`;

const CatImage = styled.div`
  position: absolute;
  top: 500px;
  z-index: 1;
  width: 1200px;
  height: 900px;
  background-image: url('/img/beige-cat.png');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    max-height: 100vh;
    max-width: 100vw;
    top: 30px;
    background-position: center;
  }
`;

export { InnerCircle, OuterCircle, CatImage };
