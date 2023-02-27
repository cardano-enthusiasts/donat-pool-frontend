import { type ChangeEvent } from 'react';

export interface Props {
  value: string | number;
  onChange: (event: ChangeEvent) => void;
  dataAttr?: string;
  type?: 'text' | 'submit' | 'number';
  title?: string | null;
  multiline?: boolean;
  isDisabled?: boolean;
  hint?: string | null;
}
