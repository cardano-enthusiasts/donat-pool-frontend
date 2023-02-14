import { StyledInput, Title } from './Input.styled';
import { type Props } from './types';

const Input = ({
  value,
  onChange,
  dataAttr = '',
  type = 'text',
  title = null,
}: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        {...{ 'data-type': dataAttr }}
      />
    </>
  );
};
export default Input;
