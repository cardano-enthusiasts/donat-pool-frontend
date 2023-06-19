import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.blue}66;
  overflow-y: auto;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Content = styled.section`
  position: relative;
  z-index: 101;
  width: 600px;
  height: max-content;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 40px 40px 60px 40px;
  margin: 150px 0;
  box-shadow: 0px 15px 40px ${({ theme }) => theme.colors.blue};
  @media (max-width: 800px) {
    width: 90%;
    padding: 20px;
    margin: 100px 0 150px;
  }
`;

export { Wrapper, Background, Content };
