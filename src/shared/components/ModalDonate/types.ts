import { DonatPool } from '@/shared/types';
import { DonatPoolData } from '@/shared/types/common';

interface Props {
  opened: boolean;
  donate: (donatPoolData: DonatPoolData, amount: number) => void;
  data: Pick<DonatPool, 'threadTokenCurrency' | 'threadTokenName'>;
  onClose: () => void;
}

export type { Props };
