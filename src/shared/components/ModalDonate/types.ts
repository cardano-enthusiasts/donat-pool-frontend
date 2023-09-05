import type { DonatPool, DonatPoolTokenData } from '@/shared/types';

interface Props {
  donate: (donatPoolData: DonatPoolTokenData, amount: number) => void;
  data: Pick<DonatPool, 'threadTokenCurrency' | 'threadTokenName'>;
  onClose: () => void;
}

export type { Props };
