import { StyledInput, StyledLabel, Title } from './Checkbox.styled';

const Checkbox = ({ isChecked, onChange, title }) => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" checked={isChecked} onChange={onChange} />
      <Title>{title}</Title>
    </StyledLabel>
  );
};

export { Checkbox };
