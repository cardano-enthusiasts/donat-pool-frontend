import styled from 'styled-components';

import { baseContainer, link } from 'shared/styles/mixins';

const Wrapper = styled.header`
  ${baseContainer}
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-family: Montserrat, 'Open Sans', sans-serif;
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

const LinkWrapper = styled.div`
  ${link}
`;

export { Wrapper, Inner, Links, LinksAndWallet, LinkWrapper };
