import styled from 'styled-components';

import { h3 } from 'shared/styles/mixins';

const StyledSidebar = styled.aside`
  max-width: 250px;
  padding: 30px 0;
`;
const ProjectList = styled.ul`
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  ${h3}
  list-style: none;
  margin: 20px 0;
`;

export { StyledSidebar, ProjectList, Item };
