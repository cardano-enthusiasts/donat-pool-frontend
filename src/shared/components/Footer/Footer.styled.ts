import styled from 'styled-components';

import { baseContainer, baseInner, link } from 'shared/styles/mixins';

const Wrapper = styled.footer`
  ${baseContainer};
  background: ${({ theme }) => theme.colors.blue};
`;

const Inner = styled.div`
  ${baseInner};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 80px;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 50px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 80px;
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 107%;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 15px;
  }
  @media (max-width: 700px) {
    align-items: center;
  }
`;

const LinkWrapper = styled.div`
  ${link}
`;

const IconAndLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export { Wrapper, Inner, Links, LinkWrapper, IconAndLinks };
