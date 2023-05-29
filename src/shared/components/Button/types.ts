export interface Props {
  onClick?: () => void;
  children: string;
  primaryColor?: 'yellow' | 'blue' | 'red';
  secondaryColor?: 'red' | 'blue' | 'green';
  fontColor?: Props['secondaryColor'] | 'white' | 'black';
  themeType?: 'primary' | 'secondary' | 'tertiary';
  type?: 'submit' | 'button';
  href?: string | null;
  isDisabled?: boolean;
  width?: string;
}
