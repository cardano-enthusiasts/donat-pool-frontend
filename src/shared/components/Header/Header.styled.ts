import styled from 'styled-components';

import { baseContainer } from 'shared/styles/mixins';

const Wrapper = styled.header`
  ${baseContainer}
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const LogoLink = styled.a`
  font-size: 40px;
  font-weight: bold;
  color: #006c84;
  text-decoration: none;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  font-size: 18px;
  margin: 0 40px;
`;

const LinksAndWallet = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.div``;

export { Wrapper, Inner, LogoLink, Links, LinksAndWallet, LinkWrapper };
