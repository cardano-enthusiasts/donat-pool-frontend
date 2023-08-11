import theme from './constants';
import { Props } from './types';

const Status = ({ isActive }: Props) => {
  const currentTheme = isActive ? theme.active : theme.completed;
  return (
    <div className={`rounded-md border-2 px-3 py-2 text-sm font-bold ${currentTheme.classes}`}>{currentTheme.text}</div>
  );
};

export { Status };
