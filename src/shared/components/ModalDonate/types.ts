import { Fundraising } from '@/shared/types';
import { FundraisingData } from '@/shared/types/common';

interface Props {
  open: boolean;
  donate: (fundraisingData: FundraisingData, amount: number) => void;
  data: Pick<Fundraising, 'threadTokenCurrency' | 'threadTokenName'>;
  onClose: () => void;
}

export type { Props };
