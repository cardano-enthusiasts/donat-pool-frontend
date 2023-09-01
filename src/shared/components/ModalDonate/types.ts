import { type DonatPool, type DonatPoolTokenData } from '@/shared/types';

interface Props {
  shown: boolean;
  donate: (donatPoolData: DonatPoolTokenData, amount: number) => void;
  data: Pick<DonatPool, 'threadTokenCurrency' | 'threadTokenName'>;
  onClose: () => void;
}

export type { Props };
