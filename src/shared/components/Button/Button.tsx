import { Link } from 'react-router-dom';

import { LinkWrapper, StyledButton, Wrapper } from './Button.styled';
import { type Props } from './types';

const Button = ({
  onClick,
  children,
  primaryColor = 'yellow',
  secondaryColor = 'red',
  fontColor = secondaryColor,
  size = 'm',
  type = 'button',
  href = null,
  isDisabled = false,
  width = 'auto',
}: Props) => {
  return href !== null ? (
    <Wrapper size={size}>
      <LinkWrapper
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontColor={fontColor}
        size={size}
        isDisabled={isDisabled}
        width={width}
      >
        <Link to={href}>{children}</Link>
      </LinkWrapper>
    </Wrapper>
  ) : (
    <Wrapper size={size}>
      <StyledButton
        onClick={onClick}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontColor={fontColor}
        size={size}
        type={type}
        disabled={isDisabled}
        width={width}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export { Button };
