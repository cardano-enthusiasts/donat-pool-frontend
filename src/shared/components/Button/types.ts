import { type ReactNode } from 'react';

export interface BasicButton {
  onClick?: () => void;
  children: string | ReactNode;
  type?: 'submit' | 'button';
  href?: string | null;
  size?: 's' | 'm';
  width?: string;
  isDisabled?: boolean;
}

export interface Standard extends BasicButton {
  themeType: 'standard';
  primaryColor: 'red' | 'blue' | 'green' | 'yellow';
  secondaryColor: 'blue' | 'green';
  fontColor: 'white' | 'black';
  isAnimation?: boolean;
}
export interface Accent extends BasicButton {
  themeType: 'accent';
  primaryColor: 'yellow' | 'blue';
  secondaryColor: 'red' | 'green';
  fontColor: 'red' | 'green';
  isAnimation?: boolean;
}

export interface DoubleBordered extends BasicButton {
  themeType: 'double-bordered';
  primaryColor: 'blue';
  backgroundColor: 'white' | 'red';
}

export interface Bordered extends BasicButton {
  themeType: 'bordered';
  primaryColor: 'red' | 'green';
  isClickedTheme?: boolean;
}

export interface Dashed extends BasicButton {
  themeType: 'dashed';
  primaryColor: 'blue' | 'red';
  secondaryColor: 'red' | 'blue';
  backgroundColor: 'green' | 'yellow';
  isClickedTheme: boolean;
}

export type Props = BasicButton &
  (Standard | Accent | DoubleBordered | Bordered | Dashed);

export interface StyledButtonTheme {
  primaryColor: Props['primaryColor'];
  secondaryColor?:
    | Standard['secondaryColor']
    | Accent['secondaryColor']
    | Dashed['secondaryColor'];
  backgroundColor?:
    | DoubleBordered['backgroundColor']
    | Dashed['backgroundColor'];
  fontColor?: Standard['fontColor'] | Accent['fontColor'];
  themeType: Props['themeType'];
  width: Props['width'];
  isClickedTheme?: Bordered['isClickedTheme'] | Dashed['isClickedTheme'];
  size: NonNullable<Props['size']>;
  isAnimation?: Standard['isAnimation'] | Accent['isAnimation'];
}
