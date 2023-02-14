import { StyledInput } from './Input.styled';

const Input = ({ value, onChange, dataAttr = '', type = 'text' }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      {...{ 'data-type': dataAttr }}
    />
  );
};
export default Input;
