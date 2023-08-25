interface Props {
  primaryColor: 'red' | 'blue' | 'green' | 'yellow';
  secondaryColor: 'blue' | 'green';
  fontColor: 'white' | 'black';
  isFullWidth?: boolean;
  isAnimation?: boolean;
  type?: 'submit' | 'button';
  href?: string | null;
  isExternal?: boolean;
  size?: 's' | 'm';
  isDisabled?: boolean;
  onClick?: () => void;
}

export type { Props };
