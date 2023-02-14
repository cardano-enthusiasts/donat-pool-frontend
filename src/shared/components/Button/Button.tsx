import { StyledButton } from './Button.styled';
import { type Props } from './types';

const Button = ({
  onClick,
  children,
  theme = 'filled',
  size = 'm',
  type = 'button',
}: Props) => {
  return (
    <StyledButton onClick={onClick} themeType={theme} size={size} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
