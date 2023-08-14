import type { ReactNode } from 'react';

export interface Props {
  onClick?: () => void;
  children: string | ReactNode;
  primaryColor?: 'yellow' | 'blue' | 'red' | 'green';
  secondaryColor?: 'red' | 'blue' | 'green';
  tertiaryColor?: 'green' | 'yellow' | 'red' | 'white';
  fontColor?: Props['secondaryColor'] | 'white' | 'black';
  themeType?: 'standard' | 'accent' | 'double-bordered' | 'bordered' | 'dashed';
  type?: 'submit' | 'button';
  href?: string | null;
  isDisabled?: boolean;
  width?: string;
  isClickedTheme?: boolean;
  size?: 's' | 'm';
}
