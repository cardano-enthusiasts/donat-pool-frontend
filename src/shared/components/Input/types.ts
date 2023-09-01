import { UseFormRegister, RegisterOptions, Message } from 'react-hook-form';

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
  onChange: (event: React.ChangeEvent) => void;
}

interface NewInputProps {
  label?: string;
  type?: 'text' | 'email' | 'password';
  name: string;
  placeholder?: string;
  placeholderTheme?: 'green' | 'yellow';
  // "UseFormRegister" expects interface of form values as a type argument which is unknown because "Input" is a generic component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: Message;
}

export type { Props, NewInputProps };
