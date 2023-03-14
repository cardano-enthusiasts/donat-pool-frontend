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
  title = null,
  multiline = false,
  isDisabled = false,
  hint = null,
  placeholder = '',
  maxLength = undefined,
}: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {multiline ? (
        <StyledTextArea
          value={value}
          onChange={onChange}
          {...{ 'data-type': dataAttr }}
          disabled={isDisabled}
          placeholder={placeholder}
          maxLength={maxLength}
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
          />
        </InputContainer>
      )}
    </Wrapper>
  );
};
export { Input };
