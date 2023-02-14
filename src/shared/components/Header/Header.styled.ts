import styled from 'styled-components';

import { baseContainer, baseInner, link } from 'shared/styles/mixins';

const Wrapper = styled.header`
  ${baseContainer};
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`;

const Inner = styled.div`
  ${baseInner}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
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
