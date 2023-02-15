import styled from 'styled-components';

import { baseContainer, baseInner, link } from 'shared/styles/mixins';

const Wrapper = styled.footer`
  ${baseContainer};
  padding: 80px 0;
`;

const Inner = styled.div`
  ${baseInner};
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

const LinkWrapper = styled.div`
  ${link}
`;

export { Wrapper, Inner, Links, Column, LogoAndSocials, Icons, LinkWrapper };
