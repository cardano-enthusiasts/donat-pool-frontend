interface Props extends React.PropsWithChildren {
  size?: 'md' | 'lg';
  borderTheme?: 'blue' | 'purple';
  textTheme?: 'white' | 'blue';
  shadowTheme?: 'blackBlue' | 'redPurple' | 'whiteBlue';
  withIcon?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

export type { Props };
