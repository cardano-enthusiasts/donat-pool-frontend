import { Link } from 'react-router-dom';

import { LinkWrapper, StyledButton, Wrapper } from './Button.styled';
import { type Props } from './types';
import { Arrow } from '..';

const Button = ({
  onClick,
  children,
  primaryColor = 'yellow',
  secondaryColor = 'red',
  tertiaryColor = 'green',
  fontColor = secondaryColor,
  themeType = 'standard',
  type = 'button',
  href = null,
  isDisabled = false,
  width = 'auto',
  isClickedTheme = false,
  size = 'm',
}: Props) => {
  const isLinkExternal = Boolean(
    href && (href.indexOf('http://') !== 0 || href.indexOf('https://') !== 0)
  );
  return href !== null ? (
    <Wrapper themeType={themeType} width={width} size={size}>
      <LinkWrapper
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
        fontColor={fontColor}
        themeType={themeType}
        isDisabled={isDisabled}
        width={width}
        isClickedTheme={isClickedTheme}
        size={size}
      >
        <Link
          to={href}
          reloadDocument={isLinkExternal}
          target={isLinkExternal ? '_blank' : '_self'}
          rel={isLinkExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
          {themeType === 'dashed' && <Arrow isUp={isClickedTheme} />}
        </Link>
      </LinkWrapper>
    </Wrapper>
  ) : (
    <Wrapper themeType={themeType} width={width} size={size}>
      <StyledButton
        onClick={onClick}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
        fontColor={fontColor}
        themeType={themeType}
        type={type}
        disabled={isDisabled}
        width={width}
        isClickedTheme={isClickedTheme}
        size={size}
      >
        {children}
        {themeType === 'dashed' && <Arrow isUp={isClickedTheme} />}
      </StyledButton>
    </Wrapper>
  );
};

export { Button };
