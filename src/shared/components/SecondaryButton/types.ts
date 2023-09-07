interface Props extends React.PropsWithChildren {
  size?: 'md' | 'lg';
  borderTheme?: 'blue' | 'purple';
  shadowTheme?: 'blackBlue' | 'redPurple';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

export type { Props };
