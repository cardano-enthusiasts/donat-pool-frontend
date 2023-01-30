import styled from 'styled-components';

import { baseContainer } from 'shared/styles/mixins';

const Wrapper = styled.footer`
  ${baseContainer};
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  gap: 80px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LogoAndSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

export { Wrapper, Links, Column, LogoAndSocials, Icons };
