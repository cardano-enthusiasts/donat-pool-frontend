import styled from 'styled-components';

import { h2, h3 } from 'shared/styles/mixins';

const StyledSidebar = styled.aside`
  max-width: 250px;
  width: 100%;
`;
const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  ${h3}
  list-style: none;
  margin: 0;
`;

const Title = styled.h2`
  ${h2}
  margin: 0 0 20px 0;
`;

export { StyledSidebar, ProjectList, Item, Title };
