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
}: Props) => {
  return href !== null ? (
    <Wrapper themeType={themeType} width={width}>
      <LinkWrapper
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontColor={fontColor}
        themeType={themeType}
        isDisabled={isDisabled}
        width={width}
      >
        <Link to={href}>{children}</Link>
      </LinkWrapper>
    </Wrapper>
  ) : (
    <Wrapper themeType={themeType} width={width}>
      <StyledButton
        onClick={onClick}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontColor={fontColor}
        themeType={themeType}
        type={type}
        isDisabled={isDisabled}
        width={width}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export { Button };
