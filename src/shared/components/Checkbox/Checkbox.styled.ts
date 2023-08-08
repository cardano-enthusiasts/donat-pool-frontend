import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-self: start;
  height: 24px;
  width: 24px;
  cursor: pointer;
  -webkit-appearance: none;
  margin: 0;
  border-radius: 2px;
  border: 2px solid #4757e6;
  flex-shrink: 0;

  &::before {
    content: '';
  }

  &:checked::before {
    width: 100%;
    height: 100%;
    background-color: #4757e6;
  }
`;
const Title = styled.span`
  width: 100%;
  min-width: 180px;
  margin-left: 10px;
  color: #141414;
  user-select: none;
`;

export { StyledLabel, StyledInput, Title };
