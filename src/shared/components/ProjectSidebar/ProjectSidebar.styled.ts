import styled from 'styled-components';

import { h2, h3 } from 'shared/styles/mixins';

const StyledSidebar = styled.aside`
  max-width: 250px;
  width: 100%;
  @media (max-width: 700px) {
    text-align: center;
  }
`;
const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Item = styled.li<{ isClicked: boolean }>`
  ${h3}
  list-style: none;
  margin: 0;
  cursor: pointer;
  ${({ isClicked, theme }) => isClicked && `color: ${theme.colors.primary};`}
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  ${h2}
  margin: 0 0 20px 0;
`;

export { StyledSidebar, ProjectList, Item, Title };
