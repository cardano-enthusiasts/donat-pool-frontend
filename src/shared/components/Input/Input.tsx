import { InputContainer, Message, StyledInput, StyledTextArea, Title, Wrapper } from './Input.styled';
import type { Props } from './types';

const Input = ({
  value,
  onChange,
  dataAttr = '',
  type = 'text',
  children = null,
  multiline = false,
  isDisabled = false,
  hint = null,
  placeholder = '',
  maxLength = undefined,
  rows = undefined,
  error = null,
  fontColor = 'black',
  min = 0,
  step = 1,
}: Props) => {
  const attributes = {
    value,
    onChange,
    placeholder,
    maxLength,
    error,
    fontColor,
    disabled: isDisabled,
  };
  return (
    <Wrapper>
      <Title>{children}</Title>
      <InputContainer hint={hint}>
        {multiline ? (
          <StyledTextArea {...attributes} {...{ 'data-type': dataAttr }} rows={rows} />
        ) : (
          <StyledInput
            type={type}
            {...attributes}
            {...{ 'data-type': dataAttr }}
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            min={type === 'number' ? min : undefined}
            step={type === 'number' ? step : undefined}
          />
        )}
        {error !== '' && error !== null && <Message>{error}</Message>}
      </InputContainer>
    </Wrapper>
  );
};
export { Input };
