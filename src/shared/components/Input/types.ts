import type { ReactNode, ChangeEvent } from 'react';

export interface Props {
  value: string | number;
  onChange: (event: ChangeEvent) => void;
  dataAttr?: string;
  type?: 'text' | 'submit' | 'number';
  children?: ReactNode | null;
  multiline?: boolean;
  isDisabled?: boolean;
  hint?: string | null;
  placeholder?: string;
  maxLength?: number | undefined;
  rows?: number | undefined;
  error?: string | null;
  fontColor?: 'green' | 'yellow' | 'black';
  min?: number;
  step?: number;
}
