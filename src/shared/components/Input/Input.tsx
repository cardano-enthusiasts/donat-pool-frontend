import { StyledInput, StyledTextArea, Title, Wrapper } from './Input.styled';
import { type Props } from './types';

const Input = ({
  value,
  onChange,
  dataAttr = '',
  type = 'text',
  title = null,
  multiline = false,
  placeholder = null,
}: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {multiline ? (
        <StyledTextArea
          value={value}
          onChange={onChange}
          {...{ 'data-type': dataAttr }}
        />
      ) : (
        <StyledInput
          type={type}
          value={value}
          onChange={onChange}
          {...{ 'data-type': dataAttr }}
        />
      )}
    </Wrapper>
  );
};
export default Input;
