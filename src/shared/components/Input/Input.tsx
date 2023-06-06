import {
  InputContainer,
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
}: Props) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
      {multiline ? (
        <StyledTextArea
          value={value}
          onChange={onChange}
          {...{ 'data-type': dataAttr }}
          disabled={isDisabled}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
        />
      ) : (
        <InputContainer hint={hint}>
          <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            {...{ 'data-type': dataAttr }}
            disabled={isDisabled}
            placeholder={placeholder}
            maxLength={maxLength}
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
          />
        </InputContainer>
      )}
    </Wrapper>
  );
};
export { Input };
