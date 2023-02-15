import { type ChangeEvent } from 'react';

export interface Props {
  value: string | number;
  onChange: (event: ChangeEvent) => void;
  dataAttr?: string;
  type?: 'text' | 'submit';
  title?: string | null;
  multiline?: boolean;
  placeholder?: string | null;
}
