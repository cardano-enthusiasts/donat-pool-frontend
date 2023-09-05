interface Props {
  onSubmitSuccess: () => void;
  onSubmitFailure: (error: string) => void;
  onCancelButtonClick: () => void;
}

interface FormValues {
  contact: string;
  name: string;
  message: string;
}

export type { Props, FormValues };
