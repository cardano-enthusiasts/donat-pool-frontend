interface CommonProps extends React.PropsWithChildren {
  size?: 'md' | 'lg';
  stretchy?: boolean;
  platformTheme?: 'red' | 'green';
  backgroundTheme?: 'yellow' | 'blue';
  textTheme?: 'red' | 'green';
  animated?: boolean;
}

interface ButtonProps extends CommonProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
}

interface LinkProps extends CommonProps {
  external?: boolean;
  href: string;
}

export type { CommonProps, ButtonProps, LinkProps };
