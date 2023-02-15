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
  height: 20px;
  width: 20px;
  cursor: pointer;
  -webkit-appearance: none;
  margin: 0;
  border-radius: 20%;
  border: 1px solid ${({ theme }) => theme.colors.dark25};
  flex-shrink: 0;

  &::before {
    content: '';
  }

  &:checked::before {
    margin-top: 4px;
    box-sizing: border-box;
    width: 6px;
    height: 8px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    border-image-slice: 1;
    border-image-source: ${({ theme }) => theme.colors.primaryGradient};
  }

  &:checked {
    border: 1px solid #bc9cff;
  }
`;
const Title = styled.span`
  width: 100%;
  min-width: 180px;
  max-width: 200px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.dark50};
`;

export { StyledLabel, StyledInput, Title };
