import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.red};

  margin: 0 auto;
`;

const Content = styled.div``;

const Title = styled.h1`
  ${h1};
  color: ${({ theme }) => theme.colors.white};
`;

const Img = styled.img``;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export { Container, Content, Title, Img, Description };
