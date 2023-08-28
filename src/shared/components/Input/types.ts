interface Props {
  value: string | number;
  dataAttr?: string;
  type?: 'text' | 'submit' | 'number';
  multiline?: boolean;
  disabled?: boolean;
  hint?: string | null;
  placeholder?: string;
  maxLength?: number | undefined;
  rows?: number | undefined;
  error?: string | null;
  fontColor?: 'green' | 'yellow' | 'black';
  min?: number;
  step?: number;
  onChange: (e: React.ChangeEvent) => void;
}

export type { Props };
