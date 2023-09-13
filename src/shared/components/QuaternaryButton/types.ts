interface CommonProps extends React.PropsWithChildren {
  stretchy?: boolean;
  backgroundTheme?: 'yellow' | 'blue';
  textTheme?: 'red' | 'green';
  animated?: boolean;
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
