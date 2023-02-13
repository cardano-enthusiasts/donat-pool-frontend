import { StyledButton } from './Button.styled';
import { type Props } from './types';

const Button = ({ onClick, children, theme = 'filled', size = 'm' }: Props) => {
  return (
    <StyledButton onClick={onClick} themeType={theme} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
