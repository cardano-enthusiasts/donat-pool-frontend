interface CommonProps extends React.PropsWithChildren {
  stretchy?: boolean;
  size?: 'md' | 'lg';
  withIcon?: boolean;
  platformBorderTheme?: 'blue' | 'purple';
  borderTheme?: 'blue' | 'purple';
  backgroundTheme?: 'black' | 'red' | 'white';
  textTheme?: 'white' | 'blue';
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
