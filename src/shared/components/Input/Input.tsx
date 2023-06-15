import {
  InputContainer,
  Message,
  StyledInput,
  StyledTextArea,
  Title,
  Wrapper,
} from './Input.styled';
import { type Props } from './types';

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
  fontColor = 'green',
}: Props) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
      <InputContainer hint={hint}>
        {multiline ? (
          <StyledTextArea
            value={value}
            onChange={onChange}
            {...{ 'data-type': dataAttr }}
            disabled={isDisabled}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={rows}
            error={error}
            fontColor={fontColor}
          />
        ) : (
          <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            {...{ 'data-type': dataAttr }}
            disabled={isDisabled}
            placeholder={placeholder}
            maxLength={maxLength}
            error={error}
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            fontColor={fontColor}
          />
        )}
        {error !== '' && error !== null && <Message>{error}</Message>}
      </InputContainer>
    </Wrapper>
  );
};
export { Input };
