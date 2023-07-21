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
  const attributes = {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    fontColor,
    themeType,
    isClickedTheme,
    width,
    size,
  };

  return href !== null ? (
    <Wrapper themeType={themeType} width={width} size={size}>
      <LinkWrapper {...attributes} isDisabled={isDisabled}>
        <Link
          to={href}
          reloadDocument={isLinkExternal}
          target={isLinkExternal ? '_blank' : '_self'}
          rel={isLinkExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
          {themeType === 'dashed' && (
            <Arrow color={primaryColor === 'blue' ? 'blue' : 'red'} />
          )}
        </Link>
      </LinkWrapper>
    </Wrapper>
  ) : (
    <Wrapper themeType={themeType} width={width} size={size}>
      <StyledButton
        onClick={onClick}
        {...attributes}
        disabled={isDisabled}
        type={type}
      >
        {children}
        {themeType === 'dashed' && (
          <Arrow
            isUp={!isClickedTheme}
            color={primaryColor === 'blue' ? 'blue' : 'red'}
          />
        )}
      </StyledButton>
    </Wrapper>
  );
};

export { Button };
