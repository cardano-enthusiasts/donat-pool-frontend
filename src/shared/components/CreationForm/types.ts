import type { Config } from '@/shared/types/common';

export interface Props {
  onClose: () => void;
  protocol: Config;
}

export interface FormError {
  title: string | null;
  duration: string | null;
  goal: string | null;
}
