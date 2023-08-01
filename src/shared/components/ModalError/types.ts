export interface Props {
  isOpen: boolean;
  title: string;
  errorText: string | null;
  onClose: () => void;
}
