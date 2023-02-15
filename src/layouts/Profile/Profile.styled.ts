import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    margin-top: 100px;
    align-items: center;
  }
`;

const CreateButtonWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 30px;
`;

const Main = styled.div`
  display: flex;
  gap: 100px;
  @media (max-width: 1100px) {
    gap: 30px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
`;

export { Wrapper, CreateButtonWrapper, Main, ProjectWrapper };
