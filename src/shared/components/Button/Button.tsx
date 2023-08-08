import Link from 'next/link';

import {
  ArrowWrapper,
  LinkWrapper,
  StyledButton,
  Wrapper,
} from './Button.styled';
import { type Props } from './types';
import { Arrow } from '..';

const Button = ({
  onClick,
  children,
  themeType,
  primaryColor,
  type = 'button',
  href = null,
  width = 'auto',
  size = 'm',
  isDisabled = false,
  ...props
}: Props) => {
  const isLinkExternal = Boolean(
    href && (href.indexOf('http://') !== 0 || href.indexOf('https://') !== 0),
  );

  return href !== null ? (
    <Wrapper themeType={themeType} width={width} size={size}>
      <LinkWrapper
        {...props}
        themeType={themeType}
        width={width}
        size={size}
        isDisabled={isDisabled}
        primaryColor={primaryColor}
      >
        <Link
          href={href}
          target={isLinkExternal ? '_blank' : '_self'}
          rel={isLinkExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </Link>
      </LinkWrapper>
    </Wrapper>
  ) : (
    <Wrapper themeType={themeType} width={width} size={size}>
      <StyledButton
        {...props}
        primaryColor={primaryColor}
        onClick={onClick}
        themeType={themeType}
        width={width}
        size={size}
        disabled={isDisabled}
        type={type}
      >
        {children}
        {themeType === 'dashed' && (
          <ArrowWrapper>
            <Arrow
              isUp={'isClickedTheme' in props ? !props.isClickedTheme : false}
              color={primaryColor === 'blue' ? 'blue' : 'red'}
            />
          </ArrowWrapper>
        )}
      </StyledButton>
    </Wrapper>
  );
};

export { Button };
