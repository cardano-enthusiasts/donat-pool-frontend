import { StyledInput, StyledLabel, Title } from './Checkbox.styled';
import { type Props } from './types';

const Checkbox = ({ isChecked, onChange, children }: Props) => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" checked={isChecked} onChange={onChange} />
      <Title>{children}</Title>
    </StyledLabel>
  );
};

export { Checkbox };
