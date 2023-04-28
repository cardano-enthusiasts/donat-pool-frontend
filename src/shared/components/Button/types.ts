export interface Props {
  onClick?: () => void;
  children: string;
  theme?: 'filled' | 'bordered';
  size?: 's' | 'm';
  type?: 'submit' | 'button';
  href?: string | null;
  isDisabled?: boolean;
  width?: string;
}
