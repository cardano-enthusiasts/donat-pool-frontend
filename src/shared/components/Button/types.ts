export interface Props {
  onClick?: () => void;
  children: string;
  primaryColor?: 'yellow' | 'blue' | 'red' | 'green';
  secondaryColor?: 'red' | 'blue' | 'green';
  fontColor?: Props['secondaryColor'] | 'white' | 'black';
  themeType?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  type?: 'submit' | 'button';
  href?: string | null;
  isDisabled?: boolean;
  width?: string;
  isClickedTheme?: boolean;
  size?: 's' | 'm';
}
