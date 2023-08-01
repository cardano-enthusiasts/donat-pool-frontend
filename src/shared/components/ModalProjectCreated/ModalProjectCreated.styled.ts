import styled from 'styled-components';

import { h1 } from '@/shared/styles/mixins';

const Title = styled.h1`
  ${h1}
  text-align: center;
  margin: 0 0 24px 0;
`;

const Img = styled.img`
  margin-bottom: 40px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const ProjectLink = styled.a`
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.blue};
  overflow-wrap: anywhere;
  text-align: center;
`;

export { Title, Img, Inner, Description, ProjectLink };
