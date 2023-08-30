interface Props {
  primaryColor: 'yellow' | 'blue';
  secondaryColor: 'red' | 'green';
  fontColor: 'red' | 'green';
  animated?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  external?: boolean;
  size?: 's' | 'm';
  disabled?: boolean;
  onClick?: () => void;
}

export type { Props };
