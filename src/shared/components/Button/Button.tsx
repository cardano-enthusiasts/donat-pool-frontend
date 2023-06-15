import { Link } from 'react-router-dom';

import { LinkWrapper, StyledButton, Wrapper } from './Button.styled';
import { type Props } from './types';

const Button = ({
  onClick,
  children,
  primaryColor = 'yellow',
  secondaryColor = 'red',
  fontColor = secondaryColor,
  themeType = 'primary',
  type = 'button',
  href = null,
  isDisabled = false,
  width = 'auto',
  isClickedTheme = false,
  size = 'm',
}: Props) => {
  return href !== null ? (
    <Wrapper themeType={themeType} width={width} size={size}>
      <LinkWrapper
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontColor={fontColor}
        themeType={themeType}
        isDisabled={isDisabled}
        width={width}
        isClickedTheme={isClickedTheme}
        size={size}
      >
        <Link to={href}>{children}</Link>
      </LinkWrapper>
    </Wrapper>
  ) : (
    <Wrapper themeType={themeType} width={width} size={size}>
      <StyledButton
        onClick={onClick}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontColor={fontColor}
        themeType={themeType}
        type={type}
        disabled={isDisabled}
        width={width}
        isClickedTheme={isClickedTheme}
        size={size}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export { Button };
