import styled from 'styled-components';

import { h1 } from '@/shared/styles/mixins';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  min-height: 670px;
  background: #ff6b95;

  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 40px 40px 60px 40px;
`;

const Title = styled.h1`
  ${h1};
  color: #fff;
  margin-bottom: 24px;
  text-align: center;
`;

const Img = styled.img`
  max-width: 140px;
  margin-bottom: 40px;
`;

const Description = styled.div`
  color: #141414;
  text-align: center;
  margin-bottom: 32px;
`;

export { Container, Content, Title, Img, Description, Inner };
