import { StyledInput, StyledLabel, Title } from './Checkbox.styled';
import type { Props } from './types';

const Checkbox = ({ className, isChecked, onChange, children }: Props) => {
  return (
    <StyledLabel className={className}>
      <StyledInput type="checkbox" checked={isChecked} onChange={onChange} />
      <Title>{children}</Title>
    </StyledLabel>
  );
};

export default Checkbox;
