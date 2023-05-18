import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 60px 80px 110px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const Nav = styled.div``;

const GitHubImg = styled.img``;

const GitHubLink = styled.a`
  display: inline-block;
  margin-bottom: 40px;
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

export { Wrapper, Nav, GitHubImg, GitHubLink, NavItems };
