import styled from 'styled-components';

import { h1 } from '@/shared/styles/mixins';

const Title = styled.h1`
  ${h1};
  font-size: 36px;
  margin-bottom: 24px;
  text-align: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  margin-bottom: 40px;
`;

const ErrorText = styled.div`
  margin-bottom: 24px;
  overflow-wrap: anywhere;
`;

export { Title, Img, Inner, ErrorText };
