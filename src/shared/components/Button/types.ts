export interface Props {
  onClick?: () => void;
  children: string;
  primaryColor?: 'yellow' | 'blue' | 'red';
  secondaryColor?: 'red' | 'blue' | 'green';
  fontColor?: Props['secondaryColor'] | 'white';
  size?: 's' | 'm';
  type?: 'submit' | 'button';
  href?: string | null;
  isDisabled?: boolean;
  width?: string;
}
