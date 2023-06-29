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
  fontColor = 'black',
  min = 0,
  step = 1,
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
