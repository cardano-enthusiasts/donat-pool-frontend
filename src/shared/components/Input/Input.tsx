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
        />
      ) : (
        <InputContainer hint={hint}>
          <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            {...{ 'data-type': dataAttr }}
            disabled={isDisabled}
          />
        </InputContainer>
      )}
    </Wrapper>
  );
};
export { Input };
