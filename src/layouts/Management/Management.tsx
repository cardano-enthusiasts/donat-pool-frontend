import ManagementParams from 'shared/components/ManagementParams/ManagementParams';
import ManagerEditor from 'shared/components/ManagerEditor/ManagerEditor';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  return (
    <Wrapper>
      <Title>Management contract</Title>
      <ManagerEditor />
      <Title>Current protocol parameters</Title>
      <ManagementParams />
    </Wrapper>
  );
};
export default Management;
