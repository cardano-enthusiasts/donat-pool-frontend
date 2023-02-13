export interface Props {
  onClick: () => void;
  children: string;
  theme?: 'filled' | 'bordered';
  size: 's' | 'm';
}
