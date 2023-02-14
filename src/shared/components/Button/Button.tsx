import { Link } from 'react-router-dom';

import { LinkWrapper, StyledButton } from './Button.styled';
import { type Props } from './types';

const Button = ({
  onClick,
  children,
  theme = 'filled',
  size = 'm',
  type = 'button',
  href = null,
}: Props) => {
  return href !== null ? (
    <LinkWrapper themeType={theme} size={size}>
      <Link to={href}></Link>
    </LinkWrapper>
  ) : (
    <StyledButton onClick={onClick} themeType={theme} size={size} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
