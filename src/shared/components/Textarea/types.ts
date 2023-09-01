import type { UseFormRegister, RegisterOptions, Message } from 'react-hook-form';

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  placeholderTheme?: 'green' | 'yellow';
  // "UseFormRegister" expects interface of form values as a type argument which is unknown because "Textarea" is a generic component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: Message;
}

export type { Props };
