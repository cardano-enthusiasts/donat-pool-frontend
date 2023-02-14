export interface Props {
  value: string | number;
  onChange: () => void;
  dataAttr?: string;
  type?: 'text' | 'submit';
  title?: string | null;
}
