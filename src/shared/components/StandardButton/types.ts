interface Props {
  primaryColor: 'red' | 'blue' | 'green' | 'yellow';
  secondaryColor: 'blue' | 'green';
  fontColor: 'white' | 'black';
  isFullWidth?: boolean;
  animated?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  external?: boolean;
  size?: 's' | 'm';
  disabled?: boolean;
  onClick?: () => void;
}

export type { Props };
