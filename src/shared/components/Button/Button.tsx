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
  isDisabled = false,
  width = 'auto',
}: Props) => {
  return href !== null ? (
    <LinkWrapper
      themeType={theme}
      size={size}
      isDisabled={isDisabled}
      width={width}
    >
      <Link to={href}>{children}</Link>
    </LinkWrapper>
  ) : (
    <StyledButton
      onClick={onClick}
      themeType={theme}
      size={size}
      type={type}
      disabled={isDisabled}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
