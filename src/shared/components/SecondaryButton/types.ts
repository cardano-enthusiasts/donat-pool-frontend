interface CommonProps extends React.PropsWithChildren {
  size?: 'md' | 'lg';
  withIcon?: boolean;
  stretchy?: boolean;
  borderTheme?: 'blue' | 'purple';
  textTheme?: 'white' | 'blue';
  shadowTheme?: 'blackBlue' | 'redPurple' | 'whiteBlue';
}

interface ButtonProps extends CommonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

interface LinkProps extends CommonProps {
  external?: boolean;
  href: string;
}

export type { CommonProps, ButtonProps, LinkProps };
