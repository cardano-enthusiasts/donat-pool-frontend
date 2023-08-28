interface Props {
  primaryColor: 'blue';
  backgroundColor: 'white' | 'red' | 'blue' | 'black';
  href?: string | null;
  external?: boolean;
  size?: 's' | 'm';
  isFullWidth?: boolean;
  onClick?: () => void;
}

export type { Props };
