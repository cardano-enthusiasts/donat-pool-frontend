import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200vh;
  background: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  z-index: -1;
`;

const InnerCircle = styled.div<{ windowScroll }>`
  position: absolute;
  width: 230px;
  height: 230px;
  border: 90px solid ${({ theme }) => theme.colors.yellow};
  margin-top: 45vh;
  z-index: 3;
  transform: scale(${({ windowScroll }) => windowScroll});
  border-radius: 100%;
`;

const OuterCircle = styled.div<{ windowScroll }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  z-index: 2;
  ${({ windowScroll }) =>
    windowScroll < 4 ? 'display: block' : 'display: none'}
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
`;

export { Wrapper, InnerCircle, OuterCircle, CatImage };
