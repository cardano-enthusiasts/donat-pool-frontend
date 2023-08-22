import type { Config } from '@/shared/types/common';

interface Props {
  onClose: () => void;
  protocol: Config;
}

interface FormError {
  title: string | null;
  duration: string | null;
  goal: string | null;
}

export type { Props, FormError };
