import styled, { css } from 'styled-components';

import type { Props } from './types';

const getColor = (errorInfo: any, fontColor: any) => {
  if (errorInfo || errorInfo === '') {
    return ({ theme }: any) => theme.colors.error;
  }
  return ({ theme }: any) => theme.colors[fontColor];
};

const getFieldStyles = ({ errorInfo, fontColor }: any) => css`
  width: 100%;
  min-width: 150px;
  border: 2px solid
    ${({ theme }) =>
      errorInfo || errorInfo === '' ? theme.colors.error : theme.colors.black};
  color: ${getColor(errorInfo, fontColor)};
  border-radius: 6px;
  width: 100%;
  padding: 13px 16px;
  outline: none;
  background-color: transparent;
  font-size: 20px;

  &::placeholder {
    font-family: var(--microsoft-ya-hei-font);
    font-size: 20px;
    color: #29dea8;
  }

  &:disabled {
    cursor: not-allowed;
    color: #828587;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;
const InputContainer = styled.div<{ hint: string | null }>`
  position: relative;
  ${({ theme, hint }: any) =>
    hint &&
    `
      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        content: "${hint as string}";
        color: ${theme.colors.secondaryGray as string};
      }`}
`;

const StyledInput = styled.input<{
  error: Props['error'];
  fontColor: Props['fontColor'];
}>`
  ${({ error, fontColor }) => getFieldStyles({ errorInfo: error, fontColor })};
`;

const Title = styled.div`
  margin: 0 0 8px 0;
`;

const StyledTextArea = styled.textarea<{
  error: Props['error'];
  fontColor: Props['fontColor'];
}>`
  ${({ error, fontColor }) => getFieldStyles({ errorInfo: error, fontColor })};
`;

const Message = styled.div`
  position: absolute;
  top: 0;
  right: -250px;
  width: 244px;
  margin-left: 6px;
  padding: 12px;
  background: #c820f2;
  color: #fff;
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
