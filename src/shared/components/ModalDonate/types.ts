import type { Fundraising } from '@/shared/types';
import type { FundraisingData } from '@/shared/types/common';

interface Props {
  donate: (fundraisingData: FundraisingData, amount: number) => void;
  isOpen: boolean;
  data: Pick<Fundraising, 'threadTokenCurrency' | 'threadTokenName'>;
  onClose: () => void;
}

export type { Props };
