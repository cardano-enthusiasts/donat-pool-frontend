import styled from 'styled-components';

import { fieldStyles } from 'shared/styles/mixins';

const Wrapper = styled.div`
  width: 100%;
`;
const InputContainer = styled.div<{ hint: string | null }>`
  ${({ hint, theme }) =>
    hint &&
    `position: relative;
      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        content: "${hint}";
        color: ${theme.colors.black};
      }`}
`;

const StyledInput = styled.input`
  ${fieldStyles};
`;

const Title = styled.div`
  margin: 0 0 8px 0;
`;

const StyledTextArea = styled.textarea`
  ${fieldStyles};
  max-width: 600px;
`;

export { Wrapper, StyledInput, Title, StyledTextArea, InputContainer };
