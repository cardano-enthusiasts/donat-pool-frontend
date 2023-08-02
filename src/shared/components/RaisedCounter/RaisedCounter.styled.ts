import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: var(--rammetto-one-font);
  font-weight: normal;
  font-size: 54px;
  line-height: 104%;
  @media (max-width: 500px) {
    font-size: 36px;
  }
`;

const Img = styled.img`
  @media (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const Raised = styled.div`
  color: #ff6b95;
`;
const Line = styled.div`
  height: 48px;
  width: 5px;
  border-radius: 5px;
  background-color: #ff6b95;
`;
const Goal = styled.div`
  color: #fed900;
`;

export { Wrapper, Img, Raised, Line, Goal };
