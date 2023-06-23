import styled from 'styled-components';

const InnerCircle = styled.div.attrs((props) => ({
  style: {
    transform: `scale(${props['data-window-scroll']})`,
  },
}))<{ windowScroll }>`
  position: absolute;
  width: 230px;
  height: 230px;
  border: 90px solid ${({ theme }) => theme.colors.yellow};
  margin-top: 45vh;
  z-index: 4;
  border-radius: 100%;
  ${({ windowScroll }) =>
    windowScroll < 50 ? 'display: block' : 'display: none'};
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

export { InnerCircle, OuterCircle, CatImage };
