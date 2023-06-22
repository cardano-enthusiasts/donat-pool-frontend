import styled from 'styled-components';

import {
  getMediumLayoutPadding,
  getSmallLayoutPadding,
} from 'shared/styles/mixins';

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 60px 80px 110px;
  background-color: ${({ theme }) => theme.colors.blue};
  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const Nav = styled.div`
  width: 100%;
  max-width: 290px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 107%;
  margin-top: 0;
  margin-bottom: 24px;
  padding: 0;
  list-style-type: none;
`;

const GitHubWrapper = styled.div`
  margin-bottom: 40px;
`;

export { Wrapper, Nav, NavItems, GitHubWrapper };
