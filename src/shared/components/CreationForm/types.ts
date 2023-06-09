export interface Props {
  onClose: () => void;
}

export interface FormError {
  title: string | null;
  duration: string | null;
  goal: string | null;
}
