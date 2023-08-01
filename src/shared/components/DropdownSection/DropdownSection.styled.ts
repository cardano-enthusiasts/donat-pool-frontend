import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px;
  box-shadow: 0px 15px 15px 0px rgba(186, 186, 186, 0.4);
  border-radius: 6px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  cursor: pointer;
  user-select: none;
`;

const Title = styled.h2`
  color: #141414;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Arrow = styled.img<{ isOpen: boolean }>`
  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const Content = styled.div`
  margin-top: 24px;
`;

export { Wrapper, Title, Header, Arrow, Content };
