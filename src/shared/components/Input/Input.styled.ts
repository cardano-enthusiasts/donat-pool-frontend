import styled from 'styled-components';

import { getFieldStyles } from 'shared/styles/mixins';

import { type Props } from './types';

const Wrapper = styled.div`
  width: 100%;
`;
const InputContainer = styled.div<{ hint: string | null }>`
  position: relative;
  ${({ hint, theme }) =>
    hint &&
    `
      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        content: "${hint}";
        color: ${theme.colors.gray2};
      }`}
`;

const StyledInput = styled.input<{ error: Props['error'] }>`
  ${({ error }) => getFieldStyles({ errorInfo: error })};
`;

const Title = styled.div`
  margin: 0 0 8px 0;
`;

const StyledTextArea = styled.textarea<{ error: Props['error'] }>`
  ${({ error }) => getFieldStyles({ errorInfo: error })};
  max-width: 600px;
`;

const Message = styled.div`
  position: absolute;
  top: 0;
  right: -250px;
  width: 244px;
  margin-left: 6px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 6px 6px 6px;
  &:after {
    position: absolute;
    content: url('icons/tooltip.svg');
    width: 6px;
    height: 6px;
    top: -11px;
    left: -6px;
  }
`;

export { Wrapper, StyledInput, Title, StyledTextArea, InputContainer, Message };
