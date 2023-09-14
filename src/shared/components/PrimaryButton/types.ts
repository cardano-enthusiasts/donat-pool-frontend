interface CommonProps extends React.PropsWithChildren {
  stretchy?: boolean;
  size?: 'md' | 'lg';
  backgroundTheme?: 'red' | 'blue' | 'green';
  textTheme?: 'white' | 'black';
  shadowTheme?: 'blue' | 'darkGreen';
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
