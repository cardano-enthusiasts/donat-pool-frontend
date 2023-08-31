interface Props {
  onCancelButtonClick: () => void;
}

interface FormValues {
  contact: string;
  name: string;
  message: string;
}

export type { Props, FormValues };
