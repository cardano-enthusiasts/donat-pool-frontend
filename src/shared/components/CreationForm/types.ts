import type { Config } from '@/shared/types';

interface Props {
  protocol: Config;
  onClose: () => void;
}

interface FormError {
  title: string | null;
  duration: string | null;
  goal: string | null;
}

interface ModerationResponse {
  is_acceptable: boolean;
}

export type { Props, FormError, ModerationResponse };
