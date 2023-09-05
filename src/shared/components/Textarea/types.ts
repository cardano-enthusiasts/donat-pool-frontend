import type { UseFormRegister, Message } from 'react-hook-form';

// "UseFormRegister" expects interface of form values as a type argument which is unknown because "Input" is a generic component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props extends ReturnType<UseFormRegister<any>> {
  label?: string;
  placeholder?: string;
  placeholderTheme?: 'green' | 'yellow';
  disabled?: boolean;
  error?: Message;
}

export type { Props };
