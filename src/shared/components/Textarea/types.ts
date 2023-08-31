import { UseFormRegister, RegisterOptions, Message } from 'react-hook-form';

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  placeholderTheme?: 'green' | 'yellow';
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: Message;
}

export type { Props };
