import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px;
  box-shadow: 0px 15px 40px 0px rgba(186, 186, 186, 0.4);
  border-radius: 6px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

const Arrow = styled.img``;

const Content = styled.div``;

export { Wrapper, Title, Header, Arrow, Content };
