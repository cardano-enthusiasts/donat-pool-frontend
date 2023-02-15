import { StyledInput, Title, Wrapper } from './Input.styled';
import { type Props } from './types';

const Input = ({
  value,
  onChange,
  dataAttr = '',
  type = 'text',
  title = null,
}: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        {...{ 'data-type': dataAttr }}
      />
    </Wrapper>
  );
};
export default Input;
