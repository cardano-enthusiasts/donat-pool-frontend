import ManagementParams from 'shared/components/ManagementParams/ManagementParams';
import ManagerEditor from 'shared/components/ManagerEditor/ManagerEditor';

import {
  ManagementParamsWrapper,
  ManagerEditorWrapper,
  Wrapper,
} from './Management.styled';

const Management = () => {
  return (
    <Wrapper>
      <ManagerEditorWrapper>
        <ManagerEditor />
      </ManagerEditorWrapper>
      <ManagementParamsWrapper>
        <ManagementParams />
      </ManagementParamsWrapper>
    </Wrapper>
  );
};
export default Management;
