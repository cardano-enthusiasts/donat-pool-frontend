export interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  errorText?: string;
}
