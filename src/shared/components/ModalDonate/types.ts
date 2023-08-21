import type { Fundraising } from '@/shared/types';
import type { FundraisingData } from '@/shared/types/common';

interface Props {
  donate: (fundraisingData: FundraisingData, amount: number) => void;
  isOpen: boolean;
  onClose: () => void;
  data: Pick<Fundraising, 'threadTokenCurrency' | 'threadTokenName'>;
}

export type { Props };
